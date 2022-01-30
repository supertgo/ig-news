import Header from 'components/Header';
import SubscribeButton from 'components/SubscribeButton';
import Head from 'next/head';

import * as S from './styles';

export type HomeProps = {
  product: {
    price_id: string;
    amount: number;
  };
};

const Home = ({ product }: HomeProps) => (
  <>
    <Head>
      <title>Inicio | ig.news</title>
    </Head>
    <Header />
    <S.Wrapper>
      <S.Section>
        <S.Text>👏 Hey, welcome</S.Text>
        <S.Title>
          News about the <S.Span>React</S.Span> world.
        </S.Title>
        <S.Content>
          Get access to all the publications <br />
          <S.Span>for {product.amount} month</S.Span>
        </S.Content>

        <SubscribeButton priceId={product.price_id} />
      </S.Section>
      <S.Image src="/images/avatar.svg" alt="Girl coding" />
    </S.Wrapper>
  </>
);

export default Home;
