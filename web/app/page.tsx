import { AmplifyConfigureClientSide } from "@/components/auth/amplify";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { TeamSection } from "@/components/layout/sections/team";

export default function Home() {
  return (
    <>
      <AmplifyConfigureClientSide />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialSection />
      <TeamSection />
      <FooterSection />
    </>
  );
}
