import React from 'react';
import { renderWithTheme } from '../../utils/test-utils';
import MyCars from './index';
import { act } from '@testing-library/react-native';

// Mock navigation
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    goBack: jest.fn(),
    push: jest.fn(),
    pop: jest.fn(),
    reset: jest.fn(),
    setOptions: jest.fn(),
  }),
}));

// Mock API
jest.mock('../../services/api', () => ({
  api: {
    get: jest.fn(() => new Promise(resolve => setTimeout(() => resolve({ data: [] }), 200))),
  },
}));

describe('MyCars Screen', () => {
  it('shows loading when loading', () => {
    const { getByTestId } = renderWithTheme(<MyCars />);
    expect(getByTestId('loading')).toBeTruthy();
  });

  it('shows the title and subtitle after loading', async () => {
    let getByText;
    await act(async () => {
      const result = renderWithTheme(<MyCars />);
      getByText = result.getByText;
      // Wait for loading to finish
      await new Promise(resolve => setTimeout(resolve, 300));
    });

    expect(
      getByText(
        'Seus agendamentos, estão aqui.\nVocê vai precisar de um café para começar\no seu dia.'
      )
    ).toBeTruthy();
    expect(getByText('Conforto, segurança e praticidade')).toBeTruthy();
  });

  it('shows the appointments section after loading', async () => {
    let getByText;
    await act(async () => {
      const result = renderWithTheme(<MyCars />);
      getByText = result.getByText;
      // Wait for loading to finish
      await new Promise(resolve => setTimeout(resolve, 300));
    });

    expect(getByText('Agendamentos feitos')).toBeTruthy();
    expect(getByText('0')).toBeTruthy();
  });

  it('shows the car list container after loading', async () => {
    let getByTestId;
    await act(async () => {
      const result = renderWithTheme(<MyCars />);
      getByTestId = result.getByTestId;
      // Wait for loading to finish
      await new Promise(resolve => setTimeout(resolve, 300));
    });

    // Check if the CarList container is rendered
    expect(getByTestId('car-list')).toBeTruthy();
  });
}); 