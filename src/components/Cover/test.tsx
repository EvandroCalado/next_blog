import Cover from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Cover />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Cover {...mock} />);

    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', mock.url);
    expect(screen.getByRole('img')).toHaveAttribute('alt', mock.alt);
    expect(container).toMatchSnapshot();
  });
});
