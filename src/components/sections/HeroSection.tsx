import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShaderAnimation } from "@/components/ui/shader-animation";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { GlowCard } from "@/components/ui/glow-card";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Shader Background */}
      <div className="absolute inset-0 -z-10">
        <ShaderAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
      </div>

      {/* HERO */}
      <ContainerScroll
        titleComponent={
          <div className="pt-24 sm:pt-28 lg:pt-40 px-4 text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 flex justify-center"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                Now accepting new clients for 2025
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="heading-xl mx-auto max-w-4xl text-balance"
            >
              We Build{" "}
              <span className="gradient-text">Digital Experiences</span>{" "}
              That Drive Growth
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="body-lg mx-auto mt-5 max-w-xl text-balance"
            >
              Nexera helps ambitious brands grow through data-driven marketing,
              design, and technology.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row justify-center"
            >
              <Button asChild size="lg" className="btn-primary rounded-full">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/services" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </div>
        }
      >
        {/* IMAGE — DESKTOP ONLY */}
        <div className="relative hidden md:block h-full w-full">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&h=900&fit=crop"
            alt="Nexera analytics dashboard"
            className="h-full w-full rounded-xl object-cover object-left-top"
            draggable={false}
          />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </ContainerScroll>

      {/* STATS (GLOW CARDS) */}
      <div className="relative mx-auto max-w-6xl px-6 pb-20">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { value: "150+", label: "Projects" },
            { value: "98%", label: "Retention" },
            { value: "12+", label: "Years" },
            { value: "500%", label: "Avg ROI" },
          ].map((stat) => (
            <GlowCard key={stat.label} className="text-center">
              <div className="font-display text-3xl font-bold">
                {stat.value}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
