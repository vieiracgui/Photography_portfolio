import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/content/site";
import { ui } from "@/content/ui";
import { useLanguage } from "@/hooks/useLanguage";

/**
 * 👉 SUA FOTO: o arquivo deve estar em public/images.
 *    Troque aqui se o nome for outro.
 */
const PHOTO_SRC = "/images/Sobre_1.jpg";

export function Hero() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const content = site[lang];

  return (
    <section className="shell pt-10 pb-12 md:pt-16 md:pb-16">
      <div className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5">
          <img
            src={PHOTO_SRC}
            alt={`Retrato de ${content.name}`}
            loading="eager"
            decoding="async"
            className="mx-auto aspect-square w-44 rounded-full object-cover bg-surface card-shadow sm:w-56 md:mx-0 md:w-full md:max-w-[17rem]"
          />
        </Reveal>

        <div className="md:col-span-7">
          <Reveal delay={80}>
            <p className="text-eyebrow font-medium text-ink-faint uppercase">
              {t.heroGreeting}
            </p>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="mt-3 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.015em] font-light">
              {content.name}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-2 text-lg text-ink-soft md:text-xl">
              {content.role}
            </p>
          </Reveal>

          <Reveal delay={260}>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#contato"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity duration-300 hover:opacity-85"
              >
                {t.contactCta}
              </a>

              {content.cvUrl ? (
                <a
                  href={content.cvUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="rounded-full border border-ink px-6 py-3 text-sm font-medium transition-colors duration-300 hover:bg-ink hover:text-canvas"
                >
                  {t.downloadCv}
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
