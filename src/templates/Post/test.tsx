import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';

import Post from '.';

const post = {
  slug: '/posts/visoes-inovadoras-do-codigo-livre-e-do-open-source',
  title:
    'Visões inovadoras do código livre e do open source no desenvolvimento da',
  content:
    'Iniciativas de código aberto e softwares livres foram responsáveis em moldar o principal meio de comunicação moderno',
  updatedAt: '06 de fevereiro de 2022'
};

jest.mock('components/Header', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Header"></div>;
    }
  };
});

describe('<Post />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Post post={post} />);

    expect(
      screen.getByRole('heading', { name: post.title })
    ).toBeInTheDocument();

    expect(screen.getByText(post.content)).toBeInTheDocument();

    expect(screen.getByText(post.updatedAt)).toBeInTheDocument();
    expect(screen.getByTestId('Mock Header')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
