import { Meta, StoryObj } from "@storybook/react";
import { Select, SelectProps } from ".";

export default {
  title: "Components/Select",
  component: Select,
  args: {
    size: 'sm',
    placeholder: 'Search',
    fullWidth: true,
    multiple: true,
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<SelectProps>;

export const Default: StoryObj<SelectProps> = {};

