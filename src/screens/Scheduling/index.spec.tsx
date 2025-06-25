import { act, fireEvent } from "@testing-library/react-native";
import Schedulling from ".";
import { createMockNavigation, renderWithTheme } from "../../utils/test-utils";
import { useNavigation } from "@react-navigation/native";

jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
    useRoute: jest.fn()
}));

const mockNavigation = createMockNavigation();
(useNavigation as jest.Mock).mockReturnValue(mockNavigation);

describe("Schedulling", () => {
    it("should show correctly", async () => {
        const { getByTestId } = renderWithTheme(<Schedulling />)

        const backButton = getByTestId('back-button');
        const confirmButton = getByTestId('button-container');

        await act(async () => {
            fireEvent.press(backButton);
            fireEvent.press(confirmButton);
            expect(confirmButton).toBeTruthy();
        })
    });
});