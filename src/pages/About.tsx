import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Award, Target, Users, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-elements";
import { GlowCard } from "@/components/ui/glow-card";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every strategy is designed with measurable outcomes in mind. We don't just execute – we deliver growth.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description:
      "We stay ahead of industry trends, bringing cutting-edge solutions to every project we undertake.",
  },
  {
    icon: Users,
    title: "Client Partnership",
    description:
      "We treat your business as our own, becoming true partners in your journey to success.",
  },
  {
    icon: Award,
    title: "Excellence Always",
    description:
      "Quality is non-negotiable. We maintain the highest standards in everything we create.",
  },
];

const team = [
  {
    name: "Alexandra Hayes",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "David Park",
    role: "Creative Director",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "Emma Thompson",
    role: "Head of Strategy",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Nexera - Our Story & Team | Digital Marketing Agency</title>
        <meta
          name="description"
          content="Learn about Nexera's mission to transform brands through innovative digital marketing. Meet our team of experts dedicated to your success."
        />
        <link rel="canonical" href="https://nexera.agency/about" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding relative min-h-[60vh] pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

          <div className="relative mx-auto max-w-7xl">
            <FadeIn className="max-w-3xl">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h1 className="heading-xl mt-4">
                We're on a Mission to{" "}
                <span className="gradient-text">
                  Transform Digital Marketing
                </span>
              </h1>
              <p className="body-lg mt-6">
                Founded in 2012, Nexera has grown from a small startup to a leading
                digital marketing agency, serving clients across the globe with
                innovative strategies and exceptional results.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-card">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop"
                    alt="Nexera team collaborating"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-2xl bg-gradient-to-br from-primary to-secondary p-8 text-primary-foreground">
                  <div className="font-display text-4xl font-bold">12+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="flex flex-col justify-center">
              <h2 className="heading-lg">Our Story</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Nexera was born from a simple belief: that businesses deserve
                marketing partners who care as much about their success as they do.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Today, we're proud to have helped over 150 businesses across
                industries achieve their growth goals.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="font-display text-3xl font-bold text-primary">
                    150+
                  </div>
                  <div className="text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div>
                  <div className="font-display text-3xl font-bold text-primary">
                    50+
                  </div>
                  <div className="text-muted-foreground">Team Members</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Values – GLOW CARDS */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <h2 className="heading-lg">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="body-lg mx-auto mt-4 max-w-2xl">
                These principles guide everything we do, from strategy development
                to client relationships.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <StaggerItem key={value.title}>
                  <GlowCard className="text-center h-full">
                    <div className="mx-auto mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <value.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-semibold">
                      {value.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground">
                      {value.description}
                    </p>
                  </GlowCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Team */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <h2 className="heading-lg">
                Meet the <span className="gradient-text">Team</span>
              </h2>
              <p className="body-lg mx-auto mt-4 max-w-2xl">
                Our talented team brings together diverse expertise.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <StaggerItem key={member.name}>
                  <motion.div whileHover={{ y: -5 }} className="group text-center">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="heading-lg">
                Ready to Work{" "}
                <span className="gradient-text">Together?</span>
              </h2>
              <p className="body-lg mt-4">
                Let's discuss how we can help transform your brand.
              </p>
              <Button asChild size="lg" className="btn-primary mt-8 rounded-full">
                <Link to="/contact" className="flex items-center gap-2">
                  Get in Touch
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

export default About;
