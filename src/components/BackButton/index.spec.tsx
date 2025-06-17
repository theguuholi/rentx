import { render } from '@testing-library/react-native';
import { BackButton } from '.';
import { Providers } from '../../utils/test-utils';

describe('BackButton', () => {
    it('should render correctly', () => {

        const { getByTestId } = render(
            <BackButton />,
            {
                wrapper: Providers
            }
        );

        expect(getByTestId('back-button')).toBeTruthy();
    })
})