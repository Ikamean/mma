import { useState } from 'react';
import { css } from '@emotion/react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import styled from 'styled-components';
// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState('#ffffff');

  return (
    <Centered>
      <Loader className="sweet-loading">
        <ClimbingBoxLoader
          color={color}
          loading={loading}
          css={override}
          size={15}
        />
      </Loader>
    </Centered>
  );
}

export default Spinner;

const Centered = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  z-index: 99999;
  background-color: ${(props) => props.theme.color.darkBlack};
`;

const Loader = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  right: 0;

  /* background-color: ${(props) => props.theme.color.darkBlack}; */
`;
