import { render } from '@testing-library/react-native';
import Home from '.';

describe('Home', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Home />);
    
    expect(getByText('Hello World')).toBeTruthy();
  });
});
