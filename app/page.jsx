import ContactForm from "@/components/ContactForm";
import BestITServiceSection from "@/components/homePage/BestITServiceSection";
import HeroSection from "@/components/homePage/HeroSection";
import KeyMetricsSection from "@/components/homePage/KeyMetricsSection ";
import WhyChooseUsSection from "@/components/homePage/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <KeyMetricsSection />
      <BestITServiceSection />
      <WhyChooseUsSection />
      <ContactForm />
    </>
  );
}
