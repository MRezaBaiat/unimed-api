"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Enums_1 = require("../Enums");
const index_1 = require("../../../index");
const WorkTimes_1 = (0, tslib_1.__importDefault)(require("./WorkTimes"));
const mongoose_types_1 = require("../../mongoose-types");
const class_transformer_1 = require("class-transformer/");
class NotificationSettings {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], NotificationSettings.prototype, "notification", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], NotificationSettings.prototype, "sms", void 0);
class SettingsType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: { newPatient: () => NotificationSettings, workTimeClose: () => NotificationSettings, workTimeEnded: () => NotificationSettings, workTimeStarted: () => NotificationSettings } }),
    (0, tslib_1.__metadata)("design:type", Object)
], SettingsType.prototype, "notifications", void 0);
;
class ReservationCoordinatesType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ReservationCoordinatesType.prototype, "lat", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ReservationCoordinatesType.prototype, "lng", void 0);
class WorkTimesType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WorkTimesType.prototype, "from", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], WorkTimesType.prototype, "to", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: [String] }),
    (0, tslib_1.__metadata)("design:type", Array)
], WorkTimesType.prototype, "exceptions", void 0);
class ReservationInfoDetailsType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], ReservationInfoDetailsType.prototype, "enabled", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], ReservationInfoDetailsType.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], ReservationInfoDetailsType.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], ReservationInfoDetailsType.prototype, "gapMinutes", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], ReservationInfoDetailsType.prototype, "cost", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: false }),
    (0, tslib_1.__metadata)("design:type", ReservationCoordinatesType)
], ReservationInfoDetailsType.prototype, "coordinates", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true, type: {
            saturday: { type: WorkTimesType, required: true },
            sunday: { type: WorkTimesType, required: true },
            monday: { type: WorkTimesType, required: true },
            tuesday: { type: WorkTimesType, required: true },
            wednesday: { type: WorkTimesType, required: true },
            thursday: { type: WorkTimesType, required: true },
            friday: { type: WorkTimesType, required: true }
        } }),
    (0, tslib_1.__metadata)("design:type", WorkTimes_1.default)
], ReservationInfoDetailsType.prototype, "workTimes", void 0);
class ResponseDaysDetailsType {
}
class DetailsType {
}
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", ReservationInfoDetailsType)
], DetailsType.prototype, "reservationInfo", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], DetailsType.prototype, "phone", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], DetailsType.prototype, "address", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], DetailsType.prototype, "videoCallAllowed", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], DetailsType.prototype, "bio", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true, default: true }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], DetailsType.prototype, "displayInList", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", Number)
], DetailsType.prototype, "maxVisitDurationMillisec", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], DetailsType.prototype, "city", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], DetailsType.prototype, "shaba", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], DetailsType.prototype, "nezamPezeshkiCode", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], DetailsType.prototype, "cut", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: [{ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }] }),
    (0, tslib_1.__metadata)("design:type", Array)
], DetailsType.prototype, "clinics", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: [{ type: mongoose_types_1.ObjectId, ref: 'healthcenters' }] }),
    (0, tslib_1.__metadata)("design:type", Array)
], DetailsType.prototype, "hospitals", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => ResponseDaysDetailsType }),
    (0, tslib_1.__metadata)("design:type", Object)
], DetailsType.prototype, "responseDays", void 0);
let User = class User {
    constructor(type, mobile) {
        this.name = '';
        this.currency = 0;
        this.gender = '';
        this.type = type;
        this.mobile = mobile;
    }
};
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true, index: true, unique: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "mobile", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: true }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "type", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: false, default: '' }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "name", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "imageUrl", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "code", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: mongoose_types_1.ObjectId, ref: 'specializations' }),
    (0, tslib_1.__metadata)("design:type", index_1.Specialization)
], User.prototype, "specialization", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ required: false }),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "price", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ default: 0 }),
    (0, tslib_1.__metadata)("design:type", Number)
], User.prototype, "currency", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", Boolean)
], User.prototype, "ready", void 0);
(0, tslib_1.__decorate)([
    (0, class_transformer_1.Exclude)(),
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "smsCode", void 0);
(0, tslib_1.__decorate)([
    (0, class_transformer_1.Exclude)(),
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "fcmtoken", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "createdAt", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: Date }),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "updatedAt", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: [String] }),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "finalizableVisits", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "gender", void 0);
(0, tslib_1.__decorate)([
    (0, class_transformer_1.Exclude)(),
    (0, mongoose_types_1.Prop)({ type: [String], default: [] }),
    (0, tslib_1.__metadata)("design:type", Array)
], User.prototype, "notificationQueuePatients", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)(),
    (0, tslib_1.__metadata)("design:type", String)
], User.prototype, "os", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => SettingsType }),
    (0, tslib_1.__metadata)("design:type", SettingsType)
], User.prototype, "settings", void 0);
(0, tslib_1.__decorate)([
    (0, mongoose_types_1.Prop)({ type: () => DetailsType }),
    (0, tslib_1.__metadata)("design:type", DetailsType)
], User.prototype, "details", void 0);
User = (0, tslib_1.__decorate)([
    (0, mongoose_types_1.Schema)({ timestamps: true }),
    (0, tslib_1.__metadata)("design:paramtypes", [String, String])
], User);
exports.default = User;
