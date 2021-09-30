"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GainSchema = new mongoose_1.Schema({
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
    collection: 'gain'
});
exports.default = mongoose_1.model('Gain', GainSchema);
//# sourceMappingURL=Gain.js.map