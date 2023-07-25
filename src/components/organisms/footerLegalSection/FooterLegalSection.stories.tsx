import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import FooterLegalSection from '.';

const meta = {
  title: 'organisms/footerLegalSection',
  component: FooterLegalSection,
} satisfies Meta<typeof FooterLegalSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    copyrightMessage: 'This is a sample message',
  },
};
