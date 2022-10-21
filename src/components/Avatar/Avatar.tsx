import clsx from "clsx";
import { ReactNode } from "react";
import { FaUserAlt } from "react-icons/fa";

export interface AvatarProps {
  urlImage?: string;
  label?: string;
  size?: "xs" | "sm" | "md" | "lg";
  icon?: ReactNode;
}

const Avatar = ({ urlImage, label, size = "sm", icon }: AvatarProps) => {
  if (label) {
    return (
      <div
        className={clsx(
          "bg-gray-400 text-gray-100 rounded-full flex items-center justify-center",
          {
            "h-10 w-10 text-lg": size === "xs",
            "h-12 w-12 text-xl": size === "sm",
            "h-14 w-14 text-2xl": size === "md",
            "h-16 w-16 text-2xl": size === "lg",
          }
        )}
      >
        <span>{label.substring(0, 1)}</span>
      </div>
    );
  }

  if (urlImage) {
    return (
      <div
        className={clsx(
          "rounded-full overflow-hidden table-cell text-center align-middle",
          {
            "h-10 w-10": size === "xs",
            "h-12 w-12": size === "sm",
            "h-14 w-14": size === "md",
            "h-16 w-16": size === "lg",
          }
        )}
      >
        <img src={urlImage} />
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "bg-gray-400 text-gray-100 rounded-full flex items-center justify-center",
        {
          "h-10 w-10 text-lg": size === "xs",
          "h-12 w-12 text-xl": size === "sm",
          "h-14 w-14 text-2xl": size === "md",
          "h-16 w-16 text-2xl": size === "lg",
        }
      )}
    >
      {icon ? icon : <FaUserAlt />}
    </div>
  );
}


export default Avatar