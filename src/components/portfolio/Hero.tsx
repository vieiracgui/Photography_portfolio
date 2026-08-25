import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/content/site';
import { useLanguage } from '@/hooks/useLanguage';

export function Hero() {
  const { lang } = useLanguage();
  const content = site[lang];

  return (
    <section className="shell pt-14 pb-12 md:pt-24 md:pb-16">
      <Reveal>
        <p className="text-eyebrow font-medium text-ink-faint uppercase">
          {content.role} — {content.location}
        </p>
      </Reveal>

      <Reveal delay={90}>
        <h1 className="mt-5 max-w-[24ch] font-display text-[clamp(2.5rem,6vw,4.75rem)] leading-[1.06] tracking-[-0.015em] font-light">
          {content.heroLine}
        </h1>
      </Reveal>

      <Reveal delay={180}>
        <p className="mt-6 max-w-xl text-base text-ink-soft md:text-lg">{content.heroSupport}</p>
      </Reveal>
    </section>
  );
}
