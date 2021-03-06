import Head from 'next/head';
import Link from 'next/link';
import Base from 'templates/Base';

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
      <Base>
        <S.Wrapper>
          <S.Content>
            {posts.map(({ updatedAt, title, excerpt, slug }) => (
              <Link key={slug} href={`/posts/${slug}`} passHref>
                <S.Link>
                  <S.Time>{updatedAt}</S.Time>
                  <S.Title>{title}</S.Title>
                  <S.Text>{excerpt}</S.Text>
                </S.Link>
              </Link>
            ))}
          </S.Content>
        </S.Wrapper>
      </Base>
    </>
  );
};

export default Posts;
