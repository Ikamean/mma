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

const About = ({ text, image, history }) => {
  return (
    <AboutContainer>
      <div>
        <AFterEffect>
          <Header>
            <div>ABOUT</div>{' '}
            <GMMAP>
              G<ColoredLogo>MMA</ColoredLogo>P
            </GMMAP>
          </Header>
        </AFterEffect>
        <ParagraphHeader>
          Fight School has specialized in martial arts since 1986 and has one of
          the most innovative programs in the nation.
        </ParagraphHeader>
        <ParagraphDescription>
          {text}
          <SeeMore onClick={() => history.push('/about')}>See more...</SeeMore>
        </ParagraphDescription>
        <Signature>
          <DirectorDetails>
            <DirectorName>Aiden Richards</DirectorName>{' '}
            <Director>DIRECTOR / FOUNDER</Director>
          </DirectorDetails>
          <SignatureImg src={signature} />
        </Signature>
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  padding: ${(props) => props.theme.padding.xlg};
  align-items: center;
  justify-content: flex-start;
  gap: ${(props) => props.theme.size.xlg};
`;

const AFterEffect = styled(Container)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;

  &:after {
    content: '__________';

    color: ${(props) => props.theme.color.red};
    padding-top: ${(props) => props.theme.padding.md};
    letter-spacing: 0;
    font-size: ${(props) => props.theme.font.size.md};
  }
`;
const Header = styled(Container)`
  text-align: left;
  font-weight: ${(props) => props.theme.font.weight.bold};
  letter-spacing: ${(props) => props.theme.size.xsm};
  font-size: ${(props) => props.theme.font.size.smd};
`;

const GMMAP = styled(LogoContainer)`
  padding-left: ${(props) => props.theme.size.md};
  color: ${(props) => props.theme.color.white};
`;

const Paragraph = styled(Container)`
  padding-top: ${(props) => props.theme.size.lg};
  line-height: ${(props) => props.theme.size.lg};
`;

const ParagraphHeader = styled(Paragraph)``;

const ParagraphDescription = styled(Paragraph)`
  color: ${(props) => props.theme.color.grey};
  padding-top: ${(props) => props.theme.padding.md};
  position: relative;
`;

const SeeMore = styled.span`
  position: absolute;
  right: 0;
  bottom: 0;
  color: ${(props) => props.theme.color.red};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Signature = styled(Container)`
  padding-top: ${(props) => props.theme.padding.xlg};
  justify-content: space-between;
`;
const DirectorDetails = styled(Container)`
  justify-content: left;
  align-items: start;
  flex-direction: column;
`;

const DirectorName = styled.span`
  font-size: ${(props) => props.theme.font.size.smd};
`;
const Director = styled.span`
  font-size: ${(props) => props.theme.font.size.msm};
  padding-top: ${(props) => props.theme.padding.sm};
  color: ${(props) => props.theme.color.red};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

const SignatureImg = styled.img`
  height: 90px;
  width: auto;
`;

export default About;
