import React from 'react'
import { Meta, StoryObj } from "@storybook/react"
import AlertDialog, { AlertDialogProps } from './AlertDialog';

export default {
  title: "Overlay/AlertDialog",
  component: AlertDialog,
  args: {
    title: 'Salvar Item',
    message: 'Deseja realmente salvar esse item?',
  },
  argTypes: {},
} as Meta<AlertDialogProps>;

export const Default: StoryObj<AlertDialogProps> = {
  args: {
    type: 'default'
  }
};

export const Success: StoryObj<AlertDialogProps> = {
  args: {
    type: 'success'
  }
};

export const Warning: StoryObj<AlertDialogProps> = {
  args: {
    type: 'warning'
  }
};

export const Danger: StoryObj<AlertDialogProps> = {
  args: {
    type: 'danger'
  }
};

export const Info: StoryObj<AlertDialogProps> = {
  args: {
    type: 'info'
  }
};
