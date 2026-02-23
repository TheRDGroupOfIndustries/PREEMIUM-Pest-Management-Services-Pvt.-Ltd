import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import TrustStrip from "@/components/TrustStrip";
import AboutSnapshot from "@/components/AboutSnapshot";
import ServicesGrid from "@/components/ServicesGrid";
import GoldSealSection from "@/components/GoldSealSection";
import ERDMSection from "@/components/ERDMSection";
import CertificationsSection from "@/components/CertificationsSection";
import TeamSection from "@/components/TeamSection";
import IndustriesSection from "@/components/IndustriesSection";
import ClientsSection from "@/components/ClientsSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import BNIBadge from "@/components/BNIBadge";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <TrustStrip />
        <AboutSnapshot />
        <ServicesGrid />
        <GoldSealSection />
        <ERDMSection />
        <CertificationsSection />
        <TeamSection />
        <IndustriesSection />
        <ClientsSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppWidget />
      <BNIBadge />
    </div>
  );
};

export default Index;