import { Meta, StoryObj } from "@storybook/react";
import { TextInput, InputRootProps } from ".";
import { FaUserAlt } from "react-icons/fa";

export default {
  title: "Components/Input",
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <FaUserAlt />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Placeholder input" />,
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
      <TextInput.Input placeholder="Placeholder input" />,
    ],
    size: "md"
  },
};

