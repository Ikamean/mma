import React from 'react';
import styled from 'styled-components';
import {
  Container,
  LogoContainer,
  ColoredLogo,
  Button,
} from 'components/styled/';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoAndContacts>
        <FooterItem>
          <LogoContainer>
            G<ColoredLogo>MMA</ColoredLogo>P
          </LogoContainer>
        </FooterItem>

        <SocialContainer>
          <SocialButton>Facebook</SocialButton>
          <SocialButton>Instagram</SocialButton>
          <SocialButton>Youtube</SocialButton>
        </SocialContainer>
      </LogoAndContacts>
      <AllRights>2021 All Rights Reserved</AllRights>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Container)`
  padding: ${(props) => props.theme.padding.md};
  padding-top: ${(props) => props.theme.padding.md};
  padding-bottom: ${(props) => props.theme.padding.sm};

  color: ${(props) => props.theme.color.white};
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  gap: ${(props) => props.theme.size.md};
  border-top: 1px dotted ${(props) => props.theme.color.grey};
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.msm};
  }

  @media (max-width: 450px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;

const LogoAndContacts = styled(Container)`
  justify-content: space-between;
  width: 100%;
`;

const FooterItem = styled(Container)``;
const AllRights = styled(Container)`
  color: ${(props) => props.theme.color.grey};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

const SocialContainer = styled(FooterItem)`
  gap: ${(props) => props.theme.size.sm};
`;
const SocialButton = styled(Button)`
  color: ${(props) => props.theme.color.white};

  &:hover {
    outline: none;
    color: ${(props) => props.theme.color.grey};
    text-decoration: underline;
  }
`;
