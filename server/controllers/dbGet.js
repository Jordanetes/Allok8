const db = require("../models/dbmodel.js");
const dbGet = {};

dbGet.dbInformation = (req, res, next) => {
  db.query(`
  SELECT *
  FROM public.containers as c
  JOIN public.pods as p on p.pod_id = c.pod_id
  JOIN public.nodes as n on n.node_id = p.node_id
  ORDER BY c.tm desc;
  `, (err, sqlres) => {
    if (err) return next(err);
    const results = sqlres.rows;
    res.locals.dbResults = results;
    return next();
  })
}

dbGet.findIndex = (array, key, val) => {
  for (let i = 0; i < array.length; i ++) {
    if (array[i][key] === val) {
      return i;
    }
  }
  return -1;
}

dbGet.cleanOutput = (req, res, next) => {
  const { dbResults } = res.locals;
  const cleanedOutput = [];
  dbResults.forEach((info) => {

    const nodeName = info.node_name;
    const containerName = info.container_name;
    const podName = info.pod_name;
    
    const usedMemory = info.used_memory;
    const usedCPU = info.used_cpu;
    const timestamp = info.tm;
    const status = info.status;

    const cpuUsed = info.cpu_used;
    const memoryUsed = info.memory_used;
    const cpuPercent = info.cpu_percent;
    const memoryPercent = info.memory_percent;

    let objInfo;
    let timeIndex = dbGet.findIndex(cleanedOutput, "time", timestamp);
    if (timeIndex === -1 ) {
      objInfo = {
        "time": timestamp,
        "nodes": []
      };
      timeIndex = cleanedOutput.length;
      cleanedOutput.push(objInfo);
    }
    else {
      objInfo = cleanedOutput[timeIndex];
    }
    let nodeIndex = dbGet.findIndex(objInfo.nodes, "id", nodeName);
    let nodeInfo;
    if (nodeIndex === -1) {
      nodeInfo = {
        "id": nodeName,
        "pods": []
      };
      nodeIndex = objInfo.nodes.length;
      objInfo.nodes.push(nodeInfo);
    }
    else {
      nodeInfo = objInfo.nodes[nodeIndex];
    }

    let podIndex = dbGet.findIndex(objInfo.nodes[nodeIndex].pods, "id", podName);
    let podInfo;
    if (podIndex === -1) {
      podInfo = {
        "id": podName,
        "containers": []
      };
      podIndex = objInfo.nodes[nodeIndex].pods.length;
      objInfo.nodes[nodeIndex].pods.push(podInfo);
    }
    else {
      podInfo = objInfo.nodes[nodeIndex].pods[podIndex];
    }

    containerInfo = {
      id: containerName,
      cpuUsed: cpuUsed,
      memoryUsed: memoryUsed,
      memoryPercent: memoryPercent,
      cpuPercent: cpuPercent
    }
    podInfo.containers.push(containerInfo);
  });
  res.locals.cleanedOutput = cleanedOutput;
  return next();
}

// dbGet.orderOuput = (req, res, next) => {
//   const cleanedOutput = res.locals.cleanedOutput;
//   const timestamps = Object.keys(cleanedOutput);
//   console.log(timestamps)
//   timestamps.forEach((tm) => {
//     const nodes = Object.keys(cleanedOutput[tm]);
//     nodes.forEach((node) => {
//       const pods = Object.keys(cleanedOutput[tm][node].pods);
//       pods.sort();
//       cleanedOutput[tm][node].sortedPods = pods;
//       cleanedOutput[tm][node].sortedContainers = [];
//       pods.forEach((pod) => {
//         const containers = Object.keys(cleanedOutput[tm][node].pods[pod].containers);
//         cleanedOutput[tm][node].sortedContainers = cleanedOutput[tm][node].sortedContainers.concat(containers);
//       })
//       cleanedOutput[tm][node].sortedContainers = [... new Set(cleanedOutput[tm][node].sortedContainers)];
//     })
//   })
//   res.locals.orderedOutput = cleanedOutput;
//   return next();
// }
module.exports = dbGet;