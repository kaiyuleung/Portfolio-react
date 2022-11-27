import React from 'react';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Dropdown } from 'react-bootstrap';

import './style.css'


//* Breakpoint for responsiveness
const Breakpoint = 767;

const useDesktopMediaQuery = () =>
useMediaQuery({ query: `(min-width: ${Breakpoint}px)` })

const useTabletAndBelowMediaQuery = () =>
useMediaQuery({ query: `(max-width: ${Breakpoint-1}px)` })

// Desktop
const UBP = ({ children }) => {
const isDesktop = useDesktopMediaQuery()

return isDesktop ? children : null
}

// Tablet and Below
const LBP = ({ children }) => {
const isTabletAndBelow = useTabletAndBelowMediaQuery()

return isTabletAndBelow ? children : null
}

function Navlink({to, text}){
  return(
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? "activeLink" : undefined}
      >
      {text}
    </NavLink>
  )
}


export default function NavBar() {

  return (
    <>
      <nav id="NavBar">
        <NavLink to="/" >
          <img src={require('../../img/icon/KY_white.png')} alt='logo to home page' width="40px" height="60px"></img>
        </NavLink>
        <UBP>
          <div id='UBP-navlinks'>
            <Navlink to="biography" text="Biography" />
            <Navlink to="skillset" text="Skill Set" />
            <Navlink to="portfolio" text="Portfolio" />
          </div>
        </UBP>
        <div id='contacts'>
          <a href="mailto:kaiyulyou@gmail.com">
            <img src={require('../../img/icon/email-logo.png')} alt="linkedin" width="50px" height="50px" /></a>
          <a href="https://github.com/kaiyuleung/" target="_blank" rel="noreferrer">
            <img src={require('../../img/icon/github-logo.png')} alt="github" width="50px" height="50px" /></a>
          <a href="https://www.linkedin.com/in/kai-yu-leung/" target="_blank" rel="noreferrer">
            <img src={require('../../img/icon/linkedin-logo.png')} alt="linkedin" width="50px" height="50px" /></a>
        </div>
      </nav>
      <LBP>
        <Dropdown>
          <Dropdown.Toggle id='LBP-dropdown-button'></Dropdown.Toggle>
          <Dropdown.Menu id='LBP-navlinks'>
            <Dropdown.Item href="/biography"><Navlink to="/biography" text="Biography" /></Dropdown.Item>
            <Dropdown.Item href="/skillset"><Navlink to="/skillset" text="Skill Set" /></Dropdown.Item>
            <Dropdown.Item href="/portfolio"><Navlink to="/portfolio" text="Portfolio" /></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </LBP>
      </>
  )
}
