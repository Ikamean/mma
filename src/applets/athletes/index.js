import React from 'react';
import { convertKgToLb, converToUpperCase } from 'utils';

import styled from 'styled-components';

import {
  Container,
  ContainerHeader,
  ShadowContainer,
} from 'components/styled/';

import { useHistory } from 'react-router-dom';

import Carousel from 'components/carousel';

const Athlete = ({ data }) => {
  const history = useHistory();
  const {
    name,
    lastName,
    weight,
    height,
    category,
    loses,
    wins,
    draws,
    nickName,
    age,
    events,
  } = data;

  const thumbnailUrl = data.media[0].formats.thumbnail.url;
  const lastFight = events[0] ? events[0].name : 'No Record';
  const lbValue = convertKgToLb({ kg: weight });
  const athleteName = converToUpperCase({ value: name });
  const athleteLastName = converToUpperCase({ value: lastName });
  const athleteNickName = converToUpperCase({ value: nickName });
  const athleteCategory = converToUpperCase({ value: category });

  return (
    <AthleteContainer onClick={() => history.push(`/athletes/${data.id}`)}>
      <AthleteName>
        {athleteName} {athleteLastName}
      </AthleteName>
      <ContainerBody>
        <InfoContainer>
          <JustifyLeftContainer>{athleteCategory}</JustifyLeftContainer>
          <JustifyLeftContainer>
            {lbValue} lbs ({weight} kg)
          </JustifyLeftContainer>
          <JustifyLeftContainer>Last Fight : {lastFight}</JustifyLeftContainer>
        </InfoContainer>

        <ImageContainer>
          <Container>
            <img
              src={`${process.env.REACT_APP_STRAPI_BASE_URL}${thumbnailUrl}`}
              alt={`${athleteName} ${athleteLastName}`}
            />
          </Container>
          <NickName>{athleteNickName}</NickName>
          <WLDcontainer>
            ({wins}-{loses}-{draws})
          </WLDcontainer>
        </ImageContainer>
      </ContainerBody>
    </AthleteContainer>
  );
};

export default Athlete;

const AthleteContainer = styled(ShadowContainer)`
  flex-direction: column;
  padding: ${(props) => props.theme.padding.md};
  margin: ${(props) => props.theme.margin.lg} 0;
  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 2px;
  cursor: pointer;
  transition: all 1 ease-in;

  &:hover {
    color: ${(props) => props.theme.color.white};
    background-color: ${(props) => props.theme.color.black};
  }
`;

const AthleteName = styled(ContainerHeader)`
  color: inherit;
`;
const ContainerBody = styled(Container)`
  justify-content: space-evenly;
  width: 100%;
`;
const InfoContainer = styled(Container)`
  font-size: ${(props) => props.theme.font.size.msm};
  font-weight: ${(props) => props.theme.font.weight.bold};
  flex-direction: column;
  justify-content: center;
  gap: ${(props) => props.theme.size.md};
  width: ${(props) => props.theme.size.xxxlg};
`;

const JustifyLeftContainer = styled(Container)`
  justify-content: left;
  width: 100%;
`;

const ImageContainer = styled(Container)`
  flex-direction: column;
`;

const NickName = styled(Container)`
  text-align: left;
  padding: ${(props) => props.theme.padding.msm};
  font-size: ${(props) => props.theme.font.size.msm};
  font-weight: ${(props) => props.theme.font.weight.bold};
  letter-spacing: ${(props) => props.theme.size.xsm};
`;

const WLDcontainer = styled(Container)`
  font-size: ${(props) => props.theme.font.size.msm};
`;
