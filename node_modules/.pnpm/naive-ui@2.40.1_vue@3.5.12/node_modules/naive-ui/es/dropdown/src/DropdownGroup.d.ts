import { type PropType } from 'vue';
import type { TreeNode } from 'treemate';
import type { DropdownGroupOption, DropdownIgnoredOption, DropdownOption } from './interface';
declare const _default: import("vue").DefineComponent<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: PropType<TreeNode<DropdownOption, DropdownGroupOption, DropdownIgnoredOption>>;
        required: true;
    };
    parentKey: {
        type: PropType<string | number | null>;
        default: null;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNode: {
        type: PropType<TreeNode<DropdownOption, DropdownGroupOption, DropdownIgnoredOption>>;
        required: true;
    };
    parentKey: {
        type: PropType<string | number | null>;
        default: null;
    };
}>>, {
    parentKey: string | number | null;
}, {}>;
export default _default;
