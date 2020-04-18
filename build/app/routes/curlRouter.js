"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { getNodesUsage, getPodsUsage, getNodeInfo, getPodInfo, structureData } = require('../controllers/curlController');
const cleaner = require("../controllers/apiclean");
const dbEntry = require("../controllers/dbEntry");
const { dbInformation, cleanOutput } = require('../controllers/dbGet');
const curlRouter = express_1.default.Router();
curlRouter.post('/getInfo', getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, (req, res) => {
    res.locals.all = {
        nodeInfo: res.locals.nodeInfo,
    };
    return res.status(200).json(res.locals.all);
});
curlRouter.get('/dev', dbEntry.getAPI, getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, cleaner.getNodes, cleaner.nodeMetrics, cleaner.podClean, dbEntry.addNode, (req, res) => {
    return res.status(200).json(res.locals.nodeData);
});
curlRouter.get('/dbInfo', dbInformation, cleanOutput, (req, res) => {
    return res.status(200).json(res.locals.cleanedOuput);
});
module.exports = curlRouter;
