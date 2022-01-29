import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import * as S from './styles';

export type SignInButtonProps = {
  isUserLoggedIn: boolean;
};

const SignInButton = ({ isUserLoggedIn }: SignInButtonProps) => {
  return isUserLoggedIn ? (
    <S.Wrapper>
      <FaGithub aria-label="login-to-github" color="#04d361" />
      Supertgo
      <FiX aria-label="logout" color="#737380" className="closeIcon" />
    </S.Wrapper>
  ) : (
    <S.Wrapper>
      <FaGithub aria-label="login-to-github" color="#eba417" />
      Sign in with github
    </S.Wrapper>
  );
};

export default SignInButton;
