import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Define the shape of a menu item
interface MenuItem {
  label: string;
  icon?: React.ComponentType<{ className?: string }>; // optional icon as a React component
}

// Define the props for the component
interface AvatarDropdownProps {
  user?: {
    name?: string;
    email?: string;
  };
  menuItems?: MenuItem[];
  className?: string;
  children: ReactNode;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ user = {}, menuItems = [], className = "", children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
    closed: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.2 },
    },
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer focus:outline-none">
        {children}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="absolute left-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-10"
          >
            <div className="py-1">
              <div className="px-4 py-3 border-b border-gray-100">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500 truncate">{user.email}</p>
              </div>
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a key={index} href="#" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    {Icon && <Icon className="w-4 h-4 mr-3 text-gray-500" />}
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { AvatarDropdown };
