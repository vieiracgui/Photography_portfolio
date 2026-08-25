import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { Reveal } from '@/components/ui/Reveal';
import type { Project } from '@/types/portfolio';

interface MasonryGridProps {
  readonly projects: readonly Project[];
}

/**
 * Grade estilo mosaico com colunas CSS: as imagens mantêm a proporção
 * original e se encaixam sozinhas, sem JavaScript de layout.
 */
export function MasonryGrid({ projects }: MasonryGridProps) {
  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6 [&>*]:break-inside-avoid">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={Math.min(index, 5) * 70}>
          <ProjectCard project={project} priority={index < 3} />
        </Reveal>
      ))}
    </div>
  );
}
