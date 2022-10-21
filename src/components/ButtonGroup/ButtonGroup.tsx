import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";
import Button from "../Button/Button";

export interface ButtonGroupProps {
  children: ReactNode;
}

const ButtonGroup = ({ children }: ButtonGroupProps) => {
  return (
    <div className="[&>*]:rounded-none flex [&>button:first-child]:rounded-l [&>button:last-child]:rounded-r">
        {children}
    </div>
  );
};

export default ButtonGroup;
