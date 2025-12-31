import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Palette, Layers, BookOpen, Sparkles, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-elements";

const services = [
  {
    icon: Sparkles,
    title: "Brand Strategy",
    description: "Define your unique positioning, values, and voice that sets you apart from competitors.",
  },
  {
    icon: Palette,
    title: "Visual Identity",
    description: "Logo design, color palettes, and visual systems that capture your brand essence.",
  },
  {
    icon: BookOpen,
    title: "Brand Guidelines",
    description: "Comprehensive documentation ensuring consistency across all touchpoints.",
  },
  {
    icon: Layers,
    title: "Rebranding",
    description: "Transform your existing brand to better reflect your evolved vision and values.",
  },
];

const Branding = () => {
  return (
    <>
      <Helmet>
        <title>Branding & Identity Services - Build Your Brand | Nexera</title>
        <meta
          name="description"
          content="Create memorable brand identities that resonate with your audience. Brand strategy, visual identity, guidelines, and rebranding services from Nexera."
        />
        <link rel="canonical" href="https://nexera.agency/services/branding" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding relative min-h-[60vh] pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="relative mx-auto max-w-7xl text-center">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Branding & Identity
              </span>
              <h1 className="heading-xl mt-4 mx-auto max-w-4xl">
                Craft Brands That <span className="gradient-text">Stand Out</span>
              </h1>
              <p className="body-lg mx-auto mt-6 max-w-2xl">
                We create distinctive brand identities that capture your essence,
                resonate with your audience, and stand the test of time.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="btn-primary rounded-full">
                  <Link to="/contact" className="flex items-center gap-2">
                    Start Your Brand
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
            <StaggerContainer className="grid gap-8 md:grid-cols-2">
              {services.map((service) => (
                <StaggerItem key={service.title}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="card-glass h-full"
                  >
                    <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <service.icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold">{service.title}</h3>
                    <p className="mt-3 text-muted-foreground">{service.description}</p>
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
                Ready to Build a <span className="gradient-text">Memorable Brand?</span>
              </h2>
              <p className="body-lg mt-4">
                Let's create a brand identity that tells your story and connects
                with your audience.
              </p>
              <Button asChild size="lg" className="btn-primary mt-8 rounded-full">
                <Link to="/contact" className="flex items-center gap-2">
                  Schedule Consultation
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

export default Branding;
