import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import ClientBody from "./ClientBody"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VloomAi - All-in-One AI Tools for Filmmaking & Video Creation",
  description: "VloomAi is one-stop shop for seamless filmmaking. From scriptwriting and AI-driven script coverage to advanced scheduling and budgeting, our platform streamlines every step of your pre-production process. Empower your creativity with tools designed for filmmakers, producers, and creators, all in one intuitive platform.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  )
}
