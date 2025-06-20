import { render } from "@testing-library/react-native";
import SchedulingComplete from ".";
import { Providers } from "../../utils/test-utils";

describe('SchedulingComplete', () => {
    it('should render correctly', () => {
        const { getByTestId } = render(<SchedulingComplete />, { wrapper: Providers });
        expect(getByTestId('scheduling-complete')).toBeTruthy();
    });
});