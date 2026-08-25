import { Link, Navigate, useParams } from 'react-router-dom';

import { Reveal } from '@/components/ui/Reveal';
import { projects } from '@/content/projects';
import { site } from '@/content/site';
import { ui } from '@/content/ui';
import { useDocumentMeta } from '@/hooks/useDocumentMeta';
import { useLanguage } from '@/hooks/useLanguage';
import { localizeProject } from '@/lib/i18n';
import { findProjectBySlug, getAdjacentProjects, getProjectImages } from '@/lib/projects';

interface MetaRow {
  readonly label: string;
  readonly value: string;
}

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const { lang } = useLanguage();
  const t = ui[lang];

  const project = slug ? findProjectBySlug(projects, slug) : null;
  const text = project ? localizeProject(project, lang) : null;

  useDocumentMeta({
    title: project && text ? `${text.title} — ${site[lang].name}` : site[lang].seo.title,
    description: text?.excerpt ?? site[lang].seo.description,
  });

  if (!project || !text) return <Navigate to="/404" replace />;

  const images = getProjectImages(project);
  const { previous, next } = getAdjacentProjects(projects, project.slug);

  const metaRows: readonly MetaRow[] = [
    { label: t.year, value: String(project.year) },
    { label: t.category, value: project.category },
    ...(project.client ? [{ label: t.client, value: project.client }] : []),
    ...(project.role ? [{ label: t.role, value: project.role }] : []),
  ];

  return (
    <article className="shell py-12 md:py-20">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors duration-300 hover:text-ink"
      >
        <span aria-hidden="true">←</span> {t.allWorks}
      </Link>

      <header className="mt-10 grid gap-10 border-b border-line pb-12 md:grid-cols-12 md:pb-16">
        <div className="md:col-span-8">
          <h1 className="font-display text-display font-light">{text.title}</h1>
          <p className="mt-5 max-w-xl text-base text-ink-soft md:text-lg">{text.excerpt}</p>
        </div>

        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 self-end md:col-span-4 md:grid-cols-1 md:gap-y-4">
          {metaRows.map((row) => (
            <div key={row.label}>
              <dt className="text-eyebrow font-medium text-ink-faint uppercase">{row.label}</dt>
              <dd className="mt-1.5 text-sm">{row.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-8">
          {/* Mosaico: colunas CSS, cada foto na proporção original, sem recorte. */}
          <div className="columns-1 gap-6 sm:columns-2 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {images.map((image, index) => (
              <Reveal key={image.src} delay={Math.min(index, 5) * 60}>
                <figure>
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="w-full rounded-xl bg-surface card-shadow"
                  />
                  {image.caption ? (
                    <figcaption className="mt-2 text-sm text-ink-faint">
                      {image.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="md:col-span-4">
          <div className="space-y-5 md:sticky md:top-32">
            {text.description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className="text-base text-ink-soft">
                {paragraph}
              </p>
            ))}

            {project.externalUrl ? (
              <a
                href={project.externalUrl.url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 border-b border-ink pb-0.5 text-sm transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {project.externalUrl.label}
                <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>
        </aside>
      </div>

      <nav
        aria-label="Navegar entre projetos"
        className="mt-20 grid gap-6 border-t border-line pt-8 sm:grid-cols-2 md:mt-28"
      >
        {previous ? (
          <Link to={`/projeto/${previous.slug}`} className="group">
            <span className="text-eyebrow font-medium text-ink-faint uppercase">{t.previous}</span>
            <span className="mt-2 block font-display text-title transition-colors duration-300 group-hover:text-accent">
              {localizeProject(previous, lang).title}
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}

        {next ? (
          <Link to={`/projeto/${next.slug}`} className="group sm:text-right">
            <span className="text-eyebrow font-medium text-ink-faint uppercase">{t.next}</span>
            <span className="mt-2 block font-display text-title transition-colors duration-300 group-hover:text-accent">
              {localizeProject(next, lang).title}
            </span>
          </Link>
        ) : (
          <span aria-hidden="true" />
        )}
      </nav>
    </article>
  );
}
