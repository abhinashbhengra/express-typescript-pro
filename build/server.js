"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./src/index"));
const app = (0, express_1.default)();
const server = new index_1.default(app);
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;
app
    .listen(PORT, "localhost", function () {
    console.log(`Server is running of port ${PORT}`);
})
    .on("error", (err) => {
    if (err.conde === "EADDRINUSE") {
        console.log("Error: addresss already in use.");
    }
    else {
        console.log(err);
    }
});
