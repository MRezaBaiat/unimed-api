"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.Helper = exports.ServerConfig = exports.Rating = exports.Admin = exports.Visit = exports.Transaction = exports.DiscountCoupon = exports.HealthCenter = exports.MedicalService = exports.ServiceRequest = exports.Specialization = exports.WorkTimes = exports.Chat = exports.User = exports.FileAddresses = exports.ResponseTime = exports.AdminLog = exports.Privileges = exports.PrivilegeOptions = exports.PrivilegeOptionsDetails = exports.Notification = exports.CrashReport = exports.Archive = exports.Colors = exports.Translations = exports.ReservationRequest = exports.Reservation = exports.Events = exports.GeneralEvent = exports.ConferenceEvent = exports.Conference = exports.CallAnalytics = exports.FileMetaData = exports.FileInfo = exports.AbstractCallMetric = exports.Tamin = void 0;
var FileAddresses_1 = require("./src/constants/FileAddresses");
exports.FileAddresses = FileAddresses_1["default"];
var User_1 = require("./src/models/users/User");
exports.User = User_1["default"];
var Chat_1 = require("./src/models/chat/Chat");
exports.Chat = Chat_1["default"];
var Specialization_1 = require("./src/models/specialization/Specialization");
exports.Specialization = Specialization_1["default"];
var HealthCenter_1 = require("./src/models/health_center/HealthCenter");
exports.HealthCenter = HealthCenter_1["default"];
var DiscountCoupon_1 = require("./src/models/discount/DiscountCoupon");
exports.DiscountCoupon = DiscountCoupon_1["default"];
var Transaction_1 = require("./src/models/transactions/Transaction");
exports.Transaction = Transaction_1["default"];
var Visit_1 = require("./src/models/visit/Visit");
exports.Visit = Visit_1["default"];
var Admin_1 = require("./src/models/admin/Admin");
exports.Admin = Admin_1["default"];
var Rating_1 = require("./src/models/rating/Rating");
exports.Rating = Rating_1["default"];
var ServerConfig_1 = require("./src/models/serverconfig/ServerConfig");
exports.ServerConfig = ServerConfig_1["default"];
var Helper_1 = require("./src/helpers/Helper");
exports.Helper = Helper_1["default"];
var MedicalService_1 = require("./src/models/medical_service/MedicalService");
exports.MedicalService = MedicalService_1["default"];
var ServiceRequest_1 = require("./src/models/service_request/ServiceRequest");
exports.ServiceRequest = ServiceRequest_1["default"];
var ResponseTime_1 = require("./src/models/response_time/ResponseTime");
exports.ResponseTime = ResponseTime_1["default"];
var AdminLog_1 = require("./src/models/admin_log/AdminLog");
exports.AdminLog = AdminLog_1["default"];
var Privileges_1 = require("./src/models/privileges/Privileges");
exports.Privileges = Privileges_1["default"];
exports.PrivilegeOptions = Privileges_1.PrivilegeOptions;
exports.PrivilegeOptionsDetails = Privileges_1.PrivilegeOptionsDetails;
var Notification_1 = require("./src/models/notification/Notification");
exports.Notification = Notification_1["default"];
var CrashReport_1 = require("./src/models/crash_report/CrashReport");
exports.CrashReport = CrashReport_1["default"];
var Archive_1 = require("./src/models/archive/Archive");
exports.Archive = Archive_1["default"];
var Reservation_1 = require("./src/models/reservation/Reservation");
exports.Reservation = Reservation_1["default"];
exports.ReservationRequest = Reservation_1.ReservationRequest;
var translations_1 = require("./src/constants/translations");
exports.Translations = translations_1["default"];
var colors_1 = require("./src/constants/colors");
exports.Colors = colors_1["default"];
var WorkTimes_1 = require("./src/models/users/WorkTimes");
exports.WorkTimes = WorkTimes_1["default"];
var Events_1 = require("./src/models/events/Events");
exports.Events = Events_1["default"];
var CallAnalytics_1 = require("./src/models/analytics/call-analytics/CallAnalytics");
exports.CallAnalytics = CallAnalytics_1["default"];
exports.AbstractCallMetric = CallAnalytics_1.AbstractCallMetric;
var file_info_1 = require("./src/models/file/file.info");
exports.FileInfo = file_info_1["default"];
exports.FileMetaData = file_info_1.FileMetaData;
__exportStar(require("./src/models/Enums"), exports);
var Tamin = require("./src/models/tamin/tamin");
exports.Tamin = Tamin;
var GeneralEvent_1 = require("./src/models/events/GeneralEvent");
exports.GeneralEvent = GeneralEvent_1["default"];
var ConferenceEvent_1 = require("./src/models/events/ConferenceEvent");
exports.ConferenceEvent = ConferenceEvent_1["default"];
var Conference_1 = require("./src/models/conference/Conference");
exports.Conference = Conference_1["default"];
//# sourceMappingURL=index.js.map