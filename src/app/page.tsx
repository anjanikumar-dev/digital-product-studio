import MainLayout from "@/components/layout/MainLayout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Services />
    </MainLayout>
  );
}