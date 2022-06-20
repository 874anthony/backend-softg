"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
// Importing environment variables
dotenv_1.default.config({ path: './config.env' });
const app_1 = __importDefault(require("./app"));
const USERNAME = process.env.MONGO_USERNAME;
const PASSWORD = process.env.MONGO_PASSWORD;
const DB = process.env.MONGO_URI.replace('<username>', USERNAME).replace('<password>', PASSWORD);
// Connect to MongoDB
mongoose_1.default
    .connect(DB, { dbName: 'softg_db-main' })
    .then(() => console.log('🎈 DB connected sucessfully!'))
    .catch(console.log);
const PORT = Number(process.env.PORT) || 3000;
app_1.default.listen(PORT, () => {
    console.log(`🎈 Server inizialited, app is running on ${PORT}`);
});
