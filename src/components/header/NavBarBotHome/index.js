import React from 'react'
import { useLocation } from 'react-router-dom';


import styled from 'styled-components'
import { FaPinterest, FaRegCircle } from 'react-icons/fa'
import { MdSupervisorAccount } from 'react-icons/md'
import { IoIosNotifications } from 'react-icons/io'

const NavBarBotHomeComponent = () => {

  return (
      <Footer>
        <PinterestIcon/>
        <SubscribeIcon/>
        <NotificationIcon/>
        <CircleIcon/>
      </Footer>
  );
};

const Footer = styled.footer`
  position: relative;
  bottom : 0;
  width: calc(100vw-12px);
  margin: 6px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom : 1px solid black;
  height: 50px;
  opacity: 0.4;
`

const PinterestIcon = styled(FaPinterest)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
`
const SubscribeIcon = styled(MdSupervisorAccount)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
`
const NotificationIcon = styled(IoIosNotifications)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
`

const CircleIcon = styled(FaRegCircle)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
`

export default NavBarBotHomeComponent;