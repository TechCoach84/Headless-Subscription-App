import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import StickyHeader from '.';

const meta = {
  title: 'organisms/stickyHeader',
  component: StickyHeader,
} satisfies Meta<typeof StickyHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subHeaderArray: [
      {
        productName: 'Phone A',
        rentingPrice: 20,
      },
      {
        productName: 'iPhone 12',
        rentingPrice: 24,
      },
      {
        productName: 'Phone B',
        rentingPrice: 28,
      },
    ],
  },
};
