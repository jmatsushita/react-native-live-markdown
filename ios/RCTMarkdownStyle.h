#ifdef RCT_NEW_ARCH_ENABLED
#import <react/renderer/components/RNLiveMarkdownSpec/Props.h>
#endif /* RCT_NEW_ARCH_ENABLED */

NS_ASSUME_NONNULL_BEGIN

@interface RCTMarkdownStyle : NSObject

@property (nonatomic) UIColor *syntaxColor;
@property (nonatomic) UIColor *linkColor;
@property (nonatomic) CGFloat h1FontSize;
@property (nonatomic) UIColor *h1Color;
@property (nonatomic) CGFloat h2FontSize;
@property (nonatomic) UIColor *h2Color;
@property (nonatomic) CGFloat h3FontSize;
@property (nonatomic) UIColor *h3Color;
@property (nonatomic) CGFloat h4FontSize;
@property (nonatomic) UIColor *h4Color;
@property (nonatomic) CGFloat h5FontSize;
@property (nonatomic) UIColor *h5Color;
@property (nonatomic) CGFloat h6FontSize;
@property (nonatomic) UIColor *h6Color;
@property (nonatomic) UIColor *blockquoteBorderColor;
@property (nonatomic) CGFloat blockquoteBorderWidth;
@property (nonatomic) CGFloat blockquoteMarginLeft;
@property (nonatomic) CGFloat blockquotePaddingLeft;
@property (nonatomic) NSString *codeFontFamily;
@property (nonatomic) UIColor *codeColor;
@property (nonatomic) UIColor *codeBackgroundColor;
@property (nonatomic) NSString *preFontFamily;
@property (nonatomic) UIColor *preColor;
@property (nonatomic) UIColor *preBackgroundColor;
@property (nonatomic) UIColor *mentionHereColor;
@property (nonatomic) UIColor *mentionHereBackgroundColor;
@property (nonatomic) UIColor *mentionUserColor;
@property (nonatomic) UIColor *mentionUserBackgroundColor;

#ifdef RCT_NEW_ARCH_ENABLED
- (instancetype)initWithStruct:(const facebook::react::MarkdownTextInputDecoratorViewMarkdownStyleStruct &)style;
#else
- (instancetype)initWithDictionary:(NSDictionary *)json;
#endif /* RCT_NEW_ARCH_ENABLED */

@end

NS_ASSUME_NONNULL_END
