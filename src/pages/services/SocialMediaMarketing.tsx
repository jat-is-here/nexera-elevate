import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Share2, Users, Heart, MessageCircle, TrendingUp, Camera, ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion-elements";

const features = [
  {
    icon: Camera,
    title: "Content Creation",
    description: "Scroll-stopping visuals and compelling copy that captures attention and drives engagement.",
  },
  {
    icon: Users,
    title: "Community Management",
    description: "Build and nurture engaged communities that become brand advocates.",
  },
  {
    icon: TrendingUp,
    title: "Paid Social Campaigns",
    description: "Data-driven advertising across platforms to reach your ideal audience at scale.",
  },
  {
    icon: MessageCircle,
    title: "Influencer Partnerships",
    description: "Strategic collaborations with creators who authentically represent your brand.",
  },
];

const platforms = [
  { name: "Instagram", color: "from-pink-500 to-purple-500" },
  { name: "TikTok", color: "from-cyan-500 to-pink-500" },
  { name: "LinkedIn", color: "from-blue-500 to-blue-700" },
  { name: "Facebook", color: "from-blue-600 to-blue-800" },
  { name: "Twitter/X", color: "from-gray-600 to-gray-800" },
  { name: "YouTube", color: "from-red-500 to-red-700" },
];

const SocialMediaMarketing = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Marketing Services - Grow Your Audience | Nexera</title>
        <meta
          name="description"
          content="Build engaged communities and drive conversions with Nexera's strategic social media marketing services. Content creation, paid ads, and influencer partnerships."
        />
        <link rel="canonical" href="https://nexera.agency/services/social-media-marketing" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding relative min-h-[60vh] pt-32">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent" />
          
          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
            <FadeIn>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Social Media Marketing
              </span>
              <h1 className="heading-xl mt-4">
                Build <span className="gradient-text">Engaged Communities</span>
              </h1>
              <p className="body-lg mt-6">
                Transform followers into customers with strategic social media
                marketing that builds authentic connections and drives real
                business results.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="btn-primary rounded-full">
                  <Link to="/contact" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative">
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform, index) => (
                  <motion.div
                    key={platform.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`rounded-xl bg-gradient-to-br ${platform.color} p-6 text-white`}
                  >
                    <span className="font-display font-semibold">{platform.name}</span>
                  </motion.div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Features */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <h2 className="heading-lg">
                Full-Service <span className="gradient-text">Social Media</span>
              </h2>
              <p className="body-lg mx-auto mt-4 max-w-2xl">
                From strategy to execution, we handle every aspect of your social
                media presence.
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

        {/* Stats */}
        <section className="section-padding">
          <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
            {[
              { value: "10M+", label: "Impressions Generated" },
              { value: "250%", label: "Avg. Engagement Increase" },
              { value: "50+", label: "Brands Served" },
            ].map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 0.1}>
                <div className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="font-display text-4xl font-bold gradient-text">{stat.value}</div>
                  <div className="mt-2 text-muted-foreground">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-card">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn>
              <h2 className="heading-lg">
                Ready to Go <span className="gradient-text">Viral?</span>
              </h2>
              <p className="body-lg mt-4">
                Let's create content that your audience can't help but share.
              </p>
              <Button asChild size="lg" className="btn-primary mt-8 rounded-full">
                <Link to="/contact" className="flex items-center gap-2">
                  Start Your Campaign
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

export default SocialMediaMarketing;
