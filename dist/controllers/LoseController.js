"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Loss_1 = __importDefault(require("../model/Loss"));
exports.default = {
    async getAllLoss(req, res) {
        try {
            const { userId, month, year } = req.body;
            const list = await Loss_1.default.find({ userId: userId, month: month, year: year }).lean();
            return res.status(200).send(list);
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
    async sumOfLoss(req, res) {
        try {
            const { userId, month, year } = req.body;
            let total = 0;
            const list = await Loss_1.default.find({ userId: userId, month: month, year: year }).lean();
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
            const loss = await Loss_1.default.create({
                userId,
                name,
                value,
                month,
                year
            });
            return res.status(200).send({ message: 'Conteúdo salvo!', loss });
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
    async remove(req, res) {
        try {
            const id = req.params.id;
            const loss = await Loss_1.default.deleteOne({ '_id': id });
            if (!loss) {
                return res.status(200).send({ message: 'Conteúdo não encontrado!' });
            }
            ;
            return res.status(200).send({ message: 'Conteúdo excluido!' });
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
};
//# sourceMappingURL=LoseController.js.map