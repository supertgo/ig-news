import { signIn, useSession } from 'next-auth/react';
import { api } from 'services/api';
import { getStripeJs } from 'services/stripejs';

import * as S from './styles';

export type SubscribeButton = {
  priceId: string;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SubscribeButton = ({ priceId }: SubscribeButton) => {
  const { data } = useSession();

  async function handleSubscribe() {
    if (!data) {
      signIn('github');

      return;
    }

    try {
      const response = await api.post('/subscribe');
      const { sessionId } = response.data;
      const stripe = await getStripeJs();

      await stripe?.redirectToCheckout({ sessionId });
    } catch (err) {
      alert(err);
    }
  }

  return <S.Wrapper onClick={handleSubscribe}>Subscribe Now</S.Wrapper>;
};

export default SubscribeButton;
