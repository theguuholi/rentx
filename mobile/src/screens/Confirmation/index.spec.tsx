import SchedulingComplete from '.';
import { createMockNavigation, renderWithTheme } from '../../utils/test-utils';
import { useNavigation } from '@react-navigation/native';
import { act, fireEvent } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

const mockNavigation = createMockNavigation();
(useNavigation as jest.Mock).mockReturnValue(mockNavigation);

describe('SchedulingComplete', () => {
  it('should render correctly', () => {
    const { getByTestId } = renderWithTheme(<SchedulingComplete />);
    expect(getByTestId('scheduling-complete')).toBeTruthy();
  });

  it('should navigate to Home screen when OK button is pressed', async () => {
    const { getByText } = renderWithTheme(<SchedulingComplete />);

    const okButton = getByText('OK');

    await act(async () => {
      fireEvent.press(okButton);
    });

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Home');
  });
});
