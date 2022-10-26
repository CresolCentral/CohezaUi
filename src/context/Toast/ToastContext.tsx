import clsx from "clsx";
import { createContext, useContext, useState } from "react";
import { toast as toastPrimitive, Toaster } from "react-hot-toast";
import {
  FaCheckCircle,
  FaExclamationCircle,
  FaInfoCircle,
  FaQuestionCircle,
  FaTimesCircle,
  FaTimes,
} from "react-icons/fa";

export type AlertColor = "success" | "info" | "warning" | "danger" | "default";
export type Position = 'bottom-left' | 'bottom-center' | 'bottom-right' | 'top-left' |	'top-center' |	'top-right'

export interface ToastProviderProps {
  children: React.ReactNode;
  position?: Position;
  duration?: number;
}

export interface ToastContextData {
  showNotification: (type: AlertColor, message: string, title?: string) => void;
  position?: Position;
  duration?: number;
}

export const ToastContext = createContext<ToastContextData>(
  {} as ToastContextData
);

export const ToastProvider = ({ children, position = "top-center", duration}: ToastProviderProps) => {
  function showNotification(type: AlertColor, message: string, title?: string) {
    toastPrimitive.custom((t) => (
      <div
        className={clsx(
          "flex flex-row gap-2 w-96 bg-gray-900 px-2 py-3 shadow-sm hover:shadow-none transform-gpu translate-y-0 hover:translate-y-1 rounded relative transition-all duration-500 ease-in-out",
          {
            "right-0": t.visible === true && (position === 'bottom-right' || position === 'top-right'),
            "-right-[410px]": t.visible === false  && (position === 'bottom-right' || position === 'top-right'),

            "left-0": t.visible === true && (position === 'bottom-left' || position === 'top-left'),
            "-left-[410px]": t.visible === false  && (position === 'bottom-left' || position === 'top-left'),

            "top-0": t.visible === true && position === 'top-center',
            "-top-[96px]": t.visible === false  && position === 'top-center',

            "bottom-0": t.visible === true && position === 'bottom-center',
            "-bottom-[96px]": t.visible === false  && position === 'bottom-center',

            "bg-success-background text-success-color": type === "success",
            "bg-danger-background text-danger-color": type === "danger",
            "bg-warning-background text-warning-color": type === "warning",
            "bg-info-background text-info-color": type === "info",
            "bg-default-background text-default-color": type === "default",
          }
        )}
      >
        <div className="mt-1 flex">
          {type === "success" && <FaCheckCircle className="w-5 h-5" />}
          {type === "warning" && <FaExclamationCircle className="w-5 h-5" />}
          {type === "danger" && <FaTimesCircle className="w-5 h-5" />}
          {type === "info" && <FaInfoCircle className="w-5 h-5" />}
          {type === "default" && <FaQuestionCircle className="w-5 h-5" />}
        </div>
        <div className="flex justify-between  w-full">
          <div className="flex flex-col">
            {!!title && <span className="text-xs font-bold">{title}</span>}
            <span className="text-xs">{message}</span>
          </div>
          <button
            className="w-3 h-3"
            onClick={() => toastPrimitive.dismiss(t.id)}
            type="button"
          >
            <FaTimes size={12} className="mt-1" />
          </button>
        </div>
      </div>
    ));
  }

  return (
    <ToastContext.Provider value={{ showNotification, position, duration  }}>
      <Toaster position={position} toastOptions={{ duration}} />
      {children}
    </ToastContext.Provider>
  );
};

export default ToastProvider;
