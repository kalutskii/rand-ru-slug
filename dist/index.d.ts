declare const dictionaries: {
    adjectives: string[];
    animals: string[];
};

type GenerateOptions = {
    sep?: string;
};
declare function generate(parts: string[][], opts?: GenerateOptions): string;

export { type GenerateOptions, dictionaries, generate as generateSlug };
