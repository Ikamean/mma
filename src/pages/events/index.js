import React, { useState, useEffect } from 'react';
import { events } from 'api';

import Event from 'applets/event';
import { PageBody, Container, Button, PageHeader } from 'components';

import styled from 'styled-components';

const Events = () => {
  const [eventsData, setEventsData] = useState(null);
  const [eventType, setEventType] = useState('upcoming');

  useEffect(() => {
    const getAllEvents = async () => {
      const data = await events();
      setEventsData(data);
    };
    getAllEvents();
  }, []);

  if (!eventsData) return <div>loading...</div>;

  return (
    <PageBody>
      <PageHeader>EVENTS</PageHeader>

      <ButtonContainer>
        <HistoryButton
          active={eventType === 'upcoming'}
          onClick={() => setEventType('upcoming')}
        >
          UPCOMING
        </HistoryButton>
        <HistoryButton
          active={eventType === 'past'}
          onClick={() => setEventType('past')}
        >
          PAST
        </HistoryButton>
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

const HistoryButton = styled(Button)`
  font-weight: 900;
  font-size: ${(props) => props.theme.size.lg};
  width: ${(props) => props.theme.size.xxxlg};
  color: ${(props) =>
    props.active ? props.theme.color.black : props.theme.color.grey};
`;
