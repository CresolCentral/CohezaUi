import { useArgs } from "@storybook/client-api";
import { Meta, StoryObj, Story } from "@storybook/react";
import { DialogProps, Dialog } from ".";
import { Button } from "../Button";

export default {
  title: "Overlay/Dialog",
  component: Dialog,
  args: {
    open: false,
    title: "Dialog",
    description: "Dialog description",
    handleClose: (): void => {},
    size: 'md'
  },
  argTypes: {
    open: { control: "boolean" },
  },
} as Meta<DialogProps>;

export const Default: Story<DialogProps> = (args) => {
  const [, updateArgs] = useArgs();


  return (
    <>
      <Button onClick={() => updateArgs({ open: true })}>Open Modal</Button>
      <Dialog {...args}  handleClose={() => updateArgs({ open: false})} />
    </>
  );
};
