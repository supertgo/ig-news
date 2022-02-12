import Head from 'next/head';
import Base from 'templates/Base';
import * as S from './styles';

export type PostProps = {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
};

const Post = ({ post }: PostProps) => (
  <>
    <Head>
      <title>{post.title} | Ignews</title>
    </Head>
    <Base>
      <S.Wrapper>
        <S.Article>
          <S.Title>{post.title}</S.Title>
          <S.Time>{post.updatedAt}</S.Time>
          <S.Content dangerouslySetInnerHTML={{ __html: post.content }} />
        </S.Article>
      </S.Wrapper>
    </Base>
  </>
);

export default Post;
