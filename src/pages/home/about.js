import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Container,
  LogoContainer,
  ColoredLogo,
  Button,
} from 'components/styled';

import signature from 'media/signature.jpg';

const About = ({ data }) => {
  const { about, introVideo } = data;
  const [seeMoreDescription, setSeeMoreDescription] = useState(false);
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
          GMMAP has specialized in martial arts since 1986 and has one of the
          most innovative organization in the nation.
        </ParagraphHeader>
        <ParagraphDescription extended={seeMoreDescription}>
          {about}
        </ParagraphDescription>
        <SeeMore
          onClick={() => setSeeMoreDescription(!seeMoreDescription)}
          active={seeMoreDescription}
        >
          {seeMoreDescription ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#fff"
            >
              <path d="M0 0h24v24H0V0z" fill="none" />
              <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 0 24 24"
              width="24px"
              fill="#fff"
            >
              <path d="M24 24H0V0h24v24z" fill="none" opacity=".87" />
              <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z" />
            </svg>
          )}
        </SeeMore>
        <Signature>
          <DirectorDetails>
            <DirectorName>Aiden Richards</DirectorName>{' '}
            <Director>DIRECTOR / FOUNDER</Director>
          </DirectorDetails>
          <SignatureImg src={signature} />
        </Signature>
        {introVideo && (
          <VideoContainer>
            <video width="100%" height="340" controls>
              <source src={introVideo.url} type="video/mp4" />
            </video>
          </VideoContainer>
        )}
      </div>
    </AboutContainer>
  );
};

const AboutContainer = styled(Container)`
  background-color: ${(props) => props.theme.color.black};
  color: ${(props) => props.theme.color.white};
  padding-top: ${(props) => props.theme.padding.xlg};
  padding-bottom: ${(props) => props.theme.padding.xlg};

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

  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.md};
    letter-spacing: ${(props) => props.theme.size.xsm};
  }
`;

const GMMAP = styled(LogoContainer)`
  padding-left: ${(props) => props.theme.size.md};
  color: ${(props) => props.theme.color.white};
`;

const Paragraph = styled(Container)`
  padding-top: ${(props) => props.theme.size.lg};
  line-height: ${(props) => props.theme.size.lg};

  @media (max-width: 950px) {
    line-height: ${(props) => props.theme.font.size.smd};
  }
`;

const ParagraphHeader = styled(Paragraph)`
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.lsm};
  }
`;

const ParagraphDescription = styled.p`
  color: ${(props) => props.theme.color.grey};
  padding-top: ${(props) => props.theme.padding.lg};
  padding-right: ${(props) => props.theme.padding.lg};
  padding-left: ${(props) => props.theme.padding.lg};
  line-height: ${(props) => props.theme.size.lg};

  position: relative;
  height: ${(props) => (props.extended ? 'auto' : '60px')};
  overflow-y: hidden;
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.msm};
    line-height: ${(props) => props.theme.font.size.smd};
  }
`;

const SeeMore = styled(Button)`
  color: ${(props) => props.theme.color.red};
  position: absolute;
  right: 5%;

  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.msm};
  }

  &:hover {
    outline: none;
    text-decoration: underline;
  }
`;

const VideoContainer = styled(Container)`
  margin-top: ${(props) => props.theme.padding.xlg};
  margin-bottom: ${(props) => props.theme.padding.xlg};
`;

const Signature = styled(Container)`
  padding-top: ${(props) => props.theme.padding.xlg};
  justify-content: space-around;
`;
const DirectorDetails = styled(Container)`
  justify-content: left;
  align-items: start;
  flex-direction: column;
`;

const DirectorName = styled.span`
  font-size: ${(props) => props.theme.font.size.smd};

  @media (max-width: 450px) {
    font-size: ${(props) => props.theme.font.size.md};
  }
`;
const Director = styled.span`
  font-size: ${(props) => props.theme.font.size.msm};
  padding-top: ${(props) => props.theme.padding.sm};
  color: ${(props) => props.theme.color.red};
  font-weight: ${(props) => props.theme.font.weight.bold};

  @media (max-width: 450px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;

const SignatureImg = styled.img`
  height: 90px;
  width: auto;
  @media (max-width: 450px) {
    height: 50px;
  }
`;

export default About;
