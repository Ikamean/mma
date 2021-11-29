import React from 'react';
import styled from 'styled-components';
import {
  Container,
  LogoContainer,
  ColoredLogo,
  Button,
} from 'components/styled/';

import GMMA from 'media/GMMA.svg';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoAndContacts>
        <FooterItem>
          <LogoContainer>
            <GmmaLogo src={GMMA} alt="logo svg" />
          </LogoContainer>
        </FooterItem>

        <SocialContainer>
          <SocialButton>Facebook</SocialButton>
          <SocialButton>Instagram</SocialButton>
          <SocialButton>Youtube</SocialButton>
        </SocialContainer>
      </LogoAndContacts>
      {/* <Container>
        <Container>Proucts</Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
      </Container>
      <Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
        <Container>helllo world</Container>
      </Container> */}
      {/* <img src={logo} alt="React Logo" width="auto" height="50" /> */}
      <AllRights>© 2021 All Rights Reserved GMMA</AllRights>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Container)`
  color: ${(props) => props.theme.color.black};
  /* border-top: 1px solid ${(props) => props.theme.color.grey}; */
  padding: ${(props) => props.theme.padding.md};
  background-color: ${(props) => props.theme.color.black};

  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  gap: ${(props) => props.theme.size.md};
  /* border-top: 1px solid ${(props) => props.theme.color.grey}; */
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.msm};
  }

  @media (max-width: 450px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }

  /* border: 1px solid red; */
`;

const GmmaLogo = styled.img`
  width: auto;
  height: ${(props) => props.theme.size.xxxxlg};
  object-fit: cover;
  padding-left: ${(props) => props.theme.padding.xxlg};

  @media (max-width: 950px) {
    height: ${(props) => props.theme.size.xxxlg};
    padding-left: ${(props) => props.theme.padding.lg};
  }

  @media (max-width: 450px) {
    height: ${(props) => props.theme.size.xxlg};
  }
`;
const LogoAndContacts = styled(Container)`
  justify-content: space-between;
  align-items: end;
  width: 80%;
  /* border: 1px solid red; */
`;

const FooterItem = styled(Container)`
  width: ${(props) => props.theme.size.sm};
`;
const AllRights = styled(Container)`
  color: ${(props) => props.theme.color.grey};
  font-weight: ${(props) => props.theme.font.weight.bold};
  justify-content: center;
  padding: ${(props) => props.theme.padding.md};
  padding-bottom: 0;
`;

const SocialContainer = styled(FooterItem)`
  gap: ${(props) => props.theme.size.sm};
  width: ${(props) => props.theme.size.xlg};
  /* align-items: top; */
`;
const SocialButton = styled(Button)`
  color: ${(props) => props.theme.color.white};

  &:hover {
    outline: none;
    color: ${(props) => props.theme.color.grey};
    text-decoration: underline;
  }
`;
