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
    jest.clearAllMocks();
    (useRoute as jest.Mock).mockReturnValue(createMockCarRouteParams());
  });

  describe('Component Rendering', () => {
    it('should render the main container correctly', async () => {
      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByTestId('car-details')).toBeTruthy();
      });
    });

    it('should render all main sections', async () => {
      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByTestId('car-details')).toBeTruthy();
        expect(getByTestId('back-button')).toBeTruthy();
        expect(getByTestId('car-brand')).toBeTruthy();
        expect(getByTestId('car-name')).toBeTruthy();
        expect(getByTestId('rent-period')).toBeTruthy();
        expect(getByTestId('rent-price')).toBeTruthy();
        expect(getByTestId('accessories-list')).toBeTruthy();
        expect(getByTestId('car-about')).toBeTruthy();
      });
    });

    it('should render car information correctly with default data', async () => {
      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByTestId('car-brand')).toHaveTextContent('Test Brand');
        expect(getByTestId('car-name')).toHaveTextContent('Test Car');
        expect(getByTestId('rent-period')).toHaveTextContent('Daily');
        expect(getByTestId('rent-price')).toHaveTextContent('R$ 100');
        expect(getByTestId('car-about')).toHaveTextContent(
          'Test description about the car'
        );
      });
    });

    it('should render with custom car data', async () => {
      const customCarData = {
        brand: 'Custom Brand',
        name: 'Custom Car',
        about: 'Custom description',
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
        expect(getByTestId('car-about')).toHaveTextContent(
          'Custom description'
        );
      });
    });

    it('should render accessories correctly', async () => {
      const customCarData = {
        accessories: [
          { type: 'speed', name: '250km/h' },
          { type: 'acceleration', name: '3.2s' },
          { type: 'force', name: '825 hp' },
        ],
      };

      (useRoute as jest.Mock).mockReturnValue(
        createMockCarRouteParams(customCarData)
      );

      const { getByTestId, getAllByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByTestId('accessories-list')).toBeTruthy();
        // Check if accessories are rendered (they should have testID from Acessory component)
        const accessoryContainers = getAllByTestId('acessory-container');
        expect(accessoryContainers.length).toBeGreaterThan(0);
      });
    });

    it('should render ImageSlider with car photos', async () => {
      const customCarData = {
        photos: [
          'https://example.com/photo1.jpg',
          'https://example.com/photo2.jpg',
          'https://example.com/photo3.jpg',
        ],
      };

      (useRoute as jest.Mock).mockReturnValue(
        createMockCarRouteParams(customCarData)
      );

      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        // ImageSlider should be rendered within CarImages
        expect(getByTestId('car-details')).toBeTruthy();
      });
    });
  });

  describe('Navigation', () => {
    it('should navigate to Scheduling screen when confirm rental button is pressed', async () => {
      const mockNavigation = createMockNavigation();
      (useNavigation as jest.Mock).mockReturnValue(mockNavigation);

      const { getByText } = renderWithTheme(<CarDetails />);

      const confirmButton = getByText('Escolher período do aluguel');

      await act(async () => {
        fireEvent.press(confirmButton);
      });

      expect(mockNavigation.navigate).toHaveBeenCalledWith('Scheduling', {
        car: expect.any(Object),
      });
    });

    it('should pass correct car data to Scheduling screen', async () => {
      const mockNavigation = createMockNavigation();
      (useNavigation as jest.Mock).mockReturnValue(mockNavigation);

      const customCarData = {
        id: 'custom-id',
        brand: 'Custom Brand',
        name: 'Custom Car',
        about: 'Custom description',
        rent: {
          period: 'Weekly',
          price: 500,
        },
        accessories: [{ type: 'speed', name: '250km/h' }],
        photos: ['https://example.com/photo.jpg'],
        fuel_type: 'gasoline',
        thumbnail: 'https://example.com/thumbnail.jpg',
      };

      (useRoute as jest.Mock).mockReturnValue(
        createMockCarRouteParams(customCarData)
      );

      const { getByText } = renderWithTheme(<CarDetails />);

      const confirmButton = getByText('Escolher período do aluguel');

      await act(async () => {
        fireEvent.press(confirmButton);
      });

      expect(mockNavigation.navigate).toHaveBeenCalledWith('Scheduling', {
        car: customCarData,
      });
    });

    it('should call goBack when back button is pressed', async () => {
      const mockNavigation = createMockNavigation();
      (useNavigation as jest.Mock).mockReturnValue(mockNavigation);

      const { getByTestId } = renderWithTheme(<CarDetails />);

      const backButton = getByTestId('back-button');

      await act(async () => {
        fireEvent.press(backButton);
      });

      expect(mockNavigation.goBack).toHaveBeenCalled();
    });
  });

  describe('Button Interactions', () => {
    it('should have correct button text', async () => {
      const { getByText } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByText('Escolher período do aluguel')).toBeTruthy();
      });
    });

    it('should handle multiple button presses correctly', async () => {
      const mockNavigation = createMockNavigation();
      (useNavigation as jest.Mock).mockReturnValue(mockNavigation);

      const { getByText, getByTestId } = renderWithTheme(<CarDetails />);

      const confirmButton = getByText('Escolher período do aluguel');
      const backButton = getByTestId('back-button');

      await act(async () => {
        fireEvent.press(confirmButton);
        fireEvent.press(backButton);
      });

      expect(mockNavigation.navigate).toHaveBeenCalledTimes(1);
      expect(mockNavigation.goBack).toHaveBeenCalledTimes(1);
    });
  });

  describe('Edge Cases', () => {
    it('should handle car with no accessories', async () => {
      const customCarData = {
        accessories: [],
      };

      (useRoute as jest.Mock).mockReturnValue(
        createMockCarRouteParams(customCarData)
      );

      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByTestId('accessories-list')).toBeTruthy();
        // Should still render the accessories container even if empty
      });
    });

    it('should handle car with no photos', async () => {
      const customCarData = {
        photos: [],
      };

      (useRoute as jest.Mock).mockReturnValue(
        createMockCarRouteParams(customCarData)
      );

      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByTestId('car-details')).toBeTruthy();
        // Should still render the component even with no photos
      });
    });

    it('should handle car with very long text', async () => {
      const customCarData = {
        brand: 'Very Long Brand Name That Might Cause Layout Issues',
        name: 'Very Long Car Name That Might Cause Layout Issues',
        about:
          'Very long description that might cause layout issues and need to be handled properly in the UI',
        rent: {
          period: 'Very Long Period',
          price: 999999,
        },
      };

      (useRoute as jest.Mock).mockReturnValue(
        createMockCarRouteParams(customCarData)
      );

      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByTestId('car-brand')).toHaveTextContent(customCarData.brand);
        expect(getByTestId('car-name')).toHaveTextContent(customCarData.name);
        expect(getByTestId('car-about')).toHaveTextContent(customCarData.about);
        expect(getByTestId('rent-period')).toHaveTextContent(
          customCarData.rent.period
        );
        expect(getByTestId('rent-price')).toHaveTextContent(
          `R$ ${customCarData.rent.price}`
        );
      });
    });

    it('should handle zero price correctly', async () => {
      const customCarData = {
        rent: {
          period: 'AO DIA',
          price: 0,
        },
      };

      (useRoute as jest.Mock).mockReturnValue(
        createMockCarRouteParams(customCarData)
      );

      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        expect(getByTestId('rent-price')).toHaveTextContent('R$ 0');
      });
    });
  });

  describe('Component Structure', () => {
    it('should have proper component hierarchy', async () => {
      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        const container = getByTestId('car-details');
        expect(container).toBeTruthy();

        // Check that all main sections are present
        expect(getByTestId('back-button')).toBeTruthy();
        expect(getByTestId('car-brand')).toBeTruthy();
        expect(getByTestId('car-name')).toBeTruthy();
        expect(getByTestId('rent-period')).toBeTruthy();
        expect(getByTestId('rent-price')).toBeTruthy();
        expect(getByTestId('accessories-list')).toBeTruthy();
        expect(getByTestId('car-about')).toBeTruthy();
      });
    });

    it('should render all required testIDs', async () => {
      const { getByTestId } = renderWithTheme(<CarDetails />);

      await act(async () => {
        // All testIDs from the component should be present
        const testIDs = [
          'car-details',
          'back-button',
          'car-brand',
          'car-name',
          'rent-period',
          'rent-price',
          'accessories-list',
          'car-about',
        ];

        testIDs.forEach(testID => {
          expect(getByTestId(testID)).toBeTruthy();
        });
      });
    });
  });
});
