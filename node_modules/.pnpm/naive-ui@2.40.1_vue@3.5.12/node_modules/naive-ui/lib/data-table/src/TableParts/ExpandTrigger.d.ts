import { type PropType } from 'vue';
import type { RenderExpandIcon, RowData } from '../interface';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    expanded: BooleanConstructor;
    loading: BooleanConstructor;
    onClick: {
        type: PropType<() => void>;
        required: true;
    };
    renderExpandIcon: {
        type: PropType<RenderExpandIcon>;
    };
    rowData: {
        type: PropType<RowData>;
        required: true;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    expanded: BooleanConstructor;
    loading: BooleanConstructor;
    onClick: {
        type: PropType<() => void>;
        required: true;
    };
    renderExpandIcon: {
        type: PropType<RenderExpandIcon>;
    };
    rowData: {
        type: PropType<RowData>;
        required: true;
    };
}>>, {
    expanded: boolean;
    loading: boolean;
}, {}>;
export default _default;
