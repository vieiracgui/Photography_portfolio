import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const content = site[lang];

  return (
    <section id="sobre" className="border-t border-line">
      <div className="shell py-20 md:py-28">
        <Reveal>
          <p className="text-eyebrow font-medium text-ink-faint uppercase">
            {t.aboutTitle}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            {/* 👉 SUA FOTO: o arquivo deve estar em public/images.
                Se não se chamar sobre.jpg, ajuste o caminho abaixo. */}
            <img
              src="/images/2 - gLm.jpg"
              alt="Retrato de Guilherme Vieira Campos"
              loading="lazy"
              decoding="async"
              className="w-full rounded-xl bg-surface card-shadow"
            />
          </Reveal>

          <div className="md:col-span-8">
            <Reveal>
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

            <Reveal delay={120}>
              <ul className="mt-12 grid gap-x-8 gap-y-3 border-t border-line pt-8 sm:grid-cols-2">
                {content.services.map((service) => (
                  <li
                    key={service}
                    className="flex items-baseline gap-3 text-sm"
                  >
                    <span aria-hidden="true" className="text-accent">
                      —
                    </span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
