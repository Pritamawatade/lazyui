import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function FooterLink({ text, link }) {
  return (
    <motion.a
      href={`#${text.toLowerCase()}`}
      className="hover:text-white transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link to={`${link}`}>{text}</Link>
    </motion.a>
  );
}

export default FooterLink;