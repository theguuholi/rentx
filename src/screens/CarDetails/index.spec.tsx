import CarDetails from ".";
import { Providers } from "../../utils/test-utils";
import { act, render } from "@testing-library/react-native";

describe('CarDetails', () => {
    it('should render correctly', async() => {
        const { getByTestId } = render(
            <CarDetails />,
            { wrapper: Providers}
        );

        await act(async () => {
            expect(getByTestId('car-details')).toBeTruthy();
        })
    });

    it('should call onPress when back button is pressed', async () => {
        const { getByTestId } = render(
            <CarDetails />,
            { wrapper: Providers }
        );

        const backButton = getByTestId('back-button');

        await act(async () => {
            backButton.props.onPress();
        });
    });
    
});