import Category from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Category />', () => {
  it('should render Category with values', () => {
    const { container } = renderTheme(<Category {...mock} />);

    expect(screen.queryAllByRole('img')[0]).toHaveAttribute(
      'alt',
      'Javascript',
    );
    expect(screen.queryAllByRole('img')[0]).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dnhsdenji/image/upload/v1682864831/javascript_programming_language_icon_ce8f9d2d57.png',
    );
    expect(screen.getByText(mock.category)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
