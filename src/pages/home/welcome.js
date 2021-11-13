import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  PageBody,
  LogoContainer,
  ColoredLogo,
  ContainerHeader,
} from 'components/styled';

import { useHistory } from 'react-router-dom';

import Athlete from 'applets/athletes';
import Event from 'applets/events';
import GmmapCarousel from 'components/carousel';

import signature from 'media/signature.jpg';

import { athletes, events, galleries, homePage } from 'api';

const Welcome = ({ data = null }) => {
  return (
    <WelcomeContainer>
      <GmmapCarousel data={data.media} />
      <WelcomeHeader>
        <div>WELCOME TO</div>
        {data.welcome}
      </WelcomeHeader>
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled(Container)`
  position: relative;
`;
const WelcomeHeader = styled(Container)`
  position: absolute;
  left: 7%;
  top: 10%;
  color: ${(props) => props.theme.color.white};
  font-weight: ${(props) => props.theme.font.weight.bold};
  font-size: ${(props) => props.theme.font.size.lg};
  flex-direction: column;
  align-items: flex-start;
  line-height: ${(props) => props.theme.size.lg};
  width: ${(props) => props.theme.size.xxxxlg};
  &:after {
    content: '__________';

    color: ${(props) => props.theme.color.red};
    padding-top: ${(props) => props.theme.padding.md};
    font-size: ${(props) => props.theme.font.size.md};
  }
`;

export default Welcome;
