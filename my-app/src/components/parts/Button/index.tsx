import React, {ReactNode} from 'react';
import styled from "styled-components";
import Palette from '../../styles/Palette'
import '../../styles/webfont.css'
import IconLink from './icon_link.svg';
import IconMore from './icon_more.svg';

const Component = styled.button`
  flex-shrink: 0;
  display: inline-flex; 
  align-items: center;
  height: 32px;
  padding: 0 16px 0 8px;
  background-color: ${Palette.surface.high};
  border: 1px solid ${Palette.content.parimary};
  border-radius: 32px;
  font-weight: bold;
  cursor: pointer;
`

const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

const ButtonText = styled.span<{type?: string}>`
  width: ${props => props.type === 'link' ? '94px' : 'auto'};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`

interface Props {
  children?: ReactNode | undefined;
  type?: 'more' | 'link' | 'morelink';
  url?: string;
}

const Button: React.FunctionComponent<Props> = props => {
  const { children, type, url} = props;

  let iconImage
  if (type === 'more') {
    iconImage = IconMore
  } else if (type === 'link' || type === 'morelink') {
    iconImage = IconLink
  }

  let buttonText
  if (type === 'more') {
    buttonText = 'もっと詳しく'
  } else if (type === 'link') {
    buttonText = url
  } else if (type === 'morelink') {
    buttonText = url + ' でもっと詳しく'
  }

  return (
    <Component>
      <Icon src={iconImage}/>
      <ButtonText type={type}>
        {children ? children : buttonText}
      </ButtonText>
    </Component>
  );
}

export default Button;
