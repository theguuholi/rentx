import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../styles/theme';
import React from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(
    ThemeProvider,
    { theme },
    children
  );
};

export { Providers };

