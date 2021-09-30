"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Gain_1 = __importDefault(require("../model/Gain"));
exports.default = {
    async getAllGain(req, res) {
        try {
            const { userId, month, year } = req.body;
            const list = await Gain_1.default.find({ userId: userId, month: month, year: year }, { name: 1, value: 1 }).lean();
            return res.status(200).send(list);
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
    async sumOfWins(req, res) {
        try {
            const { userId, month, year } = req.body;
            let total = 0;
            const list = await Gain_1.default.find({ userId: userId, month: month, year: year }).lean();
            list.map(e => {
                total += parseFloat(e.value);
            });
            return res.status(200).send({ total: total });
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
    async save(req, res) {
        try {
            let { userId, name, value, month, year } = req.body;
            const gain = await Gain_1.default.create({
                userId,
                name,
                value,
                month,
                year
            });
            return res.status(200).send({ message: 'Conteúdo salvo!', gain });
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
    async remove(req, res) {
        try {
            const id = req.params.id;
            const gain = await Gain_1.default.deleteOne({ '_id': id });
            if (!gain) {
                return res.sendStatus(200).send({ message: 'Conteúdo não encontrado!' });
            }
            ;
            return res.status(200).send({ message: 'Conteúdo excluido!' });
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
};
//# sourceMappingURL=WinController.js.map