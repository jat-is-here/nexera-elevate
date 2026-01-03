import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowRight, Check } from "lucide-react";
import Layout from "../components/layout/Layout";
import { Button } from "../components/ui/button";
import { FadeIn } from "../components/ui/motion-elements";
import { toast } from "sonner";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormState({ name: "", email: "", company: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email Us",
      value: "hello@nexera.agency",
      href: "mailto:hello@nexera.agency",
    },
    {
      icon: Phone,
      label: "Call Us",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "123 Innovation Drive, San Francisco, CA",
      href: "#",
    },
  ];

  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "Branding & Identity",
    "Web Development",
    "Email Marketing",
    "PPC Advertising",
  ];

  return (
    <>
      <Helmet>
        <title>Contact Nexera – Get in Touch</title>
        <meta
          name="description"
          content="Contact Nexera for a free consultation. Let’s discuss how we can grow your brand."
        />
        <link rel="canonical" href="https://nexera.agency/contact" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="section-padding cursor-none relative pt-32 overflow-hidden">
          {/* Subtle background glow */}
          <div className="pointer-events-none cursor-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative cursor-none mx-auto max-w-7xl">
            <FadeIn className="text-center">
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                Get in Touch
              </span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="heading-xl mt-4"
              >
                Let's Start a{" "}
                <span className="gradient-text">Conversation</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="body-lg mx-auto mt-6 max-w-2xl"
              >
                Ready to transform your digital presence? Tell us about your
                project and we’ll take it from there.
              </motion.p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding cursor-none pt-0">
          <div className="mx-auto cursor-none grid max-w-7xl gap-12 lg:grid-cols-5">
            {/* Contact Info */}
            <FadeIn className="lg:col-span-2 cursor-none">
              <div className="space-y-8 cursor-none">
                <div>
                  <h2 className="font-display cursor-none text-2xl font-semibold">
                    Contact Information
                  </h2>
                  <p className="mt-2 cursor-none text-muted-foreground">
                    Reach out through any channel — we reply within 24 hours.
                  </p>
                </div>

                <div className="space-y-6 cursor-none">
                  {contactInfo.map((item) => (
                    <motion.a
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      key={item.label}
                      href={item.href}
                      className="group flex cursor-none items-start gap-4 rounded-xl p-4 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex cursor-none h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20">
                        <item.icon className="h-5 w-5 cursor-none text-primary" />
                      </div>
                      <div>
                        <div className="font-medium cursor-none">{item.label}</div>
                        <div className="text-sm cursor-none text-muted-foreground">
                          {item.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Benefits */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl cursor-none bg-card p-6 shadow-sm"
                >
                  <h3 className="font-display cursor-none font-semibold">
                    Why Work With Us?
                  </h3>
                  <ul className="mt-4 cursor-none space-y-3">
                    {[
                      "Free initial consultation",
                      "Transparent pricing",
                      "Dedicated account manager",
                      "Results-driven approach",
                    ].map((benefit) => (
                      <li
                        key={benefit}
                        className="flex cursor-none items-center gap-3 text-sm"
                      >
                        <Check className="h-4 cursor-none w-4 text-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </FadeIn>

            {/* Contact Form */}
            <FadeIn delay={0.2} className="lg:col-span-3 cursor-none">
              <motion.form
                onSubmit={handleSubmit}
                whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                className="rounded-2xl cursor-none border border-border bg-card/80 backdrop-blur-sm p-8"
              >
                <h2 className="font cursor-none-display text-2xl font-semibold">
                  Send Us a Message
                </h2>
                <p className="mt-2 cursor-none text-muted-foreground">
                  Fill out the form and we’ll contact you shortly.
                </p>

                <div className="mt-8 cursor-none grid gap-6 md:grid-cols-2">
                  {[
                    ["Name *", "text", "name", "John Doe"],
                    ["Email *", "email", "email", "john@company.com"],
                    ["Company", "text", "company", "Your Company"],
                  ].map(([label, type, key, placeholder]) => (
                    <div key={key}>
                      <label className="text-sm cursor-none  font-medium">{label}</label>
                      <input
                        type={type}
                        required={label.includes("*")}
                        value={(formState as any)[key]}
                        onChange={(e) =>
                          setFormState({
                            ...formState,
                            [key]: e.target.value,
                          })
                        }
                        className="mt-2 cursor-none w-full rounded-lg border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                        placeholder={placeholder}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="text-sm cursor-none font-medium">
                      Service Interested In
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) =>
                        setFormState({ ...formState, service: e.target.value })
                      }
                      className="mt-2 w-full cursor-none rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                    >
                      <option className="cursor-none" value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service}>{service}</option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="text-sm cursor-none font-medium">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className="mt-2 cursor-none w-full resize-none rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-primary"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="btn-primary cursor-none mt-8 w-full rounded-full md:w-auto"
                >
                  {isSubmitting ? (
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1 }}
                      className="flex items-center gap-2"
                    >
                      <Send className="h-5 cursor-none w-5" />
                      Sending...
                    </motion.span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <ArrowRight className="h-5 cursor-none w-5" />
                    </span>
                  )}
                </Button>
              </motion.form>
            </FadeIn>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
