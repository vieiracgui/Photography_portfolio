import { About } from '@/components/portfolio/About';
import { Hero } from '@/components/portfolio/Hero';
import { MasonryGrid } from '@/components/portfolio/MasonryGrid';
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/hooks/useLanguage';

export function HomePage() {
  const { lang } = useLanguage();

  useDocumentMeta({ title: site[lang].seo.title, description: site[lang].seo.description });

  return (
    <>
      <Hero />

      <section id="trabalhos" className="shell scroll-mt-24 pb-10 md:pb-14">
        <MasonryGrid projects={projects} />
      </section>

      <About />
    </>
  );
}
