import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { FaCheck } from "react-icons/fa";

export interface CheckboxProps {
  size?: "sm" | "md" | "lg";
}

const Checkbox = ({ size }: CheckboxProps) => {
  return (
    <CheckboxPrimitive.Root className={clsx("rounded p-[2px] bg-default-800 flex justify-center items-center", {
      "w-[15px] h-[15px]": size === "sm",
      "w-[18px] h-[18px]": size === "md",
      "w-6 h-6": size === "lg",
    })}>
      <CheckboxPrimitive.Indicator asChild>
        <FaCheck className="h-4 w-4 text-primary-900" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export default Checkbox
