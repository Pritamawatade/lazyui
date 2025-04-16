import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';


const defaultLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Pages',
    href: '#',
    children: [
      { label: 'Team', href: '/team' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

const Navbar = ({
  logo = <span className="text-2xl font-bold">Logo</span>,
  links = defaultLinks,
  variant = 'default',
  position = 'fixed',
  showThemeToggle = true,
  showAuth = true,
  onLogin = () => console.log('Login clicked'),
  onSignup = () => console.log('Signup clicked'),
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);


  useEffect(() => {
    if (isDark) {
      
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const variants = {
    default: 'bg-white dark:bg-gray-900 shadow-md',
    transparent: 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md',
    minimal: 'bg-transparent',
  };

  const positions = {
    fixed: 'fixed top-0 left-0 right-0',
    sticky: 'sticky top-0',
    relative: 'relative',
  };

  return (
    <nav
      className={`
        ${variants[variant as keyof typeof variants]}
        ${positions[position as keyof typeof positions]}
        z-50 transition-all duration-300
        ${className}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 dark:text-gray-200">{logo}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {links.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  {link.label}
                  {link.children && <ChevronDown className="ml-1 h-4 w-4" />}
                </a>

                {/* Dropdown Menu */}
                {link.children && activeDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 w-48 py-2 mt-2 bg-white dark:bg-gray-800 rounded-md shadow-xl"
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                      >
                        {child.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {showThemeToggle && (
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {isDark ? (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                ) : (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />
                )}
              </button>
            )}

            {showAuth && (
              <>
                <button
                  onClick={onLogin}
                  className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Login
                </button>
                <button
                  onClick={onSignup}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Sign up
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <React.Fragment key={link.label}>
                  <a
                    href={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {link.label}
                  </a>
                  {link.children?.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="block px-3 py-2 pl-6 rounded-md text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      {child.label}
                    </a>
                  ))}
                </React.Fragment>
              ))}
              {showAuth && (
                <div className="pt-4 space-y-2">
                  <button
                    onClick={onLogin}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    Login
                  </button>
                  <button
                    onClick={onSignup}
                    className="w-full text-left px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Sign up
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
