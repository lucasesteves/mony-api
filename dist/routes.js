"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const UserController_1 = __importDefault(require("./controllers/UserController"));
const WinController_1 = __importDefault(require("./controllers/WinController"));
const LoseController_1 = __importDefault(require("./controllers/LoseController"));
const DashboardController_1 = __importDefault(require("./controllers/DashboardController"));
const authentication_1 = require("./middleware/authentication");
const router = express_1.Router();
exports.router = router;
router.get("/test", (res) => res.send("ok"));
router.post("/login", UserController_1.default.login);
router.post("/register", UserController_1.default.create);
router.get("/user/:id", [authentication_1.checkJwt], UserController_1.default.getUser);
router.post("/dashboard", [authentication_1.checkJwt], DashboardController_1.default.getDifference);
router.post("/gain/save", [authentication_1.checkJwt], WinController_1.default.save);
router.delete("/gain/remove/:id", [authentication_1.checkJwt], WinController_1.default.remove);
router.post("/gain/total", [authentication_1.checkJwt], WinController_1.default.sumOfWins);
router.post("/gain", [authentication_1.checkJwt], WinController_1.default.getAllGain);
router.post("/loss/save", [authentication_1.checkJwt], LoseController_1.default.save);
router.delete("/loss/remove/:id", [authentication_1.checkJwt], LoseController_1.default.remove);
router.post("/loss/total", [authentication_1.checkJwt], LoseController_1.default.sumOfLoss);
router.post("/loss", [authentication_1.checkJwt], LoseController_1.default.getAllLoss);
//# sourceMappingURL=routes.js.map