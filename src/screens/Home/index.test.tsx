import React from 'react';
import { render } from '../../utils/test-utils';
import Home from './index';

describe('Home', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Home />);
    expect(getByText('Total de 12 carros')).toBeTruthy();
  });
}); 