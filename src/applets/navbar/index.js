import React, { useState } from 'react';
import styled from 'styled-components';

import logo from 'media/whiteLogo.png';

import { useHistory } from 'react-router-dom';

import { Container, Button, LogoContainer, ColoredLogo } from 'components';

const NavBar = () => {
  const history = useHistory();
  const [activePage, setActivePage] = useState('home');
  const [burgerMenu, setBurgerMenu] = useState(false);

  const handleNavigation = (direction) => {
    history.push(direction);
    setActivePage(direction);
    setBurgerMenu(false);
  };
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
            fill="#000000"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        )}
      </BurgerIcon>
      <LinkContainer>
        <LinkButton
          active={activePage === 'athletes' && true}
          onClick={() => handleNavigation('athletes')}
        >
          Athletes
        </LinkButton>
        <LinkButton
          active={activePage === 'events' && true}
          onClick={() => handleNavigation('events')}
        >
          Events
        </LinkButton>
        <LinkButton
          active={activePage === 'about' && true}
          onClick={() => handleNavigation('about')}
        >
          About
        </LinkButton>

        <LinkButton
          active={activePage === 'news' && true}
          onClick={() => handleNavigation('news')}
        >
          News
        </LinkButton>
      </LinkContainer>
      <Logo
        active={activePage === '/' && true}
        onClick={() => handleNavigation('/')}
        burgerMenu={burgerMenu}
      >
        G<ColoredLogo>MMA</ColoredLogo>P
      </Logo>
      <LinkContainer>
        <LinkButton
          active={activePage === 'gallery' && true}
          onClick={() => handleNavigation('gallery')}
        >
          Gallery
        </LinkButton>
        <LinkButton
          active={activePage === 'live' && true}
          onClick={() => handleNavigation('live')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="red"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M9 10v8l7-4zm12-4h-7.58l3.29-3.29L16 2l-4 4h-.03l-4-4-.69.71L10.56 6H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 14H3V8h18v12z" />
          </svg>
        </LinkButton>
        <LinkButton
          active={activePage === 'shop' && true}
          onClick={() => handleNavigation('shop')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="red"
          >
            <path d="M0 0h24v24H0V0z" fill="none" />
            <path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </svg>
        </LinkButton>
      </LinkContainer>
    </NavbarContainer>
  );
};

export default NavBar;

const NavbarContainer = styled(Container)`
  justify-content: space-between;
  gap: 1rem;
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.font.size.md};
  padding: ${(props) => props.theme.padding.md};

  @media screen and (max-width: 950px) {
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: ${(props) => props.theme.color.black};
    padding: ${(props) => props.theme.padding.md};
  }
`;

const BurgerIcon = styled(Button)`
  position: fixed;
  right: ${(props) => props.theme.size.lg};
  top: ${(props) => props.theme.size.lg};
  visibility: hidden;
  display: flex;

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

  outline: ${(props) =>
    props.active
      ? `1px dotted ${props.theme.color.red}`
      : props.theme.color.black};
  @media screen and (max-width: 950px) {
    color: ${(props) => props.theme.color.white};
    text-align: center;
    align-items: center;
    width: 100%;
  }
`;

const Logo = styled(LogoContainer)`
  cursor: pointer;

  @media screen and (max-width: 950px) {
    color: ${(props) =>
      props.burgerMenu ? props.theme.color.white : props.theme.color.black};

    position: absolute;
    top: ${(props) => props.theme.size.lg};
    left: ${(props) => props.theme.size.md};
    font-size: ${(props) => props.theme.font.size.lmd};
    width: auto;
    visibility: visible;
  }
`;
