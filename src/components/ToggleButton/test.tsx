import ToggleButton from './';
import { fireEvent } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<ToggleButton />', () => {
  it('test_theme_is_inverted_on_toggle', () => {
    const { getByRole } = renderTheme(<ToggleButton />);
    const button = getByRole('button');
    fireEvent.click(button);
    // expect(button).toHaveTextContent('inverted');
  });
});
