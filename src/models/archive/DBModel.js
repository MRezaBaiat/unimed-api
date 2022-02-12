"use strict";
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var dbModel = {
    patient: { type: mongoose_types_1.ObjectId, ref: 'users', required: true, index: true },
    doctor: { type: mongoose_types_1.ObjectId, ref: 'users', required: true, index: true },
    title: { type: String, required: true },
    note: { type: String, required: true },
    fileUrl: { type: { url: String, file_size: Number, file_name: String, mediaInfo: { type: { width: Number, height: Number, duration: Number, orientation: Number }, required: false } }, required: false },
    createdAt: { type: Number, required: true },
};
exports["default"] = dbModel;
//# sourceMappingURL=DBModel.js.map