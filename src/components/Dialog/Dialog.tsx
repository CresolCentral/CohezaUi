import * as DialogPrimitive from "@radix-ui/react-dialog";
import clsx from "clsx";
import Button from "../Button";
import Heading  from "../Heading";
import  Text  from "../Text";
import { IoClose } from "react-icons/io5";
import { ReactNode } from "react";

export interface DialogProps {
  open: boolean;
  handleClose: () => void;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  title?: string;
  description?: string;
  btnClose?: boolean;
  overlay?: boolean;
  children: ReactNode
}

const Dialog = ({
  open,
  handleClose,
  size = "sm",
  title,
  description,
  btnClose = true,
  overlay = true,
}: DialogProps) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleClose}>
      <DialogPrimitive.Trigger />
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={clsx(" inset-0 fixed z-10", {
          "bg-black/90" : overlay === true
        })}>
          <DialogPrimitive.Content
            className={clsx(
              "fixed bg-default-800 py-6 px-8 w-full rounded-md shadow-lg shadow-black/25  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "max-w-sm": size === "xs",
                "max-w-lg": size === "sm",
                "max-w-2xl": size === "md",
                "max-w-4xl": size === "lg",
                "max-w-6xl": size === "xl",
              }
            )}
          >
            <DialogPrimitive.Title className="text-default-100 flex flex-col">
              <Heading size="sm">{title}</Heading>
              <Text size="sm">{description}</Text>
              <footer className="flex justify-end">
                {btnClose && (
                  <Button onClick={handleClose} size="sm" leftIcon={<IoClose />}>
                    Sair
                  </Button>
                )}
              </footer>
            </DialogPrimitive.Title>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default Dialog;
