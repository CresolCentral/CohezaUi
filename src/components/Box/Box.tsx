import { ReactNode } from "react";

export interface BoxProps {
  children: ReactNode
} 

const Box =({ children }: BoxProps) => {
  return (
    <div className="p-4 rounded-md bg-default-800">{children}</div>
  )
}

export default Box;