import clsx from "clsx";
import { ReactNode } from "react";
import { BsCheckAll } from "react-icons/bs";
import { FiInfo } from "react-icons/fi";
import { IoIosWarning } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";

export interface SpanProps {
  type?: "success" | "warning" | "info" | "danger" | "default";
  size?: "xs" | "sm" | "md" | "lg";
  children: ReactNode;
  icon?: boolean;
}

const Span = ({ children, type = "default", size = "xs", icon }: SpanProps) => {
  return (
    <span className="flex">
      <div
        className={clsx("flex flex-row items-center gap-1 rounded", {
          "bg-success-background text-success-color": type === "success",
          "bg-warning-background text-warning-color": type === "warning",
          "bg-info-background text-info-color": type === "info",
          "bg-danger-background text-danger-color": type === "danger",
          "bg-default-background text-default-color": type === "default",

          "px-2 text-xxs h-5": size === "xs",
          "px-2 text-xs h-6": size === "sm",
          "px-2 text-sm h-8": size === "md",
          "px-3 text-md h-10": size === "lg",
        })}
      >
        {icon && type === "success" && <BsCheckAll />}
        {icon && type === "warning" && <IoIosWarning />}
        {icon && type === "danger" && <RiCloseCircleLine />}
        {icon && type === "info" && <FiInfo />}
        {children}
      </div>
    </span>
  );
};

export default Span;
