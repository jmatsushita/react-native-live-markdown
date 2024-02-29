export {};

type MarkdownType = 'bold' | 'italic' | 'strikethrough' | 'mention-here' | 'mention-user' | 'link' | 'code' | 'pre' | 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'syntax';

type Range = {
  type: MarkdownType;
  start: number;
  length: number;
  depth?: number;
};

declare global {
  // eslint-disable-next-line no-var
  var parseExpensiMarkToRanges: (markdown: string) => Range[];
}
