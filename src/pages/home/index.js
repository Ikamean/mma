import React, { useEffect, useState } from 'react';

import { PageBody } from 'components/styled';

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
    </PageBody>
  );
};

export default Home;
