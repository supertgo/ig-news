import { getPrismicClient } from 'services/prismic';
import Posts from 'templates/Posts';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';

export default function PostsPage() {
  return <Posts />;
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'post')],
    {
      fetch: ['post.title', 'post.content'],
      pageSize: 100
    }
  );

  console.log(response);

  return {
    props: {}
  };
};
