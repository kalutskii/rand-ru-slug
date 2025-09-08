function normalizeRu(input: string, sep: string): string {
  // Normalize the string to a slug suitable for URLs or usernames

  // Normalize to NFC form and replace 'ё' with 'е'
  let s = input.normalize('NFC').replace(/ё/g, 'е').replace(/Ё/g, 'Е');

  // Removes all characters except letters, numbers, spaces, hyphens, underscores and separator
  const allowed = new RegExp(`[^\\p{L}\\p{N}\\s\\-_${escapeReg(sep)}]`, 'gu');
  s = s.replace(allowed, ' ');

  // Replace spaces, hyphens and underscores with separator or remove them
  s = s.replace(/[\s\-_]+/g, sep || '');

  if (sep) {
    // Replace multiple separators with a single one and trim separators from the start and end
    const rep = new RegExp(`${escapeReg(sep)}{2,}`, 'g');
    s = s.replace(rep, sep);
    if (s.startsWith(sep)) s = s.slice(sep.length);
    if (s.endsWith(sep)) s = s.slice(0, -sep.length);
  }

  return s.toLowerCase();
}

function escapeReg(s: string): string {
  // Escapes special characters in a string for use in a regular expression

  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export { normalizeRu, escapeReg };
