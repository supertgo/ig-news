import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => {
    return [{ session: null }];
  })
}));

import SignInButton from '.';

describe('<SignInButton />', () => {
  it('should render the button to sign to github', () => {
    const { container } = renderWithTheme(<SignInButton />);

    const githubLoginButton = screen.getByRole('button', {
      name: /Sign in with github/i
    });

    expect(githubLoginButton).toBeInTheDocument();

    expect(screen.getByLabelText('login-to-github')).toHaveAttribute(
      'color',
      '#eba417'
    );
    expect(screen.queryByLabelText('logout')).not.toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
