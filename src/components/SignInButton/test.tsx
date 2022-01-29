import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import SignInButton from '.';

describe('<SignInButton />', () => {
  it('should render the button to sign to github', () => {
    const { container } = renderWithTheme(
      <SignInButton isUserLoggedIn={false} />
    );

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

  it('should render the button to sign to github', () => {
    renderWithTheme(<SignInButton isUserLoggedIn />);

    const githubUserButton = screen.getByRole('button', { name: /Supertgo/i });

    expect(githubUserButton).toBeInTheDocument();
    expect(screen.getByLabelText('login-to-github')).toHaveAttribute(
      'color',
      '#04d361'
    );
    expect(screen.getByLabelText('logout')).toBeInTheDocument();
  });
});
