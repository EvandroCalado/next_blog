import GoToTop from './';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<GoToTop />', () => {
  it('test_scroll_up_displays_go_to_top_button', () => {
    renderTheme(<GoToTop />);

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    waitFor(() => expect(screen.getByRole('link')).toBeVisible());

    fireEvent.scroll(window, { target: { scrollY: 50 } });

    waitFor(() => expect(screen.getByRole('link')).toBeVisible());
  });

  it('test_click_go_to_top_button_scrolls_to_top', () => {
    window.scrollTo = jest.fn();

    renderTheme(<GoToTop />);

    fireEvent.click(screen.getByTestId('go-to-top-button'));

    expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
  });
});
