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
  opacity: 0.9;
  width: 100%;
`

const PinterestIcon = styled(FaPinterest)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
  fill:grey;
`
const SubscribeIcon = styled(MdSupervisorAccount)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
  fill:grey;
`
const NotificationIcon = styled(IoIosNotifications)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
  fill:grey;
`

const CircleIcon = styled(FaRegCircle)`
  position: relative;
  font-size: 2em;
  font-weight: 700;
  fill:grey;
`

export default NavBarBotHomeComponent;