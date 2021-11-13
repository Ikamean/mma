import React, { useState } from 'react';
import styled from 'styled-components';

import logo from 'media/whiteLogo.png';

import { useHistory, Link } from 'react-router-dom';

import {
  Container,
  Button,
  LogoContainer,
  ColoredLogo,
} from 'components/styled/';

const NavBar = () => {
  const history = useHistory();
  const [activePage, setActivePage] = useState('home');
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleNavigation = (direction) => {
    history.push(direction);
    setActivePage(direction);
    setBurgerMenu(false);
  };
  const firstNavbarItems = [
    { location: '/athletes', name: 'Athletes' },
    { location: '/events', name: 'Events' },
    { location: '/about', name: 'About' },
    { location: '/news', name: 'News' },
  ];
  const secondNavbarItems = [
    { location: '/gallery', name: 'Gallery' },
    { location: '/live', name: 'Live' },
    { location: '/shop', name: 'Shop' },
  ];
  return (
    <NavbarContainer visible={burgerMenu}>
      <BurgerIcon onClick={() => setBurgerMenu(!burgerMenu)}>
        {burgerMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="white"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        )}
      </BurgerIcon>
      <LinkContainer>
        {firstNavbarItems.map((el) => (
          <LinkButton
            active={activePage === el.location && true}
            onClick={() => handleNavigation(el.location)}
          >
            {el.name}
          </LinkButton>
        ))}
      </LinkContainer>
      <LinkContainer>
        <Logo
          active={activePage === '/' && true}
          onClick={() => handleNavigation('/')}
          burgerMenu={burgerMenu}
        >
          G<ColoredLogo>MMA</ColoredLogo>P
        </Logo>
      </LinkContainer>
      <LinkContainer>
        {secondNavbarItems.map((el) => (
          <LinkButton
            active={activePage === el.location && true}
            onClick={() => handleNavigation(el.location)}
          >
            {el.name}
          </LinkButton>
        ))}
      </LinkContainer>
    </NavbarContainer>
  );
};

export default NavBar;

const NavbarContainer = styled(Container)`
  justify-content: space-between;
  gap: 1rem;
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.font.size.md};
  padding: ${(props) => props.theme.padding.md};
  z-index: 1001;
  position: fixed;
  right: 0;
  left: 0;

  @media screen and (max-width: 950px) {
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1001;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.color.black};
    padding: ${(props) => props.theme.padding.md};
  }
`;

const BurgerIcon = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;

  visibility: hidden;
  display: flex;
  background-color: black;
  padding: ${(props) => props.theme.padding.md};
  @media screen and (max-width: 950px) {
    visibility: visible;
  }
`;

const LinkContainer = styled(Container)`
  width: ${(props) => props.theme.size.xxxxlg};
  justify-content: center;
  gap: ${(props) => props.theme.size.md};
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
  }
`;

const LinkButton = styled(Button)`
  padding: ${(props) => props.theme.padding.xsm};
  transition: all 0.1 ease-in-out;
  width: ${(props) => props.theme.size.xlg};
  height: ${(props) => props.theme.size.lg};
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${(props) => props.theme.color.white};

  outline: ${(props) =>
    props.active
      ? `1px dotted ${props.theme.color.red}`
      : props.theme.color.black};
  @media screen and (max-width: 950px) {
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;

const Logo = styled(LogoContainer)`
  cursor: pointer;
  color: ${(props) => props.theme.color.white};

  @media screen and (max-width: 950px) {
    position: absolute;
    top: ${(props) => props.theme.size.lg};
    left: ${(props) => props.theme.size.md};
    font-size: ${(props) => props.theme.font.size.lmd};
    width: auto;
    visibility: ${(props) => props.buergerMenu && 'visible'};
  }
`;
