"use strict";
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var dbModel = {
    url: { type: String, required: true },
    path: { type: String, required: true },
    headers: { type: [String], required: false, "default": [] },
    user: { type: mongoose_types_1.ObjectId, required: true, ref: 'admins' },
    description: { type: String, required: false },
    date: { type: Number, required: true },
    body: { type: Object, required: false },
    success: { type: Boolean, required: false },
    params: { type: [Object], required: false, "default": [] },
    type: { type: String, required: false },
    method: { type: String, required: true }
};
exports["default"] = dbModel;
//# sourceMappingURL=DBModel.js.map