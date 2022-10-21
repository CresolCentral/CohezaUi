import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children?: ReactNode;
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
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
        "flex items-center gap-2 justify-center rounded font-bold transition-colors ",
        {
          "py-[2px] px-2 text-[0.8rem]": size === "xs",
          "py-[4px] px-2 text-[0.85rem]": size === "sm",
          "py-[8px] px-3 text-[0.875rem]": size === "md",
          "py-3 px-4 text-[0.95rem]": size === "lg",
          "py-4 px-4 text-[0.95rem]": size === "xl",
          "w-full": fullWidth,

          // VARIACAO SOLID
          "bg-primary-900 hover:bg-primary-hover text-primary-contrast": color === 'primary' && variant === 'solid',
          "bg-secondary-700 hover:bg-secondary-hover text-secondary-contrast": color === 'secondary' && variant === 'solid',
          "bg-default-700 hover:bg-default-hover text-white": color === 'default' && variant === 'solid',

          // VARIACAO BORDER
          "ring-1 ring-primary-900 text-primary-900 hover:ring-primary-hover": color === 'primary' && variant === 'border',
          "ring-1 ring-secondary-700 text-secondary-700 hover:ring-secondary-hover": color === 'secondary' && variant === 'border',
          "ring-1 ring-default-700 text-default-700 hover:ring-default-hover": color === 'default' && variant === 'border',


          // VARIACAO TEXT
          "text-primary-900 hover:text-primary-hover": color === 'primary' && variant === 'text',
          "text-secondary-700 hover:text-secondary-hover": color === 'secondary' && variant === 'text',
          "text-default-700 hover:text-default-hover": color === 'default' && variant === 'text'
        }
      )}
      {...props}
    >
      {leftIcon && <Slot className={clsx(
        "",
        {
          "w-[11px] h-[11px]": size === "xs" || size === "sm",
          "w-[0.82rem] h-[0.82rem]": size === "md",
          "w-[13px] h-[13px]": size === "lg" || size === "xl",
        }
      )}>{leftIcon}</Slot>}
      {children}
      {rightIcon && <Slot className={clsx(
        "",
        {
          "w-[11px] h-[11px]": size === "xs" || size === "sm",
          "w-[0.82rem] h-[0.82rem]": size === "md",
          "w-[13px] h-[13px]": size === "lg" || size === "xl",
        }
      )}>{rightIcon}</Slot>}
    </Component>
  );
}

export default Button
