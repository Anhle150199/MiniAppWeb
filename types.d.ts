// types.d.ts
export {};

declare global {
  interface String {
    toTitleCase(): string;
    toSentenceCase(): string;
    trimExtraSpaces(): string;
    convertToASCII(): string;
  }
}
