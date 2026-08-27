import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * 👉 FOTO DA BIO: o arquivo deve estar em public/images.
 *    Troque o nome abaixo pelo do seu arquivo.
 */
const ABOUT_PHOTO = "/images/Sobre_2.jpg";

export function About() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const content = site[lang];

  return (
    <section id="sobre" className="scroll-mt-24 border-t border-line">
      <div className="shell py-14 md:py-20">
        <Reveal>
          <p className="text-eyebrow font-medium text-ink-faint uppercase">
            {t.aboutTitle}
          </p>
        </Reveal>

        <div className="mt-8 grid gap-8 md:grid-cols-12 md:gap-12">
          <Reveal className="md:col-span-4">
            <img
              src={ABOUT_PHOTO}
              alt={`Retrato de ${content.name}`}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full rounded-xl object-cover bg-surface card-shadow"
            />
          </Reveal>

          <Reveal className="md:col-span-8">
            <div className="max-w-2xl space-y-4">
              {content.about.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="text-base text-ink-soft md:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
