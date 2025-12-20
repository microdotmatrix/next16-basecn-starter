import { HeroSection } from "@/components/blocks/hero-section";
import { LandingPanels } from "@/components/blocks/landing-panels";

export default function Home() {
  return (
    <main className="w-full" id="top">
      <HeroSection />
      <LandingPanels />
    </main>
  );
}
