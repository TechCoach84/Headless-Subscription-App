import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import ChoosePlanCard from '.';

function chooseIphone13Plan() {
  console.log('Chosen iPhone 13 plan');
}
const meta = {
  title: 'organisms/choosePlanCard',
  component: ChoosePlanCard,
} satisfies Meta<typeof ChoosePlanCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {
  args: {
    bgColor: 'bg-black',
    titleContent: 'Latest and greatest',
    src: 'https://images.unsplash.com/photo-1636108840454-8fbe394c7837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    nameOfProduct: 'iPhone 13',
    monthlyCost: 34.99,
    carrier: 'Unlocked',
    storageSpace: '128',
    productQuality: 'Good',
    handleChoosePlan: chooseIphone13Plan,
  },
};
export const PopularCard: Story = {
  args: {
    bgColor: 'bg-flexThemeBlue',
    titleContent: 'Most Popular',
    src: 'https://images.unsplash.com/photo-1636108840454-8fbe394c7837?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    nameOfProduct: 'iPhone 12',
    monthlyCost: 24.99,
    carrier: 'Verizon',
    storageSpace: '64',
    productQuality: 'Excellent',
    handleChoosePlan: chooseIphone13Plan,
  },
};
