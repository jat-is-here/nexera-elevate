import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, Smartphone, Zap, ShoppingCart, Wrench, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-elements";

const services = [
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke websites built with cutting-edge technologies tailored to your unique needs.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "High-converting online stores that drive sales and delight customers.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Flawless experiences across all devices, from desktop to mobile.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Lightning-fast load times that boost conversions and SEO rankings.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "Ongoing care to keep your site secure, updated, and performing at its best.",
  },
];

const technologies = [
  "React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL",
  "Shopify", "WordPress", "Webflow", "AWS", "Vercel", "Supabase"
];

const WebDevelopment = () => {
  return (
    <>
      <Helmet>
        <title>Web Development Services - Modern Websites | Nexera</title>
        <meta
          name="description"
          content="Build lightning-fast, conversion-optimized websites with Nexera's web development services. Custom development, e-commerce, and performance optimization."
        />
        <link rel="canonical" href="https://nexera.agency/services/web-development" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding relative min-h-[60vh] pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="relative mx-auto max-w-7xl text-center">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Web Development
              </span>
              <h1 className="heading-xl mt-4 mx-auto max-w-4xl">
                Build Websites That <span className="gradient-text">Convert</span>
              </h1>
              <p className="body-lg mx-auto mt-6 max-w-2xl">
                We create beautiful, high-performance websites that deliver
                exceptional user experiences and drive business results.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="btn-primary rounded-full">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start Your Project
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Services */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <h2 className="heading-lg">
                Our <span className="gradient-text">Development Services</span>
              </h2>
            </FadeIn>

            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <div className="card-glass h-full">
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-muted-foreground">{service.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Technologies */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <h2 className="heading-lg">
                Technologies We <span className="gradient-text">Use</span>
              </h2>
            </FadeIn>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-full border border-border bg-card px-6 py-3 font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="heading-lg">
                Ready to Build <span className="gradient-text">Something Great?</span>
              </h2>
              <p className="body-lg mt-4">
                Let's discuss your project and create a website that exceeds
                expectations.
              </p>
              <Button asChild size="lg" className="btn-primary mt-8 rounded-full">
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default WebDevelopment;
