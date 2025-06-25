
import { useNavigation } from '@react-navigation/native';
import Car from '.';
import { createMockNavigation, renderWithTheme } from '../../utils/test-utils';

const car = {
  id: '1',
  brand: 'Audi',
  name: 'RS 5 Coupé',
  rent: {
    period: 'Por dia',
    price: 1200
  },
  thumbnail: 'https://example.com/audi.png',
  about: 'Test about',
  accessories: [
    {
      type: 'speed',
      name: 'Speed'
    }
  ],
  photos: ['https://example.com/audi.png'],
  fuel_type: 'gasoline'
};

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn()
}));

const mockNavigation = createMockNavigation();
(useNavigation as jest.Mock).mockReturnValue(mockNavigation);

describe('Car', () => {

  it('should render car component correctly', () => {
    const { getByText, getByTestId } = renderWithTheme(<Car data={car} />)

    expect(getByText(car.brand)).toBeTruthy();
    expect(getByText(car.name)).toBeTruthy();
    expect(getByText(car.rent.period)).toBeTruthy();
    expect(getByText(`R$ ${car.rent.price}`)).toBeTruthy();
  });

  it('should display the car image', () => {
    const { getByTestId } = renderWithTheme(<Car data={car} />)

    const carImage = getByTestId('car-image');
    expect(carImage.props.source.uri).toBe(car.thumbnail);
    expect(carImage.props.resizeMode).toBe('contain');
  });

});
