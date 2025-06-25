import { renderWithTheme } from "../../utils/test-utils";
import Acessory from ".";

describe('Acessory', () => {
    it('should render correctly', () => {
        const { getByText } = renderWithTheme(<Acessory name="Test" icon={() => <></>} />)
        expect(getByText('Test')).toBeTruthy();
    });
});