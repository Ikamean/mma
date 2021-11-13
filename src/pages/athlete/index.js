import React, { useEffect, useState } from 'react';
import request from 'api';

import { PageBody, PageHeader, Container } from 'components/styled/';
import Carousel from 'components/carousel';

import { useParams } from 'react-router-dom';

import styled from 'styled-components';

const Athlete = () => {
  const [athlete, setAthlete] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getAthleteData = async () => {
      const data = await request({ url: 'athletes', id });
      setAthlete(data);
    };

    getAthleteData();
    return () => {
      console.log('cleanup');
    };
  }, [id]);
  return (
    <PageBody>
      {athlete && (
        <>
          <AthleteName>
            {athlete.name} {athlete.lastName} - {athlete.nickName}
          </AthleteName>
          <AthleteContainer>
            <AthleteMediaContainer>
              <Carousel data={athlete.media} />
            </AthleteMediaContainer>

            <AthleteEvents>
              Events
              {athlete.events.map((event) => (
                <div>{event.name}</div>
              ))}
            </AthleteEvents>
          </AthleteContainer>
        </>
      )}
    </PageBody>
  );
};

export default Athlete;

const AthleteName = styled(PageHeader)`
  padding: ${(props) => props.theme.padding.lg};
  margin-top: ${(props) => props.theme.margin.lg};
  margin-bottom: ${(props) => props.theme.margin.lg};

  @media screen and (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.md};
  }
`;
const AthleteContainer = styled(Container)`
  padding: ${(props) => props.theme.padding.xlg};
  background-color: ${(props) => props.theme.color.white};
  color: ${(props) => props.theme.color.black};
  flex-direction: column;
`;
const AthleteMediaContainer = styled(Container)`
  padding: ${(props) => props.theme.padding.sm};
`;
const AthleteEvents = styled(Container)``;
