import { Story, Meta } from '@storybook/react';
import SignInButton, { SignInButtonProps } from '.';

export default {
  title: 'SignInButton',
  component: SignInButton
} as Meta;

export const Default: Story<SignInButtonProps> = (args) => (
  <SignInButton {...args} />
);

Default.args = {
  isUserLoggedIn: false
};
