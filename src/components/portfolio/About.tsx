import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { useLanguage } from '@/hooks/useLanguage';

export function About() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const content = site[lang];

  return (
    <section id="sobre" className="scroll-mt-24 border-t border-line">
      <div className="shell grid gap-8 py-20 md:grid-cols-12 md:gap-16 md:py-28">
        <Reveal className="md:col-span-4">
          <p className="text-eyebrow font-medium text-ink-faint uppercase">{t.aboutTitle}</p>
        </Reveal>

        <Reveal className="md:col-span-8">
          <div className="max-w-2xl space-y-4">
            {content.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base text-ink-soft md:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
