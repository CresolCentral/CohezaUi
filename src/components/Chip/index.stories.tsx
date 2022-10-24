import React from 'react'
import { Meta, StoryObj } from '@storybook/react'
import Chip from ".";
import { ChipProps } from './Chip';
import { FaArchive, FaExclamationCircle } from 'react-icons/fa'

export default {
  title: 'Components/Chip',
  component: Chip,
  args: {
    label: 'My Chip',
    size: 'sm',
    color: 'primary'
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: 'inline-radio'
      }
    },
    color: {
      options: ["primary", "secondary", "default"],
      control: {
        type: 'inline-radio'
      }
    },
  }
} as Meta<ChipProps>


export const Default: StoryObj<ChipProps> = {}

export const ChipWithIcon: StoryObj<ChipProps> = {
  args: {
    icon: <FaArchive />
  }
}

export const ChipDelete: StoryObj<ChipProps> = {
  args: {
    onDelete: () => alert('delete')
  },
  argTypes: {
    onDelete: {
      table: {
        disable: true
      }
    }
  }
}

export const ChipCustomIconDelete: StoryObj<ChipProps> = {
  args: {
    onDelete: () => alert('delete'),
    iconDelete: <FaExclamationCircle />
  },
  argTypes: {
    iconDelete: {
      table: {
        disable: true
      }
    },
    onDelete: {
      table: {
        disable: true
      }
    }
  }
}