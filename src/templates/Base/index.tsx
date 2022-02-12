import Header from 'components/Header';

import * as S from './styles';

export type BaseProps = {
  children: React.ReactNode;
};

const Base = ({ children }: BaseProps) => (
  <S.Wrapper>
    <Header />
    {children}
  </S.Wrapper>
);

export default Base;
