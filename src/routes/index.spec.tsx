
import Routes from ".";
import { renderWithTheme } from "../utils/test-utils";

describe('Routes', () => {
    it('should render correctly', () => {
        const { getByTestId } = renderWithTheme(Routes)
        expect(getByTestId('home')).toBeTruthy();
    });
});