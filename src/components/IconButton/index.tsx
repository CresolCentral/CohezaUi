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

export function IconButton({
  children,
  asChild,
  size = "md",
  color = 'default',
  variant = 'solid'
}: IconButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={clsx(
        "flex items-center gap-2 justify-center rounded text-gray-100 font-bold transition-colors ",
        {
          "py-1 px-1 text-[0.82rem]": size === "xs",
          "py-[5px] px-[5px] text-[0.95rem]": size === "sm",
          "py-2 px-2 text-sm": size === "md",
          "py-3 px-3 text-lg": size === "lg",

          // VARIANT SOLID
          "bg-green-900 hover:bg-green-hover": color === 'primary' && variant === 'solid',
          "bg-orange-700 hover:bg-orange-hover": color === 'secondary' && variant === 'solid',
          "bg-gray-700 hover:bg-gray-hover": color === 'default'  && variant === 'solid',

          // VARIANT BORDER
          "bg-transparent ring-1 ring-green-900 hover:ring-green-hover text-green-900": color === 'primary' && variant === 'border',
          "bg-transparent ring-1 ring-orange-700 hover:ring-orange-hover text-orange-700": color === 'secondary' && variant === 'border',
          "bg-transparent ring-1 ring-gray-700 hover:ring-gray-hover text-gray-700": color === 'default'  && variant === 'border',

          // VARIANT TEXT
          "py-0 px-0 bg-transparent hover:text-green-hover text-green-900": color === 'primary' && variant === 'text',
          "py-0 px-0 bg-transparent hover:text-orange-hover text-orange-700": color === 'secondary' && variant === 'text',
          "py-0 px-0 bg-transparent hover:text-gray-hover text-gray-700": color === 'default'  && variant === 'text',
        }
      )}
    >
      {children}
    </Component>
  );
}
