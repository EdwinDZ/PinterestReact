import React from 'react'
import PropTypes from 'prop-types'

import { FaTimes } from 'react-icons/fa'

import styled from 'styled-components'

const Modal = props => {
  const { width, title, display, children, onClose } = props

  return (
    <ModalBackground display={display.toString()}>
      <ModalContainer width={width}>
        <ModalTitle>
          <FaTimes onClick={onClose} />
          {title}
        </ModalTitle>
        <hr />
        {children}
      </ModalContainer>
    </ModalBackground>
  )
}

Modal.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClose: PropTypes.func.isRequired
}

const ModalBackground = styled.div`
  position: absolute;
  display: ${props => (props.display === 'true' ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`
const ModalContainer = styled.div`
  position: absolute;
  bottom:0;
  background-color: #fff;
  border-top-left-radius: 15px;
  border-top-right-radius :15px;
  padding: 24px;
  width: 90vw;
`
const ModalTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 2rem;
`
export default Modal
