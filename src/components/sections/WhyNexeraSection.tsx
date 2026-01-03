import { motion } from "framer-motion";
import { Zap, Target, TrendingUp, Users, Shield, Clock } from "lucide-react";
import { ContainerScroll } from "../ui/container-scroll-animation";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/motion-elements";

const features = [
  {
    icon: Target,
    title: "Data-Driven Strategy",
    description: "Every decision backed by analytics and market insights for maximum impact.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Consistent track record of delivering 300%+ ROI for our clients.",
  },
  {
    icon: Users,
    title: "Dedicated Team",
    description: "Expert specialists assigned exclusively to your brand's success.",
  },
  {
    icon: Zap,
    title: "Rapid Execution",
    description: "Fast turnarounds without compromising on quality or attention to detail.",
  },
  {
    icon: Shield,
    title: "Transparent Reporting",
    description: "Real-time dashboards and weekly reports keep you informed always.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock availability to address your needs and concerns.",
  },
];

const WhyNexeraSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-card">
      <div className="mx-auto max-w-7xl">
        {/* Desktop scroll animation ONLY */}
        <div className="hidden md:block">
          <ContainerScroll
            titleComponent={
              <div className="mx-auto max-w-3xl text-center">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Why Choose Nexera
                </span>
                <h2 className="heading-lg mt-4">
                  Partner with a Team That{" "}
                  <span className="gradient-text">Delivers Excellence</span>
                </h2>
                <p className="body-lg mt-4">
                  We don't just promise results – we deliver them. Here's what sets
                  us apart from the rest.
                </p>
              </div>
            }
          >
            <FeatureGrid />
          </ContainerScroll>
        </div>

        {/* Mobile – NO scroll animation */}
        <div className="md:hidden">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Nexera
            </span>
            <h2 className="heading-lg mt-4">
              Partner with a Team That{" "}
              <span className="gradient-text">Delivers Excellence</span>
            </h2>
            <p className="body-lg mt-4">
              We don't just promise results – we deliver them. Here's what sets
              us apart from the rest.
            </p>
          </FadeIn>

          <div className="mt-12">
            <FeatureGrid />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------------------- */
/* Feature Grid Component */
/* ---------------------------------- */

const FeatureGrid = () => {
  return (
    <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {features.map((feature) => (
        <StaggerItem key={feature.title}>
          <motion.div
            whileHover={{ y: -4 }}
            className="group relative h-full rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30"
          >
            {/* Icon */}
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
              <feature.icon className="h-6 w-6 text-primary" />
            </div>

            {/* Content */}
            <h3 className="font-display text-xl font-semibold">
              {feature.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {feature.description}
            </p>

            {/* Decorative glow */}
            <div className="absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
          </motion.div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  );
};

export default WhyNexeraSection;
