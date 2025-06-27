import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { SpamCheckerSection } from "@/components/sections/spam-checker-section";
import { DemoSection } from "@/components/sections/demo-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <SpamCheckerSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
}
