import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import Text from ".";
import { TextProps } from './Text';

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<TextProps>


export const Default: StoryObj<TextProps> = {}
