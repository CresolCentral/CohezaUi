import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from ".";
import { FaPlus } from "react-icons/fa";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    size: "sm",
    children: "Button",
    fullWidth: true,
    color: 'primary'
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
    leftIcon: {
      table: {
        disable: true,
      },
    },
    rightIcon: {
      table: {
        disable: true,
      },
    },
    size: {
      options: ["xs", "sm", "md", "lg"],
      description: "Define o tamanho do botao",
      control: {
        type: "inline-radio",
      },
    },
    color: {
      options: ["primary", "secondary", "default"],
      description: "Define a cor de fundo do botão",
      control: {
        type: "inline-radio",
      },
    },
    fullWidth: {
      description: "Define um tamanho de 100% para o botão",
    },
    variant: {
      description: "Define a variação do botao.",
    }
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const ButtonLeftIcon: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Button",
    leftIcon: <FaPlus />,
  },
};

export const ButtonRightIcon: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Button",
    rightIcon: <FaPlus />,
  },
};