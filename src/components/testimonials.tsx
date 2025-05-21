import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-8">
          What our customers say
        </h2>

        <div className="max-w-4xl mx-auto bg-secondary/50 rounded-2xl p-8 relative">
          <div className="absolute -top-4 -left-4">
            <Quote className="w-8 h-8 text-primary" />
          </div>

          <div className="absolute -bottom-4 -right-4">
            <Quote className="w-8 h-8 text-primary" />
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-400 rounded-full" />
            </div>

            <div>
              <h3 className="font-bold">James E. Thompson</h3>
              <p className="text-muted-foreground text-sm">
                Writer · Producer · Director
              </p>
              <div className="flex gap-1 mt-1">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-lg mb-4">
              I am incredibly pleased with VloomAi for scriptwriting—so much so
              that I'm recommending it to my college scriptwriting class.
            </p>

            <p className="text-muted-foreground mb-4">
              VloomAi offers script editing capabilities, catching spelling and
              grammar mistakes like most good scriptwriting software. But what
              truly sets it apart is its Script Coverage. The feedback is
              incredibly in-depth and almost unbelievable that it's done by AI.
            </p>

            <p className="text-muted-foreground">
              The higher-tier subscriptions of VloomAi include fantastic
              features like image generation and storyboarding, which are well
              worth the investment. Overall, it's the perfect scriptwriting
              software for me. The storyboarding, character and bio generation
              features are outstanding.
            </p>
          </div>

          <div className="flex justify-between items-center">
            <button className="p-2 rounded-full bg-secondary/80 hover:bg-secondary">
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button className="p-2 rounded-full bg-secondary/80 hover:bg-secondary">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button asChild className="btn-secondary">
            <Link href="/testimonials">All Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
