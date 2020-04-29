const express = require('express');
const curlRouter = express.Router();

const cleaner = require("../controllers/apiclean");
const dbEntry = require("../controllers/dbEntry");
const dbGet = require("../controllers/dbGet");
const { getNodesUsage, getPodsUsage, getNodeInfo, getPodInfo, structureData } = require('../controllers/curlController');


curlRouter.post('/getInfo',
  getPodsUsage,
  getNodesUsage, 
  getPodInfo, 
  getNodeInfo, 
  structureData, 
  dbEntry.addAPI,
  (req, res, next) => {
    res.locals.all = {
    nodeInfo: res.locals.nodeInfo,
  }
  return res.status(200).json(res.locals.all);
});

curlRouter.get('/dev', 
  dbEntry.getAPI, 
  getPodsUsage, 
  getNodesUsage, 
  getPodInfo, 
  getNodeInfo, 
  structureData, 
  cleaner.getNodes, 
  cleaner.nodeMetrics, 
  cleaner.podClean, 
  dbEntry.addNode, 
  (req, res, next) => {
  // res.locals.all = {
  //   nodes: res.locals.nodes,
  //   nodeMetrics: res.locals.nodeMetricsFormat,
  //   nodeData: res.locals.nodeData
  // }
  return res.status(200).json(res.locals.nodeData);
});

curlRouter.get('/overview', 
  dbGet.architecture, 
  dbGet.overview, 
  (req, res) => {
  return res.status(200).json(res.locals.clusterOverview);
});

curlRouter.get('/dbInfo', 
  dbGet.dbInformation, 
  dbGet.cleanOutput, 
  (req, res) => {
  // console.log(res.locals.dbResults)
<<<<<<< HEAD
  // return res.status(200).json(res.locals.orderedOutput);
  return res.status(200).json(res.locals.cleanedOutput);
});

=======
  return res.status(200).json(res.locals.dbResults);
  // return res.status(200).json(res.locals.cleanedOutput);
})
curlRouter.post('/node', dbGet.nodeDB, dbGet.formatContainerInfo, (req, res) => {
  return res.status(200).json(res.locals.containerInfo);
})
curlRouter.post('/pod', dbGet.podDB, dbGet.formatContainerInfo, (req, res) => {
  return res.status(200).json(res.locals.containerInfo);
})
curlRouter.post('/container', dbGet.containerDB, dbGet.formatContainerInfo, (req, res) => {
  return res.status(200).json(res.locals.containerInfo);
})
>>>>>>> integration

module.exports = curlRouter;