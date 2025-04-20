import { useEffect, useRef, useState } from "react";
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";

interface DropDownMenuProps {
  menuItems: { name: string; href: string; className?: string }[];
  className?: string;
}

export function DropDownMenu({ menuItems, className }: DropDownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!dropDownRef.current?.contains(e.target as Node)) setIsOpen(false);
    };

    if (isOpen) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={dropDownRef} className="max-w-[400px] mx-auto py-4 px-6">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`bg-blue-400 px-4 py-3 
        rounded-md hover:bg-blue-600 duration-200 
        cursor-pointer w-full flex items-center 
        justify-center gap-4 ${className ?? ""}`}
      >
        <span className="uppercase font-bold">DropDown Menu</span>
        {isOpen ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
      </button>
      {isOpen && (
        <div className="bg-neutral-50 rounded-md mt-2">
          {menuItems.map((item, index) => (
            <a className={`block w-full hover:bg-neutral-200 duration-300 rounded-md py-2 px-4 text-gray-800 text-xl font-bold ${item.className}`} key={index} href={item.href}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
