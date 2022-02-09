import Head from 'next/head';
import * as S from './styles';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

export type PostsProps = {
  posts: Post[];
};

const Posts = ({ posts }: PostsProps) => {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>
      <S.Wrapper>
        <S.Content>
          {posts.map(({ updatedAt, title, excerpt, slug }) => (
            <S.Link key={slug}>
              <S.Time>{updatedAt}</S.Time>
              <S.Title>{title}</S.Title>
              <S.Text>{excerpt}</S.Text>
            </S.Link>
          ))}
        </S.Content>
      </S.Wrapper>
    </>
  );
};

export default Posts;
