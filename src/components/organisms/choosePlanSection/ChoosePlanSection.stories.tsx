import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import ChoosePlanSection from '.';

function handleClickMock() {
  alert('Added subscription to cart');
}
const meta = {
  title: 'organisms/choosePlanSection',
  component: ChoosePlanSection,
} satisfies Meta<typeof ChoosePlanSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    flexProducts: [
      {
        productName: 'iPhone 11',
        rentingPrice: 20.99,
        carrier: 'Unlocked',
        storageSpace: '64',
        productQuality: 'Good',
        src: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500-13-Macbook-Air-2015_a7555806-1458-4bb1-9a99-4445baa4b2b5_1024x.jpg?v=1677528674',
      },
      {
        productName: 'iPhone 12',
        rentingPrice: 12.99,
        carrier: 'AT&T',
        storageSpace: '128',
        productQuality: 'Excellent',
        src: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500-13-Macbook-Air-2015_a7555806-1458-4bb1-9a99-4445baa4b2b5_1024x.jpg?v=1677528674',
      },
      {
        productName: 'Phone A',
        rentingPrice: 12.99,
        carrier: 'AT&T',
        storageSpace: '128',
        productQuality: 'Excellent',
        src: 'https://cdn.shopify.com/s/files/1/0008/9296/0821/products/500x500-13-Macbook-Air-2015_a7555806-1458-4bb1-9a99-4445baa4b2b5_1024x.jpg?v=1677528674',
      },
    ],
    handleClick: handleClickMock,
    flexProductColors: [
      {
        color: 'Silver',
        hex: '#c0c0c0',
      },
      {
        color: 'Midnight',
        hex: '#000',
      },
      {
        color: 'White',
        hex: '#000',
      },
    ],
  },
};
