import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/home/Hero';
import Services from '@/components/home/Services';
import CaseStudies from '@/components/home/CaseStudies';
import Framework from '@/components/home/Framework';
import Timeline from '@/components/home/Timeline';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <CaseStudies />
      <Framework />
      <Timeline />
    </MainLayout>
  );
}