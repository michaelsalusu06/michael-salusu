import { portfolioData } from "@/data/portfolio";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  const { aboutHeading, aboutParagraphs } = portfolioData;

  return (
    <section
      id="about-me"
      className="relative bg-[#f3f3f3] border-t border-zinc-200 py-16 sm:py-24 lg:py-32 px-6 sm:px-10 lg:px-16 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-[1440px] 2xl:max-w-[1680px] mx-auto pl-0 lg:pl-12">
        <div className="max-w-4xl">
          <ScrollReveal>
            {/* Eyebrow Label above the heading */}
            <span className="block text-sm font-normal text-zinc-500 mb-3 tracking-wide">
              About Me
            </span>

            {/* Bolded Full Name Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-normal tracking-tight leading-snug sm:leading-tight text-zinc-900 mb-6 sm:mb-8">
              {aboutHeading}
            </h2>
          </ScrollReveal>

          {/* Description Paragraphs */}
          <div className="space-y-6">
            {aboutParagraphs.map((paragraph, idx) => (
              <ScrollReveal key={idx} delay={0.1 + idx * 0.1}>
                <p className="text-base sm:text-lg lg:text-xl font-normal leading-relaxed text-zinc-600">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
