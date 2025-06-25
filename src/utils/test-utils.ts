import { ThemeProvider } from 'styled-components/native';
import theme from '../styles/theme';
import React from 'react';
import { CartDTO } from '../dtos/CartDTO';
import { render } from '@testing-library/react-native';

const MyThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return React.createElement(
    ThemeProvider,
    { theme },
    children
  );
}

export const renderWithTheme = (component: any) => {
  return render(component, {
    wrapper: MyThemeProvider
  })
}



// Mock navigation object
export const createMockNavigation = () => ({
  navigate: jest.fn(),
  goBack: jest.fn(),
  push: jest.fn(),
  pop: jest.fn(),
  reset: jest.fn(),
  setOptions: jest.fn(),
});

// Mock route params for CarDetails
export const createMockCarRouteParams = (overrides?: Partial<CartDTO>) => ({
  params: {
    car: {
      id: '1',
      brand: 'Test Brand',
      name: 'Test Car',
      about: 'Test description about the car',
      rent: {
        period: 'Daily',
        price: 100
      },
      thumbnail: 'https://example.com/thumbnail.jpg',
      accessories: [
        { type: 'speed', name: 'Speed Accessory' },
        { type: 'acceleration', name: 'Acceleration Accessory' }
      ],
      photos: ['https://example.com/photo1.jpg', 'https://example.com/photo2.jpg'],
      fuel_type: 'gasoline',
      ...overrides
    }
  }
});

// Generic route params creator
export const createMockRouteParams = <T>(params: T) => ({
  params
});
