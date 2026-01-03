import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "../ui/motion-elements";

const testimonials = [
  {
    quote: "Nexera transformed our online presence completely. Our organic traffic increased by 400% in just 6 months. Their strategic approach and dedication are unmatched.",
    author: "Sarah Chen",
    role: "CEO, TechFlow Inc",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "The team at Nexera doesn't just deliver results – they become true partners in your growth. Their data-driven strategies helped us achieve 500% ROI.",
    author: "Marcus Johnson",
    role: "Marketing Director, Elevate",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
  {
    quote: "Working with Nexera was a game-changer for our brand. They brought creativity and precision that exceeded all our expectations.",
    author: "Emily Rodriguez",
    role: "Founder, Bloom Studio",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />

      <div className="relative mx-auto max-w-7xl">
        <FadeIn className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Client Success Stories
          </span>
          <h2 className="heading-lg mt-4">
            Trusted by <span className="gradient-text">Industry Leaders</span>
          </h2>
          <p className="body-lg mx-auto mt-4 max-w-2xl">
            Don't just take our word for it. Here's what our clients have to say
            about working with Nexera.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <StaggerItem key={testimonial.author}>
              <motion.div
                whileHover={{ y: -5 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-8"
              >
                {/* Quote Icon */}
                <Quote className="absolute -top-2 right-6 h-16 w-16 text-primary/10" />

                {/* Rating */}
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="relative z-10 text-lg leading-relaxed text-foreground">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="mt-8 flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-border"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-display font-semibold">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default TestimonialsSection;
