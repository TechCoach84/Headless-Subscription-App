import type { Meta, StoryObj } from '@storybook/react';
import image from '../../@images/intro-image.svg';
import paymentImage from '../../@images/intro-payment.svg';
import eligibleImage from '../../@images/intro-calendar.svg';
import refurbishedImage from '../../@images/intro-phone.svg';
import Intro from './Intro';

const meta: Meta<typeof Intro> = {
  title: 'Components/Intro',
  component: Intro,
};

export default meta;
type MainStory = StoryObj<typeof Intro>;

export const IntroStory: MainStory = {
  args: {
    onSubscribeNow: () => {},
    image: image,
    paymentImage: paymentImage,
    eligibleImage: eligibleImage,
    refurbishedImage: refurbishedImage,
  },
};
