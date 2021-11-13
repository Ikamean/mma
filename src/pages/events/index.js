import React, { useState, useEffect } from 'react';
import request from 'api';

import Event from 'applets/events';
import {
  PageBody,
  Container,
  SelectedButton,
  PageHeader,
} from 'components/styled/';

import styled from 'styled-components';
import Spinner from 'components/spinner';

const Events = () => {
  const [eventsData, setEventsData] = useState([]);
  const [eventType, setEventType] = useState('upcoming');

  useEffect(() => {
    const getAllEvents = async () => {
      const data = await request({ url: 'events' });
      setEventsData(data);
    };
    getAllEvents();
  }, []);

  if (eventsData.length === 0) return <Spinner />;

  return (
    <PageBody>
      <PageHeader>EVENTS</PageHeader>

      <ButtonContainer>
        <SelectedButton
          active={eventType === 'upcoming'}
          onClick={() => setEventType('upcoming')}
        >
          UPCOMING
        </SelectedButton>
        <SelectedButton
          active={eventType === 'past'}
          onClick={() => setEventType('past')}
        >
          PAST
        </SelectedButton>
      </ButtonContainer>

      <Event
        data={eventType === 'upcoming' ? eventsData[0] : eventsData[1]}
        key={`${eventsData[0].name}${eventsData[0].location}`}
      />
    </PageBody>
  );
};

export default Events;

const ButtonContainer = styled(Container)`
  gap: ${(props) => props.theme.size.xlg};
  padding: ${(props) => props.theme.size.xlg};
`;
