"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongoose_types_1 = require("../../mongoose-types");
let DiscountCoupon = class DiscountCoupon {
    constructor(title, code, amount, startDate, endDate, perUserLimit, totalUsageLimit) {
        this.title = title;
        this.code = code;
        this.amount = amount;
        this.startDate = startDate;
        this.endDate = endDate;
        this.perUserLimit = perUserLimit;
        this.totalUsageLimit = totalUsageLimit;
    }
};
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], DiscountCoupon.prototype, "title", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true, unique: true, index: true }),
    (0, tslib_1.__metadata)("design:type", String)
], DiscountCoupon.prototype, "code", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], DiscountCoupon.prototype, "amount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date, required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], DiscountCoupon.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date, required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], DiscountCoupon.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], DiscountCoupon.prototype, "perUserLimit", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], DiscountCoupon.prototype, "totalUsageLimit", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: [String], required: true, default: [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], DiscountCoupon.prototype, "usages", void 0);
DiscountCoupon = (0, tslib_1.__decorate)([
    (0, mongoose_types_1.Schema)(),
    (0, tslib_1.__metadata)("design:paramtypes", [String, String, Number, String, String, Number, Number])
], DiscountCoupon);
exports.default = DiscountCoupon;
