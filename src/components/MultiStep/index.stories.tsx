import { Meta, StoryObj } from "@storybook/react";
import MultiStep, { MultiStepProps } from './MultiStep';

export default {
  title: "Components/Multi Step",
  component: MultiStep,
  args: {
    size: 4,
    currentStep: 1
  },
  argTypes: {},
} as Meta<MultiStepProps>;

export const Default: StoryObj<MultiStepProps> = {};

export const StepFull: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4
  }
};