import { useNavigation, useRoute } from '@react-navigation/native';
import SchedulingDetails from '.';
import { createMockNavigation, renderWithTheme } from '../../utils/test-utils';
import { act, fireEvent } from '@testing-library/react-native';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));

const mockNavigation = createMockNavigation();

const mockCar = {
  id: '1',
  brand: 'Audi',
  name: 'RS Coupé',
  about: 'Carro esportivo',
  rent: {
    period: 'AO DIA',
    price: 120,
  },
  thumbnail: 'https://example.com/thumbnail.jpg',
  accessories: [
    {
      type: 'speed',
      name: '250km/h',
    },
  ],
  photos: ['https://example.com/photo1.jpg'],
  fuel_type: 'gasoline',
};

const mockDates = ['2024-01-01', '2024-01-02', '2024-01-03'];

const mockRoute = {
  params: {
    car: mockCar,
    dates: mockDates,
  },
};

(useNavigation as jest.Mock).mockReturnValue(mockNavigation);
(useRoute as jest.Mock).mockReturnValue(mockRoute);

describe('SchedulingDetails', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render correctly with all main elements', async () => {
    const { getByTestId } = renderWithTheme(<SchedulingDetails />);

    await act(async () => {
      expect(getByTestId('scheduling-details')).toBeTruthy();
      expect(getByTestId('back-button')).toBeTruthy();
      expect(getByTestId('button-container')).toBeTruthy();
    });
  });

  it('should display car information correctly', async () => {
    const { getByText } = renderWithTheme(<SchedulingDetails />);

    await act(async () => {
      expect(getByText('Audi')).toBeTruthy();
      expect(getByText('RS Coupé')).toBeTruthy();
      expect(getByText('Ao Dia')).toBeTruthy();
      expect(getByText('R$ 120')).toBeTruthy();
    });
  });

  it('should display rental period dates correctly', async () => {
    const { getByText } = renderWithTheme(<SchedulingDetails />);

    await act(async () => {
      expect(getByText('2024-01-01')).toBeTruthy();
      expect(getByText('2024-01-03')).toBeTruthy();
    });
  });

  it('should display rental price calculation correctly', async () => {
    const { getByTestId } = renderWithTheme(<SchedulingDetails />);

    await act(async () => {
      expect(getByTestId('rental-price-quota')).toHaveTextContent(
        'R$ 120 x 3 diárias'
      );
      expect(getByTestId('rental-price-total')).toHaveTextContent('R$ 360');
    });
  });

  it('should display all accessories', async () => {
    const { getByText } = renderWithTheme(<SchedulingDetails />);

    await act(async () => {
      expect(getByText('250Km/h')).toBeTruthy();
      expect(getByText('3.2s')).toBeTruthy();
      expect(getByText('825 hp')).toBeTruthy();
      expect(getByText('Gasolina')).toBeTruthy();
      expect(getByText('Auto')).toBeTruthy();
      expect(getByText('2 pessoas')).toBeTruthy();
    });
  });

  it('should navigate to SchedulingComplete screen when confirm rental button is pressed', async () => {
    const { getByTestId } = renderWithTheme(<SchedulingDetails />);

    const confirmButton = getByTestId('button-container');

    await act(async () => {
      fireEvent.press(confirmButton);
    });

    expect(mockNavigation.navigate).toHaveBeenCalledWith('SchedulingComplete');
  });

  it('should navigate back when back button is pressed', async () => {
    const { getByTestId } = renderWithTheme(<SchedulingDetails />);

    const backButton = getByTestId('back-button');

    await act(async () => {
      fireEvent.press(backButton);
    });

    expect(mockNavigation.goBack).toHaveBeenCalled();
  });

  it('should handle single day rental correctly', async () => {
    const singleDayRoute = {
      params: {
        car: mockCar,
        dates: ['2024-01-01'],
      },
    };
    (useRoute as jest.Mock).mockReturnValue(singleDayRoute);

    const { getByTestId } = renderWithTheme(<SchedulingDetails />);

    await act(async () => {
      // Check for the total price which should be visible
      expect(getByTestId('rental-price-quota')).toHaveTextContent(
        'R$ 120 x 1 diárias'
      );
      expect(getByTestId('rental-price-total')).toHaveTextContent('R$ 120');
    });
  });

  it('should handle multiple day rental correctly', async () => {
    const multipleDayRoute = {
      params: {
        car: mockCar,
        dates: [
          '2024-01-01',
          '2024-01-02',
          '2024-01-03',
          '2024-01-04',
          '2024-01-05',
        ],
      },
    };
    (useRoute as jest.Mock).mockReturnValue(multipleDayRoute);

    const { getByTestId } = renderWithTheme(<SchedulingDetails />);

    await act(async () => {
      // Check for the total price which should be visible
      expect(getByTestId('rental-price-quota')).toHaveTextContent(
        'R$ 120 x 5 diárias'
      );
      expect(getByTestId('rental-price-total')).toHaveTextContent('R$ 600');
    });
  });

  it('should handle different car prices correctly', async () => {
    const expensiveCar = {
      ...mockCar,
      rent: {
        period: 'AO DIA',
        price: 500,
      },
    };

    const expensiveCarRoute = {
      params: {
        car: expensiveCar,
        dates: ['2024-01-01', '2024-01-02'],
      },
    };
    (useRoute as jest.Mock).mockReturnValue(expensiveCarRoute);

    const { getByTestId } = renderWithTheme(<SchedulingDetails />);

    await act(async () => {
      // Check for the total price which should be visible
      // Check for the word "diárias" which should be visible

      // Check for the rental price details
      expect(getByTestId('rental-price-quota')).toHaveTextContent(
        'R$ 500 x 2 diárias'
      );
      expect(getByTestId('rental-price-total')).toHaveTextContent('R$ 1000');
    });
  });
});
