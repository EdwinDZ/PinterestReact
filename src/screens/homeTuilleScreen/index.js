import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

import Tuile from '../../components/common/Tuile'

const HomeScreen = props => {
 
  return (
    <Fragment>
    <Masonry>
    <Tuile/>
    </Masonry>
    </Fragment>
      
    
    
  )
}
const Masonry = styled.div`
flex-flow: column wrap;
display: flex;
width: 100%;
`

export default HomeScreen
