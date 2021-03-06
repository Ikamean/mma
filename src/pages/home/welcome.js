import React from 'react';
import styled from 'styled-components';
import { Container } from 'components/styled';

import GmmapCarousel from 'components/carousel';

import { useTranslation } from 'react-i18next';

const Welcome = ({ data = null }) => {
  const { t } = useTranslation();

  return (
    <WelcomeContainer>
      <CarouselContainer>
        <GmmapCarousel data={data.media} />
        <WelcomeHeader>
          <WelcomeText>{t('homePage.welcome')}</WelcomeText>
        </WelcomeHeader>
      </CarouselContainer>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled(Container)`
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.md};
  }
  padding-bottom: ${(props) => props.theme.padding.slg};
`;
const CarouselContainer = styled(Container)`
  /* padding-top: ${(props) => props.theme.padding.xlg}; */

  position: relative;
`;

const WelcomeHeader = styled(Container)`
  position: absolute;
  top: 100px;
  left: 100px;
  flex-direction: column;
  justify-content: left;
  align-items: start;

  font-weight: ${(props) => props.theme.font.weight.bold};

  &:after {
    content: '__________';
    color: ${(props) => props.theme.color.red};
    padding-top: ${(props) => props.theme.padding.md};
    font-size: ${(props) => props.theme.font.size.md};

    @media (max-width: 450px) {
      content: '____';
    }
  }

  @media (max-width: 450px) {
    top: 50px;
    left: 20px;
  }
`;

const WelcomeText = styled(Container)`
  width: 150px;
  font-size: ${(props) => props.theme.font.size.msm};
  line-height: ${(props) => props.theme.font.size.smd};
  letter-spacing: 1px;

  @media (min-width: 950px) {
    width: 150px;
    font-size: ${(props) => props.theme.font.size.md};
    line-height: ${(props) => props.theme.font.size.smd};
  }

  @media (min-width: 1200px) {
    font-size: ${(props) => props.theme.font.size.smd};
    width: 250px;
    line-height: ${(props) => props.theme.font.size.lg};
  }
`;

export default Welcome;
