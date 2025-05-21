import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function ProductionStages() {
  return (
    <section>
      <div className="container">
        <div className="py-16 md:py-24 relative">
          <h2 className="text-3xl font-bold text-center mb-16">
            From screen writing to pre-production,
            <br />
            we got you covered!
          </h2>

          {/* Screenwriter Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
            <div className="order-2 md:order-1">
              <div className="mb-4 bg-gradient-to-r from-blue-500 to-blue-400 p-1 rounded-full w-fit">
                <h3 className="text-lg font-bold">Enhance your</h3>
                <h3 className="text-xl font-bold">screenwriting experience</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                providing tailored solutions to overcome writers block and
                streamlining your creative process.
              </p>
              <Link
                href="/features?persona=screenwriters"
                className="text-primary flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore for Screenwriters <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/618106854/2116589346.svg"
                alt="Screenwriter"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Producer Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/618106854/3394157246.svg"
                alt="Producer"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <div className="mb-4 bg-gradient-to-r from-blue-500 to-blue-400 p-1 rounded-full w-fit">
                <h3 className="text-lg font-bold">Save time</h3>
                <h3 className="text-xl font-bold">
                  cutting down on trivial tasks
                </h3>
              </div>
              <p className="text-muted-foreground mb-6">
                revolutionizing the filmmaking process for producers: cutting
                costs and resources by automating script analysis. Helping
                create outstanding pitch decks resonating with your project
              </p>
              <Link
                href="/features?persona=producers"
                className="text-primary flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore for Producers <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Director Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="mb-4 bg-gradient-to-r from-blue-500 to-blue-400 p-1 rounded-full w-fit">
                <h3 className="text-lg font-bold">
                  Have full control over the
                </h3>
                <h3 className="text-xl font-bold">creative process</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                saving you valuable time by automating repetitive tasks and
                facilitating seamless collaboration with the rest of your team.
                Assisting in crafting the perfect schedule for a smooth
                production workflows of your creative vision.
              </p>
              <Link
                href="/features?persona=directors"
                className="text-primary flex items-center gap-2 hover:gap-3 transition-all"
              >
                Explore for Directors <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="https://ext.same-assets.com/618106854/1787624407.svg"
                alt="Director"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
