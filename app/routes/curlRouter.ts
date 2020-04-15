import express, { Request, Response } from "express";
const { getNodesUsage, getPodsUsage, getNodeInfo, getPodInfo, structureData } = require('../controllers/curlController');
const cleaner = require("../controllers/apiclean");
const dbEntry = require("../controllers/dbEntry");
const { dbInformation, cleanOutput } = require('../controllers/dbGet');
const curlRouter = express.Router();

curlRouter.post('/getInfo', getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, (req: Request, res: Response) => {
  res.locals.all = {
    nodeInfo: res.locals.nodeInfo,
  }
  return res.status(200).json(res.locals.all);
});

curlRouter.get('/dev', dbEntry.getAPI, getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, cleaner.getNodes, cleaner.nodeMetrics, cleaner.podClean, dbEntry.addNode, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.nodeData);
});

curlRouter.get('/dbInfo', dbInformation, cleanOutput, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.cleanedOuput);
});

module.exports = curlRouter;
