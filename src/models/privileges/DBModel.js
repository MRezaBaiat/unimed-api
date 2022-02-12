"use strict";
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var createPrivilegeOptionsDetails = function (ref) {
    return {
        type: {
            allowed: { type: Boolean, required: true, "default": true },
            whiteList: [{ type: mongoose_types_1.ObjectId, ref: ref, required: true, "default": [] }],
            test: { type: String, required: false }
        },
        required: true,
        "default": []
    };
};
var createPrivilegeOptions = function (ref) {
    return {
        type: {
            post: createPrivilegeOptionsDetails(ref),
            patch: createPrivilegeOptionsDetails(ref),
            "delete": createPrivilegeOptionsDetails(ref),
            get: createPrivilegeOptionsDetails(ref),
            put: createPrivilegeOptionsDetails(ref),
            menuVisible: { type: Boolean, required: true, "default": false }
        },
        required: true,
        "default": {}
    };
};
var dbModel = {
    users: createPrivilegeOptions('users'),
    admins: createPrivilegeOptions('admins'),
    visits: createPrivilegeOptions('visits'),
    medicalServices: createPrivilegeOptions('medical_services'),
    healthCenters: createPrivilegeOptions('healthcenters'),
    adminLogs: createPrivilegeOptions('admin-logs'),
    reservations: createPrivilegeOptions('reservations'),
    discounts: createPrivilegeOptions('discount_coupons'),
    serverConfigs: createPrivilegeOptions('server_config'),
    serviceRequests: createPrivilegeOptions('service_requests'),
    specializations: createPrivilegeOptions('specializations'),
    transactions: createPrivilegeOptions('transactions'),
    notifications: createPrivilegeOptions('notifications'),
    analytics: createPrivilegeOptions('analytics'),
    calls: createPrivilegeOptions('calls')
};
exports["default"] = dbModel;
//# sourceMappingURL=DBModel.js.map