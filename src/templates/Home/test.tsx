import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Home from '.';

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

jest.mock('components/SubscribeButton', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock SubscribeButton"></div>;
    }
  };
});

const props = {
  product: {
    price_id: 'dada',
    amount: 10
  }
};

describe('<Home />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Home product={props.product} />);

    expect(screen.getByText(/Hey, welcome/i)).toBeInTheDocument();
    expect(screen.getByText(/News about the/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Get access to all the publications/i)
    ).toBeInTheDocument();

    expect(
      screen.getByRole('img', { name: /Girl coding/i })
    ).toBeInTheDocument();
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();
    expect(screen.getByTestId('Mock SubscribeButton')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
