import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Header from '.';

jest.mock('components/SignInButton', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock SignInButton"></div>;
    }
  };
});

jest.mock('components/ActiveLink', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ActiveLink"></div>;
    }
  };
});

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Header />);

    expect(screen.getByRole('img', { name: /ig\.news/i })).toBeInTheDocument();
    expect(screen.getByTestId('Mock SignInButton')).toBeInTheDocument();
    expect(screen.getAllByTestId('Mock ActiveLink')).toHaveLength(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
