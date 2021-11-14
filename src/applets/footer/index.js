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
      <FooterItem>2021 All Rights Reserved</FooterItem>

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
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Container)`
  padding: ${(props) => props.theme.padding.md};
  padding-top: ${(props) => props.theme.padding.lg};
  padding-bottom: ${(props) => props.theme.padding.lg};

  color: ${(props) => props.theme.color.white};
  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  justify-content: space-around;
  border-top: 1px dotted ${(props) => props.theme.color.grey};
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.msm};
  }
`;

const FooterItem = styled(Container)`
  width: 252px;
`;
const SocialContainer = styled(FooterItem)`
  gap: ${(props) => props.theme.size.sm};
`;
const SocialButton = styled(Button)`
  color: ${(props) => props.theme.color.white};
`;
