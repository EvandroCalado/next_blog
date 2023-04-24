import Container from './Container';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

describe('<Container />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Container>{'Container'}</Container>);
    expect(screen.getByText('Container')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
