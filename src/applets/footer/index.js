import React from 'react';
import styled from 'styled-components';
import { Container, LogoContainer, ColoredLogo } from 'components';

const Footer = () => {
  return (
    <FooterContainer>
      <LogoContainer>
        G<ColoredLogo>MMA</ColoredLogo>P
      </LogoContainer>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Container)`
  padding: ${(props) => props.theme.padding.md};
  color: ${(props) => props.theme.color.black};
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
`;
