/// <reference types="react-native/types/modules/codegen" />
/// <reference types="react-native/codegen" />
import type { ColorValue, ViewProps } from 'react-native';
import type { Float } from 'react-native/Libraries/Types/CodegenTypes';
interface MarkdownStyle {
    syntax: {
        color: ColorValue;
    };
    link: {
        color: ColorValue;
    };
    h1: {
        fontSize: Float;
        color: ColorValue;
    };
    h2: {
        fontSize: Float;
        color: ColorValue;
    };
    h3: {
        fontSize: Float;
        color: ColorValue;
    };
    h4: {
        fontSize: Float;
        color: ColorValue;
    };
    h5: {
        fontSize: Float;
        color: ColorValue;
    };
    h6: {
        fontSize: Float;
        color: ColorValue;
    };
    blockquote: {
        borderColor: ColorValue;
        borderWidth: Float;
        marginLeft: Float;
        paddingLeft: Float;
    };
    code: {
        fontFamily: string;
        color: ColorValue;
        backgroundColor: ColorValue;
    };
    pre: {
        fontFamily: string;
        color: ColorValue;
        backgroundColor: ColorValue;
    };
    mentionHere: {
        color: ColorValue;
        backgroundColor: ColorValue;
    };
    mentionUser: {
        color: ColorValue;
        backgroundColor: ColorValue;
    };
}
interface NativeProps extends ViewProps {
    markdownStyle: MarkdownStyle;
}
declare const _default: import("react-native/Libraries/Utilities/codegenNativeComponent").NativeComponentType<NativeProps>;
export default _default;
export type { MarkdownStyle };
//# sourceMappingURL=MarkdownTextInputDecoratorViewNativeComponent.d.ts.map