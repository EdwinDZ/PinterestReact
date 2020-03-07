import React, { useState, useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom';

import PropTypes from 'prop-types'
import styled from 'styled-components'
import Modal from '../Modal'

import { GoKebabHorizontal } from "react-icons/go";

const Tuile = props => {
  const  {img} = props
  const location = useLocation()
  const defaultStates = {
    dots: false
  }

  const [dotsState, setDotsState] = useState(defaultStates.dots)

  useEffect(() => {
    setDotsState(defaultStates.dots)
  }, [location])

  return (
    <Fragment>
        <MasonryBrick>
          <MasonryImg src='https://www.plantes-et-sante.fr/images/photo-8.jpg_720_1000_2'/>
          <MasonryDots>
            <ThreeDots onClick={() => setDotsState(!dotsState)} />
          </MasonryDots>
        </MasonryBrick> 
        <MasonryBrick>
          <MasonryImg src='https://www.plantes-et-sante.fr/images/photo-8.jpg_720_1000_2'/>
          <MasonryDots>
            <ThreeDots onClick={() => setDotsState(!dotsState)} />
          </MasonryDots>
        </MasonryBrick>
        <MasonryBrick>
          <MasonryImg src='https://www.plantes-et-sante.fr/images/photo-8.jpg_720_1000_2'/>
          <MasonryDots>
            <ThreeDots onClick={() => setDotsState(!dotsState)} />
          </MasonryDots>
        </MasonryBrick>
    <Modal
    display={dotsState}
    onClose={() => setDotsState(!dotsState)}
    width={`80%`}
    title={`Option`}
  >
    Tableau
    Epingle
    Site web
    Photo
  </Modal>
  </Fragment>
  );
};


const MasonryBrick = styled.div`
position: relative;
margin-top: 10px;
height: auto;
`
const MasonryDots = styled.div`
box-sizing: border-box;
`

const MasonryImg = styled.img`
height: auto;
filter: brightness(50%);
border-radius: 5px;
margin: 8px 8px;
background-color: gray;
color:white;
position: relative;
margin-top: 10px;
max-width: 100%;
max-height: 100%;
`

const ThreeDots = styled(GoKebabHorizontal)`
position: absolute;
fill:grey;
right: 0px;
display: flex
`

export default Tuile;

