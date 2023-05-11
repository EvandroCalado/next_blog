import Date from './';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/renderTheme';

const mock = {
  date: '2023-04-25T12:45:35.146Z',
};

describe('<Date />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Date date={mock.date} />);

    expect(screen.getByText('25/04/2023')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
