import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import Header from '.';

function chooseIphone13Plan() {
  console.log('Chosen iPhone 13 plan');
}
const meta = {
  title: 'organisms/header',
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    products: [
        {
            category: "test",
            link: '/testing'
        }
    ]
  },
};
