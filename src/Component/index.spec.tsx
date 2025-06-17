import { render } from '@testing-library/react-native';
import Home from '.';

describe('Component', () => {
  it('should render correctly', () => {
    const { getByText } = render(<Home />);
    
    expect(getByText('Component')).toBeTruthy();
  });
});
