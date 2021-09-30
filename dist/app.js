"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("./config/config"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
app.use(cors_1.default());
mongoose_1.default
    .connect(config_1.default.DB_URL, { useNewUrlParser: true })
    .then(() => app.listen(process.env.PORT || config_1.default.PORT, () => {
    console.log("Server running at port " + config_1.default.PORT);
}))
    .catch((err) => {
    console.error(err);
    process.exit(1);
});
app.use(express_1.default.json());
app.use(routes_1.router);
//# sourceMappingURL=app.js.map