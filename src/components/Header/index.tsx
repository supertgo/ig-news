import ActiveLink from 'components/ActiveLink';
import SignInButton from 'components/SignInButton';

import * as S from './styles';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Image src="/images/logo.svg" alt="ig.news" />
        <S.Nav>
          <ActiveLink href="/" passHref>
            <S.Link>Home</S.Link>
          </ActiveLink>
          <ActiveLink href="/posts" passHref>
            <S.Link>Posts</S.Link>
          </ActiveLink>
        </S.Nav>
        <SignInButton />
      </S.Content>
    </S.Wrapper>
  );
};

export default Header;
