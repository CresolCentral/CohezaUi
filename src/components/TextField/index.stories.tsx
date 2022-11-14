import React from 'react'
import { Meta, StoryObj } from "@storybook/react";
import TextField from ".";
import { FaUserAlt } from "react-icons/fa";
import { TextFieldProps } from './TextField';

export default {
  title: "Form/TextField",
  component: TextField,
  args: {
    size: "md",
    placeholder: 'My input placeholder'
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<TextFieldProps>;

export const Default: StoryObj<TextFieldProps> = {};

export const WithLabel: StoryObj<TextFieldProps> = {
  args: {
    label: 'My Label',
    size: "md",
  },
};

export const WithoutIcon: StoryObj<TextFieldProps> = {
  args: {
    size: "md",
    icon: <FaUserAlt />
  },
};


export const Disabled: StoryObj<TextFieldProps> = {
  args: {
    disabled: true
  },
};

export const Error: StoryObj<TextFieldProps> = {
  args: {
    helperText: 'Campo Obrigatório',
    error: true,
  },
};


