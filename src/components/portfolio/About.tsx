import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * 👉 FOTO DO SOBRE: o arquivo deve estar em public/images.
 *    Use uma foto diferente da do topo para não repetir.
 */
const ABOUT_PHOTO = "/images/Sobre_2.jpg";

export function About() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const content = site[lang];

  return (
    <section id="sobre" className="scroll-mt-24 border-t border-line">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <p className="text-eyebrow font-medium text-ink-faint uppercase">
            {t.aboutTitle}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-16">
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
            <div className="max-w-2xl space-y-6">
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
