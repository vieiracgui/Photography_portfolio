import { About } from '@/components/portfolio/About';
import { Hero } from '@/components/portfolio/Hero';
import { MasonryGrid } from '@/components/portfolio/MasonryGrid';
import { Skills } from '@/components/portfolio/Skills';
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/hooks/useLanguage';

export function HomePage() {
  const { lang } = useLanguage();
  const t = ui[lang];

  useDocumentMeta({ title: site[lang].seo.title, description: site[lang].seo.description });

  return (
    <>
      <Hero />

      <Skills />

      <section id="trabalhos" className="scroll-mt-24 border-t border-line">
        <div className="shell py-20 md:py-28">
          <p className="text-eyebrow font-medium text-ink-faint uppercase">{t.worksTitle}</p>
          <p className="mt-6 max-w-2xl text-base text-ink-soft md:text-lg">{t.worksIntro}</p>

          <div className="mt-12 md:mt-16">
            <MasonryGrid projects={projects} />
          </div>
        </div>
      </section>

      <About />
    </>
  );
}
