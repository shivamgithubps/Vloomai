import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function InAction() {
  return (
    <section className="py-16 bg-secondary/50">
      <div className="container">
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            VloomAi in Action
          </h2>
          <h3 className="text-xl text-muted-foreground mb-6">Meet Alex</h3>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            An independent filmmaker who is utilizing the full power of VloomAi
            to break down scripts, create pitch decks and storyboards, and reach
            his ultimate goal.
          </p>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            With its AI-powered features and user-friendly interface, it can
            help you bring your stories to life in the most efficient and
            effective way possible, while respecting your unique creative voice.
          </p>

          <Button className="btn-primary mt-8 flex items-center gap-2" asChild>
            <Link href="/pricing">
              <Play className="w-4 h-4" /> Watch overview video
            </Link>
          </Button>
        </div>

        <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-xl overflow-hidden border-2 border-primary/20">
          <Image
            src="src/components/video.mp4"
            alt="VloomAi in action"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center cursor-pointer hover:bg-primary/90 transition-colors">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Up your Game with VloomAi</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground mb-8">
            VloomAi is the ultimate tool for filmmakers looking to improve their
            craft. With its AI-powered features and user-friendly interface, it
            can help you bring your stories to life in the most efficient and
            effective way possible, while respecting your unique creative voice.
          </p>
        </div>
      </div>
    </section>
  );
}
