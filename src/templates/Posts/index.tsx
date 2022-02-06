import Head from 'next/head';
import * as S from './styles';

const Posts = () => (
  <>
    <Head>
      <title>Posts | Ignews</title>
    </Head>
    <S.Wrapper>
      <S.Content>
        <S.Link>
          <S.Time>12 de março de 2021</S.Time>
          <S.Title>Creating a Monorepo with Lerna & Yarn Workspaces</S.Title>
          <S.Text>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </S.Text>
        </S.Link>

        {/* <S.Link>
          <S.Time>12 de março de 2021</S.Time>
          <S.Title>Creating a Monorepo with Lerna & Yarn Workspaces</S.Title>
          <S.Text>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </S.Text>
        </S.Link>

        <S.Link>
          <S.Time>12 de março de 2021</S.Time>
          <S.Title>Creating a Monorepo with Lerna & Yarn Workspaces</S.Title>
          <S.Text>
            In this guide, you will learn how to create a Monorepo to manage
            multiple packages with a shared build, test, and release process.
          </S.Text>
        </S.Link> */}
      </S.Content>
    </S.Wrapper>
  </>
);

export default Posts;
