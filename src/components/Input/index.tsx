import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputRootProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

function InputRoot({ children, size='md' }: InputRootProps) {
  return (
    <div className={clsx("flex items-center py-2 px-3 gap-3 rounded bg-gray-800 focus-within:ring-2 ring-green-900", {
      "h-9 text-sm": size === "sm",
      "h-10": size === "md",
      "h-12": size === "lg"
    })}>
      {children}
    </div>
  );
}

InputRoot.displayName = "Input.Root";


export interface InputIconProps {
  children: ReactNode
} 

function InputIcon({ children }: InputIconProps) {
  return (
    <Slot className="w-3 h-3 text-gray-400">
      {children}
    </Slot>
  )
}

InputIcon.displayName = "Input.Icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput({ ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      )}
      {...props}
    />
  );
}

InputInput.displayName = "Input";

export const TextInput = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon
};
