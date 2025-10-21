"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useModalReactiveList = exports.useModal = exports.modalProviderProps = exports.NModalProvider = exports.modalProps = exports.NModal = void 0;
var Modal_1 = require("./src/Modal");
Object.defineProperty(exports, "NModal", { enumerable: true, get: function () { return __importDefault(Modal_1).default; } });
Object.defineProperty(exports, "modalProps", { enumerable: true, get: function () { return Modal_1.modalProps; } });
var ModalProvider_1 = require("./src/ModalProvider");
Object.defineProperty(exports, "NModalProvider", { enumerable: true, get: function () { return ModalProvider_1.NModalProvider; } });
Object.defineProperty(exports, "modalProviderProps", { enumerable: true, get: function () { return ModalProvider_1.modalProviderProps; } });
var composables_1 = require("./src/composables");
Object.defineProperty(exports, "useModal", { enumerable: true, get: function () { return composables_1.useModal; } });
Object.defineProperty(exports, "useModalReactiveList", { enumerable: true, get: function () { return composables_1.useModalReactiveList; } });
