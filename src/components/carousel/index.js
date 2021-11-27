import React from 'react';
import styled from 'styled-components';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const GmmapCarousel = ({ data, size = null }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      // centerMode={true}
      // centerSlidePercentage={90}
      showStatus={false}
      dynamicHeight={true}
    >
      {data && data.map((el) => <img src={el.url} alt="intro" size={size} />)}
    </Carousel>
  );
};

export default GmmapCarousel;
