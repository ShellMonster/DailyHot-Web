"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.self = self;
const styles_1 = require("../../_internal/scrollbar/styles");
const styles_2 = require("../../dialog/styles");
const styles_3 = require("../../card/styles");
const common_1 = require("../../_styles/common");
const _mixins_1 = require("../../_mixins");
function self(vars) {
    const { modalColor, textColor2, boxShadow3 } = vars;
    return {
        color: modalColor,
        textColor: textColor2,
        boxShadow: boxShadow3
    };
}
const modalLight = (0, _mixins_1.createTheme)({
    name: 'Modal',
    common: common_1.commonLight,
    peers: {
        Scrollbar: styles_1.scrollbarLight,
        Dialog: styles_2.dialogLight,
        Card: styles_3.cardLight
    },
    self
});
exports.default = modalLight;
