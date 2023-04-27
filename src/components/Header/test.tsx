import Header from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Header />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Header {...mock} />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(container).toMatchSnapshot();
  });
});
