import { normalizeRu } from '../utilities/normalize.utils';
import { pick } from '../utilities/random.utils';

type GenerateOptions = {
  sep?: string;
};

function generate(parts: string[][], opts: GenerateOptions = {}): string {
  // Generates a random slug by picking one element from each array in parts and joining them with an optional separator
  // The resulting slug is normalized to be URL/username friendly using normalizeRu, which handles Cyrillic characters.

  const { sep = '' } = opts;

  if (!Array.isArray(parts) || parts.length === 0) {
    throw new Error('Wrong parts argument: expected non-empty string[][]');
  }

  // Validate and pick one element from each non-empty array
  const chosen: string[] = [];

  for (const group of parts) {
    chosen.push(pick(group));
  }

  const raw = chosen.join(sep);
  return normalizeRu(raw, sep);
}

export type { GenerateOptions };
export { generate };
