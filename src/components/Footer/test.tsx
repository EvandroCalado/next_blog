import Footer from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<Footer />', () => {
  it('test_rendering_with_valid_props', () => {
    const footer = 'This is the footer';
    const social = [
      { title: 'github', link: 'https://github.com' },
      { title: 'linkedin', link: 'https://linkedin.com' },
      { title: 'instagram', link: 'https://instagram.com' },
    ];

    renderTheme(<Footer footer={footer} social={social} />);

    expect(screen.getByTestId('footer-wrapper')).toHaveTextContent(
      'This is the footer',
    );
    expect(screen.getByTestId('github')).toHaveAttribute(
      'href',
      'https://github.com',
    );
    expect(screen.getByTestId('linkedin')).toHaveAttribute(
      'href',
      'https://linkedin.com',
    );
    expect(screen.getByTestId('instagram')).toHaveAttribute(
      'href',
      'https://instagram.com',
    );
  });
});
