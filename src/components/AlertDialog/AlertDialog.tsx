import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ReactNode } from "react";
import Button from "../Button";
import Heading from "../Heading";
import Text from "../Text";
import { FaCheckCircle, FaExclamationCircle, FaTimesCircle, FaInfoCircle, FaQuestionCircle, FaCheck, FaTimes } from 'react-icons/fa'
import clsx from "clsx";

export interface AlertDialogProps {
  open: boolean;
  handleClose: () => void;
  onConfirm: () => void;
  onCancel: () => void;
  children: ReactNode;
  title: string;
  message: string;
  type: 'success' | 'warning' | 'danger' | 'info' | 'default';
}

const AlertDialog = ({open, handleClose, onConfirm, onCancel, children, title, message, type}: AlertDialogProps) => {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleClose}>
      <DialogPrimitive.Trigger />
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="inset-0 fixed z-10 bg-black/90">
          <DialogPrimitive.Content
            className="flex items-center justify-center h-full text-default-100 rounded"
          >
              <div className="bg-default-900 max-w-md w-full flex">
                <div className={clsx("flex w-full  max-w-[75px] items-center justify-center", {
                  "bg-success-background text-success-color": type === 'success',
                  "bg-warning-background text-warning-color": type === 'warning',
                  "bg-danger-background text-danger-color": type === 'danger',
                  "bg-info-background text-info-color": type === 'info',
                  "bg-default-background text-default-color": type === 'default' 
                })}>
                  {type === 'success' && <FaCheckCircle className="w-12 h-12" />}
                  {type === 'warning' && <FaExclamationCircle className="w-12 h-12" />}
                  {type === 'danger' && <FaTimesCircle className="w-12 h-12" />}
                  {type === 'info' && <FaInfoCircle className="w-12 h-12" />}
                  {type === 'default' && <FaQuestionCircle className="w-12 h-12" />}
                </div>
                <div className="flex flex-col py-6 px-6 w-full gap-6">
                  <div className="flex gap-1 flex-col">
                    <Heading size="sm">{title}</Heading>
                    <Text size="xs">{message}</Text>
                  </div>
                  <footer className="flex flex-row mt-4 justify-end gap-2">
                    <Button onChange={onCancel} leftIcon={<FaTimes />} color="secondary" size="sm">Cancelar</Button>
                    <Button onChange={onConfirm} leftIcon={<FaCheck />} color="primary" size="sm">Confirmar</Button>
                  </footer>
                </div>
              </div>
              <footer className="flex justify-end">
                
              </footer>
          </DialogPrimitive.Content>
        </DialogPrimitive.Overlay>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}

export default AlertDialog