import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import FooterPopularSearches from '.';

const meta = {
  title: 'organisms/footerPopularSearches',
  component: FooterPopularSearches,
} satisfies Meta<typeof FooterPopularSearches>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    footerPopularSearches: [
      {
        name: 'Popular Search 1',
        link: 'https://www.gazelle.com/our_story',
      },
      {
        name: 'Popular Search 2',
        link: 'https://www.gazelle.com/help/contact_us',
      },
      {
        name: 'Popular Search 3',
        link: '#',
      },
    ],
  },
};
