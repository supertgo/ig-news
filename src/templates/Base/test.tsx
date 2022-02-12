import { render, screen } from '@testing-library/react';

import Base from '.';

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

describe('<Base />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <Base>
        <h1>Base</h1>
      </Base>
    );

    expect(screen.getByRole('heading', { name: /Base/i })).toBeInTheDocument();
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
