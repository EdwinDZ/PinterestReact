import React, { useState, useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '../Modal'

import { GoKebabHorizontal } from "react-icons/go"
import ImageView from '../ImageView';

const Tuile = props => {
  const  {img} = props
  const location = useLocation()
  const defaultStates = {
    dots: false,
    imageView: false
  }

  const [dotsState, setDotsState] = useState(defaultStates.dots)
  const [imageViewState, setImageViewState] = useState(defaultStates.imageView)

  useEffect(() => {
    setDotsState(defaultStates.dots)
    setImageViewState(defaultStates.imageView)
  }, [location])

  return (
    <Fragment>
        <Masonry>
          <MasonryItem>
            <MasonryImg onClick={() => setImageViewState(!imageViewState)} src='https://russia-insider.com/sites/insider/files/northern_lights_lyngenfjord_northern_norway_nav_d3ffe4a3-bde9-4ffa-8a1c-a42b84c60681.jpg'/>
            <ThreeDots onClick={() => setDotsState(!dotsState)}/>
          </MasonryItem>
          <MasonryItem>
            <MasonryImg onClick={() => setImageViewState(!imageViewState)} src='https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
            <ThreeDots onClick={() => setDotsState(!dotsState)}/>
          </MasonryItem>
          <MasonryItem>
            <MasonryImg onClick={() => setImageViewState(!imageViewState)} src='https://cdn.pixabay.com/photo/2015/10/01/21/39/background-image-967820_960_720.jpg'/>
            <ThreeDots onClick={() => setDotsState(!dotsState)}/>
          </MasonryItem>
          <MasonryItem>
            <MasonryImg onClick={() => setImageViewState(!imageViewState)} src='https://www.gettyimages.fr/gi-resources/images/500px/983794168.jpg'/>
            <ThreeDots onClick={() => setDotsState(!dotsState)}/>
          </MasonryItem>
        </Masonry> 
        <Masonry>
        <MasonryItem>
            <MasonryImg onClick={() => setImageViewState(!imageViewState)} src='http://www.wa11papers.com/assets/previews/water-sea-outdoors-landscape-ocean-rocks-travel-dusk-seashore-scenic-wallpaper-11948-preview-46c783a1.jpg'/>
            <ThreeDots onClick={() => setDotsState(!dotsState)}/>
          </MasonryItem>
          <MasonryItem>
            <MasonryImg onClick={() => setImageViewState(!imageViewState)} src='http://cdn-uploads.gameblog.fr/images/dossiers/WLZexnw.jpg'/>
            <ThreeDots onClick={() => setDotsState(!dotsState)}/>
          </MasonryItem>
          <MasonryItem>
            <MasonryImg onClick={() => setImageViewState(!imageViewState)} src='https://www.tutsps.com/images/ajout-d-effets-de-lumiere-sur-une-image/ajout-d-effets-de-lumiere-sur-une-image-47.jpg'/>
            <ThreeDots onClick={() => setDotsState(!dotsState)}/>
          </MasonryItem>
        </Masonry>
        
       
        
    <Modal
    display={dotsState}
    onClose={() => setDotsState(!dotsState)}
    width={`80%`}
    title={`Options`}
  >
    Enregistrer
    <br/>
    <br/>
    Envoyer
    <br/>
    <br/>
    Ourvir dans l'application
    <br/>
    <br/>
    Télécharger l'image
    <br/>
    <br/>
    Masquer
    <br/>
    <br/>
    Signaler
    <br/>
    <br/>
  </Modal>
  <ImageView
    display={imageViewState}
    onClose={() => setImageViewState(!imageViewState)}
    width={`80%`}
  >
  </ImageView>
  </Fragment>
  );
};


const Masonry = styled.div`
  grid-gap: 15px;
  grid-row: 2;
  height: 50%;
  
 
`
const MasonryItem = styled.div`
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, .3));
  transition: filter .25s ease-in-out;
  margin-bottom: 35px;
  &:hover {
      filter: drop-shadow(0px 5px 5px rgba(0, 0, 0, .3));
    }
`


const MasonryImg = styled.img`
  border-radius: 8px;
  overflow: hidden;
  width: 99%;
  height: auto;
`

const ThreeDots = styled(GoKebabHorizontal)`
  fill:grey;
  float:right;
  right: 5px;
  position: relative;
`

export default Tuile;

