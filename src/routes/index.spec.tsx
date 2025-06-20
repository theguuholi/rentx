import { render } from "@testing-library/react-native";
import Routes from ".";
import { Providers } from "../utils/test-utils";

describe('Routes', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(<Routes />, { wrapper: Providers });
        expect(getByTestId('home')).toBeTruthy();
    });
});