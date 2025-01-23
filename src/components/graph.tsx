import React, { useCallback } from "react"
import ReactFlow, {
    MiniMap,
    Controls,
    Background,
    useNodesState,
    useEdgesState,
    addEdge,
  } from 'reactflow';
import "reactflow/dist/style.css"

import CustomNode from "./custom-node"
import { NodeDetails } from "./node-details"
import type { GraphNode, GraphEdge } from "@/types/graph"

const initialNodes: GraphNode[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 250, y: 100 },
    data: {
      label: "API Gateway",
      type: "service",
      status: "healthy",
      metrics: {
        cpu: 45,
        memory: 60,
        latency: 120,
      },
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 100, y: 200 },
    data: {
      label: "Auth Service",
      type: "service",
      status: "warning",
      metrics: {
        cpu: 75,
        memory: 80,
        latency: 200,
      },
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 400, y: 200 },
    data: {
      label: "User Database",
      type: "database",
      status: "error",
      metrics: {
        cpu: 90,
        memory: 95,
        latency: 500,
      },
    },
  },
]

const initialEdges: GraphEdge[] = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
]

const nodeTypes = {
  custom: (props: any) => (
    <NodeDetails data={props.data}>
      <CustomNode {...props} />
    </NodeDetails>
  ),
}

export function Graph() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: any) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  return (
    <div className="w-full h-[600px] bg-white rounded-lg border border-[#d9d9d9]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
        {/* <MiniMap /> */}
      </ReactFlow>
    </div>
  )
}

