import ImageSlider from '.';
import { renderWithTheme } from '../../utils/test-utils';

describe('ImageSlider', () => {
  it('should render correctly', () => {
    const { getByTestId } = renderWithTheme(<ImageSlider imagesUrl={[]} />);

    expect(getByTestId('image-slider')).toBeTruthy();
  });

  it('should render correctly with images', () => {
    const { getByTestId } = renderWithTheme(
      <ImageSlider imagesUrl={['https://pngimg.com/d/mustang_PNG47.png']} />
    );

    expect(getByTestId('image-slider')).toBeTruthy();
  });
});
