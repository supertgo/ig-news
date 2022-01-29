import * as S from './styles';

const Header = () => (
  <S.Wrapper>
    <S.Content>
      <S.Image src="/images/logo.svg" alt="ig.news" />
      <S.Nav>
        <S.Link isActive={true}>Home</S.Link>
        <S.Link>Posts</S.Link>
      </S.Nav>
    </S.Content>
  </S.Wrapper>
);

export default Header;
