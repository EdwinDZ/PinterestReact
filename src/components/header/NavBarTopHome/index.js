import React, { useState, useEffect, Fragment } from 'react'
import { useLocation } from 'react-router-dom';
import Modal from '../../common/Modal'

import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { TiPlus } from 'react-icons/ti'
import { AiOutlineMessage } from 'react-icons/ai'

const NavBarTopHomeComponent = () => {
  const location = useLocation()
  const defaultStates = {
    plus: false
  }

  const [searchState, setSearchState] = useState(defaultStates.search)
  const [plusState, setPlusState] = useState(defaultStates.plus)


  useEffect(() => {
    setSearchState(defaultStates.search)
    setPlusState(defaultStates.plus)
  }, [location])

  return (
    <Fragment>
      <Header>
        <CustomSearchInput placeholder="Rechercher"/>
        <PlusIcon onClick={() => setPlusState(!plusState)} />
        <MessageIcon />
      </Header>
      <Modal
        display={plusState}
        onClose={() => setPlusState(!plusState)}
        width={`80%`}
        title={`Ajouter une épingle ou un tableau`}
      >
        Tableau
        Epingle
        Site web
        Photo
      </Modal>
  </Fragment>
  );
};

const Header = styled.header`
  width: calc(100vw-12px);
  margin-bottom : 8px;
  margin-top: 8px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom : 1px solid grey;
  height: 50px;
`

const CustomSearchInput = styled.input`
  position: relative;
  width: 50%;
  height: 25px;
  padding: 6px;
  padding-bottom : 6px;
  padding-right: 50px;
  border: none;
  background-color: #ddd;
  border-radius: 10px;
`
const SearchIcon = styled(FaSearch)`
  font-size: 1.8em;
  font-weight: 700;
  z-index: 99;
`

const PlusIcon = styled(TiPlus)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
  opacity: 0.4;
`
const MessageIcon = styled(AiOutlineMessage)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
  opacity: 0.4;
`

export default NavBarTopHomeComponent;