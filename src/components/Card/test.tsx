import Card from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Card />', () => {
  it('should render a card with values', () => {
    const { container } = renderTheme(<Card {...mock} />);

    expect(screen.getByText(mock.title)).toBeInTheDocument();
    expect(screen.getByText('30/04/2023')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute(
      'href',
      `/post/${mock.slug}`,
    );
    expect(container).toMatchSnapshot();
  });
});
