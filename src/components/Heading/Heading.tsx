import { Slot } from '@radix-ui/react-slot'
import { clsx } from "clsx";
import { ReactNode } from 'react';

export interface HeadingProps {
  size?: "xs" | "sm" | "md" | "lg";
  children?: ReactNode;
  asChild?: boolean;
}

const Heading = ({ size = "md", children, asChild }: HeadingProps) => {

  const Component = asChild ? Slot : 'h2'

  return (
    <Component
      className={clsx("text-label font-bold font-sans", {
        "text-md": size === "xs",
        "text-lg": size === "sm",
        "text-xl": size === "md",
        "text-2xl": size === "lg",
      })}
    >
      {children}
    </Component>
  );
}

export default Heading;
