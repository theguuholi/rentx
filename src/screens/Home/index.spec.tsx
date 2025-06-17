import { render } from '@testing-library/react-native';
import Home from '.';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../styles/theme';
import React from 'react';

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

describe('Home', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Home />,
      {
        wrapper: Providers
      }
    );

    expect(getByText('Total de 12 carros')).toBeTruthy();
  });
})
