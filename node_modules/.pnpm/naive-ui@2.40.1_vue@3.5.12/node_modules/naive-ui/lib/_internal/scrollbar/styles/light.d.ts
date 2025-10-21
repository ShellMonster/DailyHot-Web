import type { ThemeCommonVars } from '../../../_styles/common';
import type { Theme } from '../../../_mixins';
export declare function self(vars: ThemeCommonVars): {
    height: string;
    width: string;
    borderRadius: string;
    color: string;
    colorHover: string;
    railInsetHorizontalBottom: string;
    railInsetHorizontalTop: string;
    railInsetVerticalRight: string;
    railInsetVerticalLeft: string;
    railColor: string;
};
export type ScrollbarThemeVars = ReturnType<typeof self>;
declare const scrollbarLight: Theme<'Scrollbar', ScrollbarThemeVars>;
export default scrollbarLight;
export type ScrollbarTheme = typeof scrollbarLight;
