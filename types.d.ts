// types.d.ts
export {};

declare global {
  interface String {
    toTitleCase(): string;
    toSentenceCase(): string;
  }
}
