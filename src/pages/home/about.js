import React from 'react';
import styled from 'styled-components';
import { Container, LogoContainer, ColoredLogo } from 'components/styled';

import signature from 'media/signature.jpg';

const About = ({ data }) => {
  const { about, introVideo } = data;
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
        <ParagraphDescription>{about}</ParagraphDescription>
        <VideoContainer>
          <video width="100%" height="340" controls>
            <source src={introVideo.url} type="video/mp4" />
          </video>
        </VideoContainer>
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

const ParagraphDescription = styled(Paragraph)`
  color: ${(props) => props.theme.color.grey};
  padding-top: ${(props) => props.theme.padding.md};
  position: relative;

  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.msm};
  }
`;

const VideoContainer = styled(Container)`
  margin-top: ${(props) => props.theme.padding.xlg};
  margin-bottom: ${(props) => props.theme.padding.xlg};
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
