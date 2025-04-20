import { NavLink } from "react-router-dom";
import { useState } from "react";
import Tab from "./tab";
import Cursor from "./cursor";

interface SlideTabsPropsTypes {
  navLinks: { name: string; href: string; className?: string }[];
}

export default function SlideTabs({ navLinks }: SlideTabsPropsTypes) {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className="flex relative mx-auto w-fit rounded-full border-2 border-black bg-white p-1"
    >
      {navLinks.map((item) => (
        <Tab classes={item.className ?? ""} key={item.name} setPosition={setPosition}>
          <NavLink key={item.name} to={item.href}>
            {item.name}
          </NavLink>
        </Tab>
      ))}
      <Cursor position={position} />
    </ul>
  );
}
