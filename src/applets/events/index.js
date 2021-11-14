import React from 'react';

import { Container, ShadowContainer } from 'components/styled/';
import { convertTime } from 'utils';

import styled from 'styled-components';

const Event = ({ data = null }) => {
  return (
    <EventContainer>
      {data && <EventCount> {data.length} EVENTS </EventCount>}
      {data &&
        data.map((el) => {
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
                        src={`${process.env.REACT_APP_STRAPI_BASE_URL}${athleteUrl}`}
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
  margin: ${(props) => props.theme.margin.md} 0;

  color: ${(props) => props.theme.color.white};
`;

const EventCount = styled(Container)`
  font-weight: 900;
  font-size: ${(props) => props.theme.font.size.md};
  margin-bottom: ${(props) => props.theme.size.lg};
`;

const EventBody = styled(ShadowContainer)`
  flex-direction: column;
  width: 100%;
  padding: ${(props) => props.theme.padding.lg} 0;
  margin: ${(props) => props.theme.margin.md} 0;

  color: ${(props) => props.theme.color.black};
  background-color: ${(props) => props.theme.color.white};
  border-radius: 2px;
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
