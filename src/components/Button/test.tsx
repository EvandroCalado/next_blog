import Button from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

import { ChevronRight } from '@styled-icons/material-outlined';

describe('<Button />', () => {
  it('should render a button with default values', () => {
    renderTheme(
      <Button color="primary" size="medium">
        Button
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Button');
    expect(button).not.toBeDisabled();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('should render a button with values', () => {
    renderTheme(
      <Button
        color="primary"
        size="medium"
        icon={<ChevronRight />}
        disasbled={true}
      >
        Button
      </Button>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveAttribute('color', 'primary');
    expect(button).toHaveStyle({ 'font-size': '2.4rem' });
    expect(button.lastChild).toBeInTheDocument;
    expect(button).toBeDisabled();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(
      <Button color="primary" size="medium">
        Button
      </Button>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
