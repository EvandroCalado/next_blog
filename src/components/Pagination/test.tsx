import Pagination from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<Pagination />', () => {
  it('test_pagination_renders_correct_number_of_pages', () => {
    const props = {
      nextPage: 2,
      numberOfPosts: 20,
      postsPerPage: 10,
      previusPage: 1,
      category: '',
      author: '',
      tag: '',
      title: '',
    };
    renderTheme(<Pagination {...props} />);
    expect(screen.getByText('1 de 2')).toBeInTheDocument();
  });

  it('test_pagination_renders_correct_links', () => {
    const props = {
      nextPage: 2,
      numberOfPosts: 20,
      postsPerPage: 10,
      previusPage: 1,
      category: 'category1',
      author: '',
      tag: '',
      title: '',
    };
    renderTheme(<Pagination {...props} />);
    expect(screen.getByTestId('link-left')).toHaveAttribute(
      'href',
      '/category/category1?page=1',
    );
    expect(screen.getByTestId('link-right')).toHaveAttribute(
      'href',
      '/category/category1?page=2',
    );
  });

  it('test_pagination_renders_correct_icons', () => {
    const props = {
      nextPage: 2,
      numberOfPosts: 20,
      postsPerPage: 10,
      previusPage: 1,
      category: '',
      author: '',
      tag: '',
      title: '',
    };
    renderTheme(<Pagination {...props} />);
    expect(screen.getByTestId('link-left').firstChild).toBeInTheDocument();
    expect(screen.getByTestId('link-left').firstChild).not.toHaveStyle({
      opacity: '0.5',
      cursor: 'not-allowed',
    });
    expect(screen.getByTestId('link-right').firstChild).toBeInTheDocument();
    expect(screen.getByTestId('link-right').firstChild).not.toHaveStyle({
      opacity: '0.5',
      cursor: 'not-allowed',
    });
  });

  it('test_pagination_render_button_if_no_has_next_page_or_previus_page', () => {
    const props = {
      nextPage: 2,
      numberOfPosts: 3,
      postsPerPage: 6,
      previusPage: 0,
      category: '',
      author: '',
      tag: '',
      title: '',
    };

    renderTheme(<Pagination {...props} />);
    expect(screen.getByTestId('link-right')).toHaveStyle({
      cursor: 'not-allowed',
    });
    expect(screen.getByTestId('link-left')).toHaveStyle({
      cursor: 'not-allowed',
    });
  });

  it('test_pagination_empty_href_props', () => {
    const props = {
      nextPage: 2,
      numberOfPosts: 10,
      postsPerPage: 5,
      previusPage: 1,
      category: '',
      author: '',
      tag: '',
      title: '',
    };

    const { getByTestId } = renderTheme(<Pagination {...props} />);
    const linkLeft = getByTestId('link-left');
    const linkRight = getByTestId('link-right');
    expect(linkLeft).toHaveAttribute('href', '/posts?page=1');
    expect(linkRight).toHaveAttribute('href', '/posts?page=2');
  });

  it('test_pagination_has_author', () => {
    const props = {
      nextPage: 2,
      numberOfPosts: 10,
      postsPerPage: 5,
      previusPage: 1,
      category: '',
      author: 'evandro',
      tag: '',
      title: '',
    };

    const { getByTestId } = renderTheme(<Pagination {...props} />);
    const linkLeft = getByTestId('link-left');
    const linkRight = getByTestId('link-right');
    expect(linkLeft).toHaveAttribute('href', '/author/evandro?page=1');
    expect(linkRight).toHaveAttribute('href', '/author/evandro?page=2');
  });

  it('test_pagination_has_tag', () => {
    const props = {
      nextPage: 2,
      numberOfPosts: 10,
      postsPerPage: 5,
      previusPage: 1,
      category: '',
      author: '',
      tag: 'web',
      title: '',
    };

    const { getByTestId } = renderTheme(<Pagination {...props} />);
    const linkLeft = getByTestId('link-left');
    const linkRight = getByTestId('link-right');
    expect(linkLeft).toHaveAttribute('href', '/tag/web?page=1');
    expect(linkRight).toHaveAttribute('href', '/tag/web?page=2');
  });

  it('test_pagination_has_title', () => {
    const props = {
      nextPage: 2,
      numberOfPosts: 10,
      postsPerPage: 5,
      previusPage: 1,
      category: '',
      author: '',
      tag: '',
      title: 'javascript',
    };

    const { getByTestId } = renderTheme(<Pagination {...props} />);
    const linkLeft = getByTestId('link-left');
    const linkRight = getByTestId('link-right');
    expect(linkLeft).toHaveAttribute('href', '/search/javascript?page=1');
    expect(linkRight).toHaveAttribute('href', '/search/javascript?page=2');
  });
});
