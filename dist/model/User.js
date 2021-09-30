"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
    collection: 'user'
});
exports.default = mongoose_1.model('User', UserSchema);
//# sourceMappingURL=User.js.map