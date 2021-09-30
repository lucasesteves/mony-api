"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LossSchema = new mongoose_1.Schema({
    userId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    value: {
        type: String,
        require: true
    },
    month: {
        type: String,
        require: true
    },
    year: {
        type: String,
        require: true
    },
}, {
    timestamps: true,
    collection: 'loss'
});
exports.default = mongoose_1.model('Loss', LossSchema);
//# sourceMappingURL=Loss.js.map