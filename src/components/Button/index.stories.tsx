import React from 'react'
import { Meta, StoryObj } from "@storybook/react"
import  Button from ".";
import { FaPlus } from "react-icons/fa";
import { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    size: "sm",
    children: "Button",
    variant: 'solid',
    fullWidth: true,
    color: 'primary',
    disabled: false,
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
      options: ["xxs", "xs", "sm", "md", "lg", "xl"],
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

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
};

export const ButtonLeftIcon: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Button",
    leftIcon: <FaPlus />,
    disabled: false,
  },
};

export const ButtonRightIcon: StoryObj<ButtonProps> = {
  args: {
    size: "sm",
    children: "Button",
    rightIcon: <FaPlus />,
    disabled: false,
  },
};
