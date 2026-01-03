import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Twitter, Instagram, Github } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "SEO Optimization", path: "/services/seo" },
      { name: "Social Media Marketing", path: "/services/social-media-marketing" },
      { name: "Branding", path: "/services/branding" },
      { name: "Web Development", path: "/services/web-development" },
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Careers", path: "/careers" },
      { name: "Contact", path: "/contact" },
    ],
    legal: [
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Terms of Service", path: "/terms" },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
  ];

  return (
    <footer className="w-full bg-white/70 backdrop-blur-md shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid gap-8 sm:gap-10 md:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex cursor-none items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-gradient-to-br from-primary to-secondary">
                <span className="absolute inset-0 flex items-center justify-center font-display text-xl font-bold text-primary-foreground">
                  N
                </span>
              </div>
              <span className="font-display text-2xl font-bold tracking-tight">
                Nexera
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Transforming brands through innovative digital strategies. We craft
              experiences that drive growth and engagement.
            </p>
            <div className="mt-6 flex gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex cursor-none h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border transition-all hover:border-primary hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-4 sm:w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group cursor-none flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group cursor-none flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Stay Updated
            </h3>
            <p className="mt-4 text-sm text-muted-foreground">
              Subscribe for the latest insights on digital marketing and growth strategies.
            </p>
            <form className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 cursor-none min-w-0 w-full rounded-lg border border-border bg-background px-4 py-2 text-sm outline-none transition-colors focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-lg cursor-none bg-gradient-to-r from-primary to-secondary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:opacity-90 w-full sm:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 md:mt-12 lg:mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 md:pt-8 md:flex-row">
          <p className="text-sm sm:text-base text-muted-foreground">
            © {currentYear} Nexera. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm cursor-none text-muted-foreground transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
