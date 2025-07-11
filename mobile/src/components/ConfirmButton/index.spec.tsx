import ConfirmButton from '.';
import { renderWithTheme } from '../../utils/test-utils';

describe('ConfirmButton', () => {
  it('should render correctly', () => {
    const { getByText } = renderWithTheme(<ConfirmButton title='OK' />);
    expect(getByText('OK')).toBeTruthy();
  });
});
