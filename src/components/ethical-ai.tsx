import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export function EthicalAI() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container text-center">
        <h3 className="text-xl font-bold mb-4">
          Leading the charge in Ethical AI
        </h3>
        <p className="max-w-2xl mx-auto text-muted-foreground mb-6">
          At VloomAi, we prioritize the ethical implications of AI in the
          creative industry.
          <br />
          We believe in AI-powered tools that enhance human-driven storytelling.
        </p>
        <Button asChild className="btn-secondary">
          <Link href="/about-us">Learn more</Link>
        </Button>
      </div>
    </section>
  );
}
