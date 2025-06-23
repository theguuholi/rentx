import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../styles/theme';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const Providers = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(
    NavigationContainer,
    {
      children: React.createElement(
        ThemeProvider,
        { theme },
        children
      )
    }
  );
};

export { Providers };

