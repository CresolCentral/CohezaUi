import { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxProps } from ".";
import { Text } from "../Text";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  args: {
    size: 'sm'
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg"],
      description: "Define o tamanho do botao",
      control: {
        type: "inline-radio",
      },
    },
  },
} as Meta<CheckboxProps>;

export const Default: StoryObj<CheckboxProps> = {};

export const Checkwithlabel: StoryObj<CheckboxProps> = {
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text>My checkbox text</Text>
        </div>
      )
    }
  ]
};

