import MainLayout from "@/components/layout/MainLayout";
import Section from "@/components/shared/Section";
import Container from "@/components/shared/Container";

export default function Home() {
  return (
    <MainLayout>
      <Section>
        <Container>
          <h1 className="text-5xl font-bold">
            Digital Product Studio
          </h1>
        </Container>
      </Section>
    </MainLayout>
  );
}