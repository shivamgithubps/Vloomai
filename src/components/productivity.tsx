import { Button } from "@/components/ui/button";
import { DollarSign, Timer, Zap } from "lucide-react";
import Link from "next/link";
import React from "react";

const metrics = [
  {
    icon: <Timer className="h-12 w-12 text-primary" />,
    number: "90%",
    label: "faster",
    description: "Speed Through Project Completion",
  },
  {
    icon: <DollarSign className="h-12 w-12 text-primary" />,
    number: "80%",
    label: "Lower Costs",
    description: "Halve Your Expenses",
  },
  {
    icon: <Zap className="h-12 w-12 text-primary" />,
    number: "Exceptional",
    label: "Quality",
    description: "Surpass the Highest Industry Standards",
  },
];

export function Productivity() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-16">
          Skyrocket your productivity
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">{metric.icon}</div>
              <h3 className="text-2xl font-bold">{metric.number}</h3>
              <h4 className="text-xl mb-2">{metric.label}</h4>
              <p className="text-muted-foreground text-sm">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild className="btn-primary">
            <Link href="https://discord.gg/Ezfk2RTgX5">Join Us On Discord</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
