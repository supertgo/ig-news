import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
const post = {
  slug: 'monorepo-slug',
  title: 'Creating a Monorepo with Lerna & Yarn Workspaces',
  excerpt:
    'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.',
  updatedAt: '12 de março de 2021'
};

import Posts from '.';

describe('<Posts />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Posts posts={[post]} />);

    expect(screen.getByText('12 de março de 2021')).toBeInTheDocument();
    expect(
      screen.getByText('Creating a Monorepo with Lerna & Yarn Workspaces')
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.'
      )
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
