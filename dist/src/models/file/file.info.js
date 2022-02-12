"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileMetaData = void 0;
const tslib_1 = require("tslib");
const mongoose_types_1 = require("../../mongoose-types");
class FileMetaData {
}
exports.FileMetaData = FileMetaData;
let FileInfo = class FileInfo {
};
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], FileInfo.prototype, "oldUrl", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], FileInfo.prototype, "url", void 0);
FileInfo = (0, tslib_1.__decorate)([
    (0, mongoose_types_1.Schema)()
], FileInfo);
exports.default = FileInfo;
