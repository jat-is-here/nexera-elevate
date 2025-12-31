import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { scrollY } = useScroll();

  // Softer scroll transforms (mobile-safe)
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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-4 left-0 right-0 z-50 px-4"
    >
      {/* Floating Island */}
      <motion.nav
        style={{ backdropFilter: blur, scale, background }}
        className="
          mx-auto flex max-w-6xl items-center justify-between
          rounded-full border border-white/10
          px-5 py-3
          shadow-[0_10px_40px_rgba(0,0,0,0.25)]
        "
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400">
            <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-black">
              N
            </span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-white">
            Nexera
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <Button asChild className="rounded-full px-5">
            <Link to="/contact" className="flex items-center gap-2">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className="lg:hidden text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                    className={`block text-lg font-medium ${
                      location.pathname === link.path
                        ? "text-white"
                        : "text-white/70"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <Button asChild className="mt-4 rounded-full">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
