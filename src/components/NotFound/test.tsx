import NotFound from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<NotFound />', () => {
  it('test_children_prop_is_rendered_correctly', () => {
    renderTheme(<NotFound>test</NotFound>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('test_renders_not_found_component_with_children_prop', () => {
    renderTheme(<NotFound>{''}</NotFound>);
    expect(screen.queryByText('test')).not.toBeInTheDocument();
  });

  it('test_render_without_children_prop', () => {
    renderTheme(<NotFound>{}</NotFound>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });

  it('test_render_snapshop', () => {
    const { container } = renderTheme(<NotFound>test</NotFound>);
    expect(container).toMatchSnapshot();
  });
});
