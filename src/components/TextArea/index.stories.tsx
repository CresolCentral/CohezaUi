import React from 'react';
import { Meta, StoryObj } from '@storybook/react'
import TextArea from ".";
import { TextAreaProps } from './TextArea';
import { FaUserAlt } from "react-icons/fa";

export default {
  title: 'Form/TextArea',
  component: TextArea,
  args: {},
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    icon: {
      table: {
        disable: true,
      },
    },
  }
} as Meta<TextAreaProps>


export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'My text area placeholder',
  }
}


export const WithIcon: StoryObj<TextAreaProps> = {
  args: {
    icon: <FaUserAlt />,
    placeholder: 'My text area placeholder',
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'My text area placeholder',
    disabled: true
  }
}
