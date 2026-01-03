import FloatingIslandDesktop from "./FloatingIslandDesktop";
import FloatingIslandMobile from "./FloatingIslandMobile";
import { motion } from "framer-motion";
const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {





  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-30 px-4 select-none"
    >
      <FloatingIslandDesktop />
      <FloatingIslandMobile />
    </motion.header>
  );
};

export default Navbar;
