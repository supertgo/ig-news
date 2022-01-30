import * as S from './styles';

export type SubscribeButton = {
  priceId: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubscribeButton = ({ priceId }: SubscribeButton) => (
  <S.Wrapper>Subscribe Now</S.Wrapper>
);

export default SubscribeButton;
