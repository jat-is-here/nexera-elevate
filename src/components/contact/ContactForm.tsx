import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, User, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedText } from "./AnimatedText";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 shadow-xl"
    >
      <AnimatePresence mode="wait">
        {!submitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6"
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <h2 className="text-2xl font-semibold">
              <AnimatedText text="Send a Message" />
            </h2>

            <div className="space-y-4">
              <div>
                <Label className="flex items-center gap-2">
                  <User className="h-4 w-4" /> Name
                </Label>
                <Input required placeholder="John Doe" />
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> Email
                </Label>
                <Input required type="email" placeholder="john@example.com" />
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" /> Message
                </Label>
                <Textarea rows={5} required />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              size="lg"
              className="w-full rounded-full"
            >
              {loading ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="py-16 text-center"
          >
            <CheckCircle2 className="mx-auto mb-4 h-12 w-12 text-primary" />
            <h3 className="text-xl font-semibold">
              <AnimatedText text="Message Sent!" />
            </h3>
            <p className="mt-2 text-muted-foreground">
              We’ll get back to you within 24 hours.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
