import { act, render } from "@testing-library/react-native";
import Schedulling from ".";
import { Providers } from "../../utils/test-utils";

describe("Schedulling", () => {
    it("should show correctly", async () => {
        const { getByTestId, debug } = render(<Schedulling />, {
            wrapper: Providers
        });

 
        const backButton = getByTestId('back-button');
        const confirmButton = getByTestId('button-container');


        await act(async () => {
            backButton.props.onPress();
            expect(confirmButton).toBeTruthy();
        });
    });
});