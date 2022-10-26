import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Box, { BoxProps } from "./Box";
import Text from "../Text";

export default {
  title: "Components/Box",
  component: Box,
  args: {
    children: (<Text>Texto</Text>)
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
} as Meta<BoxProps>;

export const Default: StoryObj<BoxProps> = {};