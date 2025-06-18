import { render } from "@testing-library/react-native";
import { Providers } from "../../utils/test-utils";
import Acessory from ".";

describe('Acessory', () => {
    it('should render correctly', () => {
        const { getByText } = render(<Acessory name="Test" icon={() => <></>} />, { wrapper: Providers });
        expect(getByText('Test')).toBeTruthy();
    });
});