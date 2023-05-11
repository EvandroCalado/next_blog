import Destak from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import mock from './mock';

describe('<Destak />', () => {
  it('test_destak_with_all_props', () => {
    renderTheme(<Destak {...mock} />);

    expect(screen.getByText('Em Destaque')).toBeInTheDocument();
    expect(screen.getByText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.excerpt)).toBeInTheDocument();
    expect(screen.getByAltText(mock.title)).toBeInTheDocument();
    expect(screen.getByText('Publicado em')).toBeInTheDocument();
    expect(screen.getByText('por')).toBeInTheDocument();
    expect(screen.getByText(mock.author.title)).toBeInTheDocument();
    expect(screen.getByText('em')).toBeInTheDocument();
    expect(screen.getByText(mock.categories[0].title)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Leia mais' }),
    ).toBeInTheDocument();
  });

  it('test_destak_with_missing_props', () => {
    renderTheme(<Destak {...mock} />);

    expect(screen.getByText('Em Destaque')).toBeInTheDocument();
    expect(screen.getByText(mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.excerpt)).toBeInTheDocument();
    expect(screen.getByAltText(mock.title)).toBeInTheDocument();
    expect(screen.getByText('Publicado em')).toBeInTheDocument();
    expect(screen.getByText('por')).toBeInTheDocument();
    expect(screen.getByText(mock.author.title)).toBeInTheDocument();
    expect(screen.getByText('em')).toBeInTheDocument();
  });
});
