import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Search, Share2, Palette, Code } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-elements";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Dominate search rankings with data-driven SEO strategies that deliver measurable organic growth.",
    path: "/services/seo",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description: "Build engaged communities and drive conversions through strategic social media campaigns.",
    path: "/services/social-media-marketing",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description: "Craft memorable brand identities that resonate with your audience and stand out in the market.",
    path: "/services/branding",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Build lightning-fast, conversion-optimized websites that deliver exceptional user experiences.",
    path: "/services/web-development",
    color: "from-green-500 to-emerald-500",
  },
];

const ServicesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Our Services
          </span>
          <h2 className="heading-lg mt-4">
            Everything You Need to{" "}
            <span className="gradient-text">Scale Your Brand</span>
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-2xl">
            From strategy to execution, we provide end-to-end digital marketing
            solutions that transform your business.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <StaggerItem key={service.path}>
              <Link to={service.path} className="group block">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="card-glass relative h-full overflow-hidden"
                >
                  {/* Icon */}
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color}`}
                  >
                    <service.icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="heading-md flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="h-5 w-5 opacity-0 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    {service.description}
                  </p>

                  {/* Hover Gradient */}
                  <div
                    className={`absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-br ${service.color} opacity-0 blur-3xl transition-opacity group-hover:opacity-10`}
                  />
                </motion.div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-primary transition-colors hover:text-primary/80"
          >
            View All Services
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
};

export default ServicesSection;
