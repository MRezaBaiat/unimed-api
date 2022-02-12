"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const mongoose_types_1 = require("../../mongoose-types");
let HealthCenter = class HealthCenter {
    constructor(name, address, type, percentage, priorities, shaba, priority) {
        this.name = name;
        this.address = address;
        this.type = type;
        this.percentage = percentage;
        this.priorities = priorities;
        this.shaba = shaba;
        this.priority = priority;
    }
};
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ require: true }),
    (0, tslib_1.__metadata)("design:type", String)
], HealthCenter.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ require: true }),
    (0, tslib_1.__metadata)("design:type", String)
], HealthCenter.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], HealthCenter.prototype, "logoUrl", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], HealthCenter.prototype, "wallpaperUrl", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ require: true }),
    (0, tslib_1.__metadata)("design:type", String)
], HealthCenter.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ require: true, default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], HealthCenter.prototype, "percentage", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: [String], require: true, default: [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], HealthCenter.prototype, "priorities", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ require: true }),
    (0, tslib_1.__metadata)("design:type", String)
], HealthCenter.prototype, "shaba", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ require: true, default: 1000000 }),
    (0, tslib_1.__metadata)("design:type", Number)
], HealthCenter.prototype, "priority", void 0);
HealthCenter = (0, tslib_1.__decorate)([
    (0, mongoose_types_1.Schema)(),
    (0, tslib_1.__metadata)("design:paramtypes", [String, String, String, Number, Array, String, Number])
], HealthCenter);
exports.default = HealthCenter;
;
