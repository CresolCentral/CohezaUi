import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { ReactNode } from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { FaCheck } from "react-icons/fa";

interface SelectItemProps {
  value: string;
  children?: ReactNode;
}

const SelectItem = ({ children, value }: SelectItemProps) => {
  return (
    <SelectPrimitive.Item value={value} className="flex flex-row items-center gap-2 justify-between px-2 py-1 outline-none transition-colors hover:bg-default-900 cursor-pointer z-10">
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator>
        <FaCheck size={10} />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

export default SelectItem;
