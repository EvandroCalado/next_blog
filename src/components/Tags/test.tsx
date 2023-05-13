import Tags, { TagProps } from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<Tags />', () => {
  it('test_renders_tags_with_correct_names_and_links', () => {
    const tags = [{ name: 'tag1' }, { name: 'tag2' }];
    renderTheme(<Tags tags={tags} />);
    const tag1 = screen.getByText('tag1');
    const tag2 = screen.getByText('tag2');
    expect(tag1).toHaveAttribute('href', '/tag/tag1?page=1');
    expect(tag2).toHaveAttribute('href', '/tag/tag2?page=1');
  });

  it('test_empty_tags_array', () => {
    const tags: TagProps[] = [];
    renderTheme(<Tags tags={tags} />);
    const wrapper = screen.getByText('Tags:');
    expect(wrapper).toBeInTheDocument();
  });
});
