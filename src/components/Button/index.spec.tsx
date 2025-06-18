import { render } from "@testing-library/react-native";
import { Providers } from "../../utils/test-utils";
import Button from ".";
import theme from "../../styles/theme";

describe('Button', () => {
    it('should render correctly', () => {
        const { getByText } = render(<Button title="Test" />, { wrapper: Providers });
        expect(getByText('Test')).toBeTruthy();
    });
    // it('should render with custom color when color prop is provided', () => {
    //     const { getByTestId } = render(
    //         <Button 
    //             title="Test" 
    //             color="#FF0000"
    //         />, 
    //         { wrapper: Providers }
    //     );

    //     const container = getByTestId('button-container');
    //     expect(container.props.style.backgroundColor).toBe('#FF0000');
    // });

    // it('should render with default theme color when no color prop is provided', () => {
    //     const { getByTestId } = render(
    //         <Button title="Test" />, 
    //         { wrapper: Providers }
    //     );

    //     const container = getByTestId('button-container');
    //     expect(container.props.style.backgroundColor).toBe(theme.colors.main);
    // });
});