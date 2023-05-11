import Header from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Header />', () => {
  it('test_logo_receives_props', () => {
    renderTheme(<Header {...mock} />);

    expect(screen.getByAltText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.description)).toBeInTheDocument();
  });

  it('should_to_match_snapshot', () => {
    const { container } = renderTheme(<Header {...mock} />);

    expect(container).toMatchSnapshot();
  });
});
