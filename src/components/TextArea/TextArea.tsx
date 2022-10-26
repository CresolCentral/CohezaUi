import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import React from "react";
import { ReactElement } from "react";

type A = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export type TextAreaProps = {
  label?: string;
  icon?: ReactElement;
} & Omit<A, "size">;

const TextArea = ({
  label,
  disabled = false,
  icon,
  ...props
}: TextAreaProps) => {
  return (
    <div className="flex flex-col">
      {label && (
        <span className="font-bold text-label flex pb-[6px] text-[0.8rem]">
          {label}
        </span>
      )}
      <div
        className={clsx(
          "flex justify-start items-start gap-1 rounded pt-2 bg-input-bg focus-within:ring-2 ring-primary-900 text-primary-contrast  placeholder:text-default-400", {
            "opacity-50 cursor-not-allowed": disabled,
          })}
      >
        {!!icon && <Slot className="w-[14px] ml-3 mt-1 flex h-[14px] text-default-400">{icon}</Slot>}
        <textarea className={clsx("outline-none bg-input-bg flex flex-1 rounded px-2",{
          "opacity-50 cursor-not-allowed": disabled,
        })} {...props} disabled={disabled} />
      </div>
    </div>
  );
};

export default TextArea;
