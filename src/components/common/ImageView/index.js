import React, { useState, useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import NavBartopImage from '../../header/NavBarTopImageView'
import Modal from '../Modal'
import { GoKebabHorizontal } from "react-icons/go"

import { IoIosArrowBack } from 'react-icons/io'
import TuileImage from '../Tuile'
import styled from 'styled-components'

const ImageView = props => {
  const { width, title, display, children, onClose } = props
  const location = useLocation()
  const defaultStates = {
    dots: false,
  }
  const [dotsState, setDotsState] = useState(defaultStates.dots)
  
  return (
    <Fragment>
    <ImageViewBackground display={display.toString()}>
      <ImageViewContainer width={width}>
      <br/>
        <ImageViewTitle>
          <IoIosArrowBack onClick={onClose} />
          <ThreeDots onClick={() => setDotsState(!dotsState)}/>
          <SendButton><strong>Envoyer</strong></SendButton>
          <SaveButton><strong>Enregistrer</strong></SaveButton>
        </ImageViewTitle>
        <ImagePage src='https://www.tutsps.com/images/ajout-d-effets-de-lumiere-sur-une-image/ajout-d-effets-de-lumiere-sur-une-image-47.jpg'/>
        <ImageDescription>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <hr></hr>
          <p><strong>Plus de contenus Similaires</strong></p>
        </ImageDescription>
        {children}
      </ImageViewContainer>
    </ImageViewBackground>
    <Modal
    display={dotsState}
    onClose={() => setDotsState(!dotsState)}
    width={`80%`}
    title={``}
  >
     Ouvrir dans l'application
        <br/>
        <br/>
        Télécharger l'image
        <br/>
        <br/>
        Report pin
        <br/>
        <br/>
  </Modal>
    </Fragment>
    
  )
}

ImageView.propTypes = {
  width: PropTypes.string,
  title: PropTypes.string.isRequired,
  display: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  onClose: PropTypes.func.isRequired
}

const ImageViewBackground = styled.div`
  position: absolute;
  display: ${props => (props.display === 'true' ? 'initial' : 'none')};
  justify-content: center;
  align-items: center;
  top: 0px;
  left: 0px;
  width: 100vw;
`
const ImageDescription = styled.div`
padding: 1.0em;

`

const ImageViewContainer = styled.div`
  background-color: #fff;
  height:100vh;
`
const ImageViewTitle = styled.div`
  
  font-size: 2rem;
`

const ImagePage = styled.img`
  width: 100vw;
  position: relative;
`
const SendButton = styled.button`
  position: relative;
  left: 110px;
  background-color: #62616124;
  height: 35px;
  width: 110px;
  top: -15px;
  border-radius: 5px;
  border: none;
`

const SaveButton = styled.button`
  position: relative;
  background-color: red;
  color : white;
  height: 35px;
  width: 110px;
  top: -15px;
  left: 120px;
  border-radius: 5px;
  border: none;
`

const ThreeDots = styled(GoKebabHorizontal)`
  fill:grey;
  position: relative;
  left: 20px;
`
export default ImageView
