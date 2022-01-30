import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { signIn, signOut, useSession } from 'next-auth/react';

import * as S from './styles';

const SignInButton = () => {
  const { data: session } = useSession();

  return session ? (
    <S.Wrapper onClick={() => signOut()}>
      <FaGithub aria-label="login-to-github" color="#04d361" />
      {session?.user?.name}
      <FiX aria-label="logout" color="#737380" className="closeIcon" />
    </S.Wrapper>
  ) : (
    <S.Wrapper onClick={() => signIn('github')}>
      <FaGithub aria-label="login-to-github" color="#eba417" />
      Sign in with github
    </S.Wrapper>
  );
};

export default SignInButton;
