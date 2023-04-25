import Footer from './Footer';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer {...mock} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      'https://github.com/EvandroCalado',
    );
    expect(container).toMatchSnapshot();
  });
});
