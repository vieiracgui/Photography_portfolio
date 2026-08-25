/** Formata uma tag como hashtag: "arte digital" -> "#arte digital". */
export function toHashtag(tag: string): string {
  const clean = tag.trim().replace(/^#/, '');
  return `#${clean}`;
}

/** Ano atual, usado no rodapé. */
export function currentYear(): number {
  return new Date().getFullYear();
}
