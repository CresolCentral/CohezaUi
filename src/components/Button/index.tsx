import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { HTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  color?: 'primary' | 'secondary' | 'default';
  variant?: 'solid' | 'border' | 'text'
}

const Button = ({
  children,
  asChild,
  size = "md",
  leftIcon,
  rightIcon,
  fullWidth,
  color = 'default',
  variant = 'solid',
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "flex items-center gap-2 justify-center rounded text-gray-100 font-bold transition-colors ",
        {
          "py-[2px] px-2 text-[0.82rem]": size === "xs",
          "py-1 px-2 text-[0.9rem]": size === "sm",
          "py-[6px] px-3 text-sm": size === "md",
          "py-2 px-4 text-md": size === "lg",
          "w-full": fullWidth,

          // VARIACAO SOLID
          "bg-primary-900 hover:bg-primary-hover": color === 'primary' && variant === 'solid',
          "bg-secondary-700 hover:bg-secondary-hover": color === 'secondary' && variant === 'solid',
          "bg-gray-700 hover:bg-gray-hover": color === 'default' && variant === 'solid',

          // VARIACAO BORDER
          "ring-1 ring-primary-900 text-primary-900 hover:ring-primary-hover": color === 'primary' && variant === 'border',
          "ring-1 ring-secondary-700 text-secondary-700 hover:ring-secondary-hover": color === 'secondary' && variant === 'border',
          "ring-1 ring-gray-700 text-gray-700 hover:ring-gray-hover": color === 'default' && variant === 'border',


          // VARIACAO TEXT
          "text-primary-900 hover:text-primary-hover": color === 'primary' && variant === 'text',
          "text-secondary-700 hover:text-secondary-hover": color === 'secondary' && variant === 'text',
          "text-gray-700 hover:text-gray-hover": color === 'default' && variant === 'text'
        }
      )}
      {...props}
    >
      {leftIcon && <Slot className={clsx(
        "",
        {
          "w-[10px] h-[10px]": size === "xs" || size === "sm",
          "w-3 h-3": size === "md",
          "w-[13px] h-[13px]": size === "lg",
        }
      )}>{leftIcon}</Slot>}
      {children}
      {rightIcon && <Slot className={clsx(
        "",
        {
          "w-[10px] h-[10px]": size === "xs" || size === "sm",
          "w-3 h-3": size === "md",
          "w-[13px] h-[13px]": size === "lg",
        }
      )}>{rightIcon}</Slot>}
    </Component>
  );
}

export default Button
