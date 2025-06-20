import SchedulingDetails from ".";
import { Providers } from "../../utils/test-utils";
import { act, render } from "@testing-library/react-native";

describe('SchedulingDetails', () => {
    it('should render correctly', async () => {
        const { getByTestId } = render(
            <SchedulingDetails />,
            { wrapper: Providers }
        );

        await act(async () => {
            expect(getByTestId('scheduling-details')).toBeTruthy();
        })
    });
});