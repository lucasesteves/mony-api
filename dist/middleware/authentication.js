"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = __importDefault(require("../config/auth"));
exports.checkJwt = (req, res, next) => {
    const auth = req.headers["authorization"];
    if (!auth) {
        return res.status(401).send({ deny: true, message: 'Token não encontrado!' });
    }
    jsonwebtoken_1.default.verify(auth, auth_1.default.secret, (err) => {
        if (err) {
            return res.status(403).send({ deny: true, message: 'Token inválido!' });
        }
        next();
    });
};
//# sourceMappingURL=authentication.js.map