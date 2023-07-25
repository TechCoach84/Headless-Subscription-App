import React from 'react';
import type {Meta, StoryObj} from '@storybook/react';
import FlexIntro from '.';

const meta = {
  title: 'organisms/flexIntro',
  component: FlexIntro,
} satisfies Meta<typeof FlexIntro>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
