"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const mongoose_types_1 = require("../../mongoose-types");
class IssuerType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], IssuerType.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], IssuerType.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], IssuerType.prototype, "name", void 0);
class TargetType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TargetType.prototype, "_id", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], TargetType.prototype, "name", void 0);
let Transaction = class Transaction {
    constructor(type, amount) {
        this.type = type;
        this.amount = amount;
    }
};
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "amount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "discount", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "doctorCut", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }),
    (0, tslib_1.__metadata)("design:type", Object)
], Transaction.prototype, "healthCenter", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], Transaction.prototype, "healthCenterCut", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => IssuerType }),
    (0, tslib_1.__metadata)("design:type", IssuerType)
], Transaction.prototype, "issuer", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => TargetType }),
    (0, tslib_1.__metadata)("design:type", TargetType)
], Transaction.prototype, "target", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "tracking_code", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "visit_id", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ default: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], Transaction.prototype, "hint", void 0);
Transaction = (0, tslib_1.__decorate)([
    (0, mongoose_types_1.Schema)({ timestamps: true }),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Number])
], Transaction);
exports.default = Transaction;
