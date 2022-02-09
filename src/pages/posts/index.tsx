/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getPrismicClient } from 'services/prismic';
import Posts from 'templates/Posts';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';

import { PostsProps } from 'templates/Posts';

export default function PostsPage(props: PostsProps) {
  return <Posts {...props} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query<any>(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100
    }
  );

  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt:
        post.data.content.find(
          (content: { type: string }) => content.type === 'paragraph'
        )?.text ?? '',
      updatedAt: new Date(post.last_publication_date!).toLocaleDateString(
        'pt-BR',
        {
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }
      )
    };
  });

  return {
    props: {
      posts
    }
  };
};
