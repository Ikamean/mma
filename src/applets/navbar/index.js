import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { useHistory } from 'react-router-dom';

import {
  Container,
  Button,
  LogoContainer,
  ColoredLogo,
} from 'components/styled/';

import GMMA from 'media/whiteLogo.svg';

const NavBar = () => {
  const history = useHistory();
  const [activePage, setActivePage] = useState('/');
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [userScrolling, setUserScrolling] = useState(false);

  const handleNavigation = (direction) => {
    history.push(direction);
    setActivePage(direction);
    setBurgerMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollY > 100 ? setUserScrolling(true) : setUserScrolling(false);
  };
  const firstNavbarItems = [
    { location: '/', name: 'Athletes' },
    { location: '/', name: 'Events' },
    { location: '/', name: 'About' },
    { location: '/', name: 'News' },
  ];
  const secondNavbarItems = [
    { location: '/', name: 'Gallery' },
    { location: '/', name: 'Live' },
    { location: '/', name: 'Shop' },
    { location: '/', name: 'Contact' },
  ];
  return (
    <NavbarContainerWrapper>
      <BurgerAndLogoContainer menuIsOpen={burgerMenu} scrolling={userScrolling}>
        <BurgerIcon>
          {burgerMenu ? (
            <Burger onClick={() => setBurgerMenu(!burgerMenu)}>
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
            </Burger>
          ) : (
            <Burger onClick={() => setBurgerMenu(!burgerMenu)}>
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
            </Burger>
          )}
        </BurgerIcon>
        <LogoWrapper
          onClick={() => handleNavigation('/')}
          burgerMenu={burgerMenu}
        >
          <Logo src={GMMA} alt="svg logo" active={activePage === '/' && true} />
        </LogoWrapper>
      </BurgerAndLogoContainer>
      <NavbarContainer visible={burgerMenu} scrolling={userScrolling}>
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
    </NavbarContainerWrapper>
  );
};

export default NavBar;

const NavbarContainerWrapper = styled(Container)`
  z-index: 1001;
  right: 0;
  left: 0;
  position: fixed;
`;

const NavbarContainer = styled(Container)`
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: ${(props) => (props.scrolling ? '1px solid red' : 'none')}; */

  background-color: ${(props) =>
    props.scrolling
      ? props.theme.color.transparent
      : props.theme.color.darkBlack};
  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.font.size.lsm};
  padding-left: ${(props) => props.theme.padding.xlg};
  padding-right: ${(props) => props.theme.padding.xlg};
  padding-top: ${(props) => props.theme.padding.md};
  padding-bottom: ${(props) => props.theme.padding.sm};

  @media screen and (max-width: 950px) {
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    position: fixed;
    z-index: 1001;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    padding: ${(props) => props.theme.padding.md};
    background-color: ${(props) => props.theme.color.darkBlack};
  }

  transition: 0.02s all ease-in-out;
`;

const BurgerAndLogoContainer = styled(Container)`
  @media (max-width: 950px) {
    background-color: ${(props) =>
      props.menuIsOpen
        ? props.theme.color.darkBlack
        : props.scrolling
        ? props.theme.color.transparent
        : props.theme.color.darkBlack};
    /* border: 1px solid red; */
    width: 100%;
    height: 3.54rem;
  }
`;
const BurgerIcon = styled(Container)`
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9999;

  visibility: hidden;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  padding: ${(props) => props.theme.padding.md};
  padding-right: ${(props) => props.theme.padding.msm};
  @media screen and (max-width: 950px) {
    visibility: visible;

    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    /* background-color: ${(props) => props.theme.color.darkBlack}; */
  }
`;

const Burger = styled(Button)`
  padding: 0;
  &:hover,
  &:focus {
    border: none;
  }
`;

const LinkContainer = styled(Container)`
  width: ${(props) => props.theme.size.xxxxxlg};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.size.md};
  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: start;
  }
`;

const LinkButton = styled(Button)`
  padding: ${(props) => props.theme.padding.xsm};
  transition: all 0.1 ease-in-out;
  width: 4.5rem;
  height: ${(props) => props.theme.size.lg};
  font-weight: ${(props) => props.theme.font.weight.bold};
  color: ${(props) => props.theme.color.white};

  /* outline: ${(props) =>
    props.active
      ? `1px dotted ${props.theme.color.red}`
      : props.theme.color.black}; */

  border-radius: 0;

  @media screen and (max-width: 950px) {
    text-align: left;
    align-items: center;
    width: 100%;
  }
`;

const Logo = styled.img`
  @media screen and (max-width: 950px) {
    /* border-bottom: 1px solid ${(props) => props.theme.color.red}; */
  }
`;

const LogoWrapper = styled(Container)`
  z-index: 9999;
  cursor: pointer;
  width: ${(props) => props.theme.size.xlg};
  border-bottom: 1px solid ${(props) => props.theme.color.red};
  top: ${(props) => props.theme.size.lmd};
  right: 50%;
  transform: translate(50%);
  position: absolute;
  @media screen and (max-width: 950px) {
    justify-content: flex-start;
    left: ${(props) => props.theme.size.md};
    transform: none;
    border: none;
  }
`;
