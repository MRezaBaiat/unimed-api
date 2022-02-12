"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_types_1 = require("../../mongoose-types");
let MedicalService = class MedicalService {
    constructor(title, subTitle, details, price) {
        this.title = title;
        this.subTitle = subTitle;
        this.details = details;
        this.price = price;
    }
};
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], MedicalService.prototype, "logoUrl", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], MedicalService.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], MedicalService.prototype, "subTitle", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], MedicalService.prototype, "details", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], MedicalService.prototype, "price", void 0);
MedicalService = (0, tslib_1.__decorate)([
    (0, mongoose_types_1.Schema)(),
    (0, tslib_1.__metadata)("design:paramtypes", [String, String, String, Number])
], MedicalService);
exports.default = MedicalService;
