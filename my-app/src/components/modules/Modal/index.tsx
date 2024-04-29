import React, {ReactNode} from 'react';
import ReactModal from 'react-modal';
import styled, {css} from "styled-components";
import Palette from '../../styles/Palette'
import '../../styles/webfont.css'
import iconClose from './icon_close.svg';

const Component = styled.div`
`

const Content = styled.div`
  position: sticky;
  width: 100%;
`

const CloseButton = styled.button`
  position: absolute;
  right: -16px;
  top: -16px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: none;
  background: none;
  border-radius: 100%;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background-color: ${Palette.surface.low};
  }
`

const CloseIcon = styled.img`
  width: 24px;
  height: 24px;
`

interface Props {
  children?: ReactNode | undefined;
  isOpen: boolean;
  onClickClose?: () => void;
}

const Modal: React.FunctionComponent<Props> = props => {
  const { children, isOpen, onClickClose } = props;
  
  const customStyles = {
    overlay: {
      backgroundColor: Palette.surface.overlay,
      zIndex: 100
    },
    content: {
      width: '90%',
      maxWidth: '640px',
      height: '90%',
      margin: 'auto',
      padding: '40px',
      borderRadius: '16px',
      backgroundColor: Palette.surface.lowest
    }
  }
  
  return (
    <ReactModal 
      isOpen={isOpen}
      style={customStyles}
      shouldCloseOnOverlayClick={true}
      onRequestClose={onClickClose}
    >
      <Content>
        <CloseButton onClick={onClickClose}>
          <CloseIcon src={iconClose}/>
        </CloseButton>
      </Content>
      {children}
    </ReactModal>
  );
}

export default Modal;
