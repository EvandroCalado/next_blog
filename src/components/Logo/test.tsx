import Logo from './';
import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<Logo />', () => {
  it('test_logo_renders_with_valid_props', () => {
    const props = {
      image: 'logo.png',
      title: 'My Logo',
    };
    renderTheme(<Logo {...props} />);
    expect(screen.getByAltText(props.title)).toBeInTheDocument();
  });

  it('test_logo_click_redirects_to_correct_page', () => {
    const props = {
      image: 'logo.png',
      title: 'My Logo',
      description: 'This is my logo',
    };
    renderTheme(<Logo {...props} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
    fireEvent.click(link);
    expect(window.location.pathname).toBe('/');
  });

  it('test_logo_renders_without_props', () => {
    renderTheme(<Logo image="" title="" />);
    expect(screen.queryByRole('link', { name: '' })).toBeInTheDocument();
    expect(screen.queryByAltText('')).toBeInTheDocument();
  });
});
