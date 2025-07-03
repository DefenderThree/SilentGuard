import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { SpamCheckerSection } from "@/components/sections/spam-checker-section";
import { DemoSection } from "@/components/sections/demo-section";
import { OrgChartSection } from "@/components/sections/org-chart-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <OrgChartSection />
        <SpamCheckerSection />
        <DemoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
