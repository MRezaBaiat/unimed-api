"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const mongoose_types_1 = require("../../mongoose-types");
class MediaInfoType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], MediaInfoType.prototype, "width", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], MediaInfoType.prototype, "height", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], MediaInfoType.prototype, "duration", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], MediaInfoType.prototype, "orientation", void 0);
class Chat {
    constructor(text, sendStatus, type, createdAt) {
        this.text = text;
        this.sendStatus = sendStatus;
        this.type = type;
        this.createdAt = createdAt;
    }
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Chat.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Chat.prototype, "sender", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Chat.prototype, "text", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Chat.prototype, "sendStatus", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Chat.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date }),
    (0, tslib_1.__metadata)("design:type", String)
], Chat.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Chat.prototype, "url", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Chat.prototype, "fileSize", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Chat.prototype, "fileName", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => MediaInfoType }),
    (0, tslib_1.__metadata)("design:type", MediaInfoType)
], Chat.prototype, "mediaInfo", void 0);
exports.default = Chat;
