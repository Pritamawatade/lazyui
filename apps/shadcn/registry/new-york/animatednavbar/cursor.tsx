import { motion } from "framer-motion";

interface CursorPropsTypes {
  position: { left: number; width: number; opacity: number };
}

export default function Cursor({ position }: CursorPropsTypes) {
  return <motion.li animate={position} className="absolute z-0 h-7 rounded-full bg-black md:h-12"></motion.li>;
}
