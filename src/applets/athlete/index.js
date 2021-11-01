import React from 'react';
import { convertKgToLb, converToUpperCase } from 'utils';

import styled from 'styled-components';

import { Container, ContainerHeader, ShadowContainer } from 'components';

const Athlete = ({ data }) => {
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
    <AthleteContainer>
      <ContainerHeader>
        {athleteName} {athleteLastName}
      </ContainerHeader>
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
            <img src={thumbnailUrl} alt={`${athleteName} ${athleteLastName}`} />
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
  margin: ${(props) => props.theme.margin.md} 0;
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
