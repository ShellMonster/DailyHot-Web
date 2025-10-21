import { type PropType } from 'vue';
import type { PopoverProps } from '../../popover/src/Popover';
import type { ExtractPublicPropTypes } from '../../_utils';
export declare function createLineClampClass(clsPrefix: string): string;
export declare function createCursorClass(clsPrefix: string, cursor: string): string;
export declare const ellipsisProps: {
    readonly expandTrigger: PropType<"click">;
    readonly lineClamp: PropType<string | number>;
    readonly tooltip: {
        readonly type: PropType<PopoverProps | boolean>;
        readonly default: true;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
};
export type EllipsisProps = ExtractPublicPropTypes<typeof ellipsisProps>;
declare const _default: import("vue").DefineComponent<{
    readonly expandTrigger: PropType<"click">;
    readonly lineClamp: PropType<string | number>;
    readonly tooltip: {
        readonly type: PropType<PopoverProps | boolean>;
        readonly default: true;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
}, {
    mergedTheme: import("vue").ComputedRef<{
        common: import("../..").ThemeCommonVars;
        self: unknown;
        peers: {
            Tooltip: import("../../_mixins").Theme<"Tooltip", {
                borderRadius: string;
                boxShadow: string;
                color: string;
                textColor: string;
                padding: string;
            }, {
                Popover: import("../../_mixins").Theme<"Popover", {
                    fontSize: string;
                    borderRadius: string;
                    color: string;
                    dividerColor: string;
                    textColor: string;
                    boxShadow: string;
                    space: string;
                    spaceArrow: string;
                    arrowOffset: string;
                    arrowOffsetVertical: string;
                    arrowHeight: string;
                    padding: string;
                }, any>;
            }>;
        };
        peerOverrides: {
            Tooltip?: {
                peers?: {
                    Popover?: import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Popover", {
                        fontSize: string;
                        borderRadius: string;
                        color: string;
                        dividerColor: string;
                        textColor: string;
                        boxShadow: string;
                        space: string;
                        spaceArrow: string;
                        arrowOffset: string;
                        arrowOffsetVertical: string;
                        arrowHeight: string;
                        padding: string;
                    }, any>> | undefined;
                } | undefined;
            } | undefined;
        };
    }>;
    triggerRef: import("vue").Ref<HTMLElement | null>;
    triggerInnerRef: import("vue").Ref<HTMLElement | null>;
    tooltipRef: import("vue").Ref<{
        syncPosition: () => void;
        setShow: (value: boolean) => void;
    } | null>;
    handleClick: import("vue").ComputedRef<(() => void) | undefined>;
    renderTrigger: () => JSX.Element;
    getTooltipDisabled: () => boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly expandTrigger: PropType<"click">;
    readonly lineClamp: PropType<string | number>;
    readonly tooltip: {
        readonly type: PropType<PopoverProps | boolean>;
        readonly default: true;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Ellipsis", unknown, {
        Tooltip: import("../../_mixins").Theme<"Tooltip", {
            borderRadius: string;
            boxShadow: string;
            color: string;
            textColor: string;
            padding: string;
        }, {
            Popover: import("../../_mixins").Theme<"Popover", {
                fontSize: string;
                borderRadius: string;
                color: string;
                dividerColor: string;
                textColor: string;
                boxShadow: string;
                space: string;
                spaceArrow: string;
                arrowOffset: string;
                arrowOffsetVertical: string;
                arrowHeight: string;
                padding: string;
            }, any>;
        }>;
    }>>>;
}>>, {
    readonly tooltip: boolean | PopoverProps;
}, {}>;
export default _default;
