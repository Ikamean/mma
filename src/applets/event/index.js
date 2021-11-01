import React from 'react';

import logo from 'media/logo.png';

import { Container, ShadowContainer } from 'components';
import { convertTime } from 'utils';

import styled from 'styled-components';

const Event = ({ data }) => {
  return (
    <EventContainer>
      <EventCount> {data.length} EVENTS </EventCount>
      {data.map((el) => {
        const { athletes, name, created_at, date, time, location } = el;

        return (
          <EventBody key={created_at}>
            <EventDetails>
              <EventName>{name}</EventName>
              <Location>{location} </Location>
              <Time>
                {date} / {convertTime(time)}
              </Time>
            </EventDetails>

            <AthleteImagesContainer>
              {athletes.map((athlete) => {
                const athleteUrl = athlete.media[0].formats.thumbnail.url;
                return (
                  <Container>
                    <img
                      src={athleteUrl}
                      key={athleteUrl}
                      alt={`${name}`}
                    ></img>
                  </Container>
                );
              })}
            </AthleteImagesContainer>
          </EventBody>
        );
      })}
    </EventContainer>
  );
};

export default Event;

const EventContainer = styled(Container)`
  flex-direction: column;
  gap: ${(props) => props.theme.size.xxlg};
`;

const EventCount = styled(Container)`
  font-weight: 900;
  font-size: ${(props) => props.theme.font.size.md};
`;

const EventBody = styled(ShadowContainer)`
  flex-direction: column;
  width: 100%;
  gap: ${(props) => props.theme.size.sm};
  padding: ${(props) => props.theme.padding.md} 0;
`;

const EventDetails = styled(Container)`
  font-size: ${(props) => props.theme.font.size.msm};
  flex-direction: column;
  gap: ${(props) => props.theme.size.md};
`;
const EventName = styled(Container)`
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.bold};
  letter-spacing: ${(props) => props.theme.size.xsm};
  gap: ${(props) => props.theme.size.sm};
`;

const Location = styled(Container)`
  font-size: ${(props) => props.theme.font.size.md};
  font-weight: ${(props) => props.theme.font.weight.neutral};
`;

const Time = styled(Container)`
  font-size: ${(props) => props.theme.font.size.msm};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

const AthleteImagesContainer = styled(Container)`
  justify-content: space-evenly;
  width: 100%;
`;
