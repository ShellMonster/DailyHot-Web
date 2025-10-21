"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lightTheme = void 0;
// The file is for internal usage, do not export it, since all the components
// have default light theme.
const common_1 = require("../_styles/common");
const styles_1 = require("../alert/styles");
const styles_2 = require("../anchor/styles");
const styles_3 = require("../auto-complete/styles");
const styles_4 = require("../avatar/styles");
const styles_5 = require("../avatar-group/styles");
const styles_6 = require("../back-top/styles");
const styles_7 = require("../badge/styles");
const styles_8 = require("../breadcrumb/styles");
const styles_9 = require("../button/styles");
const styles_10 = require("../button-group/styles");
const styles_11 = require("../calendar/styles");
const styles_12 = require("../card/styles");
const styles_13 = require("../carousel/styles");
const styles_14 = require("../cascader/styles");
const styles_15 = require("../checkbox/styles");
const styles_16 = require("../code/styles");
const styles_17 = require("../collapse/styles");
const styles_18 = require("../collapse-transition/styles");
const styles_19 = require("../color-picker/styles");
const styles_20 = require("../data-table/styles");
const styles_21 = require("../date-picker/styles");
const styles_22 = require("../descriptions/styles");
const styles_23 = require("../dialog/styles");
const styles_24 = require("../divider/styles");
const styles_25 = require("../drawer/styles");
const styles_26 = require("../dropdown/styles");
const styles_27 = require("../dynamic-input/styles");
const styles_28 = require("../dynamic-tags/styles");
const styles_29 = require("../element/styles");
const styles_30 = require("../ellipsis/styles");
const styles_31 = require("../empty/styles");
const styles_32 = require("../equation/styles");
const styles_33 = require("../form/styles");
const styles_34 = require("../float-button/styles");
const styles_35 = require("../gradient-text/styles");
const styles_36 = require("../icon/styles");
const styles_37 = require("../icon-wrapper/styles");
const styles_38 = require("../image/styles");
const styles_39 = require("../input/styles");
const styles_40 = require("../input-number/styles");
const styles_41 = require("../layout/styles");
const styles_42 = require("../legacy-transfer/styles");
const styles_43 = require("../list/styles");
const styles_44 = require("../loading-bar/styles");
const styles_45 = require("../log/styles");
const styles_46 = require("../menu/styles");
const styles_47 = require("../mention/styles");
const styles_48 = require("../message/styles");
const styles_49 = require("../modal/styles");
const styles_50 = require("../notification/styles");
const styles_51 = require("../page-header/styles");
const styles_52 = require("../pagination/styles");
const styles_53 = require("../popconfirm/styles");
const styles_54 = require("../popover/styles");
const styles_55 = require("../popselect/styles");
const styles_56 = require("../progress/styles");
const styles_57 = require("../qr-code/styles");
const styles_58 = require("../radio/styles");
const styles_59 = require("../rate/styles");
const styles_60 = require("../result/styles");
const styles_61 = require("../legacy-grid/styles");
const styles_62 = require("../_internal/scrollbar/styles");
const styles_63 = require("../select/styles");
const styles_64 = require("../skeleton/styles");
const styles_65 = require("../slider/styles");
const styles_66 = require("../space/styles");
const styles_67 = require("../spin/styles");
const styles_68 = require("../statistic/styles");
const styles_69 = require("../steps/styles");
const styles_70 = require("../switch/styles");
const styles_71 = require("../table/styles");
const styles_72 = require("../tabs/styles");
const styles_73 = require("../tag/styles");
const styles_74 = require("../thing/styles");
const styles_75 = require("../time-picker/styles");
const styles_76 = require("../timeline/styles");
const styles_77 = require("../tooltip/styles");
const styles_78 = require("../transfer/styles");
const styles_79 = require("../typography/styles");
const styles_80 = require("../tree/styles");
const styles_81 = require("../tree-select/styles");
const styles_82 = require("../upload/styles");
const styles_83 = require("../watermark/styles");
const styles_84 = require("../split/styles");
const styles_85 = require("../flex/styles");
const styles_86 = require("../float-button-group/styles");
exports.lightTheme = {
    name: 'light',
    common: common_1.commonLight,
    Alert: styles_1.alertLight,
    Anchor: styles_2.anchorLight,
    AutoComplete: styles_3.autoCompleteLight,
    Avatar: styles_4.avatarLight,
    AvatarGroup: styles_5.avatarGroupLight,
    BackTop: styles_6.backTopLight,
    Badge: styles_7.badgeLight,
    Breadcrumb: styles_8.breadcrumbLight,
    Button: styles_9.buttonLight,
    ButtonGroup: styles_10.buttonGroupLight,
    Calendar: styles_11.calendarLight,
    Card: styles_12.cardLight,
    Carousel: styles_13.carouselLight,
    Cascader: styles_14.cascaderLight,
    Checkbox: styles_15.checkboxLight,
    Code: styles_16.codeLight,
    Collapse: styles_17.collapseLight,
    CollapseTransition: styles_18.collapseTransitionLight,
    ColorPicker: styles_19.colorPickerLight,
    DataTable: styles_20.dataTableLight,
    DatePicker: styles_21.datePickerLight,
    Descriptions: styles_22.descriptionsLight,
    Dialog: styles_23.dialogLight,
    Divider: styles_24.dividerLight,
    Drawer: styles_25.drawerLight,
    Dropdown: styles_26.dropdownLight,
    DynamicInput: styles_27.dynamicInputLight,
    DynamicTags: styles_28.dynamicTagsLight,
    Element: styles_29.elementLight,
    Empty: styles_31.emptyLight,
    Equation: styles_32.equationLight,
    Ellipsis: styles_30.ellipsisLight,
    Flex: styles_85.flexLight,
    Form: styles_33.formLight,
    GradientText: styles_35.gradientTextLight,
    Icon: styles_36.iconLight,
    IconWrapper: styles_37.iconWrapperLight,
    Image: styles_38.imageLight,
    Input: styles_39.inputLight,
    InputNumber: styles_40.inputNumberLight,
    Layout: styles_41.layoutLight,
    LegacyTransfer: styles_42.legacyTransferLight,
    List: styles_43.listLight,
    LoadingBar: styles_44.loadingBarLight,
    Log: styles_45.logLight,
    Menu: styles_46.menuLight,
    Mention: styles_47.mentionLight,
    Message: styles_48.messageLight,
    Modal: styles_49.modalLight,
    Notification: styles_50.notificationLight,
    PageHeader: styles_51.pageHeaderLight,
    Pagination: styles_52.paginationLight,
    Popconfirm: styles_53.popconfirmLight,
    Popover: styles_54.popoverLight,
    Popselect: styles_55.popselectLight,
    Progress: styles_56.progressLight,
    QrCode: styles_57.qrcodeLight,
    Radio: styles_58.radioLight,
    Rate: styles_59.rateLight,
    Row: styles_61.rowLight,
    Result: styles_60.resultLight,
    Scrollbar: styles_62.scrollbarLight,
    Skeleton: styles_64.skeletonLight,
    Select: styles_63.selectLight,
    Slider: styles_65.sliderLight,
    Space: styles_66.spaceLight,
    Spin: styles_67.spinLight,
    Statistic: styles_68.statisticLight,
    Steps: styles_69.stepsLight,
    Switch: styles_70.switchLight,
    Table: styles_71.tableLight,
    Tabs: styles_72.tabsLight,
    Tag: styles_73.tagLight,
    Thing: styles_74.thingLight,
    TimePicker: styles_75.timePickerLight,
    Timeline: styles_76.timelineLight,
    Tooltip: styles_77.tooltipLight,
    Transfer: styles_78.transferLight,
    Tree: styles_80.treeLight,
    TreeSelect: styles_81.treeSelectLight,
    Typography: styles_79.typographyLight,
    Upload: styles_82.uploadLight,
    Watermark: styles_83.watermarkLight,
    Split: styles_84.splitLight,
    FloatButton: styles_34.floatButtonLight,
    FloatButtonGroup: styles_86.floatButtonGroupLight
};
