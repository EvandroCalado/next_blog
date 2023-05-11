import Author from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Author />', () => {
  it('should render image', () => {
    renderTheme(<Author {...mock} />);
    expect(screen.getByRole('img', { name: mock.title })).toBeInTheDocument();
  });

  it('should render title', () => {
    renderTheme(<Author {...mock} />);
    expect(screen.getByText(mock.title)).toBeInTheDocument();
  });

  it('should render paragraph', () => {
    renderTheme(<Author {...mock} />);
    expect(screen.getByText('Desenvolvedor Frontend')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<Author {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
