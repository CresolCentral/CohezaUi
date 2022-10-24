import { ReactNode, useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import * as SelectPrimitive from "@radix-ui/react-select";
import clsx from "clsx";

export interface SelectProps {
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  fullWidth?: boolean;
  children: ReactNode;
}

const Select = ({
  size = "sm",
  placeholder,
  fullWidth = false,
  children,
}: SelectProps) => {
  const [itemSelected, setSelected] = useState([]);

  return (
    <div className="flex flex-col relative">
      <SelectPrimitive.Root>
        <div className="flex flex-col">
          <SelectPrimitive.Trigger
            className={clsx(
              "flex justify-between bg-input-bg py-2 rounded text-default-100 relative items-center px-2",
              {
                "h-9 text-sm": size === "sm",
                "h-10": size === "md",
                "h-12": size === "lg",
              }
            )}
          >
            <SelectPrimitive.Value placeholder={placeholder}/>
            <SelectPrimitive.Icon>
              <IoMdArrowDropdown />
            </SelectPrimitive.Icon>
          </SelectPrimitive.Trigger>

          <SelectPrimitive.Content className={clsx("flex flex-col text-white outline-none", {
            "mt-10": size === "sm",
            "mt-11": size === "md",
            "mt-12": size === "lg",
          })}>
            <SelectPrimitive.Viewport className="bg-default-800 outline-none rounded z-10">
              {children}
            </SelectPrimitive.Viewport>
          </SelectPrimitive.Content>
        </div>
      </SelectPrimitive.Root>
    </div>
  );
};

export default Select;
