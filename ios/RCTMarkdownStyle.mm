#import <RNLiveMarkdown/RCTMarkdownStyle.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTConversions.h>
#else
#import <React/RCTConvert.h>
#endif /* RCT_NEW_ARCH_ENABLED */

@implementation RCTMarkdownStyle

#ifdef RCT_NEW_ARCH_ENABLED

- (instancetype)initWithStruct:(const facebook::react::MarkdownTextInputDecoratorViewMarkdownStyleStruct &)style
{
  if (self = [super init]) {
    _syntaxColor = RCTUIColorFromSharedColor(style.syntax.color);

    _linkColor = RCTUIColorFromSharedColor(style.link.color);

    _h1FontSize = style.h1.fontSize;
    _h2FontSize = style.h2.fontSize;
    _h3FontSize = style.h3.fontSize;
    _h4FontSize = style.h4.fontSize;
    _h5FontSize = style.h5.fontSize;
    _h6FontSize = style.h6.fontSize;

    _blockquoteBorderColor = RCTUIColorFromSharedColor(style.blockquote.borderColor);
    _blockquoteBorderWidth = style.blockquote.borderWidth;
    _blockquoteMarginLeft = style.blockquote.marginLeft;
    _blockquotePaddingLeft = style.blockquote.paddingLeft;

    _codeFontFamily = RCTNSStringFromString(style.code.fontFamily);
    _codeColor = RCTUIColorFromSharedColor(style.code.color);
    _codeBackgroundColor = RCTUIColorFromSharedColor(style.code.backgroundColor);

    _preFontFamily = RCTNSStringFromString(style.pre.fontFamily);
    _preColor = RCTUIColorFromSharedColor(style.pre.color);
    _preBackgroundColor = RCTUIColorFromSharedColor(style.pre.backgroundColor);

    _mentionHereColor = RCTUIColorFromSharedColor(style.mentionHere.color);
    _mentionHereBackgroundColor = RCTUIColorFromSharedColor(style.mentionHere.backgroundColor);

    _mentionUserColor = RCTUIColorFromSharedColor(style.mentionUser.color);
    _mentionUserBackgroundColor = RCTUIColorFromSharedColor(style.mentionUser.backgroundColor);
  }

  return self;
}

#else

- (instancetype)initWithDictionary:(NSDictionary *)json
{
  if (self = [super init]) {
    _syntaxColor = [RCTConvert UIColor:json[@"syntax"][@"color"]];

    _linkColor = [RCTConvert UIColor:json[@"link"][@"color"]];

    _h1FontSize = [RCTConvert CGFloat:json[@"h1"][@"fontSize"]];
    _h1Color = [RCTConvert UIColor:json[@"h1"][@"color"]];
    _h2FontSize = [RCTConvert CGFloat:json[@"h2"][@"fontSize"]];
    _h2Color = [RCTConvert UIColor:json[@"h2"][@"color"]];
    _h3FontSize = [RCTConvert CGFloat:json[@"h3"][@"fontSize"]];
    _h3Color = [RCTConvert UIColor:json[@"h3"][@"color"]];
    _h4FontSize = [RCTConvert CGFloat:json[@"h4"][@"fontSize"]];
    _h4Color = [RCTConvert UIColor:json[@"h4"][@"color"]];
    _h5FontSize = [RCTConvert CGFloat:json[@"h5"][@"fontSize"]];
    _h5Color = [RCTConvert UIColor:json[@"h5"][@"color"]];
    _h6FontSize = [RCTConvert CGFloat:json[@"h6"][@"fontSize"]];
    _h6Color = [RCTConvert UIColor:json[@"h6"][@"color"]];

    _blockquoteBorderColor = [RCTConvert UIColor:json[@"blockquote"][@"borderColor"]];
    _blockquoteBorderWidth = [RCTConvert CGFloat:json[@"blockquote"][@"borderWidth"]];
    _blockquoteMarginLeft = [RCTConvert CGFloat:json[@"blockquote"][@"marginLeft"]];
    _blockquotePaddingLeft = [RCTConvert CGFloat:json[@"blockquote"][@"paddingLeft"]];

    _codeFontFamily = [RCTConvert NSString:json[@"code"][@"fontFamily"]];
    _codeColor = [RCTConvert UIColor:json[@"code"][@"color"]];
    _codeBackgroundColor = [RCTConvert UIColor:json[@"code"][@"backgroundColor"]];

    _preFontFamily = [RCTConvert NSString:json[@"pre"][@"fontFamily"]];
    _preColor = [RCTConvert UIColor:json[@"pre"][@"color"]];
    _preBackgroundColor = [RCTConvert UIColor:json[@"pre"][@"backgroundColor"]];

    _mentionHereColor = [RCTConvert UIColor:json[@"mentionHere"][@"color"]];
    _mentionHereBackgroundColor = [RCTConvert UIColor:json[@"mentionHere"][@"backgroundColor"]];

    _mentionUserColor = [RCTConvert UIColor:json[@"mentionUser"][@"color"]];
    _mentionUserBackgroundColor = [RCTConvert UIColor:json[@"mentionUser"][@"backgroundColor"]];
  }

  return self;
}

#endif /* RCT_NEW_ARCH_ENABLED */

@end
