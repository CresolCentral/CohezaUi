import React from 'react'
import { Meta, StoryObj } from "@storybook/react";
import TextField from ".";
import { FaUserAlt } from "react-icons/fa";
import { InputRootProps } from "./TextField";

export default {
  title: "Components/Input",
  component: TextField.Root,
  args: {
    children: [
      <TextField.Icon>
        <FaUserAlt />
      </TextField.Icon>,
      <TextField.Text placeholder="Placeholder input" />,
    ],
    size: "md"
  },
  argTypes: {
    children: {
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
} as Meta<InputRootProps>;

export const Default: StoryObj<InputRootProps> = {};

export const WithoutIcon: StoryObj<InputRootProps> = {
  args: {
    children: [
      <TextField.Text placeholder="Placeholder input" />,
    ],
    size: "md"
  },
};

