import Heading from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<Heading />', () => {
  it('test_render_heading_with_valid_children_prop', () => {
    renderTheme(<Heading>children</Heading>);
    expect(screen.getByText('children')).toBeInTheDocument();
  });

  it('test_verify_children_rendered_inside_wrapper', () => {
    renderTheme(<Heading>children</Heading>);
    const wrapper = screen.getByText('children').parentElement;
    expect(wrapper?.tagName).toBe('DIV');
  });

  it('test_render_heading_with_empty_children_prop', () => {
    renderTheme(<Heading>{''}</Heading>);
    expect(screen.getByTestId('heading')).toBeInTheDocument();
    expect(screen.getByTestId('heading').textContent).toBe('');
  });
});
