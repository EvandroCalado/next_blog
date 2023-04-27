import Container from '.';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

describe('<Container />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Container>{'Container'}</Container>);
    expect(screen.getByText('Container')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
