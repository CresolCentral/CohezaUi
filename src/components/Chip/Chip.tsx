import clsx from "clsx";
import { ReactNode } from "react";
import { FaTimesCircle } from "react-icons/fa";

export interface ChipProps {
  size?: 'xs' | 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'default';
  icon?: ReactNode;
  label: string;
  iconDelete?: ReactNode;
  onDelete?: () => void; 
}

const Chip = ({size = 'sm', label, color = 'primary', icon, onDelete, iconDelete}: ChipProps) => {
  return (
    <div className="flex">
      <span className={clsx("flex flex-row items-center gap-2 rounded-full", {
        'px-3 py-[1px] text-[0.8rem]': size === 'xs',
        'px-3 py-[1px] text-[0.875rem]': size === 'sm',
        'px-3 py-[2px] text-[0.95rem]': size === 'md',
        'px-3 py-[3px] text-[1rem]': size === 'lg',

        'bg-primary-900 text-primary-contrast': color === 'primary',
        'bg-secondary-600 text-secondary-contrast': color === 'secondary',
        'bg-default-600 text-default-100': color === 'default'
      })}>
        {icon && icon}
        {label}

        {onDelete &&
          <button type="button" className="-mr-[6px] transition 250s hover:opacity-50" onClick={onDelete}>
            {iconDelete ? iconDelete : <FaTimesCircle />}
          </button>
        }
        </span>
    </div>
  )
}

export default Chip;