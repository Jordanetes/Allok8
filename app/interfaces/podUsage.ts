interface PodUsage {
  kind?: string;
  apiVersion?: string;
  metadata?: {
    selfLink: string;
  };
  items?: {
    metadata: Metadata;
    timestamp: string;
    window: string;
    containers: Containers[];
  }[]
}

interface Metadata {
  name: string;
  namespace: string;
  selfLink: string;
  creationTimeStamp: string;
}

interface Containers {
  name: string;
  usage: {
    cpu: string;
    memory: string;
  }
}

export default PodUsage;