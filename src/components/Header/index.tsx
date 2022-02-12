import Link from 'next/link';
import { useRouter } from 'next/router';

import SignInButton from 'components/SignInButton';

import * as S from './styles';

const Header = () => {
  const { asPath } = useRouter();
  return (
    <S.Wrapper>
      <S.Content>
        <S.Image src="/images/logo.svg" alt="ig.news" />
        <S.Nav>
          <Link href="/" passHref>
            <S.Link isActive={asPath === '/'}>Home</S.Link>
          </Link>
          <Link href="/posts" passHref>
            <S.Link isActive={asPath === '/posts'}>Posts</S.Link>
          </Link>
        </S.Nav>

        <SignInButton />
      </S.Content>
    </S.Wrapper>
  );
};

export default Header;
