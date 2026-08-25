import { existsSync } from 'node:fs';
import { join } from 'node:path';

import { describe, expect, it } from 'vitest';

import { projects } from '@/content/projects';
import { getProjectImages } from '@/lib/projects';

const PUBLIC_DIR = join(process.cwd(), 'public');

/**
 * Rede de segurança contra erro de digitação no caminho da imagem:
 * roda `npm test` depois de adicionar fotos e o teste aponta o arquivo faltando.
 */
describe('imagens declaradas em src/content/projects.ts', () => {
  for (const project of projects) {
    for (const image of getProjectImages(project)) {
      it(`${project.slug}: ${image.src} existe em public/`, () => {
        expect(image.src.startsWith('/')).toBe(true);
        expect(existsSync(join(PUBLIC_DIR, image.src))).toBe(true);
      });
    }
  }
});
