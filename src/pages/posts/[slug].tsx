/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';
import { RichText } from 'prismic-dom';
import { ParsedUrlQuery } from 'querystring';

import Post, { PostProps } from 'templates/Post';
import { getPrismicClient } from 'services/prismic';

type Params = {
  slug: string;
} & ParsedUrlQuery;

export default function PostPage(props: PostProps) {
  return <Post {...props} />;
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params
}) => {
  const session = await getSession({ req });

  if (!session.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }
  const paramsWithUrl = params as Params;
  const { slug } = paramsWithUrl;
  const prismic = getPrismicClient(req);
  const response = await prismic.getByUID<any>('post', String(slug), {});
  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date!).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }
    )
  };

  return {
    props: {
      post
    }
  };
};
