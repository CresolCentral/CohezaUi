import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "../Button";
import ButtonGroup from ".";
import { ButtonGroupProps } from "./ButtonGroup";
import { FaAdjust, FaAmbulance, FaAvianex } from 'react-icons/fa'

export default {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  args: {
    children: [
      <Button>Btn 01</Button>,
      <Button>Btn 02</Button>,
      <Button>Btn 03</Button>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
} as Meta<ButtonGroupProps>;

export const Default: StoryObj<ButtonGroupProps> = {};

export const ButtonGroupSm: StoryObj<ButtonGroupProps> = {
  args: {
    children: [
      <Button size="sm">Btn 01</Button>,
      <Button size="sm">Btn 02</Button>,
      <Button size="sm">Btn 03</Button>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
};

export const ButtonGroupLg: StoryObj<ButtonGroupProps> = {
  args: {
    children: [
      <Button size="lg">Btn 01</Button>,
      <Button size="lg">Btn 02</Button>,
      <Button size="lg">Btn 03</Button>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
};

export const ButtonGroupStyles: StoryObj<ButtonGroupProps> = {
  args: {
    children: [
      <Button size="md" leftIcon={<FaAdjust />} variant="border" color="secondary">Btn 01</Button>,
      <Button size="md" leftIcon={<FaAmbulance />} variant="border" color="secondary">Btn 02</Button>,
      <Button size="md" leftIcon={<FaAvianex />} variant="border" color="secondary">Btn 03</Button>
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  },
};
