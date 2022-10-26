import clsx from "clsx";
import { toast as toastPrimitive } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { ReactNode } from "react";

export interface ToastProps {
  type: "success" | "warning" | "danger" | "info" | "default";
}

export const toast = ({ type }: ToastProps) => {
  return (
    <>
      {toastPrimitive.custom((t) => (
        <div
          className={clsx(
            "flex flex-row items-center justify-between w-96 bg-gray-900 px-4 py-6 shadow-2xl hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded-xl relative transition-all duration-500 ease-in-out",
            {
              "top-0": t.visible === true,
              "-top-96": t.visible === false,

              "bg-success-background text-success-color": type === "success",
              "bg-warning-background text-warning-color": type === "warning",
              "bg-danger-background text-danger-color": type === "danger",
              "bg-info-background text-info-color": type === "info",
              "bg-default-background text-defaultsuccess-color":
                type === "default",
            }
          )}
        >
          teste1
        </div>
      ))}
    </>
  );
};

interface ToastProviderProps {
  children: ReactNode
}

const ToastProvider = ({children}: ToastProviderProps) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  )
}

export default ToastProvider;