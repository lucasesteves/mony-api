"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const User_1 = __importDefault(require("../model/User"));
const auth_1 = __importDefault(require("../config/auth"));
exports.default = {
    async getUser(req, res) {
        const id = req.params.id;
        const user = await User_1.default.find(mongoose_1.default.Types.ObjectId(id)).lean();
        return res.status(200).send(user);
    },
    async create(req, res) {
        try {
            let { name, email, password } = req.body;
            const verifyUser = await User_1.default.find({ email: email });
            if (verifyUser.length > 0) {
                return res.status(404).send({ message: 'Email já cadastrado no sistema', user: false });
            }
            ;
            const crypto = await bcrypt_1.default.hash(password, 8);
            const user = await User_1.default.create({
                name,
                email,
                password: crypto,
            });
            if (user) {
                const token = jsonwebtoken_1.default.sign({ id: user._id }, auth_1.default.secret, {
                    expiresIn: '12h'
                });
                user.password = null;
                return res.status(200).send({ user, token });
            }
            ;
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User_1.default.findOne({ email: email });
            if (!user) {
                return res.status(404).send({ message: 'Esse e-mail não existe', user: false });
            }
            const verifyPassword = bcrypt_1.default.compareSync(password, user.password);
            if (!verifyPassword) {
                return res.status(403).send({ message: 'Senha ou Email estão errados', user: false });
            }
            const token = jsonwebtoken_1.default.sign({ id: user._id }, auth_1.default.secret, {
                expiresIn: '12h'
            });
            const credential = {
                id: user._id,
                name: user.name,
                email: user.email
            };
            return res.status(200).send({ user: credential, token });
        }
        catch (err) {
            return res.status(500).send(err.message);
        }
    },
};
//# sourceMappingURL=UserController.js.map