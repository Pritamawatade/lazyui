import React, { useRef } from "react";

interface TabPropsTypes {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{ left: number; width: number; opacity: number }>>;
  classes: string;
}

export default function Tab({ children, setPosition, classes }: TabPropsTypes) {
  const ref = useRef<HTMLLIElement>(null);
  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={`relative mx-auto z-10 block cursor-pointer px-2 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base ${classes}`}
    >
      {children}
    </li>
  );
}
