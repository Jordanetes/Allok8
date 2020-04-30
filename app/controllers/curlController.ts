import { Request, Response, NextFunction } from "express";
import * as jsn from "../interfaces/interfaces";
import * as info from '../interfaces/podInfo';
import * as nodeUsage from "../interfaces/nodeUsage";
import * as cmd from "node-cmd";

module.exports = {
  getNodeInfo(req: Request, res: Response, next: NextFunction) {
    const { api, token } = req.body;

    const link = `curl https://${api}/api/v1/nodes?limit=500 --header "Authorization: Bearer ${token}" --insecure`;
    cmd.get(link, (err: any, data: any) => {
      if (err) return next(err);

      const obj: jsn.namespace.Json = JSON.parse(data);
      const nodeNameArray: string[] = [];
      const nodeMetricsRaw: object = {};

      console.log(obj);

      if(obj !== undefined) {
        obj.items.forEach((item) => {
          if (nodeNameArray !== undefined)
            nodeNameArray.push(item.metadata.name);
          nodeMetricsRaw[item.metadata.name] = item.status;
        });
      }

      res.locals.nodeInfo = {
        nodeNameArray,
        nodeMetricsRaw,
      };

      return next();
    });
  },
  getPodInfo(req: Request, res: Response, next: NextFunction) {
    const { api, token } = req.body;

    const namespace: string = "default";
    const link = `curl https://${api}/api/v1/namespaces/${namespace}/pods?limit=500 --header "Authorization: Bearer ${token}" --insecure`;
    cmd.get(link, (err: any, data: any) => {
      if (err) return next(err);

      const obj: info.namespace.podInfo = JSON.parse(data);
      const podNameArray: string[] = [];
      const podInfo: object = {};

      for (const i in obj.items) {
        // make sure pod is on current node
        if (obj.items[i].metadata.namespace === `${namespace}`) {
          // push to an array of pod names
          podNameArray.push(obj.items[i].metadata.name);
          // keep track of each pod in an object
          podInfo[obj.items[i].metadata.name] = obj.items[i];
        }
      }

      res.locals.podsInfo = {
        podInfo,
        podNameArray,
      };

      return next();
    });
  },
  getNodesUsage(req: Request, res: Response, next: NextFunction) {
    // todo switch from body to using cookies, I think
    const { api, token } = req.body;
    //! hard coded for now
    const link = `curl https://${api}/apis/metrics.k8s.io/v1beta1/nodes --header "Authorization: Bearer ${token}" --insecure`;

    cmd.get(link, (err: any, data: any) => {
      // error handle if needed
      if (err) return next(err);

      const info: nodeUsage.namespace.nodeUsage = JSON.parse(data);
      res.locals.nodeUsage = info;

      return next();
    });
  },
  getPodsUsage(req: Request, res: Response, next: NextFunction) {
    const { api, token } = req.body;
    const namespace = "default";
    const link = `curl https://${api}/apis/metrics.k8s.io/v1beta1/namespaces/${namespace}/pods --header "Authorization: Bearer ${token}" --insecure`;

    cmd.get(link, (err: any, data: any) => {
      if (err) return next(err);

      const info: nodeUsage.namespace.nodeUsage = JSON.parse(data);

      res.locals.podUsage = info;
      return next();
    });
  },
  structureData(req: Request, res: Response, next: NextFunction) {
    const { podUsage, nodeUsage, podsInfo, nodeInfo } = res.locals;

    Object.keys(nodeInfo.nodeMetricsRaw).forEach((nodeName) => {
      nodeUsage.items.forEach((eachNode) => {
        if (eachNode.metadata.name === nodeName) {
          nodeInfo.nodeMetricsRaw[nodeName]["nodeUsage"] = eachNode;
          nodeInfo.nodeMetricsRaw[nodeName]["pods"] = [];
        }
      });
      if (nodeUsage.items.length === 0) {
        nodeInfo.nodeMetricsRaw[nodeName]["pods"] = [];
      }

      Object.keys(podsInfo.podInfo).forEach((podName) => {
        const currNodeName = podsInfo.podInfo[podName].spec.nodeName;

        podUsage.items.forEach((eachPod) => {
          if (eachPod.metadata.name === podName) {
            podsInfo.podInfo[podName]["podUsage"] = eachPod;
          }
        });

        if (nodeName === currNodeName) {
          nodeInfo.nodeMetricsRaw[nodeName]["pods"].push(
            podsInfo.podInfo[podName]
          );
        }
      });
    });
    return next();
  },
};
