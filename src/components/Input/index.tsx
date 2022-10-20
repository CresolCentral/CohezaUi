import { clsx } from "clsx";
import { Slot } from '@radix-ui/react-slot'
import { InputHTMLAttributes, ReactNode } from "react";

export interface InputRootProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

function InputRoot({ children, size='md' }: InputRootProps) {
  return (
    <div className={clsx("flex items-center py-2 px-3 gap-3 rounded bg-gray-800 focus-within:ring-2 ring-primary-900", {
      "h-9 text-sm": size === "sm",
      "h-10": size === "md",
      "h-12": size === "lg"
    })}>
      {children}
    </div>
  );
}

InputRoot.displayName = "TextField.Root";


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

InputIcon.displayName = "TextField.Icon";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput({ ...props }: InputProps) {
  return (
    <input
      className={clsx(
        "bg-transparent flex-1 text-primary-contrast text-xs placeholder:text-gray-400 outline-none"
      )}
      {...props}
    />
  );
}

InputInput.displayName = "TextField.Text";

export const TextField = {
  Root: InputRoot,
  Text: InputInput,
  Icon: InputIcon
};
