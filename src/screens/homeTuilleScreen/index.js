import React, { useState, useEffect, Fragment } from 'react'
import Axios from 'axios'
import styled from 'styled-components'

import Tuile from '../../components/common/Tuile'

const HomeScreen = props => {
 
  return (
    <Fragment>
    <MasonryWrapper>
    <Tuile/>
    </MasonryWrapper>
    </Fragment>
      
    
    
  )
}
const MasonryWrapper = styled.div`
display:grid;
grid-template-columns: repeat(2, minmax(100px,1fr));
padding: 1.0em;
max-width: 750px;
margin-right: auto;
margin-left: auto;
grid-gap: 15px;
`

export default HomeScreen
