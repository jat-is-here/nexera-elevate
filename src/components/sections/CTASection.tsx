import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";
import { FadeIn } from "../ui/motion-elements";

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background" />
      
      {/* Animated Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, delay: 2 }}
        className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <div className="mx-auto w-fit max-w-[90vw] bg-white/70 backdrop-blur-md rounded-tl-[40px] rounded-tr-md rounded-br-[8px] rounded-bl-xl px-6 py-6 text-center shadow-lg">
          <FadeIn>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary"
            >
              <Sparkles className="h-4 w-4" />
              Ready to Transform Your Brand?
            </motion.div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="heading-lg mt-8">
              Let's Create Something <span className="gradient-text">Extraordinary</span> Together
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="body-lg mx-auto mt-6 max-w-2xl text-center">
              Whether you're launching a new brand or scaling an existing one, we're
              here to help you achieve your goals. Get in touch for a free
              consultation.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="btn-primary cursor-none rounded-full text-base">
                <Link to="/contact" className="flex cursor-none items-center gap-2">
                  Schedule a Call
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline cursor-none rounded-full text-base">
                <Link to="/services" className="cursor-none">Explore Our Services</Link>
              </Button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="mt-8 text-sm text-muted-foreground">
              No commitment required. Let's start with a conversation.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
