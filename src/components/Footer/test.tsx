import Footer from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

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
