import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";
import { ReactNode } from "react";

export interface IconButtonProps {
  children?: ReactNode;
  asChild?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  color?: 'primary' | 'secondary' | 'default';
  variant?: 'text' | 'solid' | 'border'
}

const IconButton = ({
  children,
  asChild,
  size = "md",
  color = 'default',
  variant = 'solid'
}: IconButtonProps) => {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "flex items-center gap-2 justify-center rounded  font-bold transition-colors ",
        {
          "py-1 px-1 text-[0.82rem]": size === "xs",
          "py-[5px] px-[5px] text-[0.95rem]": size === "sm",
          "py-2 px-2 text-sm": size === "md",
          "py-3 px-3 text-lg": size === "lg",

          // VARIANT SOLID
          "bg-primary-900 hover:bg-primary-hover text-primary-contrast": color === 'primary' && variant === 'solid',
          "bg-secondary-700 hover:bg-secondary-hover text-secondary-contrast": color === 'secondary' && variant === 'solid',
          "bg-gray-700 hover:bg-gray-hover": color === 'default'  && variant === 'solid',

          // VARIANT BORDER
          "bg-transparent ring-1 ring-primary-900 hover:ring-primary-hover text-primary-900": color === 'primary' && variant === 'border',
          "bg-transparent ring-1 ring-secondary-700 hover:ring-secondary-hover text-secondary-700": color === 'secondary' && variant === 'border',
          "bg-transparent ring-1 ring-gray-700 hover:ring-gray-hover text-gray-700": color === 'default'  && variant === 'border',

          // VARIANT TEXT
          "py-0 px-0 bg-transparent hover:text-primary-hover text-primary-900": color === 'primary' && variant === 'text',
          "py-0 px-0 bg-transparent hover:text-secondary-hover text-secondary-700": color === 'secondary' && variant === 'text',
          "py-0 px-0 bg-transparent hover:text-gray-hover text-gray-700": color === 'default'  && variant === 'text',
        }
      )}
    >
      {children}
    </Component>
  );
}

export default IconButton;