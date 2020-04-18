"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const curlRouter = require('../routes/curlRouter');
const path_1 = __importDefault(require("path"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const app = express_1.default();
const PORT = 3000;
//Serve Static file
app.use("/dist", express_1.default.static(path_1.default.join(__dirname, "../dist")));
//Test Route
app.get('/test', (req, res) => {
    return res.status(200).json({ "hi": "there" });
});
//Parse Incoming body requests
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Route handlers
app.use('/server', curlRouter);
setInterval(() => {
    node_fetch_1.default("http://localhost:3000/server/dev")
        .then(result => result.json())
        .then(json => console.log(json));
}, 60000);
//Main Get Request, Send html file
app.get("/", (req, res) => {
    //return res.sendFile(path.resolve(__dirname, '../src/index.html'));
    return res.sendFile(path_1.default.resolve(__dirname, '../src/index.html'));
});
//Catch all error handler
app.all("*", (req, res) => {
    return res.status(404).send("Page not found");
});
//Global Error Handler
app.use((err, req, res) => {
    console.log(err);
    return res.status(400).send(err);
});
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
