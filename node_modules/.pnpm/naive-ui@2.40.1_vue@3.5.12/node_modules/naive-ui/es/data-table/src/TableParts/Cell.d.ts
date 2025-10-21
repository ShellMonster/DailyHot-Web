import { type PropType, type VNodeChild } from 'vue';
import type { MergedTheme } from '../../../_mixins';
import type { DataTableTheme } from '../../styles';
import type { InternalRowData, TableBaseColumn } from '../interface';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    row: {
        type: PropType<InternalRowData>;
        required: true;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
    column: {
        type: PropType<TableBaseColumn>;
        required: true;
    };
    isSummary: BooleanConstructor;
    mergedTheme: {
        type: PropType<MergedTheme<DataTableTheme>>;
        required: true;
    };
    renderCell: PropType<(value: any, rowData: object, column: any) => VNodeChild>;
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    row: {
        type: PropType<InternalRowData>;
        required: true;
    };
    index: {
        type: NumberConstructor;
        required: true;
    };
    column: {
        type: PropType<TableBaseColumn>;
        required: true;
    };
    isSummary: BooleanConstructor;
    mergedTheme: {
        type: PropType<MergedTheme<DataTableTheme>>;
        required: true;
    };
    renderCell: PropType<(value: any, rowData: object, column: any) => VNodeChild>;
}>>, {
    isSummary: boolean;
}, {}>;
export default _default;
