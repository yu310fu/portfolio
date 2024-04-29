import React, {ReactNode} from 'react';
import styled, {css} from "styled-components";
import Palette from '../../styles/Palette'
import '../../styles/webfont.css'

const Component = styled.h2<{isInverted?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: ${props => props.isInverted ? Palette.content.inverted : Palette.content.parimary};
  font-size: 24px;
  line-height: 1.3;
`

const Label = styled.span<{type: 'Skill' | 'Work' | 'Post'}>`
  color: ${Palette.content.inverted};
  border-radius: 18px;
  margin-bottom: 8px;
  padding: 2px 8px;
  font-size: 12px;

  ${props => {
    switch (props.type) {
      case 'Skill':
        return css`
          background-color: ${Palette.label.primary};
        `
      case 'Work':
        return css`
          background-color: ${Palette.label.secondary};
        `
      case 'Post':
        return css`
          background-color: ${Palette.label.tertiary};
        `
    }
  }}
`
interface Props {
  children?: ReactNode | undefined;
  type: 'Skill' | 'Work' | 'Post';
  isInverted?: boolean;
}

const HeadingLabel: React.FunctionComponent<Props> = props => {
  const { children, type, isInverted } = props;
  
  return (
    <Component isInverted={isInverted}>
      <Label type={type}>{type}</Label>
      {children}
    </Component>
  );
}

export default HeadingLabel;
