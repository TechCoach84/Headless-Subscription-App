import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import HowItWorksSection from '.';

const meta = {
  title: 'organisms/howItWorksSection',
  component: HowItWorksSection,
} satisfies Meta<typeof HowItWorksSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    howItWorks: [
      {
        step: 1,
        title: 'Step 1',
        description: 'This is a sample description of step 1',
      },
      {
        step: 2,
        title: 'Step 2',
        description: 'This is a sample description of step 2',
      },
    ],
  },
};