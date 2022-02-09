import SignInButton from 'components/SignInButton';
import Link from 'next/link';
import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <S.Content>
      <S.Image src="/images/logo.svg" alt="ig.news" />
      <S.Nav>
        <Link href="/" passHref>
          <S.Link isActive={true}>Home</S.Link>
        </Link>
        <Link href="/posts" passHref>
          <S.Link>Posts</S.Link>
        </Link>
      </S.Nav>

      <SignInButton />
    </S.Content>
  </S.Wrapper>
);

export default Header;
