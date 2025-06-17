import ImageSlider from ".";
import { Providers } from "../../utils/test-utils";
import { render, screen } from "@testing-library/react-native";

describe('ImageSlider', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(
            <ImageSlider imagesUrl={[]} />,
            { wrapper: Providers }
        );

        expect(getByTestId('image-slider')).toBeTruthy();
    });

    it('should render correctly with images', () => {
        const { getByTestId } = render(
            <ImageSlider imagesUrl={['https://pngimg.com/d/mustang_PNG47.png']} />,
            { wrapper: Providers }
        );


        expect(screen.getByTestId('image-slider')).toBeTruthy();
    });
});