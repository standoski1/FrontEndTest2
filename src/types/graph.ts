import type { Node, Edge } from "reactflow"

export interface GraphNode extends Node {
  data: {
    label: string
    type: "service" | "database" | "storage"
    status: "healthy" | "warning" | "error"
    metrics?: {
      cpu: number
      memory: number
      latency: number
    }
  }
}

export interface GraphEdge extends Edge {
  data?: {
    label?: string
  }
}

export interface NodeData {
  label: string
  type: "service" | "database" | "storage"
  status: "healthy" | "warning" | "error"
  metrics?: {
    cpu: number
    memory: number
    latency: number
  }
}

