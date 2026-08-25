import { useCallback, useMemo, useState } from 'react';

import { ALL_FILTER, filterProjects, getCategories } from '@/lib/projects';
import type { Project } from '@/types/portfolio';

interface UseProjectFilterResult {
  readonly categories: readonly string[];
  readonly activeFilter: string;
  readonly visibleProjects: readonly Project[];
  readonly selectFilter: (filter: string) => void;
}

/** Estado do filtro de categorias da grade. */
export function useProjectFilter(projects: readonly Project[]): UseProjectFilterResult {
  const [activeFilter, setActiveFilter] = useState<string>(ALL_FILTER);

  const categories = useMemo(() => getCategories(projects), [projects]);

  const visibleProjects = useMemo(
    () => filterProjects(projects, activeFilter),
    [projects, activeFilter],
  );

  const selectFilter = useCallback(
    (filter: string) => {
      setActiveFilter(categories.includes(filter) ? filter : ALL_FILTER);
    },
    [categories],
  );

  return { categories, activeFilter, visibleProjects, selectFilter };
}
