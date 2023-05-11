import Content from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Content />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Content {...mock} />);

    expect(screen.getByRole('article')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
