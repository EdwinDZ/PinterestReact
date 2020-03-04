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
  position: fixed;
  bottom : 0;
  width: calc(100vw-12px);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 50px;
  opacity: 0.4;
  width: 100%;
  box-shadow: 10px 10px 10px 5px #888888
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