import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ui } from '@/content/ui';
import { useLanguage } from '@/hooks/useLanguage';
import { coverAspectClass } from '@/lib/aspect';
import { cn } from '@/lib/cn';
import { localizeProject } from '@/lib/i18n';
import type { Project } from '@/types/portfolio';

interface ProjectCardProps {
  readonly project: Project;
  /** Só as primeiras imagens carregam com prioridade; o resto é lazy. */
  readonly priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasFailed, setHasFailed] = useState(false);
  const { lang } = useLanguage();

  const t = ui[lang];
  const text = localizeProject(project, lang);

  // Recorte da capa: sorteado a partir do slug ou definido em cover.aspect.
  const aspectClass = coverAspectClass(project);

  return (
    <article className="group">
      <Link
        to={`/projeto/${project.slug}`}
        aria-label={`${t.openAlbum}: ${text.title}`}
        className="block focus-visible:outline-offset-6"
      >
        <div className="relative overflow-hidden rounded-xl bg-surface card-shadow">
          {!isLoaded && !hasFailed && (
            <div className="absolute inset-0 animate-pulse bg-ink/5 dark:bg-ink/10" aria-hidden="true" />
          )}

          {hasFailed ? (
            <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 border border-dashed border-line px-6 text-center">
              <p className="text-sm text-ink-soft">{t.imageMissing}</p>
              <code className="text-xs break-all text-ink-faint">{project.cover.src}</code>
            </div>
          ) : (
            <>
              <img
                src={project.cover.src}
                alt={project.cover.alt}
                loading={priority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={priority ? 'high' : 'auto'}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasFailed(true)}
                className={cn(
                  'w-full transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03]',
                  aspectClass && cn(aspectClass, 'object-cover'),
                  isLoaded ? 'opacity-100' : 'opacity-0',
                )}
              />

              {/* Sobreposição de hover: título, ano e resumo no idioma ativo. */}
              <div
                aria-hidden="true"
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/65 p-5 text-center opacity-0 backdrop-blur-[2px] transition-opacity duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-focus-within:opacity-100"
              >
                <p className="translate-y-2 font-display text-title text-canvas transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-within:translate-y-0">
                  {text.title}
                </p>
                <p className="translate-y-2 text-xs tracking-[0.18em] text-canvas/75 uppercase transition-transform delay-75 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-within:translate-y-0">
                  {project.year}
                </p>
                <p className="line-clamp-4 max-w-[36ch] translate-y-2 text-sm leading-relaxed text-canvas/90 transition-transform delay-100 duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-focus-within:translate-y-0">
                  {text.excerpt}
                </p>
              </div>
            </>
          )}
        </div>
      </Link>
    </article>
  );
}
