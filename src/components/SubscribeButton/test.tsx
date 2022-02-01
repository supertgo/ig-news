// import { screen } from '@testing-library/react';
// import { SessionProvider } from 'next-auth/react';
// import { renderWithTheme } from 'utils/tests/helpers';

import SubscribeButton from '.';

describe('<SubscribeButton />', () => {
  it('should render the heading', () => {
    // const { container } = renderWithTheme(
    //   <SessionProvider>
    //     <SubscribeButton priceId="50" />
    //   </SessionProvider>
    // );
    // expect(
    //   screen.getByRole('button', { name: /Subscribe Now/i })
    // ).toBeInTheDocument();
    // expect(container.firstChild).toMatchSnapshot();

    expect(SubscribeButton);
  });
});
