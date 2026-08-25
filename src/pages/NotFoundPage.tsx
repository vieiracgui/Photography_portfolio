import { Link } from 'react-router-dom';

import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/hooks/useLanguage';

export function NotFoundPage() {
  const { lang } = useLanguage();
  const t = ui[lang];

  useDocumentMeta({
    title: `${t.notFoundTitle} — ${site[lang].name}`,
    description: t.notFoundText,
  });

  return (
    <section className="shell flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="text-eyebrow font-medium text-ink-faint uppercase">{t.notFoundTag}</p>
      <h1 className="mt-6 max-w-[14ch] font-display text-display font-light">{t.notFoundTitle}</h1>
      <p className="mt-5 max-w-md text-ink-soft">{t.notFoundText}</p>
      <Link
        to="/"
        className="mt-10 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-opacity duration-300 hover:opacity-85"
      >
        {t.backHome}
      </Link>
    </section>
  );
}
