import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Span, { SpanProps } from "./Span";

export default {
  title: "Components/Span",
  component: Span,
  args: {
    children: 'Label',
    size: 'xs',
    type: 'success',
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      description: "Define o tamanho do span",
      control: {
        type: "inline-radio",
      },
    },
    type: {
      options: ["success", "warning", "info", "danger", 'default'],
      description: "Define o tamanho do span",
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<SpanProps>;

export const Default: StoryObj<SpanProps> = {};

export const SpanWithIcon: StoryObj<SpanProps> = {
  args: {
    icon: true,
  }
};
