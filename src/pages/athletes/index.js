import React, { useState, useEffect } from 'react';
import request from 'api';

import Athlete from 'applets/athletes';
import { PageBody, Container, PageHeader } from 'components/styled/';

import Spinner from 'components/spinner';

const Athletes = () => {
  const [athletesData, setAthletesData] = useState(null);

  useEffect(() => {
    const getAllAthletes = async () => {
      const data = await request({ url: 'athletes' });
      setAthletesData(data);
    };
    getAllAthletes();
  }, []);

  if (!athletesData) return <Spinner />;

  return (
    <PageBody>
      <PageHeader>ATHLETES</PageHeader>
      {athletesData.map((athlete) => {
        return (
          <Athlete data={athlete} key={`${athlete.name}${athlete.lastName}`} />
        );
      })}
    </PageBody>
  );
};

export default Athletes;
