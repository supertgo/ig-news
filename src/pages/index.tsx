import { GetStaticProps } from 'next';
import { stripe } from 'services/stripe';

import Home, { HomeProps } from 'templates/Home';

type IndexProps = HomeProps;

export default function Index({ product }: IndexProps) {
  return <Home product={product} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1KNaQpA1vHNR8u3TD9vYQcUU');

  const product = {
    priceId: price.id,

    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    }).format(price.unit_amount! / 100)
  };

  return {
    props: { product },
    revalidate: 60 * 60 * 24 //24 hours
  };
};
