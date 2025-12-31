import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, TrendingUp, BarChart, FileSearch, Link2, Target, ArrowRight, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-elements";

const features = [
  {
    icon: FileSearch,
    title: "Technical SEO Audits",
    description: "Comprehensive analysis of your website's technical health, identifying and fixing issues that impact rankings.",
  },
  {
    icon: Target,
    title: "Keyword Strategy",
    description: "Data-driven keyword research to target high-intent searches that drive qualified traffic and conversions.",
  },
  {
    icon: Link2,
    title: "Link Building",
    description: "Strategic acquisition of high-quality backlinks from authoritative sources to boost domain authority.",
  },
  {
    icon: BarChart,
    title: "Analytics & Reporting",
    description: "Transparent, real-time reporting with actionable insights to continuously optimize your SEO strategy.",
  },
];

const process = [
  { step: "01", title: "Discovery", description: "We analyze your business, competitors, and market opportunities." },
  { step: "02", title: "Strategy", description: "Develop a customized SEO roadmap aligned with your goals." },
  { step: "03", title: "Optimization", description: "Implement on-page, technical, and off-page improvements." },
  { step: "04", title: "Growth", description: "Monitor, refine, and scale for continuous improvement." },
];

const SEOPage = () => {
  return (
    <>
      <Helmet>
        <title>SEO Optimization Services - Boost Your Rankings | Nexera</title>
        <meta
          name="description"
          content="Drive organic traffic and dominate search rankings with Nexera's data-driven SEO services. Technical audits, keyword strategy, link building, and more."
        />
        <link rel="canonical" href="https://nexera.agency/services/seo" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding relative min-h-[60vh] pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                SEO Services
              </span>
              <h1 className="heading-xl mt-4">
                Dominate <span className="gradient-text">Search Rankings</span>
              </h1>
              <p className="body-lg mt-6">
                Drive sustainable organic growth with SEO strategies built on
                data, expertise, and proven results. We don't just optimize –
                we transform your digital presence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="btn-primary rounded-full">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get SEO Audit
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="btn-outline rounded-full">
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                <div className="h-full w-full rounded-xl bg-card p-8">
                  <div className="flex h-full flex-col items-center justify-center gap-6">
                    <Search className="h-24 w-24 text-primary" />
                    <div className="text-center">
                      <div className="font-display text-4xl font-bold gradient-text">400%</div>
                      <div className="text-muted-foreground">Average Traffic Increase</div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <h2 className="heading-lg">
                Comprehensive <span className="gradient-text">SEO Solutions</span>
              </h2>
              <p className="body-lg mx-auto mt-4 max-w-2xl">
                Our full-service SEO approach covers every aspect of search
                optimization to deliver maximum results.
              </p>
            </FadeIn>

            <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <StaggerItem key={feature.title}>
                  <div className="flex gap-6 rounded-2xl border border-border bg-background p-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                      <feature.icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold">{feature.title}</h3>
                      <p className="mt-2 text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <h2 className="heading-lg">
                Our <span className="gradient-text">SEO Process</span>
              </h2>
              <p className="body-lg mx-auto mt-4 max-w-2xl">
                A proven methodology that delivers consistent, measurable results
                for our clients.
              </p>
            </FadeIn>

            <div className="mt-16 grid gap-8 md:grid-cols-4">
              {process.map((item, index) => (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary font-display text-2xl font-bold text-primary-foreground">
                      {item.step}
                    </div>
                    <h3 className="font-display text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="heading-lg">
                Ready to <span className="gradient-text">Rank Higher?</span>
              </h2>
              <p className="body-lg mt-4">
                Get a free SEO audit and discover your growth potential.
              </p>
              <Button asChild size="lg" className="btn-primary mt-8 rounded-full">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your SEO Journey
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

export default SEOPage;
