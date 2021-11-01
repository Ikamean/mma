import React, { useState, useEffect } from 'react';
import { athletes } from 'api';

import Athlete from 'applets/athlete';
import { PageBody, Container, PageHeader } from 'components';
import styled from 'styled-components';

const Athletes = () => {
  const [athletesData, setAthletesData] = useState(null);

  useEffect(() => {
    const getAllAthletes = async () => {
      const data = await athletes();
      setAthletesData(data);
    };
    getAllAthletes();
  }, []);

  console.log(athletesData);

  if (!athletesData) return <div>Loading...</div>;

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
