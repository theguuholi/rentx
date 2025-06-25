
import Home from '.';
import React from 'react';
import { createMockNavigation, renderWithTheme } from '../../utils/test-utils';
import { useNavigation } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn()
}));

const mockNavigation = createMockNavigation();
(useNavigation as jest.Mock).mockReturnValue(mockNavigation);

describe('Home', () => {
  it('should render correctly', () => {
    const { getByText } = renderWithTheme(<Home />)

    expect(getByText('Total de 0 carros')).toBeTruthy();
  });

  it('should render loading', () => {
    const { getByTestId } = renderWithTheme(<Home />)
  });
})
