"use strict";
exports.__esModule = true;
var mongoose_types_1 = require("../../mongoose-types");
var dbModel = {
    type: { type: String, required: true },
    user: { type: mongoose_types_1.ObjectId, ref: 'users', required: false },
    admin: { type: mongoose_types_1.ObjectId, ref: 'admins', required: false }
};
exports["default"] = dbModel;
//# sourceMappingURL=DBModel.js.map