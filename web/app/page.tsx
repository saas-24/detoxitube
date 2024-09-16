import { AmplifyConfigureClientSide } from "@/components/auth/amplify";
import { BenefitsSection } from "@/components/layout/sections/benefits";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { TestimonialSection } from "@/components/layout/sections/testimonial";
import { TeamSection } from "@/components/layout/sections/team";
import { Navbar } from "@/components/layout/navbar";
import Head from "next/head";
import logo from "../public/detoxitube-logo.png";

export default function Home() {
  return (
    <>
      {/* <AmplifyConfigureClientSide /> */}
      <Head>
        <link rel="icon" href="../public/detoxitube-logo.png" />
      </Head>
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <FeaturesSection />
      <TestimonialSection />
      <TeamSection />
      <FooterSection />
    </>
  );
}
