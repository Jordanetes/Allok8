export module namespace {

  export interface Metadata {
      selfLink: string;
  }

  export interface Metadata2 {
      name: string;
      selfLink: string;
      creationTimestamp: Date;
  }

  export interface Usage {
      cpu: string;
      memory: string;
  }

  export interface Item {
      metadata: Metadata2;
      timestamp: Date;
      window: string;
      usage: Usage;
  }

  export interface nodeUsage {
      kind: string;
      apiVersion: string;
      metadata: Metadata;
      items: Item[];
  }

}