import { type PropType, type VNodeChild } from 'vue';
declare const _default: import("vue").DefineComponent<{
    size: {
        type: PropType<"small" | "medium" | "large">;
        required: true;
    };
    selectAllText: StringConstructor;
    clearText: StringConstructor;
    source: BooleanConstructor;
    onCheckedAll: PropType<() => void>;
    onClearAll: PropType<() => void>;
    title: PropType<string | (() => VNodeChild)>;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: PropType<"small" | "medium" | "large">;
        required: true;
    };
    selectAllText: StringConstructor;
    clearText: StringConstructor;
    source: BooleanConstructor;
    onCheckedAll: PropType<() => void>;
    onClearAll: PropType<() => void>;
    title: PropType<string | (() => VNodeChild)>;
}>>, {
    source: boolean;
}, {}>;
export default _default;
