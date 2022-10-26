import { HTMLAttributes, ReactNode } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode;
  className: string;
} 

const Box =({ children, className, ...props }: BoxProps) => {
  return (
    <div className={`p-4 rounded bg-default-800 ${!!className && className}`} {...props}>{children}</div>
  )
}

export default Box;