import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import Footer from '.';

const meta = {
  title: 'organisms/footer',
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footerLinks: [
      {
        name: 'About Us',
        link: 'https://www.gazelle.com/our_story',
      },
      {
        name: 'Contact Us',
        link: 'https://www.gazelle.com/help/contact_us',
      },
      {
        name: 'FAQ',
        link: 'https://www.gazelle.com/help/faq/buy',
      },
    ],
  },
};
