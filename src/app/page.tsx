import { CollaborativeSuite } from "@/components/collaborative-suite";
import { EthicalAI } from "@/components/ethical-ai";
import { FeaturesGrid } from "@/components/features-grid";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { InAction } from "@/components/in-action";
import { ProductionStages } from "@/components/production-stages";
import { Productivity } from "@/components/productivity";
import { Testimonials } from "@/components/testimonials";
import { UserFeatures } from "@/components/user-features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CollaborativeSuite />
      <FeaturesGrid />
      <EthicalAI />
      <ProductionStages />
      <InAction />
      <UserFeatures />
      <Productivity />
      <Testimonials />
      <Footer />
    </main>
  );
}
