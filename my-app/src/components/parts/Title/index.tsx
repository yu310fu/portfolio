import React, {ReactNode} from 'react';
import styled from "styled-components";
import Palette from '../../styles/Palette'
import '../../styles/webfont.css'

const Component = styled.h2`
  color: ${Palette.content.tertiary};
  font-size: 30px;
  font-family: "Baloo 2", sans-serif;
  font-weight: bold;
`
interface Props {
  children?: ReactNode | undefined;
}

const Title: React.FunctionComponent<Props> = props => {
  const {children} = props;
  
  return (
    <Component>
      {children}
    </Component>
  );
}

export default Title;
