import Footer from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Footer />', () => {
  it('test_render_footer_with_valid_html_content', () => {
    renderTheme(<Footer {...mock} />);

    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/EvandroCalado',
    );
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByText(/Feito por/i)).toBeInTheDocument();
  });

  it('test_render_footer_with_empty_html_content', () => {
    const footerContent = '';
    renderTheme(<Footer footer={footerContent} />);
    const footerElement = screen.getByTestId('footer-wrapper');
    expect(footerElement).toBeEmptyDOMElement();
  });
});
