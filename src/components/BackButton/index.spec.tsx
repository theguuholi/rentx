import { act, render } from '@testing-library/react-native';
import { BackButton } from '.';
import { Providers } from '../../utils/test-utils';
import { MaterialIcons } from "@expo/vector-icons";
import theme from '../../styles/theme';

describe('BackButton', () => {
    it('should render correctly', async () => {

        const { getByTestId } = render(
            <BackButton />,
            { wrapper: Providers }
        );

        await act(async () => {
            expect(getByTestId('back-button')).toBeTruthy();
        })
    })

    it('should render with default color from theme', async () => {
        const { getByTestId } = render(
            <BackButton />,
            { wrapper: Providers }
        );

        const button = getByTestId('back-button');
        const icon = button.findByType(MaterialIcons);

        await act(async () => {
            expect(icon.props.color).toBe(theme.colors.text);
        });
    });

    it('should render with custom color when provided', async () => {
        const customColor = '#FF0000';

        const { getByTestId } = render(
            <BackButton color={customColor} />,
            { wrapper: Providers }
        );

        const button = getByTestId('back-button');
        const icon = button.findByType(MaterialIcons);

        await act(async () => {
            expect(icon.props.color).toBe(customColor);
        });
    });

    it('should pass through additional props', async () => {
        const onPress = jest.fn();

        const { getByTestId } = render(
            <BackButton onPress={onPress} />,
            { wrapper: Providers }
        );

        const button = getByTestId('back-button');

        await act(async () => {
            button.props.onPress();
            expect(onPress).toHaveBeenCalled();
        });
    });
})