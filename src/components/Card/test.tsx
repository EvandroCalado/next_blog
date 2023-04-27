import PostCard from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

import mock from './mock';

describe('<PostCard />', () => {
  it('should render', () => {
    renderTheme(<PostCard {...mock} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
