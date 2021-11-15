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
      <div className="sweet-loading">
        <ClimbingBoxLoader
          color={color}
          loading={loading}
          css={override}
          size={15}
        />
      </div>
    </Centered>
  );
}

export default Spinner;

const Centered = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 40%;
  z-index: 99999;
`;
