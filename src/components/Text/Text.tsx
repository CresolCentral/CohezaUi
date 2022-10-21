import { Slot } from '@radix-ui/react-slot'
import { clsx } from "clsx";
import { ReactNode } from 'react';

export interface TextProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  children?: ReactNode;
  asChild?: boolean;
  className?: string;
}

const Text = ({ size = "md", children, asChild, className }: TextProps) => {

  const Component = asChild ? Slot : 'span'

  return (
    <Component
      className={clsx(`text-label font-sans ${className}`, {
        "text-xs": size === "xs",
        "text-sm": size === "sm",
        "text-md": size === "md",
        "text-lg": size === "lg",
        "text-xl": size === "xl",
      })}
    >
      {children}
    </Component>
  );
}

export default Text;
