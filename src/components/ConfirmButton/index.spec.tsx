import { render } from "@testing-library/react-native";
import ConfirmButton from ".";
import { Providers } from "../../utils/test-utils";

describe('ConfirmButton', () => {
    it('should render correctly', () => {
        const { getByText } = render(<ConfirmButton title="OK" />, { wrapper: Providers });
        expect(getByText('OK')).toBeTruthy();
    });
});