import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { currentYear } from '@/lib/format';

export function Footer() {
  const { lang } = useLanguage();
  const t = ui[lang];
  const content = site[lang];

  return (
    <footer id="contato" className="border-t border-line">
      <div className="shell py-14 md:py-20">
        <p className="text-eyebrow font-medium text-ink-faint uppercase">{t.contactTitle}</p>

        <a
          href={`mailto:${content.email}`}
          className="mt-4 inline-block font-display text-display underline decoration-line decoration-1 underline-offset-[0.18em] transition-colors duration-300 hover:decoration-accent"
        >
          {content.email}
        </a>

        <div className="mt-10 flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-soft">
            © {currentYear()} {content.name} — {content.location}
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {content.socials.map((social) => (
              <li key={social.url}>
                <a
                  href={social.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
