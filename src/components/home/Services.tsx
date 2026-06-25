const services = [
  {
    title: "Product Strategy",
    icon: "🚀",
    description:
      "Define product vision, roadmap, MVP scope and align business goals with customer needs.",
  },
  {
    title: "Business Analysis",
    icon: "📊",
    description:
      "Translate business requirements into functional specifications and actionable user stories.",
  },
  {
    title: "UX Thinking",
    icon: "🎯",
    description:
      "Design intuitive user journeys and experiences that solve real customer problems.",
  },
  {
    title: "System Design",
    icon: "⚙️",
    description:
      "Structure scalable applications, workflows and integrations for long-term growth.",
  },
  {
    title: "Agile Delivery",
    icon: "✅",
    description:
      "Lead sprint planning, backlog refinement and cross-functional collaboration.",
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    description:
      "Leverage AI tools and automation to improve productivity and digital experiences.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
            What I Do
          </p>

          <h2 className="mt-4 text-4xl font-bold text-neutral-900">
            Turning Ideas into Digital Products
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
            From discovery to delivery, I help businesses design, build and
            launch products that create measurable impact.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
            >
              <div className="mb-6 text-4xl">{service.icon}</div>

              <h3 className="mb-4 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="leading-7 text-neutral-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}