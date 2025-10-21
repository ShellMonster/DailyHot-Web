import { type CSSProperties, type PropType, type Ref } from 'vue';
import type { TreeNode } from 'treemate';
import type { DropdownGroupOption, DropdownIgnoredOption, DropdownOption } from './interface';
export interface NDropdownMenuInjection {
    showIconRef: Ref<boolean>;
    hasSubmenuRef: Ref<boolean>;
}
declare const _default: import("vue").DefineComponent<{
    scrollable: BooleanConstructor;
    showArrow: BooleanConstructor;
    arrowStyle: PropType<string | CSSProperties>;
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNodes: {
        type: PropType<Array<TreeNode<DropdownOption, DropdownGroupOption, DropdownIgnoredOption>>>;
        default: () => never[];
    };
    parentKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}, {
    bodyRef: Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    scrollable: BooleanConstructor;
    showArrow: BooleanConstructor;
    arrowStyle: PropType<string | CSSProperties>;
    clsPrefix: {
        type: StringConstructor;
        required: true;
    };
    tmNodes: {
        type: PropType<Array<TreeNode<DropdownOption, DropdownGroupOption, DropdownIgnoredOption>>>;
        default: () => never[];
    };
    parentKey: {
        type: (StringConstructor | NumberConstructor)[];
        default: null;
    };
}>>, {
    scrollable: boolean;
    showArrow: boolean;
    parentKey: string | number;
    tmNodes: TreeNode<import("../..").MenuOption, import("../..").MenuGroupOption, import("../../menu/src/interface").MenuIgnoredOption>[];
}, {}>;
export default _default;
