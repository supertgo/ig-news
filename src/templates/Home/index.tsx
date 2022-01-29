import Header from 'components/Header';
import Head from 'next/head';

import * as S from './styles';

const Home = () => (
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
          <S.Span>for $9.90 month</S.Span>
        </S.Content>
      </S.Section>
      <S.Image src="/images/avatar.svg" alt="Girl coding" />
    </S.Wrapper>
  </>
);

export default Home;
