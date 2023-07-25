import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TheDetail from '.';
import chargeImage from '../../../@images/charge.png';
import handImage from '../../../@images/hand.png';
import upgradeImage from '../../../@images/upgrade.svg';
import refurbishedImage from '../../../@images/refurbished.svg';
import depositImage from '../../../@images/deposit.svg';

const meta = {
  title: 'organisms/theDetail',
  component: TheDetail,
} satisfies Meta<typeof TheDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    details: [
      {
        text: 'Charging cable included',
        icon: chargeImage,
        showTooltip: false,
      },
      {
        text: '12-month subscription agreement.',
        icon: handImage,
        showTooltip: false,
      },
      {
        text: 'Eligible to upgrade after 6 months.',
        icon: upgradeImage,
        showTooltip: true,
      },
      {
        text: 'All certified refurbished devices are in Good condition.',
        icon: refurbishedImage,
        showTooltip: true,
      },
      {
        text: '$49.99 deposit, refundable upon device return.',
        icon: depositImage,
        showTooltip: false,
      },
    ],
  },
};
