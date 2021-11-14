import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Container, PageBody, ContainerHeader } from 'components/styled';

import { useHistory } from 'react-router-dom';

import request from 'api';

import Welcome from './welcome';
import About from './about';

import Spinner from 'components/spinner';

const Home = () => {
  const [homePageData, setHomePageData] = useState([]);

  useEffect(() => {
    const getHomePageData = async () => {
      const data = await request({ url: 'home-page' });
      setHomePageData(data);
    };
    getHomePageData();
  }, []);

  if (homePageData.length === 0) return;
  <Spinner />;

  return (
    <PageBody>
      <Welcome data={homePageData} />

      <About data={homePageData} />
      {/* <Athletes /> */}
    </PageBody>
  );
};

export default Home;

const AthleteContainer = styled(Container)`
  flex-direction: column;
  padding: ${(props) => props.theme.padding.lg};
  height: ${(props) => props.theme.size.xl};
  /* position: relative; */
`;

const AthleteHeader = styled(ContainerHeader)`
  /* position: fixed; */
  left: 0;
  top: 0;
  font-size: ${(props) => props.theme.font.size.lg};
  display: flex;
  flex-direction: column;
  &:after {
    content: '__________';
    color: ${(props) => props.theme.color.red};
    padding-top: ${(props) => props.theme.padding.sm};
    letter-spacing: 0;
    font-size: ${(props) => props.theme.font.size.md};
  }
`;
const Athletes = () => {
  const [athletesData, setAthletesData] = useState([]);

  useEffect(() => {
    const getAllAthletes = async () => {
      const data = await request({ url: 'athletes' });
      setAthletesData(data);
    };
    getAllAthletes();
  }, []);

  const athletesThubmnails =
    athletesData.length > 0
      ? athletesData.map((el) => {
          return { url: el.media[0].formats.thumbnail.url };
        })
      : [];

  return (
    <AthleteContainer>
      <a href="/athletes">
        <AthleteHeader>OUR ATHLETES</AthleteHeader>
      </a>
      {/* <GmmapCarousel data={athletesThubmnails} /> */}
    </AthleteContainer>
  );
};
