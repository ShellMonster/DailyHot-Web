import type { CSSProperties, PropType, VNode } from 'vue';
export declare const highlightProps: {
    readonly highlightTag: {
        readonly type: StringConstructor;
        readonly default: "mark";
    };
    readonly caseSensitive: BooleanConstructor;
    readonly autoEscape: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly text: StringConstructor;
    readonly patterns: {
        readonly type: PropType<string[]>;
        readonly default: () => never[];
    };
    readonly highlightClass: StringConstructor;
    readonly highlightStyle: PropType<CSSProperties | string>;
};
declare const _default: import("vue").DefineComponent<{
    readonly highlightTag: {
        readonly type: StringConstructor;
        readonly default: "mark";
    };
    readonly caseSensitive: BooleanConstructor;
    readonly autoEscape: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly text: StringConstructor;
    readonly patterns: {
        readonly type: PropType<string[]>;
        readonly default: () => never[];
    };
    readonly highlightClass: StringConstructor;
    readonly highlightStyle: PropType<CSSProperties | string>;
}, {
    highlightedNode: import("vue").ComputedRef<VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>>;
    mergedClsPrefix: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    readonly highlightTag: {
        readonly type: StringConstructor;
        readonly default: "mark";
    };
    readonly caseSensitive: BooleanConstructor;
    readonly autoEscape: {
        readonly type: BooleanConstructor;
        readonly default: true;
    };
    readonly text: StringConstructor;
    readonly patterns: {
        readonly type: PropType<string[]>;
        readonly default: () => never[];
    };
    readonly highlightClass: StringConstructor;
    readonly highlightStyle: PropType<CSSProperties | string>;
}>>, {
    readonly highlightTag: string;
    readonly caseSensitive: boolean;
    readonly autoEscape: boolean;
    readonly patterns: string[];
}, {}>;
export default _default;
