import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    black: '#000',
    white: '#fff',
    grey: '#abadb1',
    red: '#ff0000',
  },
  font: {
    size: {
      xsm: '0.2rem',
      sm: '0.5rem',
      msm: '0.7rem',
      lsm: '0.9rem',
      md: '1rem',
      smd: '1.5rem',
      lg: '2rem',
      xlg: '4rem',
    },
    weight: {
      regular: '400',
      neutral: '600',
      bold: '900',
    },
  },
  size: {
    xsm: '0.2rem',
    sm: '0.5rem',
    msm: '0.7rem',
    lsm: '0.9rem',
    md: '1rem',
    lmd: '1.5rem',
    lg: '2rem',
    slg: '2.5rem',
    mlg: '3ren',
    xlg: '4rem',
    xxlg: '8rem',
    xxxlg: '12rem',
    xxxxlg: '24rem',
  },
  padding: {
    xsm: '0.2rem',
    sm: '0.5rem',
    msm: '0.7rem',
    lsm: '0.9rem',
    md: '1rem',
    lg: '2rem',
    slg: '2.5rem',
    mlg: '3ren',
    xlg: '4rem',
    xxlg: '8rem',
    xxxlg: '12rem',
  },

  margin: {
    xsm: '0.2rem',
    sm: '0.5rem',
    msm: '0.7rem',
    lsm: '0.9rem',
    md: '1rem',
    lg: '2rem',
    xlg: '4rem',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
