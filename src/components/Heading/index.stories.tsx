
import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from ".";

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Lorem ipsum.',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: 'inline-radio'
      }
    },
    asChild: {
      table: {
        disable: true
      }
    }
  }
} as Meta<HeadingProps>


export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Medium: StoryObj<HeadingProps> = {}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}