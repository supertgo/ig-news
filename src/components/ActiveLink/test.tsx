import { render, screen } from '@testing-library/react';

import ActiveLink from '.';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: ''
    };
  }
}));

describe('<ActiveLink />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ActiveLink href="/link">
        <a>link</a>
      </ActiveLink>
    );

    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
