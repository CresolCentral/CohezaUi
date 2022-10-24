import { Listbox } from "@headlessui/react";
import clsx from "clsx";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { BiCheckDouble } from "react-icons/bi";
import Chip from "../Chip";

export interface SelectProps {
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  fullWidth?: boolean;
  multiple?: boolean;
}

const Select = ({
  size = "sm",
  placeholder,
  fullWidth = false,
  multiple
}: SelectProps) => {
  const people = [
    "Durward Reynoldsaaaaaaaaaaaaaaaaaa",
    "Kenton Towne",
    "Therese Wunsch",
    "Benedict Kessler",
    "Katelyn Rohan",
  ];

  const [itemSelected, setSelected] = useState([]);

  return (
    <div className="">
      <Listbox value={itemSelected} onChange={setSelected} multiple={multiple}>
        <Listbox.Button
          className={clsx(
            "flex justify-between items-center rounded min-w-[15rem] py-2 px-2 w-full bg-default-800 focus-within:ring-2 ring-green-900",
            {
              "h-9": size === "sm",
              "h-10": size === "md",
              "h-12": size === "lg",

              "max-w-md": fullWidth == false,
            }
          )}
        >
          {itemSelected ? (
            <>
              {multiple ? 
               <div className="flex gap-2">
               {itemSelected.map((person) => (
                <Chip label="My Chip" />
               ))}
               </div>
            :
            <span className="text-default-100">{itemSelected}</span>
            }
            </>
          ) : (
            <span className="text-default-400">{placeholder}</span>
          )}
          <span className="flex flex-col text-black pl-2">
            <RiArrowDropUpLine />
            <RiArrowDropDownLine />
          </span>
        </Listbox.Button>
        <Listbox.Options
          className={clsx("bg-default-800 mt-1 rounded p-2", {
            "max-w-md": fullWidth === false,
          })}
        >
          {people.map((person) => (
            <Listbox.Option
              key={person}
              value={person}
            >
              {({ active, selected }) => (
                <div className={clsx("flex justify-between  items-center gap-1 rounded cursor-pointer px-2 py-1 transition-colors text-default-100", {
                  "bg-default-700": selected,
                  "bg-default-700 text-default-200": active
                })}>
                  {person}
                  {selected && <BiCheckDouble />}
                </div>

              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
}

export default Select;