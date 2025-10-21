import { type CSSProperties, type DirectiveArguments, type PropType } from 'vue';
import type { ScrollbarProps } from '../../_internal';
export type Placement = 'left' | 'right' | 'top' | 'bottom';
declare const _default: import("vue").DefineComponent<{
    blockScroll: BooleanConstructor;
    show: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    displayDirective: {
        type: PropType<"if" | "show">;
        required: true;
    };
    placement: {
        type: PropType<Placement>;
        required: true;
    };
    contentClass: StringConstructor;
    contentStyle: PropType<string | CSSProperties>;
    nativeScrollbar: {
        type: BooleanConstructor;
        required: true;
    };
    scrollbarProps: PropType<ScrollbarProps>;
    trapFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: PropType<boolean | "transparent">;
        required: true;
    };
    maxWidth: NumberConstructor;
    maxHeight: NumberConstructor;
    minWidth: NumberConstructor;
    minHeight: NumberConstructor;
    resizable: BooleanConstructor;
    onClickoutside: PropType<(e: MouseEvent) => void>;
    onAfterLeave: PropType<() => void>;
    onAfterEnter: PropType<() => void>;
    onEsc: PropType<(e: KeyboardEvent) => void>;
}, {
    bodyRef: import("vue").Ref<HTMLElement | null>;
    rtlEnabled: import("vue").Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    mergedClsPrefix: import("vue").Ref<string>;
    isMounted: import("vue").Ref<boolean>;
    mergedTheme: import("vue").Ref<{
        common: import("../..").ThemeCommonVars;
        self: {
            bodyPadding: string;
            borderRadius: string;
            headerPadding: string;
            footerPadding: string;
            color: string;
            textColor: string;
            titleTextColor: string;
            titleFontSize: string;
            titleFontWeight: string;
            boxShadow: string;
            lineHeight: string;
            headerBorderBottom: string;
            footerBorderTop: string;
            closeIconColor: string;
            closeIconColorHover: string;
            closeIconColorPressed: string;
            closeSize: string;
            closeIconSize: string;
            closeColorHover: string;
            closeColorPressed: string;
            closeBorderRadius: string;
            resizableTriggerColorHover: string;
        };
        peers: {
            Scrollbar: import("../../_mixins").Theme<"Scrollbar", {
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
            }, any>;
        };
        peerOverrides: {
            Scrollbar?: {
                peers?: {
                    [x: string]: any;
                } | undefined;
            } | undefined;
        };
    }>;
    displayed: import("vue").Ref<boolean>;
    transitionName: import("vue").ComputedRef<string>;
    handleAfterLeave: () => void;
    bodyDirectives: import("vue").ComputedRef<DirectiveArguments>;
    handleMousedownResizeTrigger: (e: MouseEvent) => void;
    handleMouseenterResizeTrigger: () => void;
    handleMouseleaveResizeTrigger: () => void;
    isDragging: import("vue").Ref<boolean>;
    isHoverOnResizeTrigger: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    blockScroll: BooleanConstructor;
    show: {
        type: PropType<boolean | undefined>;
        default: undefined;
    };
    displayDirective: {
        type: PropType<"if" | "show">;
        required: true;
    };
    placement: {
        type: PropType<Placement>;
        required: true;
    };
    contentClass: StringConstructor;
    contentStyle: PropType<string | CSSProperties>;
    nativeScrollbar: {
        type: BooleanConstructor;
        required: true;
    };
    scrollbarProps: PropType<ScrollbarProps>;
    trapFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoFocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMask: {
        type: PropType<boolean | "transparent">;
        required: true;
    };
    maxWidth: NumberConstructor;
    maxHeight: NumberConstructor;
    minWidth: NumberConstructor;
    minHeight: NumberConstructor;
    resizable: BooleanConstructor;
    onClickoutside: PropType<(e: MouseEvent) => void>;
    onAfterLeave: PropType<() => void>;
    onAfterEnter: PropType<() => void>;
    onEsc: PropType<(e: KeyboardEvent) => void>;
}>>, {
    show: boolean | undefined;
    autoFocus: boolean;
    resizable: boolean;
    trapFocus: boolean;
    blockScroll: boolean;
}, {}>;
export default _default;
