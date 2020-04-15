"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cmd = require("node-cmd");
module.exports = {
    getNodeInfo(req, res, next) {
        const { api, token } = req.body;
        const link = `curl https://${api}/api/v1/nodes?limit=500 --header "Authorization: Bearer ${token}" --insecure`;
        cmd.get(link, (err, data) => {
            if (err)
                return next(err);
            const obj = JSON.parse(data);
            const nodeNameArray = [];
            const nodeMetricsRaw = {};
            console.log('This is obj', obj);
            if (obj !== undefined) {
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
    getPodInfo(req, res, next) {
        const { api, token } = req.body;
        const namespace = "default";
        const link = `curl https://${api}/api/v1/namespaces/${namespace}/pods?limit=500 --header "Authorization: Bearer ${token}" --insecure`;
        cmd.get(link, (err, data) => {
            if (err)
                return next(err);
            const obj = JSON.parse(data);
            const podNameArray = [];
            const podInfo = {};
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
    getNodesUsage(req, res, next) {
        //console.log("nodes")
        // todo switch from body to using cookies, I think
        const { api, token } = req.body;
        //! hard coded for now
        const link = `curl https://${api}/apis/metrics.k8s.io/v1beta1/nodes --header "Authorization: Bearer ${token}" --insecure`;
        cmd.get(link, (err, data) => {
            // error handle if needed
            if (err)
                return next(err);
            const info = JSON.parse(data);
            res.locals.nodeUsage = info;
            return next();
        });
    },
    getPodsUsage(req, res, next) {
        const { api, token } = req.body;
        const namespace = "default";
        const link = `curl https://${api}/apis/metrics.k8s.io/v1beta1/namespaces/${namespace}/pods --header "Authorization: Bearer ${token}" --insecure`;
        cmd.get(link, (err, data) => {
            if (err)
                return next(err);
            const info = JSON.parse(data);
            console.log('---9---');
            console.log(info);
            console.log('---9---');
            res.locals.podUsage = info;
            return next();
        });
    },
    structureData(req, res, next) {
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
                    nodeInfo.nodeMetricsRaw[nodeName]["pods"].push(podsInfo.podInfo[podName]);
                }
            });
        });
        return next();
    },
};
