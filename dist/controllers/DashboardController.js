"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loss_1 = __importDefault(require("../model/Loss"));
const Gain_1 = __importDefault(require("../model/Gain"));
exports.default = {
    async getDifference(req, res) {
        try {
            const { userId, month, year } = req.body;
            let totalLoss = 0;
            let totalWin = 0;
            const listLoss = await Loss_1.default.find({ userId: userId, month: month, year: year }).lean();
            listLoss.length > 0 && listLoss.map(e => {
                totalLoss += parseFloat(e.value);
            });
            const listWin = await Gain_1.default.find({ userId: userId, month: month, year: year }).lean();
            listWin.length > 0 && listWin.map(e => {
                totalWin += parseFloat(e.value);
            });
            const diff = totalWin - totalLoss;
            return res.status(200).send({ totalWin: totalWin, totalLoss: totalLoss, diff: diff });
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
};
//# sourceMappingURL=DashboardController.js.map