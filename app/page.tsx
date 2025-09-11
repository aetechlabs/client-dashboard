import { AuroraBackground } from "@/components/ui/aurora-background";
import { LandingHeader } from "@/components/landing/landing-header";
import { LandingHero } from "@/components/landing/landing-hero";
import { FeatureGrid } from "@/components/landing/feature-grid";
import { Testimonials } from "../components/landing/testimonials";
import { LandingCta } from "../components/landing/cta";
import { LandingFooter } from "../components/landing/footer";

export default function Home() {
  return (
    <AuroraBackground className="bg-transparent">
      <div className="relative z-50 flex w-full items-center justify-center px-4 md:px-10 py-6 md:py-10">
        <div className="w-full max-w-6xl rounded-2xl bg-black/70 backdrop-blur-md p-5 md:p-8 lg:p-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] border border-white/10">
          <LandingHeader />

          <main className="flex w-full flex-col items-start gap-12 md:gap-16">
            <section id="home" className="w-full">
              <LandingHero />
            </section>

            <section id="features" className="w-full">
              <FeatureGrid />
            </section>

            <section id="testimonials" className="w-full">
              <Testimonials />
            </section>

            <section id="cta" className="w-full">
              <LandingCta />
            </section>
          </main>

          <LandingFooter />
        </div>
      </div>
    </AuroraBackground>
  );
}
