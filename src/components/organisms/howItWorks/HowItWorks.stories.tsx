import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import HowItWorksCard from '.';
import {FaShoppingCart} from 'react-icons/fa';

const meta = {
  title: 'organisms/howItWorksCard',
  component: HowItWorksCard,
} satisfies Meta<typeof HowItWorksCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: 1,
    title: 'Choose your plan',
    description:
      'Pick what best fits your style, use and budget. All unlocked for whatever floats you boat',
    icon: FaShoppingCart,
  },
};
