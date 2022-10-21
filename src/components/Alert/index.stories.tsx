import React from 'react';
import { Meta, StoryObj } from "@storybook/react";
import Alert from ".";
import { AlertProps } from './Alert';

export default {
  title: "Components/Alert",
  component: Alert.Root,
  args: {
    size: "sm",
    children: [
      <Alert.Message>My Message</Alert.Message>
    ],
    type: "success",
    align: 'left'
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      description: "Define o tamanho do alerta",
      control: {
        type: "inline-radio",
      },
    },
    align: {
      options: ["left", "center", "right"],
      control: {
        type: "inline-radio",
      },
    },
    type: {
      options: ["success", "warning", "danger", "info"],
      description: "Define a severidade do alerta",
      control: {
        type: "inline-radio",
      },
    },
    children: {
      table: {
        disable: true
      }
    }
  },
} as Meta<AlertProps>;

export const Default: StoryObj<AlertProps> = {};

export const AlertIcon: StoryObj<AlertProps> = {
  args: {
    icon: true,
    type: "success",
    size: "sm"
  }
};

export const AlertTitle: StoryObj<AlertProps> = {
  args: {
    icon: false,
    type: "success",
    size: "sm",
    children: [
      <Alert.Title>Title</Alert.Title>,
      <Alert.Message>My Message</Alert.Message>
    ]
  }
};

export const AlertTitleIcon: StoryObj<AlertProps> = {
  args: {
    icon: true,
    type: "success",
    size: "sm",
    children: [
      <Alert.Title>Title</Alert.Title>,
      <Alert.Message>My Message</Alert.Message>
    ]
  }
};

export const AlertRight: StoryObj<AlertProps> = {
  args: {
    icon: true,
    type: "success",
    size: "sm",
    children: [
      <Alert.Title>Title</Alert.Title>,
      <Alert.Message>My Message</Alert.Message>
    ]
  }
};
