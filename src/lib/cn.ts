type ClassValue = string | number | null | undefined | false | ClassValue[];

/**
 * Junta classes CSS ignorando valores falsos.
 * cn('base', isActive && 'ativo') => "base ativo"
 */
export function cn(...values: ClassValue[]): string {
  const output: string[] = [];

  for (const value of values) {
    if (!value && value !== 0) continue;

    if (Array.isArray(value)) {
      const nested = cn(...value);
      if (nested) output.push(nested);
      continue;
    }

    output.push(String(value));
  }

  return output.join(' ');
}
