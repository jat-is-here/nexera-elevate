import * as React from "react";
import { GlowingEffect } from "../ui/glowing-effect";

import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlowCard({ children, className }: GlowCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-border p-2",
        className
      )}
    >
      <GlowingEffect
        spread={40}
        glow
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
      />

      <div className="relative rounded-xl bg-card p-6 shadow-sm">
        {children}
      </div>
    </div>
  );
}
