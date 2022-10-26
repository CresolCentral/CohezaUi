import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import React from "react";
import { ReactElement } from "react";

type A = React.InputHTMLAttributes<HTMLInputElement>;

export type TextFieldProps = {
  label?: string;
  size?: "sm" | "md" | "lg";
  icon?: ReactElement;
} & Omit<A, "size">;

const TextField = ({
  label,
  size = "md",
  disabled = false,
  icon,
  ...props
}: TextFieldProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <span className="font-bold text-label flex pb-[6px] text-[0.8rem]">
          {label}
        </span>
      )}
      <div
        className={clsx(
          "flex items-center gap-3 rounded bg-input-bg focus-within:ring-2 ring-primary-900 text-primary-contrast  placeholder:text-default-400", {
            "opacity-50 cursor-not-allowed": disabled,
          })}
      >
        {!!icon && <Slot className="w-[14px] ml-3 flex h-[14px] text-default-400">{icon}</Slot>}
        <input className={clsx("outline-none bg-input-bg text-sm flex flex-1 rounded px-2", {
          "h-9": size === "sm",
          "h-10": size === "md",
          "h-12": size === "lg",
          "opacity-50 cursor-not-allowed": disabled,
        })} {...props} disabled={disabled} />
      </div>
    </div>
  );
};

export default TextField;
