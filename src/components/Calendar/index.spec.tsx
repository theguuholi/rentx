import { act, fireEvent, render } from '@testing-library/react-native';
import { Calendar } from '.';

describe('Calendar', () => {
    it('should render correctly', async () => {
        const { getByTestId } = render(<Calendar markedDates={{}} onDayPress={() => {}} />);
        await act(() => {
            fireEvent.press(getByTestId('calendar'));
            expect(getByTestId('calendar')).toBeTruthy();
        });
    });
}); 