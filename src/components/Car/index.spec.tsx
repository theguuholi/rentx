import { render } from '@testing-library/react-native';
import Car from '.';
import { Providers } from '../../utils/test-utils';

describe('Car', () => {
  const car = {
    id: '1',
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Por dia',
      price: 1200
    },
    thumbnail: 'https://example.com/audi.png'
  };

  it('should render car component correctly', () => {
    const { getByText, getByTestId } = render(<Car data={car} />,
      {
        wrapper: Providers
      }
    );

    expect(getByText(car.brand)).toBeTruthy();
    expect(getByText(car.name)).toBeTruthy();
    expect(getByText(car.rent.period)).toBeTruthy();
    expect(getByText(`R$ ${car.rent.price}`)).toBeTruthy();
  });

  it('should display the car image', () => {
    const { getByTestId } = render(<Car data={car} />, {
      wrapper: Providers
    });

    const carImage = getByTestId('car-image');
    expect(carImage.props.source.uri).toBe(car.thumbnail);
    expect(carImage.props.resizeMode).toBe('contain');
  });

});
