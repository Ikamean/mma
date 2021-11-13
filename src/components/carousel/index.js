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
    >
      {data &&
        data.map((el) => (
          <div>
            <CarouselImg
              src={`${process.env.REACT_APP_STRAPI_BASE_URL}${el.url}`}
              alt="carousel data"
              size={size}
            />
          </div>
        ))}
    </Carousel>
  );
};

export default GmmapCarousel;

const CarouselImg = styled.img`
  height: ${(props) => (props.size ? props.size.height : '100%')};
  width: ${(props) => (props.size ? props.size.height : '100%')};
`;
