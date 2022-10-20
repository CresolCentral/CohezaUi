import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import { ReactNode } from "react";
import { BsCheckAll } from "react-icons/bs";
import { IoIosWarning } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";
import { RiCloseFill } from "react-icons/ri";

export interface AlertProps {
  size?: "xs" | "sm" | "md" | "lg";
  type?: "success" | "warning" | "danger" | "info";
  children: ReactNode;
  icon?: boolean;
}

function AlertRoot({
  size = "sm",
  type = "success",
  children,
  icon = false,
}: AlertProps) {
  return (
    <div
      className={clsx("flex flex-row items-start justify-between rounded-sm", {
        "py-1 px-2 text-xs": size === "xs",
        "py-2 px-2 text-[0.875rem]": size === "sm",
        "py-3 px-2 text-md": size === "md",
        "py-3 px-2 text-lg": size === "lg",

        "bg-success-background text-success-color": type === "success",
        "bg-warning-background text-warning-color": type === "warning",
        "bg-danger-background text-danger-color": type === "danger",
        "bg-info-background text-info-color": type === "info",
      })}
    >
      <div className="flex flex-row">
        <div>
          {icon && type === "success" && (
            <BsCheckAll className="text-xl mr-3" />
          )}
          {icon && type === "warning" && (
            <IoIosWarning className="text-xl mr-3" />
          )}
          {icon && type === "danger" && (
            <RiCloseCircleLine className="text-xl mr-3" />
          )}
          {icon && type === "info" && <FiInfo className="text-xl mr-3" />}
        </div>
        <div>
          <div className="flex flex-col">{children}</div>
        </div>
      </div>
      {/* <div className="">
        <button type="button">
          <RiCloseFill className="text-xs" />
        </button>
      </div> */}
    </div>
  );
}

AlertRoot.displayName = "Alert.Root";

export interface AlertTitleProps {
  children: ReactNode;
}

function AlertTitle({ children }: AlertTitleProps) {
  return <strong>{children}</strong>;
}

AlertTitle.displayName = "Alert.Title";

export interface AlertMessageProps {
  children: ReactNode;
}

function AlertMessage({ children }: AlertMessageProps) {
  return <span>{children}</span>;
}

AlertMessage.displayName = "Alert.Message";

export const Alert = {
  Root: AlertRoot,
  Title: AlertTitle,
  Message: AlertMessage,
};
