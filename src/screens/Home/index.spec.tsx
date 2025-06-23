import { render } from '@testing-library/react-native';
import Home from '.';
import React from 'react';
import { Providers } from '../../utils/test-utils';


describe('Home', () => {
  it('should render correctly', () => {
    const { getByText } = render(
      <Home />,
      {
        wrapper: Providers,
      }
    );

    expect(getByText('Total de 12 carros')).toBeTruthy();
  });

  it('should render loading', () => {
    const { getByTestId } = render(
      <Home />,
      {
        wrapper: Providers
      }
    );
  });
})
