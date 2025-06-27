import { useNavigation, useRoute } from '@react-navigation/native';
import CarDetails from '.';
import {
  createMockNavigation,
  createMockCarRouteParams,
  renderWithTheme,
} from '../../utils/test-utils';
import { act, fireEvent } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

describe('CarDetails', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();

    // Set up default route params
    (useRoute as jest.Mock).mockReturnValue(createMockCarRouteParams());
  });

  it('should navigate to Scheduling screen when confirm rental button is pressed', async () => {
    const mockNavigation = createMockNavigation();
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);

    const { getByText } = renderWithTheme(<CarDetails />);

    const confirmButton = getByText('Escolher período do aluguel');

    await act(async () => {
      fireEvent.press(confirmButton);
    });

    expect(mockNavigation.navigate).toHaveBeenCalledWith('Scheduling');
  });

  it('should render correctly', async () => {
    const { getByTestId } = renderWithTheme(<CarDetails />);

    await act(async () => {
      expect(getByTestId('car-details')).toBeTruthy();
    });
  });

  it('should call onPress when back button is pressed', async () => {
    const mockNavigation = createMockNavigation();
    (useNavigation as jest.Mock).mockReturnValue(mockNavigation);

    const { getByTestId } = renderWithTheme(<CarDetails />);

    const backButton = getByTestId('back-button');

    await act(async () => {
      fireEvent.press(backButton);
    });

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('should render with custom car data', async () => {
    const customCarData = {
      brand: 'Custom Brand',
      name: 'Custom Car',
      rent: {
        period: 'Weekly',
        price: 500,
      },
    };

    (useRoute as jest.Mock).mockReturnValue(
      createMockCarRouteParams(customCarData)
    );

    const { getByTestId } = renderWithTheme(<CarDetails />);

    await act(async () => {
      expect(getByTestId('car-brand')).toHaveTextContent('Custom Brand');
      expect(getByTestId('car-name')).toHaveTextContent('Custom Car');
      expect(getByTestId('rent-period')).toHaveTextContent('Weekly');
      expect(getByTestId('rent-price')).toHaveTextContent('R$ 500');
    });
  });
});
