import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Search,
  Share2,
  Palette,
  Code,
  BarChart,
  Mail,
  Video,
  Globe,
} from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-elements";
import { GlowCard } from "@/components/ui/glow-card";

const services = [
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Dominate search rankings with comprehensive SEO strategies. We analyze, optimize, and build authority to drive organic traffic that converts.",
    features: ["Technical SEO Audits", "Content Strategy", "Link Building", "Local SEO"],
    path: "/services/seo",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build engaged communities across all major platforms. We create content that resonates and drives meaningful engagement.",
    features: ["Content Creation", "Community Management", "Paid Social Ads", "Influencer Partnerships"],
    path: "/services/social-media-marketing",
  },
  {
    icon: Palette,
    title: "Branding & Identity",
    description:
      "Craft memorable brand identities that stand out. From logo design to complete brand systems, we build brands that last.",
    features: ["Brand Strategy", "Visual Identity", "Brand Guidelines", "Rebranding"],
    path: "/services/branding",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build lightning-fast websites that convert. We create beautiful, functional digital experiences optimized for performance.",
    features: ["Custom Development", "E-commerce", "Web Applications", "Maintenance"],
    path: "/services/web-development",
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description:
      "Turn data into actionable insights. We set up tracking, analyze performance, and provide recommendations for growth.",
    features: ["Custom Dashboards", "Conversion Tracking", "A/B Testing", "Performance Reports"],
    path: "/services",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and drive conversions with strategic email campaigns. We design, write, and automate for maximum impact.",
    features: ["Campaign Strategy", "Automation Flows", "Template Design", "List Management"],
    path: "/services",
  },
  {
    icon: Video,
    title: "Video Production",
    description:
      "Create compelling video content that captures attention. From concept to final cut, we handle every aspect of production.",
    features: ["Brand Videos", "Social Content", "Product Demos", "Motion Graphics"],
    path: "/services",
  },
  {
    icon: Globe,
    title: "PPC Advertising",
    description:
      "Drive immediate results with targeted paid campaigns. We optimize for conversions across Google, Meta, and more.",
    features: ["Google Ads", "Meta Ads", "Retargeting", "Campaign Optimization"],
    path: "/services",
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - Digital Marketing Solutions | Nexera Agency</title>
        <meta
          name="description"
          content="Explore Nexera's comprehensive digital marketing services including SEO, social media marketing, branding, web development, and more."
        />
        <link rel="canonical" href="https://nexera.agency/services" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding relative min-h-[50vh] pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

          <div className="relative mx-auto max-w-7xl text-center">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Our Services
              </span>
              <h1 className="heading-xl mt-4 mx-auto max-w-4xl">
                Comprehensive Solutions for{" "}
                <span className="gradient-text">Digital Growth</span>
              </h1>
              <p className="body-lg mx-auto mt-6 max-w-2xl">
                From strategy to execution, we provide end-to-end digital marketing
                services that transform your business.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Services Grid – GLOW CARDS */}
        <section className="section-padding">
          <StaggerContainer className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
            {services.map((service) => (
              <StaggerItem key={service.title}>
                <motion.div whileHover={{ y: -5 }} className="h-full">
                  <GlowCard className="h-full">
                    <div className="flex h-full flex-col">
                      {/* Icon */}
                      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <service.icon className="h-7 w-7 text-primary" />
                      </div>

                      {/* Content */}
                      <h3 className="font-display text-2xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {service.description}
                      </p>

                      {/* Features */}
                      <ul className="mt-6 grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <Link
                        to={service.path}
                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary"
                      >
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </GlowCard>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="heading-lg">
                Not Sure Where to <span className="gradient-text">Start?</span>
              </h2>
              <p className="body-lg mt-4">
                Let's discuss your goals and create a custom strategy that fits
                your business needs.
              </p>
              <Button asChild size="lg" className="btn-primary mt-8 rounded-full">
                <Link to="/contact" className="flex items-center gap-2">
                  Get a Free Consultation
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

export default Services;
