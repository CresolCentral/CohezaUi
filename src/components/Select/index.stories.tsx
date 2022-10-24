import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Select from ".";
import { SelectProps } from './Select';

export default {
  title: 'Components/Select',
  component: Select,
  args: {},
  argTypes: {}
} as Meta<SelectProps>


export const Default: StoryObj<SelectProps> = {}

export const SelectMultiple: StoryObj<SelectProps> = {
  args: {
    multiple: true
  }
}
