import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import SubscribeButton from '.';

describe('<SubscribeButton />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<SubscribeButton />);

    expect(
      screen.getByRole('button', { name: /Subscribe Now/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
