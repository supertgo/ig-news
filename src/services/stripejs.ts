/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { loadStripe } from '@stripe/stripe-js';

export async function getStripeJs() {
  const stripeJs = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY!);

  return stripeJs;
}
