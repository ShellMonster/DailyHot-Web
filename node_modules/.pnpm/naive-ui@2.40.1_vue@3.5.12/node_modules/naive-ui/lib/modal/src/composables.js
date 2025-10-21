"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModal = useModal;
exports.useModalReactiveList = useModalReactiveList;
const vue_1 = require("vue");
const _utils_1 = require("../../_utils");
const context_1 = require("./context");
function useModal() {
    const modal = (0, vue_1.inject)(context_1.modalApiInjectionKey, null);
    if (modal === null) {
        (0, _utils_1.throwError)('use-modal', 'No outer <n-modal-provider /> founded.');
    }
    return modal;
}
function useModalReactiveList() {
    const modalReactiveList = (0, vue_1.inject)(context_1.modalReactiveListInjectionKey, null);
    if (modalReactiveList === null) {
        (0, _utils_1.throwError)('use-modal-reactive-list', 'No outer <n-modal-provider /> founded.');
    }
    return modalReactiveList;
}
