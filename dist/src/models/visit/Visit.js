"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const index_1 = require("../../../index");
const Enums_1 = require("../Enums");
const mongoose_types_1 = require("../../mongoose-types");
class ConversationType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: [String] }),
    (0, tslib_1.__metadata)("design:type", Array)
], ConversationType.prototype, "delivered", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => index_1.Chat }),
    (0, tslib_1.__metadata)("design:type", index_1.Chat)
], ConversationType.prototype, "chat", void 0);
class ReceiptType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], ReceiptType.prototype, "transaction_id", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ReceiptType.prototype, "total", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ReceiptType.prototype, "paid", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ReceiptType.prototype, "doctorCut", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ReceiptType.prototype, "discount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ReceiptType.prototype, "healthCenterCut", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }),
    (0, tslib_1.__metadata)("design:type", String)
], ReceiptType.prototype, "healthCenterId", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], ReceiptType.prototype, "return_transaction_id", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReceiptType.prototype, "settled", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReceiptType.prototype, "healthCenterSettled", void 0);
let Visit = class Visit {
};
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: mongoose_types_1.ObjectId, ref: 'users', required: true }),
    (0, tslib_1.__metadata)("design:type", index_1.User)
], Visit.prototype, "patient", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: mongoose_types_1.ObjectId, ref: 'users', required: true }),
    (0, tslib_1.__metadata)("design:type", index_1.User)
], Visit.prototype, "doctor", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: mongoose_types_1.ObjectId, ref: 'discount_coupons' }),
    (0, tslib_1.__metadata)("design:type", index_1.DiscountCoupon)
], Visit.prototype, "discount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true, default: Enums_1.VisitStatus.IN_QUEUE, index: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Visit.prototype, "state", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date }),
    (0, tslib_1.__metadata)("design:type", String)
], Visit.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date }),
    (0, tslib_1.__metadata)("design:type", String)
], Visit.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date, index: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Visit.prototype, "startDate", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date, index: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Visit.prototype, "endDate", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => [ConversationType], default: [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], Visit.prototype, "conversations", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => index_1.Rating }),
    (0, tslib_1.__metadata)("design:type", index_1.Rating)
], Visit.prototype, "rating", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ default: false }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Visit.prototype, "chatting", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Visit.prototype, "maxDurationMillisec", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => ReceiptType }),
    (0, tslib_1.__metadata)("design:type", ReceiptType)
], Visit.prototype, "receipt", void 0);
Visit = (0, tslib_1.__decorate)([
    (0, mongoose_types_1.Schema)({ timestamps: true })
], Visit);
exports.default = Visit;
