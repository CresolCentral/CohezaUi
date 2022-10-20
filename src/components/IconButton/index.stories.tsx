import { Meta, StoryObj } from "@storybook/react";
import { IconButton, IconButtonProps } from ".";
import { FaPlus } from "react-icons/fa";

export default {
  title: "Components/ButtonIcon",
  component: IconButton,
  args: {
    children: <FaPlus />,
    asChild: false,
    size: 'sm',
    color: 'primary',
    variant: 'solid'
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  },
} as Meta<IconButtonProps>;

export const Default: StoryObj<IconButtonProps> = {};