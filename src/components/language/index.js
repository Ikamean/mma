import React from 'react';

import styled from 'styled-components';

import { Button } from 'components/styled';

import { useTranslation } from 'react-i18next';

const Language = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContainer>
      <LanguageBtn onClick={() => changeLanguage('en')}>
        {/* <img
          alt="EN"
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
          height="15px"
          width="15px"
        /> */}
        EN
      </LanguageBtn>

      <LanguageBtn onClick={() => changeLanguage('ge')}>
        {/* <img
          alt="GE"
          src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GE.svg"
          height="15px"
          width="15px"
        /> */}
        GE
      </LanguageBtn>
    </LanguageContainer>
  );
};

export default Language;

const LanguageContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  display: flex;
  gap: 3px;
  z-index: 999999;
  @media screen and (max-width: 950px) {
    right: 3rem;
    top: 1.5rem;
  }
`;
const LanguageBtn = styled(Button)`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.transparent};
  /* border-radius: 2px; */
  font-weight: 600;
  font-size: 10px;
`;
