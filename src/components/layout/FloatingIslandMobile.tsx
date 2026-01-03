import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { navLinks } from "./navLinks";

const FloatingIslandMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  const blur = useTransform(scrollY, [0, 120], ["blur(0px)", "blur(10px)"]);
  const scale = useTransform(scrollY, [0, 120], [1, 0.97]);
  const background = useTransform(
    scrollY,
    [0, 120],
    ["rgba(15,15,15,0.4)", "rgba(15,15,15,0.8)"]
  );

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Lock body scroll on mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        style={{ backdropFilter: blur, scale, background }}
        className="
          mx-auto flex lg:hidden max-w-6xl items-center justify-between
          rounded-full border 
          px-5 py-3
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Logo */}
        <Link to="/" className="flex cursor-none items-center gap-2">
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-br bg-black">
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-white font-Pixelo">
              N
            </span>
          </div>
          <span className="text-lg font-semibold font-mono tracking-tight text-white">
            Nexera
          </span>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="relative w-10 h-10 flex items-center justify-center"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            <motion.span
              className="absolute h-0.5 w-6 bg-white"
              animate={{
                rotate: isOpen ? 45 : 0,
                y: isOpen ? 0 : -4,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />

            <motion.span
              className="absolute h-0.5 w-6 bg-white"
              animate={{
                rotate: isOpen ? -45 : 0,
                y: isOpen ? 0 : 4,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            />
          </AnimatePresence>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="
              fixed inset-x-4 top-[88px] z-40
              rounded-2xl bg-black/90
              backdrop-blur-xl
              p-6 lg:hidden
            "
          >
            <div className="flex flex-col gap-5">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06 }}
                >
                  <Link
                    to={link.path}
                    className={`block cursor-none text-lg font-medium ${
                      location.pathname === link.path ? "text-white" : "text-white/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Button asChild className="mt-4 rounded-full">
                <Link to="/contact" className="flex cursor-none items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingIslandMobile;
