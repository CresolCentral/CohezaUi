import { HTMLAttributes, ReactNode } from "react";

export interface BoxProps extends HTMLAttributes<HTMLDivElement>{
  children: ReactNode
} 

const Box =({ children, ...props }: BoxProps) => {
  return (
    <div className="p-4 rounded-md bg-default-800" {...props}>{children}</div>
  )
}

export default Box;