import React, { useState, useEffect } from 'react';
import { PageBody, SelectedButton, Container } from 'components/styled/';
import styled from 'styled-components';
import GmmapCarousel from 'components/carousel';

import request from 'api';

const Gallery = () => {
  const [gallery, setGallery] = useState(null);
  const [showImages, setShowImages] = useState(true);

  useEffect(() => {
    const getGalleryData = async () => {
      const data = await request({ url: 'galleries' });
      setGallery(data);
    };
    getGalleryData();
  }, []);

  return (
    <PageBody>
      <ButtonContainer>
        <SelectedButton onClick={() => setShowImages(true)} active={showImages}>
          Images
        </SelectedButton>
        <SelectedButton
          onClick={() => setShowImages(false)}
          active={!showImages}
        >
          Videos
        </SelectedButton>
      </ButtonContainer>

      {showImages ? (
        <Images data={gallery && gallery[0].photos} />
      ) : (
        <Videos data={gallery && gallery[0].videos} />
      )}
    </PageBody>
  );
};

export default Gallery;

const ButtonContainer = styled(Container)`
  padding: ${(props) => props.theme.padding.xlg};
  gap: ${(props) => props.theme.size.xlg};
`;

const Images = ({ data }) => {
  console.log(data);

  return (
    <Container>
      {data && (
        <ImageWrapper>
          <GmmapCarousel data={data} />
        </ImageWrapper>
      )}
    </Container>
  );
};

const Videos = ({ data }) => {
  console.log(data);
  return (
    <div>
      {data &&
        data.map((el) => (
          <video width="320" height="240" controls>
            <source src={el.url} type="video/mp4" />
          </video>
        ))}
    </div>
  );
};

const ImageWrapper = styled.div`
  width: ${(props) => props.theme.size.xxxlg};
  display: flex;
  justify-content: center;
  align-items: center;
`;
