import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const mobileMenuVariants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: { duration: 0.3, when: "afterChildren" },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: { duration: 0.3, when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const mobileItemVariants = {
  closed: { opacity: 0, x: -20 },
  open: { opacity: 1, x: 0 },
};

function NavItem({ text, page }) {
  return (
    <motion.a href={`/${page}`} className="text-slate-300 hover:text-white font-medium transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      {text}
    </motion.a>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled || mobileMenuOpen ? "bg-slate-900/90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"}`}
        initial="hidden"
        animate="visible"
        variants={navVariants}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div className="flex items-center gap-2" whileHover={{ scale: 1.05 }}>
            <span className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              <motion.a href={"/"}> LazyUI</motion.a>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div className="hidden md:flex items-center gap-8" variants={navVariants}>
            <NavItem text="Home" page="" />
            <NavItem text="Documentation" page="docs" />
          </motion.div>

          {/* GitHub Button - Desktop */}
          <motion.button
            className="hidden md:flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.a href={"https://github.com/Pritamawatade/lazyui"}>GitHub</motion.a>
          </motion.button>

          {/* Mobile Menu Toggle */}
          <motion.button className="md:hidden flex text-white" whileTap={{ scale: 0.95 }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div className="md:hidden w-full bg-slate-900/95 backdrop-blur-md" initial="closed" animate="open" exit="closed" variants={mobileMenuVariants}>
              <div className="container mx-auto px-6 py-4 flex flex-col gap-6">
                <motion.div className="flex flex-col gap-4" variants={mobileItemVariants}>
                  <NavItem text="Home" page="" />
                  <NavItem text="Documentation" page="docs" />
                </motion.div>

                <motion.button
                  className="flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  variants={mobileItemVariants}
                >
                  <motion.a href={"https://github.com/Pritamawatade/lazyui"}>GitHub</motion.a>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}

export default Navbar;
