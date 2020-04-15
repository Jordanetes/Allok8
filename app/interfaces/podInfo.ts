export module namespace {

  export interface Metadata {
      selfLink: string;
      resourceVersion: string;
  }

  export interface Labels {
      app: string;
     "pod-template-hash": string;
      tier: string;
  }

  export interface OwnerReference {
      apiVersion: string;
      kind: string;
      name: string;
      uid: string;
      controller: boolean;
      blockOwnerDeletion: boolean;
  }

  export interface FGenerateName {
  }

  export interface FApp {
  }

  export interface FPodTemplateHash {
  }

  export interface FTier {
  }

  export interface FLabels {
      ".": object;
      "f:app": FApp;
      "f:pod-template-hash": FPodTemplateHash;
      "f:tier": FTier;
  }

  export interface FApiVersion {
  }

  export interface FBlockOwnerDeletion {
  }

  export interface FController {
  }

  export interface FKind {
  }

  export interface FName {
  }

  export interface FUid {
  }

  export interface KUidA187759676be46f892da9b2be4a8f977 {
      ".": object;
      "f:apiVersion": FApiVersion;
      "f:blockOwnerDeletion": FBlockOwnerDeletion;
      "f:controller": FController;
      "f:kind": FKind;
      "f:name": FName;
      "f:uid": FUid;
  }

  export interface FApiVersion2 {
  }

  export interface FBlockOwnerDeletion2 {
  }

  export interface FController2 {
  }

  export interface FKind2 {
  }

  export interface FName2 {
  }

  export interface FUid2 {
  }

  export interface KUid460bb26d5ed44dcdAeacD1095162bf04 {
      ".": object;
      "f:apiVersion": FApiVersion2;
      "f:blockOwnerDeletion": FBlockOwnerDeletion2;
      "f:controller": FController2;
      "f:kind": FKind2;
      "f:name": FName2;
      "f:uid": FUid2;
  }

  export interface FApiVersion3 {
  }

  export interface FBlockOwnerDeletion3 {
  }

  export interface FController3 {
  }

  export interface FKind3 {
  }

  export interface FName3 {
  }

  export interface FUid3 {
  }

  export interface KUid8f8991a912634ec6B209A4ff41b52b0b {
      ".": object;
      "f:apiVersion": FApiVersion3;
      "f:blockOwnerDeletion": FBlockOwnerDeletion3;
      "f:controller": FController3;
      "f:kind": FKind3;
      "f:name": FName3;
      "f:uid": FUid3;
  }

  export interface FOwnerReferences {
      ".": object;
      'k:{"uid":"a1877596-76be-46f8-92da-9b2be4a8f977"}': KUidA187759676be46f892da9b2be4a8f977;
      'k:{"uid":"460bb26d-5ed4-4dcd-aeac-d1095162bf04"}': KUid460bb26d5ed44dcdAeacD1095162bf04;
      'k:{"uid":"8f8991a9-1263-4ec6-b209-a4ff41b52b0b"}': KUid8f8991a912634ec6B209A4ff41b52b0b;
  }

  export interface FMetadata {
      "f:generateName": FGenerateName;
      "f:labels": FLabels;
      "f:ownerReferences": FOwnerReferences;
  }

  export interface FImage {
  }

  export interface FImagePullPolicy {
  }

  export interface FName4 {
  }

  export interface FContainerPort {
  }

  export interface FProtocol {
  }

  export interface KContainerPort3000ProtocolTCP {
    ".": object;
    "f:containerPort": FContainerPort;
    "f:protocol": FProtocol;
  }

  export interface FPorts {
    ".": object;
    'k:{"containerPort":3000,"protocol":"TCP"}': KContainerPort3000ProtocolTCP;
  }

  export interface FResources {
  }

  export interface FTerminationMessagePath {
  }

  export interface FTerminationMessagePolicy {
  }

  export interface KNameBackendContainer {
    ".": object;
    "f:image": FImage;
    "f:imagePullPolicy": FImagePullPolicy;
    "f:name": FName4;
    "f:ports": FPorts;
    "f:resources": FResources;
    "f:terminationMessagePath": FTerminationMessagePath;
    "f:terminationMessagePolicy": FTerminationMessagePolicy;
  }

  export interface FImage2 {
  }

  export interface FImagePullPolicy2 {
  }

  export interface FName5 {
  }

  export interface FContainerPort2 {
  }

  export interface FProtocol2 {
  }

  export interface KContainerPort8080ProtocolTCP {
      ".": object;
      "f:containerPort": FContainerPort2;
      "f:protocol": FProtocol2;
  }

  export interface FPorts2 {
      ".": object;
      'k:{"containerPort":8080,"protocol":"TCP"}': KContainerPort8080ProtocolTCP;
  }

  export interface FResources2 {
  }

  export interface FTerminationMessagePath2 {
  }

  export interface FTerminationMessagePolicy2 {
  }

  export interface KNameTestingDocker {
      ".": object;
      "f:image": FImage2;
      "f:imagePullPolicy": FImagePullPolicy2;
      "f:name": FName5;
      "f:ports": FPorts2;
      "f:resources": FResources2;
      "f:terminationMessagePath": FTerminationMessagePath2;
      "f:terminationMessagePolicy": FTerminationMessagePolicy2;
  }

  export interface FEnvFrom {
  }

  export interface FImage3 {
  }

  export interface FImagePullPolicy3 {
  }

  export interface FName6 {
  }

  export interface FContainerPort3 {
  }

  export interface FProtocol3 {
  }

  export interface KContainerPort5432ProtocolTCP {
      ".": object;
      "f:containerPort": FContainerPort3;
      "f:protocol": FProtocol3;
  }

  export interface FPorts3 {
      "."?: object;
      'k:{"containerPort":5432,"protocol":"TCP"}': KContainerPort5432ProtocolTCP;
  }

  export interface FResources3 {
  }

  export interface FTerminationMessagePath3 {
  }

  export interface FTerminationMessagePolicy3 {
  }

  export interface FMountPath {
  }

  export interface FName7 {
  }

  export interface KMountPathDockerEntrypointInitdbD {
      "."?: object;
      "f:mountPath"?: FMountPath;
      "f:name"?: FName7;
  }

  export interface FMountPath2 {
  }

  export interface FName8 {
  }

  export interface KMountPathVarLibPostgresqlData {
      "."?: object;
      "f:mountPath"?: FMountPath2;
      "f:name"?: FName8;
  }

  export interface FVolumeMounts {
      ".": object;
      'k:{"mountPath":"/docker-entrypoint-initdb.d"}': KMountPathDockerEntrypointInitdbD;
      'k:{"mountPath":"/var/lib/postgresql/data"}': KMountPathVarLibPostgresqlData;
  }

  export interface KNamePostgres {
      "."?: object;
      "f:envFrom"?: FEnvFrom;
      "f:image"?: FImage3;
      "f:imagePullPolicy"?: FImagePullPolicy3;
      "f:name"?: FName6;
      "f:ports"?: FPorts3;
      "f:resources"?: FResources3;
      "f:terminationMessagePath"?: FTerminationMessagePath3;
      "f:terminationMessagePolicy"?: FTerminationMessagePolicy3;
      "f:volumeMounts"?: FVolumeMounts;
  }

  export interface FContainers {
      'k:{"name":"backend-container"}'?: KNameBackendContainer;
      'k:{"name":"testing-docker"}'?: KNameTestingDocker;
      'k:{"name":"postgres"}'?: KNamePostgres;
  }

  export interface FDnsPolicy {
  }

  export interface FEnableServiceLinks {
  }

  export interface FRestartPolicy {
  }

  export interface FSchedulerName {
  }

  export interface FSecurityContext {
  }

  export interface FTerminationGracePeriodSeconds {
  }

  export interface FArgs {
  }

  export interface FImage4 {
  }

  export interface FImagePullPolicy4 {
  }

  export interface FName9 {
  }

  export interface FResources4 {
  }

  export interface FTerminationMessagePath4 {
  }

  export interface FTerminationMessagePolicy4 {
  }

  export interface FMountPath3 {
  }

  export interface FName10 {
  }

  export interface KMountPathTmpData {
      ".": object;
      "f:mountPath"?: FMountPath3;
      "f:name"?: FName10;
  }

  export interface FVolumeMounts2 {
      ".": object;
      'k:{"mountPath":"/tmp/data"}': KMountPathTmpData;
  }

  export interface KNameInitScriptDownload {
      ".": object;
      "f:args"?: FArgs;
      "f:image"?: FImage4;
      "f:imagePullPolicy"?: FImagePullPolicy4;
      "f:name"?: FName9;
      "f:resources"?: FResources4;
      "f:terminationMessagePath"?: FTerminationMessagePath4;
      "f:terminationMessagePolicy"?: FTerminationMessagePolicy4;
      "f:volumeMounts"?: FVolumeMounts2;
  }

  export interface FInitContainers {
      "."?: object;
      'k:{"name":"init-script-download"}'?: KNameInitScriptDownload;
  }

  export interface FName11 {
  }

  export interface FClaimName {
  }

  export interface FPersistentVolumeClaim {
      "."?: object;
      "f:claimName"?: FClaimName;
  }

  export interface KNameInitScript {
      "."?: object;
      "f:name"?: FName11;
      "f:persistentVolumeClaim"?: FPersistentVolumeClaim;
  }

  export interface FName12 {
  }

  export interface FClaimName2 {
  }

  export interface FPersistentVolumeClaim2 {
      "."?: object;
      "f:claimName"?: FClaimName2;
  }

  export interface KNamePostgresdb {
      "."?: object;
      "f:name"?: FName12;
      "f:persistentVolumeClaim"?: FPersistentVolumeClaim2;
  }

  export interface FVolumes {
      ".": object;
      'k:{"name":"init-script"}': KNameInitScript;
      'k:{"name":"postgresdb"}': KNamePostgresdb;
  }

  export interface FSpec {
    "f:containers"?: FContainers;
    "f:dnsPolicy"?: FDnsPolicy;
    "f:enableServiceLinks"?: FEnableServiceLinks;
    "f:restartPolicy"?: FRestartPolicy;
    "f:schedulerName"?: FSchedulerName;
    "f:securityContext"?: FSecurityContext;
    "f:terminationGracePeriodSeconds"?: FTerminationGracePeriodSeconds;
    "f:initContainers"?: FInitContainers;
    "f:volumes"?: FVolumes;
  }

  export interface FLastProbeTime {
  }

  export interface FLastTransitionTime {
  }

  export interface FStatus2 {
  }

  export interface FType {
  }

  export interface KTypeContainersReady {
      "."?: 27;
      "f:lastProbeTime"?: FLastProbeTime;
      "f:lastTransitionTime"?: FLastTransitionTime;
      "f:status"?: FStatus2;
      "f:type"?: FType;
  }

  export interface FLastProbeTime2 {
  }

  export interface FLastTransitionTime2 {
  }

  export interface FStatus3 {
  }

  export interface FType2 {
  }

  export interface KTypeInitialized {
      "."?: object;
      "f:lastProbeTime"?: FLastProbeTime2;
      "f:lastTransitionTime"?: FLastTransitionTime2;
      "f:status"?: FStatus3;
      "f:type"?: FType2;
  }

  export interface FLastProbeTime3 {
  }

  export interface FLastTransitionTime3 {
  }

  export interface FStatus4 {
  }

  export interface FType3 {
  }

  export interface KTypeReady {
      "."?: object;
      "f:lastProbeTime"?: FLastProbeTime3;
      "f:lastTransitionTime"?: FLastTransitionTime3;
      "f:status"?: FStatus4;
      "f:type"?: FType3;
  }

  export interface FLastProbeTime4 {
  }

  export interface FLastTransitionTime4 {
  }

  export interface FMessage {
  }

  export interface FReason {
  }

  export interface FStatus5 {
  }

  export interface FType4 {
  }

  export interface KTypePodScheduled {
      "."?: 31;
      "f:lastProbeTime"?: FLastProbeTime4;
      "f:lastTransitionTime"?: FLastTransitionTime4;
      "f:message"?: FMessage;
      "f:reason"?: FReason;
      "f:status"?: FStatus5;
      "f:type"?: FType4;
  }

  export interface FConditions {
      'k:{"type":"ContainersReady"}'?: KTypeContainersReady;
      'k:{"type":"Initialized"}'?: KTypeInitialized;
      'k:{"type":"Ready"}'?: KTypeReady;
      "."?: {};
      'k:{"type":"PodScheduled"}'?: KTypePodScheduled;
  }

  export interface FContainerStatuses {
  }

  export interface FHostIP {
  }

  export interface FPhase {
  }

  export interface FPodIP {
  }

  export interface FIp {
  }

  export interface KIp1721805 {
      "."?: object;
      "f:ip"?: FIp;
  }

  export interface FIp2 {
  }

  export interface KIp1721804 {
      "."?: {};
      "f:ip"?: FIp2;
  }

  export interface FIp3 {
  }

  export interface KIp1721807 {
      "."?: object;
      "f:ip"?: FIp3;
  }

  export interface FPodIPs {
      "."?: object;
      'k:{"ip":"172.18.0.5"}'?: KIp1721805;
      'k:{"ip":"172.18.0.4"}'?: KIp1721804;
      'k:{"ip":"172.18.0.7"}'?: KIp1721807;
  }

  export interface FStartTime {
  }

  export interface FInitContainerStatuses {
  }

  export interface FStatus {
      "f:conditions"?: FConditions;
      "f:containerStatuses"?: FContainerStatuses;
      "f:hostIP"?: FHostIP;
      "f:phase"?: FPhase;
      "f:podIP"?: FPodIP;
      "f:podIPs"?: FPodIPs;
      "f:startTime"?: FStartTime;
      "f:initContainerStatuses"?: FInitContainerStatuses;
  }

  export interface FieldsV1 {
      "f:metadata"?: FMetadata;
      "f:spec"?: FSpec;
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
      generateName: string;
      namespace: string;
      selfLink: string;
      uid: string;
      resourceVersion: string;
      creationTimestamp: Date;
      labels: Labels;
      ownerReferences: OwnerReference[];
      managedFields: ManagedField[];
  }

  export interface Secret {
      secretName: string;
      defaultMode: number;
  }

  export interface PersistentVolumeClaim {
      claimName: string;
  }

  export interface Volume {
      name: string;
      secret: Secret;
      persistentVolumeClaim: PersistentVolumeClaim;
  }

  export interface Port {
      containerPort: number;
      protocol: string;
  }

  export interface Resources {
  }

  export interface VolumeMount {
      name: string;
      readOnly: boolean;
      mountPath: string;
  }

  export interface ConfigMapRef {
      name: string;
  }

  export interface EnvFrom {
      configMapRef: ConfigMapRef;
  }

  export interface Container {
      name: string;
      image: string;
      ports: Port[];
      resources: Resources;
      volumeMounts: VolumeMount[];
      terminationMessagePath: string;
      terminationMessagePolicy: string;
      imagePullPolicy: string;
      envFrom: EnvFrom[];
  }

  export interface SecurityContext {
  }

  export interface Toleration {
      key: string;
      operator: string;
      effect: string;
      tolerationSeconds: number;
  }

  export interface Resources2 {
  }

  export interface VolumeMount2 {
      name: string;
      mountPath: string;
      readOnly?: boolean;
  }

  export interface InitContainer {
      name: string;
      image: string;
      args: string[];
      resources: Resources2;
      volumeMounts: VolumeMount2[];
      terminationMessagePath: string;
      terminationMessagePolicy: string;
      imagePullPolicy: string;
  }

  export interface Spec {
      volumes: Volume[];
      containers: Container[];
      restartPolicy: string;
      terminationGracePeriodSeconds: number;
      dnsPolicy: string;
      serviceAccountName: string;
      serviceAccount: string;
      nodeName: string;
      securityContext: SecurityContext;
      schedulerName: string;
      tolerations: Toleration[];
      priority: number;
      enableServiceLinks: boolean;
      initContainers: InitContainer[];
  }

  export interface Condition {
      type: string;
      status: string;
      lastProbeTime?: any;
      lastTransitionTime: Date;
  }

  export interface PodIP {
      ip: string;
  }

  export interface Running {
      startedAt: Date;
  }

  export interface State {
      running: Running;
  }

  export interface Terminated {
      exitCode: number;
      reason: string;
      startedAt: Date;
      finishedAt: Date;
      containerID: string;
  }

  export interface LastState {
      terminated: Terminated;
  }

  export interface ContainerStatus {
      name: string;
      state: State;
      lastState: LastState;
      ready: boolean;
      restartCount: number;
      image: string;
      imageID: string;
      containerID: string;
      started: boolean;
  }

  export interface Terminated2 {
      exitCode: number;
      reason: string;
      startedAt: Date;
      finishedAt: Date;
      containerID: string;
  }

  export interface State2 {
      terminated: Terminated2;
  }

  export interface LastState2 {
  }

  export interface InitContainerStatus {
      name: string;
      state: State2;
      lastState: LastState2;
      ready: boolean;
      restartCount: number;
      image: string;
      imageID: string;
      containerID: string;
  }

  export interface Status {
      phase: string;
      conditions: Condition[];
      hostIP: string;
      podIP: string;
      podIPs: PodIP[];
      startTime: Date;
      containerStatuses: ContainerStatus[];
      qosClass: string;
      initContainerStatuses: InitContainerStatus[];
  }

  export interface Item {
      metadata: Metadata2;
      spec: Spec;
      status: Status;
  }

  export interface podInfo {
      kind: string;
      apiVersion: string;
      metadata: Metadata;
      items: Item[];
  }

}

