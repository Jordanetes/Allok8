export module namespace {

  export interface Metadata {
      selfLink: string;
      resourceVersion: string;
  }

  export interface Labels {
      "beta.kubernetes.io/arch": string;
      "beta.kubernetes.io/os": string;
      "kubernetes.io/arch": string;
      "kubernetes.io/hostname": string;
      "kubernetes.io/os": string;
      "minikube.k8s.io/commit": string;
      "minikube.k8s.io/name": string;
      "minikube.k8s.io/updated_at": string;
      "minikube.k8s.io/version": string;
      "node-role.kubernetes.io/master": string;
  }

  export interface Annotations {
      "kubeadm.alpha.kubernetes.io/cri-socket": string;
      "node.alpha.kubernetes.io/ttl": string;
      "volumes.kubernetes.io/controller-managed-attach-detach": string;
  }

  export interface FKubeadmAlphaKubernetesIoCriSocket {
  }

  export interface FNodeAlphaKubernetesIoTtl {
  }

  export interface FVolumesKubernetesIoControllerManagedAttachDetach {
  }

  export interface FAnnotations {
      "f:kubeadm.alpha.kubernetes.io/cri-socket"?: FKubeadmAlphaKubernetesIoCriSocket;
      "f:node.alpha.kubernetes.io/ttl"?: FNodeAlphaKubernetesIoTtl;
      ".": object;
      "f:volumes.kubernetes.io/controller-managed-attach-detach"?: FVolumesKubernetesIoControllerManagedAttachDetach;
  }

  export interface FNodeRoleKubernetesIoMaster {
  }

  export interface FMinikubeK8sIoCommit {
  }

  export interface FMinikubeK8sIoName {
  }

  export interface FMinikubeK8sIoUpdatedAt {
  }

  export interface FMinikubeK8sIoVersion {
  }

  export interface FBetaKubernetesIoArch {
  }

  export interface FBetaKubernetesIoOs {
  }

  export interface FKubernetesIoArch {
  }

  export interface FKubernetesIoHostname {
  }

  export interface FKubernetesIoOs {
  }

  export interface FLabels {
      "f:node-role.kubernetes.io/master"?: FNodeRoleKubernetesIoMaster;
      "f:minikube.k8s.io/commit"?: FMinikubeK8sIoCommit;
      "f:minikube.k8s.io/name"?: FMinikubeK8sIoName;
      "f:minikube.k8s.io/updated_at"?: FMinikubeK8sIoUpdatedAt;
      "f:minikube.k8s.io/version"?: FMinikubeK8sIoVersion;
      "."?: number;
      "f:beta.kubernetes.io/arch"?: FBetaKubernetesIoArch;
      "f:beta.kubernetes.io/os"?: FBetaKubernetesIoOs;
      "f:kubernetes.io/arch"?: FKubernetesIoArch;
      "f:kubernetes.io/hostname"?: FKubernetesIoHostname;
      "f:kubernetes.io/os"?: FKubernetesIoOs;
  }

  export interface FMetadata {
      "f:annotations"?: FAnnotations;
      "f:labels"?: FLabels;
  }

  export interface FAddress {
  }

  export interface FType {
  }

  export interface KTypeHostname {
      ".": object;
      "f:address": FAddress;
      "f:type": FType;
  }

  export interface FAddress2 {
  }

  export interface FType2 {
  }

  export interface KTypeInternalIP {
      "."?: object;
      "f:address"?: FAddress2;
      "f:type"?: FType2;
  }

  export interface FAddresses {
      "."?: object;
      "k:{'type':'Hostname'}"?: KTypeHostname;
      'k:{"type":"InternalIP"}'?: KTypeInternalIP;
  }

  export interface FCpu {
  }

  export interface FEphemeralStorage {
  }

  export interface FHugepages2Mi {
  }

  export interface FMemory {
  }

  export interface FPods {
  }

  export interface FAllocatable {
      "."?: object;
      "f:cpu"?: FCpu;
      "f:ephemeral-storage"?: FEphemeralStorage;
      "f:hugepages-2Mi"?: FHugepages2Mi;
      "f:memory"?: FMemory;
      "f:pods"?: FPods;
  }

  export interface FCpu2 {
  }

  export interface FEphemeralStorage2 {
  }

  export interface FHugepages2Mi2 {
  }

  export interface FMemory2 {
  }

  export interface FPods2 {
  }

  export interface FCapacity {
      "."?: object;
      "f:cpu"?: FCpu2;
      "f:ephemeral-storage"?: FEphemeralStorage2;
      "f:hugepages-2Mi"?: FHugepages2Mi2;
      "f:memory"?: FMemory2;
      "f:pods"?: FPods2;
  }

  export interface FLastHeartbeatTime {
  }

  export interface FLastTransitionTime {
  }

  export interface FMessage {
  }

  export interface FReason {
  }

  export interface FStatus2 {
  }

  export interface FType3 {
  }

  export interface KTypeDiskPressure {
      "."?: object;
      "f:lastHeartbeatTime"?: FLastHeartbeatTime;
      "f:lastTransitionTime"?: FLastTransitionTime;
      "f:message"?: FMessage;
      "f:reason"?: FReason;
      "f:status"?: FStatus2;
      "f:type"?: FType3;
  }

  export interface FLastHeartbeatTime2 {
  }

  export interface FLastTransitionTime2 {
  }

  export interface FMessage2 {
  }

  export interface FReason2 {
  }

  export interface FStatus3 {
  }

  export interface FType4 {
  }

  export interface KTypeMemoryPressure {
      ".": object;
      "f:lastHeartbeatTime"?: FLastHeartbeatTime2;
      "f:lastTransitionTime"?: FLastTransitionTime2;
      "f:message"?: FMessage2;
      "f:reason"?: FReason2;
      "f:status"?: FStatus3;
      "f:type"?: FType4;
  }

  export interface FLastHeartbeatTime3 {
  }

  export interface FLastTransitionTime3 {
  }

  export interface FMessage3 {
  }

  export interface FReason3 {
  }

  export interface FStatus4 {
  }

  export interface FType5 {
  }

  export interface KTypePIDPressure {
      "."?: object;
      "f:lastHeartbeatTime"?: FLastHeartbeatTime3;
      "f:lastTransitionTime"?: FLastTransitionTime3;
      "f:message"?: FMessage3;
      "f:reason"?: FReason3;
      "f:status"?: FStatus4;
      "f:type": FType5;
  }

  export interface FLastHeartbeatTime4 {
  }

  export interface FLastTransitionTime4 {
  }

  export interface FMessage4 {
  }

  export interface FReason4 {
  }

  export interface FStatus5 {
  }

  export interface FType6 {
  }

  export interface KTypeReady {
      "."?: object;
      "f:lastHeartbeatTime"?: FLastHeartbeatTime4;
      "f:lastTransitionTime"?: FLastTransitionTime4;
      "f:message"?: FMessage4;
      "f:reason"?: FReason4;
      "f:status"?: FStatus5;
      "f:type"?: FType6;
  }

  export interface FConditions {
    "."?: object;
    'k:{"type":"DiskPressure"}'?: KTypeDiskPressure;
    'k:{"type":"MemoryPressure"}'?: KTypeMemoryPressure;
    'k:{"type":"PIDPressure"}'?: KTypePIDPressure;
    'k:{"type":"Ready"}'?: KTypeReady;
  }

  export interface FPort {
  }

  export interface FKubeletEndpoint {
      "f:Port"?: FPort;
  }

  export interface FDaemonEndpoints {
      "f:kubeletEndpoint"?: FKubeletEndpoint;
  }

  export interface FImages {
  }

  export interface FArchitecture {
  }

  export interface FBootID {
  }

  export interface FContainerRuntimeVersion {
  }

  export interface FKernelVersion {
  }

  export interface FKubeProxyVersion {
  }

  export interface FKubeletVersion {
  }

  export interface FMachineID {
  }

  export interface FOperatingSystem {
  }

  export interface FOsImage {
  }

  export interface FSystemUUID {
  }

  export interface FNodeInfo {
      "f:architecture"?: FArchitecture;
      "f:bootID"?: FBootID;
      "f:containerRuntimeVersion"?: FContainerRuntimeVersion;
      "f:kernelVersion"?: FKernelVersion;
      "f:kubeProxyVersion"?: FKubeProxyVersion;
      "f:kubeletVersion"?: FKubeletVersion;
      "f:machineID"?: FMachineID;
      "f:operatingSystem"?: FOperatingSystem;
      "f:osImage"?: FOsImage;
      "f:systemUUID"?: FSystemUUID;
  }

  export interface FStatus {
      "f:addresses"?: FAddresses;
      "f:allocatable"?: FAllocatable;
      "f:capacity"?: FCapacity;
      "f:conditions"?: FConditions;
      "f:daemonEndpoints"?: FDaemonEndpoints;
      "f:images"?: FImages;
      "f:nodeInfo"?: FNodeInfo;
  }

  export interface FieldsV1 {
      "f:metadata"?: FMetadata;
      "f:status"?: FStatus;
  }

  export interface ManagedField {
      manager: string;
      operation: string;
      apiVersion: string;
      time: Date;
      fieldsType: string;
      fieldsV1: FieldsV1;
  }

  export interface Metadata2 {
      name: string;
      selfLink: string;
      uid: string;
      resourceVersion: string;
      creationTimestamp: Date;
      labels: Labels;
      annotations: Annotations;
      managedFields: ManagedField[];
  }

  export interface Spec {
  }

  export interface Capacity {
      cpu: string;
      "ephemeral-storage": string;
      "hugepages-2Mi": string;
      memory: string;
      pods: string;
  }

  export interface Allocatable {
      cpu: string;
      "ephemeral-storage": string;
      "hugepages-2Mi": string;
      memory: string;
      pods: string;
  }

  export interface Condition {
      type: string;
      status: string;
      lastHeartbeatTime: Date;
      lastTransitionTime: Date;
      reason: string;
      message: string;
  }

  export interface Address {
      type: string;
      address: string;
  }

  export interface KubeletEndpoint {
      Port: number;
  }

  export interface DaemonEndpoints {
      kubeletEndpoint: KubeletEndpoint;
  }

  export interface NodeInfo {
      machineID: string;
      systemUUID: string;
      bootID: string;
      kernelVersion: string;
      osImage: string;
      containerRuntimeVersion: string;
      kubeletVersion: string;
      kubeProxyVersion: string;
      operatingSystem: string;
      architecture: string;
  }

  export interface Image {
      names: string[];
      sizeBytes: number;
  }

  export interface Status {
      capacity: Capacity;
      allocatable: Allocatable;
      conditions: Condition[];
      addresses: Address[];
      daemonEndpoints: DaemonEndpoints;
      nodeInfo: NodeInfo;
      images: Image[];
  }

  export interface Item {
      metadata: Metadata2;
      spec: Spec;
      status: Status;
  }

  export interface Json {
      kind: string;
      apiVersion: string;
      metadata: Metadata;
      items: Item[];
  }

}

