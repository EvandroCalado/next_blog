import Header from './Header';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<Header />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Header />);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
    expect(container).toMatchSnapshot();
  });
});
