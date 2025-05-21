import {
  AtSign,
  Instagram,
  MessageCircle,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container">
        <div className="flex flex-col items-center">
          <Link href="/" className="flex items-center mb-8">
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

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
            <Link
              href="/testimonials"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Testimonials
            </Link>
            <Link
              href="/privacy-policy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/referral-program"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Referral Program
            </Link>
            <Link
              href="/releases"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Releases
            </Link>
            <Link
              href="https://help.vloomai.app/"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              FAQ
            </Link>
          </div>

          <div className="flex gap-4 mb-8">
            <Link
              href="https://instagram.com"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              href="https://youtube.com"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80"
            >
              <Youtube className="w-5 h-5" />
            </Link>
            <Link
              href="https://threads.net"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80"
            >
              <AtSign className="w-5 h-5" />
            </Link>
            <Link
              href="https://discord.gg"
              className="p-2 bg-secondary rounded-full hover:bg-secondary/80"
            >
              <MessageCircle className="w-5 h-5" />
            </Link>
          </div>

          <div className="text-sm text-muted-foreground">
            VloomAi, Inc. {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}
