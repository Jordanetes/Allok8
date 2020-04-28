import { Request, Response, NextFunction } from "express";

const db = require("../models/dbmodel");

module.exports = {
  dbInformation(req: Request, res: Response, next: NextFunction) {
    db.query(
      `
    SELECT *
    FROM public.containers as c
    JOIN public.pods as p on p.pod_id = c.pod_id
    JOIN public.nodes as n on n.node_id = p.node_id
    ORDER BY c.tm desc;
    `,
      (err: any, sqlres: any) => {
        if (err) return next(err);
        const results = sqlres.rows;
        console.log(results);
        res.locals.dbResults = results;
        return next();
      }
    );
  },
  findIndex(array, key, val) {
    for (let i = 0; i < array.length; i++) {
      if (JSON.stringify(array[i][key]) === JSON.stringify(val)) {
        return i;
      }
    }
    return -1;
  },
  architecture(req: Request, res: Response, next: NextFunction) {
    db.query(
      `
    SELECT DISTINCT node_name, container_name, pod_name
    FROM public.containers as c
    JOIN public.pods as p on p.pod_id = c.pod_id
    JOIN public.nodes as n on n.node_id = p.node_id
    `,
      (err: any, sqlres: any) => {
        if (err) return next(err);
        const results = sqlres.rows;
        res.locals.dbResults = results;
        return next();
      }
    );
  },
  overview(req: Request, res: Response, next: NextFunction) {
    const { dbResults } = res.locals;
    const overview = [];
    dbResults.forEach((info) => {
      const nodeName = info.node_name;
      const containerName = info.container_name;
      const podName = info.pod_name;

      let nodeInfo;
      let nodeIndex = this.findIndex(overview, "node", nodeName);
      if (nodeIndex === -1) {
        nodeInfo = {
          node: nodeName,
          pods: [],
        };
        nodeIndex = overview.length;
        overview.push(nodeInfo);
      } else {
        nodeInfo = overview[nodeIndex];
      }
      let podIndex = this.findIndex(nodeInfo.pods, "pod", podName);
      let podInfo;
      if (podIndex === -1) {
        podInfo = {
          pod: podName,
          containers: [],
        };
        podIndex = nodeInfo.pods.length;
        nodeInfo.pods.push(podInfo);
      } else {
        podInfo = nodeInfo.pods[podIndex];
      }
      podInfo.containers.push(containerName);
    });
    res.locals.clusterOverview = overview;
    return next();
  },
  containerDB(req: Request, res: Response, next: NextFunction){
    const { containerName } = req.body;
  db.query(`
  SELECT *
  FROM public.containers as c
  WHERE c.container_name = $1
  ORDER BY c.tm ASC;
  `,[containerName], (err, sqlres) => {
    if (err) return next(err);
    const results = sqlres.rows;
    res.locals.containerResults = results;
    return next();
  })
  },
  nodeDB(req: Request, res: Response, next: NextFunction){
    const { nodeName } = req.body;
  db.query(`
  SELECT *
  FROM public.containers as c
  JOIN public.nodes as n 
    ON n.node_id = c.node_id
  WHERE n.node_name = $1
  ORDER BY c.tm ASC;
  `, [nodeName], (err, sqlres) => {
    if (err) return next(err);
    const results = sqlres.rows;
    res.locals.containerResults = results;
    return next();
  })
  },
  podDB(req: Request, res: Response, next: NextFunction) {
    const { podName } = req.body;
    db.query(
      `
  SELECT * 
  FROM public.containers as c
  JOIN public.pods as p
    ON p.pod_id = c.pod_id
  WHERE p.pod_name = $1
  ORDER BY c.tm ASC;
  `,
      [podName],
      (err, sqlres) => {
        if (err) return next(err);
        const results = sqlres.rows;
        res.locals.containerResults = results;
        return next();
      }
    );
  },
  formatContainerInfo(req: Request, res: Response, next: NextFunction) {
    const { mode } = req.body;
    const { containerResults } = res.locals;
    const output = [];
    for (let i = 0; i < containerResults.length; i++) {
      const dataPoint = containerResults[i];

      const { container_name, tm } = dataPoint;
      const dataModeVal = dataPoint[mode];
      let containerIndex = this.findIndex(output, "id", container_name);
      let containerInfo;
      if (containerIndex === -1) {
        containerInfo = {
          id: container_name,
          data: [],
        };
        output.push(containerInfo);
      } else {
        containerInfo = output[containerIndex];
      }
      containerInfo.data.push({
        x: tm,
        y: dataModeVal,
      });
    }
    res.locals.containerInfo = output;
    return next();
  },
  cleanOutput(req: Request, res: Response, next: NextFunction) {
    const { dbResults } = res.locals;
    const cleanedOutput = [];
    dbResults.forEach((info) => {
      const nodeName = info.node_name;
      const containerName = info.container_name;
      const podName = info.pod_name;

      const timestamp = info.tm;

      const cpuUsed = info.cpu_used;
      const memoryUsed = info.memory_used;
      const cpuPercent = info.cpu_percent;
      const memoryPercent = info.memory_percent;

      let objInfo;
      let timeIndex = this.findIndex(cleanedOutput, "time", timestamp);
      if (timeIndex === -1) {
        objInfo = {
          time: timestamp,
          nodes: [],
        };
        timeIndex = cleanedOutput.length;
        cleanedOutput.push(objInfo);
      } else {
        objInfo = cleanedOutput[timeIndex];
      }
      let nodeIndex = this.findIndex(objInfo.nodes, "id", nodeName);
      let nodeInfo;
      if (nodeIndex === -1) {
        nodeInfo = {
          id: nodeName,
          pods: [],
        };
        nodeIndex = objInfo.nodes.length;
        objInfo.nodes.push(nodeInfo);
      } else {
        nodeInfo = objInfo.nodes[nodeIndex];
      }

      let podIndex = this.findIndex(
        objInfo.nodes[nodeIndex].pods,
        "id",
        podName
      );
      let podInfo;
      if (podIndex === -1) {
        podInfo = {
          id: podName,
          containers: [],
        };
        podIndex = objInfo.nodes[nodeIndex].pods.length;
        objInfo.nodes[nodeIndex].pods.push(podInfo);
      } else {
        podInfo = objInfo.nodes[nodeIndex].pods[podIndex];
      }

      const containerInfo = {
        id: containerName,
        cpuUsed: cpuUsed,
        memoryUsed: memoryUsed,
        memoryPercent: memoryPercent,
        cpuPercent: cpuPercent,
      };
      podInfo.containers.push(containerInfo);
    });
    res.locals.cleanedOutput = cleanedOutput;
    return next();
  },
};
