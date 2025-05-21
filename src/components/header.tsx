"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="py-4 px-4 md:px-6 border-b border-border">
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2"
          >
            <path
              d="M16 2C8.268 2 2 8.268 2 16C2 23.732 8.268 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2Z"
              fill="#1F6DDB"
            />
            <path
              d="M23 11L16 18L9 11"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 21L16 14L23 21"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-xl font-bold">VloomAi</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about-us" className="text-sm hover:text-primary transition-colors">
            About Us
          </Link>
          <Link href="/pricing" className="text-sm hover:text-primary transition-colors">
            Pricing
          </Link>
          <Link href="/features" className="text-sm hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="/blog" className="text-sm hover:text-primary transition-colors">
            Blog
          </Link>
          <Link href="/education" className="text-sm hover:text-primary transition-colors">
            Education
          </Link>
          <Link href="/enterprise" className="text-sm hover:text-primary transition-colors">
            Studios
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button className="btn-primary hidden md:flex">Log in</Button>

          <Sheet onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <Link
                  href="/about-us"
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="/pricing"
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  href="/features"
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </Link>
                <Link
                  href="/blog"
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/education"
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Education
                </Link>
                <Link
                  href="/enterprise"
                  className="text-lg hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Studios
                </Link>
                <Button className="btn-primary w-full mt-4">Log in</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
