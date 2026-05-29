import HeroSection from '@/features/home_page/sections/HeroSection';
import BenefitsSection from '@/features/home_page/sections/BenefitsSection';
import ProcessSection from '@/features/home_page/sections/ProcessSection';
import CasesSection from '@/features/home_page/sections/CasesSection';
import DiagnosisSection from '@/features/home_page/sections/DiagnosisSection';
import ReviewSection from '@/features/home_page/sections/ReviewSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CasesSection />
      <ProcessSection />
      <DiagnosisSection />
      <ReviewSection />
    </>
  );
}
