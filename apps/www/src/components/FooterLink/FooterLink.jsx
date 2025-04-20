import { motion } from "framer-motion";

function FooterLink({ text, link }) {
  return (
    <motion.a href={link} className="hover:text-white transition-colors" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
      {text}
    </motion.a>
  );
}

export default FooterLink;
