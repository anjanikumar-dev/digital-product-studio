import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Industries from '@/components/home/Industries';
import Philosophy from '@/components/home/Philosophy';
import Services from '@/components/home/Services';
import CaseStudies from '@/components/home/CaseStudies';
import Framework from '@/components/home/Framework';
import Timeline from '@/components/home/Timeline';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Industries />
      <Philosophy />   {/* ← New section */}
      <Services />
      <CaseStudies />
      <Framework />
      <Timeline />
      <Testimonials />
      <CTA />
    </MainLayout>
  );
}