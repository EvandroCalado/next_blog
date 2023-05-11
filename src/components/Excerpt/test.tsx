import Excerpt from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<Excerpt />', () => {
  it('test_excerpt_rendered_with_valid_prop', () => {
    const excerpt = 'This is a valid excerpt';

    renderTheme(<Excerpt excerpt={excerpt} />);
    expect(screen.getByText(excerpt)).toBeInTheDocument();
  });

  it('test_rendering_empty_excerpt', () => {
    const excerpt = '';

    renderTheme(<Excerpt excerpt={excerpt} />);
    expect(screen.getByTestId('excerpt-wrapper')).toBeInTheDocument();
    expect(screen.getByTestId('excerpt-wrapper')).toHaveTextContent(excerpt);
  });

  it('should render a snapshot', () => {
    const excerpt = 'This is a valid excerpt';

    const { container } = renderTheme(<Excerpt excerpt={excerpt} />);
    expect(container).toMatchSnapshot();
  });
});
