import express, { Request, Response } from "express";
const { getNodesUsage, getPodsUsage, getNodeInfo, getPodInfo, structureData } = require('../controllers/curlController');
const cleaner = require("../controllers/apiclean");
const dbEntry = require("../controllers/dbEntry");
const { dbInformation, cleanOutput, architecture, overview, podDB, containerDB, formatContainerInfo, nodeDB } = require('../controllers/dbGet');
const curlRouter = express.Router();

curlRouter.post('/getInfo', getPodsUsage, getNodesUsage, getPodInfo, getNodeInfo, structureData, (req: Request, res: Response) => {
  res.locals.all = {
    nodeInfo: res.locals.nodeInfo,
  }
  return res.status(200).json(res.locals.all);
});

curlRouter.get('/overview', architecture, overview, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.clusterOverview);
})

curlRouter.get('/dbInfo', dbInformation, cleanOutput, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.cleanedOuput);
});

curlRouter.post('/node', nodeDB, formatContainerInfo, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.containerInfo);
})

curlRouter.post('/pod', podDB, formatContainerInfo, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.containerInfo);
})

curlRouter.post('/container', containerDB,formatContainerInfo, (req: Request, res: Response) => {
  return res.status(200).json(res.locals.containerInfo);
})

module.exports = curlRouter;
