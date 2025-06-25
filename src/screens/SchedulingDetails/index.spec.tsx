import { useNavigation } from "@react-navigation/native";
import SchedulingDetails from ".";
import { createMockNavigation, renderWithTheme } from "../../utils/test-utils";
import { act, fireEvent } from "@testing-library/react-native";

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
    useRoute: jest.fn()
}));

const mockNavigation = createMockNavigation();
(useNavigation as jest.Mock).mockReturnValue(mockNavigation);

describe('SchedulingDetails', () => {
    it('should render correctly', async () => {
        const { getByTestId } = renderWithTheme(<SchedulingDetails />)

        await act(async () => {
            expect(getByTestId('scheduling-details')).toBeTruthy();
        })
    });

    it('should navigate to SchedulingComplete screen when confirm rental button is pressed', async () => {
        const { getByTestId } = renderWithTheme(<SchedulingDetails />);

        const confirmButton = getByTestId('button-container');

        await act(async () => { 
            fireEvent.press(confirmButton);
        });

        expect(mockNavigation.navigate).toHaveBeenCalledWith('SchedulingComplete');
    });

    it('should navigate back when back button is pressed', async () => {
        const { getByTestId } = renderWithTheme(<SchedulingDetails />);

        const backButton = getByTestId('back-button');

        await act(async () => {
            fireEvent.press(backButton);
        });

        expect(mockNavigation.goBack).toHaveBeenCalled();
    });
});