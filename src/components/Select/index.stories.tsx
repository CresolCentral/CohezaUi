import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Select from ".";
import SelectItem from "../SelectItem";
import { SelectProps } from './Select';

export default {
  title: 'Form/Select',
  component: Select,
  args: {
    children: [
      <SelectItem value='1'>Value 1</SelectItem>,
      <SelectItem value='2'>Value 2</SelectItem>,
      <SelectItem value='3'>Value 3</SelectItem>,
      <SelectItem value='4'>Value 4</SelectItem>
    ],
    placeholder: 'Selecione um Item',
    size: 'sm'
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      description: "Defina o tamanho do select",
      control: {
        type: "inline-radio",
      },
    },
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<SelectProps>


export const Default: StoryObj<SelectProps> = {}
