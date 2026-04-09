import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProofSection from "@/components/SocialProofSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import AboutSection from "@/components/AboutSection";
import StyleQuizSection from "@/components/StyleQuizSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <PortfolioSection />
      <ServicesSection />
      <WhyChooseSection />
      <AboutSection />
      <StyleQuizSection />
      <FinalCtaSection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
