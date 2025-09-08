## rand-ru-slug

A generator of human-friendly random slugs in Russian, inspired by unique-username-generator.

---

### Installation

```bash
npm install "https://github.com/kalutskii/rand-ru-slug"
# or
pnpm add "https://github.com/kalutskii/rand-ru-slug"
# or
bun add "https://github.com/kalutskii/rand-ru-slug"
```

---

### Usage

```ts
import { dictionaries, generateSlug } from 'rand-ru-slug';

const slug = generateSlug([dictionaries.adjectives, dictionaries.animals]);
console.log(slug);
// example: "добрый-кролик"
```

By default, the slug is composed of an adjective and a noun (animal).

---

### Customization

You can provide your own dictionaries or change the separator:

```ts
import { generateSlug } from 'rand-ru-slug';

const slug = generateSlug(['red', 'blue'], ['chair', 'table'], { sep: '_' });

console.log(slug);
// example: "blue_chair"
```

---

### Default Dictionaries

- `adjectives-ru` — adjectives
- `animals-ru` — animals
