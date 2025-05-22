import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12">
      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Bring your film project to life
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 heading-gradient">
            from idea to production
          </h2>

          <Button className="btn-primary mt-8" asChild>
            <Link href="/login">Start Creating</Link>
          </Button>
        </div>
      </div>

      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-50">
        <Image
          src="src/components/new.jpeg"
          alt="Film production background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/80 z-0" />
    </section>
  );
}
