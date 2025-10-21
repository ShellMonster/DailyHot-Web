import { type ExtractPropTypes, type PropType, type Ref, type Slots } from 'vue';
import type { ExtractPublicPropTypes, MaybeArray } from '../../_utils';
import type { OnItemHeaderClick, OnUpdateExpandedNames } from './interface';
export declare const collapseProps: {
    readonly defaultExpandedNames: {
        readonly type: PropType<string | number | Array<string | number> | null>;
        readonly default: null;
    };
    readonly expandedNames: PropType<string | number | Array<string | number> | null>;
    readonly arrowPlacement: {
        readonly type: PropType<"left" | "right">;
        readonly default: "left";
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly displayDirective: {
        readonly type: PropType<"if" | "show">;
        readonly default: "if";
    };
    readonly triggerAreas: {
        readonly type: PropType<Array<"main" | "extra" | "arrow">>;
        readonly default: () => string[];
    };
    readonly onItemHeaderClick: PropType<MaybeArray<OnItemHeaderClick>>;
    readonly 'onUpdate:expandedNames': PropType<MaybeArray<OnUpdateExpandedNames>>;
    readonly onUpdateExpandedNames: PropType<MaybeArray<OnUpdateExpandedNames>>;
    readonly onExpandedNamesChange: {
        readonly type: PropType<MaybeArray<OnUpdateExpandedNames> | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>>;
};
export type CollapseProps = ExtractPublicPropTypes<typeof collapseProps>;
export interface NCollapseInjection {
    props: ExtractPropTypes<typeof collapseProps>;
    expandedNamesRef: Ref<string | number | Array<string | number> | null>;
    mergedClsPrefixRef: Ref<string>;
    slots: Slots;
    toggleItem: (collapse: boolean, name: string | number, event: MouseEvent) => void;
}
export declare const collapseInjectionKey: import("vue").InjectionKey<NCollapseInjection>;
declare const _default: import("vue").DefineComponent<{
    readonly defaultExpandedNames: {
        readonly type: PropType<string | number | Array<string | number> | null>;
        readonly default: null;
    };
    readonly expandedNames: PropType<string | number | Array<string | number> | null>;
    readonly arrowPlacement: {
        readonly type: PropType<"left" | "right">;
        readonly default: "left";
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly displayDirective: {
        readonly type: PropType<"if" | "show">;
        readonly default: "if";
    };
    readonly triggerAreas: {
        readonly type: PropType<Array<"main" | "extra" | "arrow">>;
        readonly default: () => string[];
    };
    readonly onItemHeaderClick: PropType<MaybeArray<OnItemHeaderClick>>;
    readonly 'onUpdate:expandedNames': PropType<MaybeArray<OnUpdateExpandedNames>>;
    readonly onUpdateExpandedNames: PropType<MaybeArray<OnUpdateExpandedNames>>;
    readonly onExpandedNamesChange: {
        readonly type: PropType<MaybeArray<OnUpdateExpandedNames> | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>>;
}, {
    rtlEnabled: Ref<import("../../config-provider/src/internal-interface").RtlItem | undefined> | undefined;
    mergedTheme: import("vue").ComputedRef<{
        common: import("../..").ThemeCommonVars;
        self: {
            titleFontSize: string;
            titleFontWeight: string;
            dividerColor: string;
            titleTextColor: string;
            titleTextColorDisabled: string;
            fontSize: string;
            textColor: string;
            arrowColor: string;
            arrowColorDisabled: string;
            itemMargin: string;
            titlePadding: string;
        };
        peers: any;
        peerOverrides: {
            [x: string]: any;
        };
    }>;
    mergedClsPrefix: Ref<string>;
    cssVars: import("vue").ComputedRef<{
        '--n-font-size': string;
        '--n-bezier': string;
        '--n-text-color': string;
        '--n-divider-color': string;
        '--n-title-padding': string;
        '--n-title-font-size': string;
        '--n-title-text-color': string;
        '--n-title-text-color-disabled': string;
        '--n-title-font-weight': string;
        '--n-arrow-color': string;
        '--n-arrow-color-disabled': string;
        '--n-item-margin': string;
    }> | undefined;
    themeClass: Ref<string> | undefined;
    onRender: (() => void) | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<ExtractPropTypes<{
    readonly defaultExpandedNames: {
        readonly type: PropType<string | number | Array<string | number> | null>;
        readonly default: null;
    };
    readonly expandedNames: PropType<string | number | Array<string | number> | null>;
    readonly arrowPlacement: {
        readonly type: PropType<"left" | "right">;
        readonly default: "left";
    };
    readonly accordion: {
        readonly type: BooleanConstructor;
        readonly default: false;
    };
    readonly displayDirective: {
        readonly type: PropType<"if" | "show">;
        readonly default: "if";
    };
    readonly triggerAreas: {
        readonly type: PropType<Array<"main" | "extra" | "arrow">>;
        readonly default: () => string[];
    };
    readonly onItemHeaderClick: PropType<MaybeArray<OnItemHeaderClick>>;
    readonly 'onUpdate:expandedNames': PropType<MaybeArray<OnUpdateExpandedNames>>;
    readonly onUpdateExpandedNames: PropType<MaybeArray<OnUpdateExpandedNames>>;
    readonly onExpandedNamesChange: {
        readonly type: PropType<MaybeArray<OnUpdateExpandedNames> | undefined>;
        readonly validator: () => boolean;
        readonly default: undefined;
    };
    readonly theme: PropType<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>;
    readonly themeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>>;
    readonly builtinThemeOverrides: PropType<import("../../_mixins/use-theme").ExtractThemeOverrides<import("../../_mixins").Theme<"Collapse", {
        titleFontSize: string;
        titleFontWeight: string;
        dividerColor: string;
        titleTextColor: string;
        titleTextColorDisabled: string;
        fontSize: string;
        textColor: string;
        arrowColor: string;
        arrowColorDisabled: string;
        itemMargin: string;
        titlePadding: string;
    }, any>>>;
}>>, {
    readonly displayDirective: "show" | "if";
    readonly defaultExpandedNames: string | number | (string | number)[] | null;
    readonly arrowPlacement: "left" | "right";
    readonly accordion: boolean;
    readonly triggerAreas: ("extra" | "main" | "arrow")[];
    readonly onExpandedNamesChange: MaybeArray<OnUpdateExpandedNames> | undefined;
}, {}>;
export default _default;
