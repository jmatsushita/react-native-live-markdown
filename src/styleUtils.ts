import {Platform} from 'react-native';
import type * as MarkdownTextInputDecoractorView from './MarkdownTextInputDecoratorViewNativeComponent';

type MarkdownStyle = MarkdownTextInputDecoractorView.MarkdownStyle;

type PartialMarkdownStyle = Partial<{
  [K in keyof MarkdownStyle]: Partial<MarkdownStyle[K]>;
}>;

const FONT_FAMILY_MONOSPACE = Platform.select({
  ios: 'Courier',
  default: 'monospace',
});

function makeDefaultMarkdownStyle(): MarkdownStyle {
  return {
    syntax: {
      color: 'gray',
    },
    link: {
      color: 'blue',
    },
    h1: {
      fontSize: 25,
      color: 'black',
    },
    h2: {
      fontSize: 22,
      color: 'black',
    },
    h3: {
      fontSize: 20,
      color: 'black',
    },
    h4: {
      fontSize: 18,
      color: 'black',
    },
    h5: {
      fontSize: 16,
      color: 'black',
    },
    h6: {
      fontSize: 14,
      color: 'black',
    },
    blockquote: {
      borderColor: 'gray',
      borderWidth: 6,
      marginLeft: 6,
      paddingLeft: 6,
    },
    code: {
      fontFamily: FONT_FAMILY_MONOSPACE,
      color: 'black',
      backgroundColor: 'lightgray',
    },
    pre: {
      fontFamily: FONT_FAMILY_MONOSPACE,
      color: 'black',
      backgroundColor: 'lightgray',
    },
    mentionHere: {
      color: 'green',
      backgroundColor: 'lime',
    },
    mentionUser: {
      color: 'blue',
      backgroundColor: 'cyan',
    },
  };
}

function mergeMarkdownStyleWithDefault(input: PartialMarkdownStyle | undefined): MarkdownStyle {
  const output = makeDefaultMarkdownStyle();

  if (input !== undefined) {
    Object.keys(input).forEach((key) => {
      if (!(key in output)) {
        return;
      }
      Object.assign(output[key as keyof MarkdownStyle], input[key as keyof MarkdownStyle]);
    });
  }

  return output;
}

export type {PartialMarkdownStyle};

export {mergeMarkdownStyleWithDefault};
