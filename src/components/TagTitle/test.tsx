import TagTitle from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<TagTitle />', () => {
  it('test_render_tag_title_with_valid_tag_prop', () => {
    renderTheme(<TagTitle tag="valid tag" />);
    const wrapper = screen.getByTestId('tag-title-wrapper');
    const title = screen.getByText('valid tag');
    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('valid tag');
  });

  it('test_render_tag_title_with_empty_tag_prop', () => {
    renderTheme(<TagTitle tag="" />);
    const wrapper = screen.getByTestId('tag-title-wrapper');
    const title = screen.getByTestId('tag-title');
    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('');
  });
});
