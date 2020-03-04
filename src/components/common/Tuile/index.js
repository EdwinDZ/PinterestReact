import React from 'react';

import PropTypes from 'prop-types'
import styled from 'styled-components'

import { GoKebabHorizontal } from "react-icons/go";

const Tuile = () => {
  return (
    <Masonry>
      <MasonryBrick>
        <MasonryImg/>
        <GoKebabHorizontal/>
      </MasonryBrick>
    </Masonry>
  );
};

const Masonry = styled.div`
flex-flow: column wrap;
display: flex;
width: 100%;

`
const MasonryBrick = styled.div`
overflow: hidden;
border-radius: 5px;
margin: 0 0 8px 8px;
background-color: #333;
color:white;
position: relative;
margin-top: 10px;
`

const MasonryImg = styled.img`
object-fit: cover;
width: 100%;
height: 100%;
filter: brightness(50%);
`

export default Tuile;

