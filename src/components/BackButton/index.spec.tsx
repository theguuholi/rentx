import { act, render } from '@testing-library/react-native';
import { BackButton } from '.';
import { renderWithTheme } from '../../utils/test-utils';
import { MaterialIcons } from "@expo/vector-icons";
import theme from '../../styles/theme';

describe('BackButton', () => {
    it('should render correctly', async () => {

        const { getByTestId } = renderWithTheme(<BackButton />)

        await act(async () => {
            expect(getByTestId('back-button')).toBeTruthy();
        })
    })

    it('should render with default color from theme', async () => {
        const { getByTestId } = renderWithTheme(<BackButton />)

        const button = getByTestId('back-button');
        const icon = button.findByType(MaterialIcons);

        await act(async () => {
            expect(icon.props.color).toBe(theme.colors.text);
        });
    });

    it('should render with custom color when provided', async () => {
        const customColor = '#FF0000';

        const { getByTestId } = renderWithTheme(<BackButton color={customColor} />)

        const button = getByTestId('back-button');
        const icon = button.findByType(MaterialIcons);

        await act(async () => {
            expect(icon.props.color).toBe(customColor);
        });
    });

    it('should pass through additional props', async () => {
        const onPress = jest.fn();

        const { getByTestId } = renderWithTheme(<BackButton onPress={onPress} />)

        const button = getByTestId('back-button');

        await act(async () => {
            button.props.onPress();
            expect(onPress).toHaveBeenCalled();
        });
    });
})