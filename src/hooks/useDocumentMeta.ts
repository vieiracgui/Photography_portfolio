import { useEffect } from 'react';

interface DocumentMeta {
  readonly title: string;
  readonly description: string;
}

function setMetaContent(selector: string, content: string): void {
  const element = document.querySelector<HTMLMetaElement>(selector);
  if (element) element.content = content;
}

/** Atualiza título e descrição da página conforme a rota. */
export function useDocumentMeta({ title, description }: DocumentMeta): void {
  useEffect(() => {
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
  }, [title, description]);
}
