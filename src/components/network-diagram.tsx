"use client"

import { useCallback, useEffect } from "react"
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  Controls,
  type Connection,
  type Edge,
  type Node,
  type NodeProps,
  Position,
  Handle,
  MarkerType,
} from "reactflow"
import "reactflow/dist/style.css"
import { Mail, Database, Shield, UserCircle2, AlertCircle } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

const colorVariables = `
  :root {
    --red-bg: #DC2626;
    --red-text: #FFFFFF;
    --orange-bg: #EA580C;
    --orange-text: #FFFFFF;
    --green-bg: #16A34A;
    --green-text: #FFFFFF;
  }
`

interface NodeData {
  label: string
  icon: "service" | "database"
  ip?: string
  details: {
    type: string
    status: string
  }
  showUser?: boolean
  showAlert?: boolean
}

const initialNodes: Node<NodeData>[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 0, y: 50 },
    data: {
      label: "Loremipsumm",
      icon: "service",
      showUser: true,
      details: {
        type: "Service",
        status: "Active",
      },
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 250, y: 50 },
    data: {
      label: "Loremipsu",
      icon: "database",
      details: {
        type: "Service",
        status: "Warning",
      },
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 500, y: 50 },
    data: {
      label: "Loremipsu",
      icon: "database",
      details: {
        type: "Service",
        status: "Critical",
      },
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 750, y: 0 },
    data: {
      label: "Loremipsumdolorsit",
      icon: "database",
      ip: "192.168.1.1",
      showAlert: true,
      details: {
        type: "Database",
        status: "Critical",
      },
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 750, y: 150 },
    data: {
      label: "Loremipsumdolorsit002",
      icon: "database",
      ip: "192.168.1.2",
      showAlert: true,
      details: {
        type: "Database",
        status: "Critical",
      },
    },
  },
]

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    type: "default",
    style: { stroke: "#999" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#999",
    },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    type: "default",
    style: { stroke: "#999" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#999",
    },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    type: "default",
    style: { stroke: "#999" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#999",
    },
  },
  {
    id: "e3-5",
    source: "3",
    target: "5",
    animated: true,
    type: "default",
    style: { stroke: "#999" },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 20,
      height: 20,
      color: "#999",
    },
  },
]

function CustomNode({ data }: NodeProps<NodeData>) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="relative">
          <div
            className={`rounded-full w-16 h-16 flex items-center justify-center shadow-sm border border-[#E5E7EB] relative ${
              data.icon === "service" ? "bg-[#FFF1F1]" : "bg-[#EBF3FF]"
            }`}
          >
            <Handle type="target" position={Position.Left} className="!w-1 !h-1 !bg-transparent" />
            {data.icon === "service" ? (
              <img
              src="/flow1.png"
              alt=""
              className="w-[2.2rem]"
              />
            ) : (
                <img
                src="/flow2.png"
                alt=""
                className="w-[2.2rem]"
                />
            )}
            {data.showUser && (
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-purple-500 rounded-full p-1">
                <img
                src="/flow3.png"
                alt=""
                className="w-[1.4rem] h-[1.2rem] p-[3px] object-cover"
                />
                </div>
              </div>
            )}
            {data.showAlert && (
              <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="bg-red-500 rounded-full p-1">
                <img
                src="/flow4.png"
                alt=""
                className="w-[1.4rem] h-[1.2rem] p-[3px]"
                />
                </div>
              </div>
            )}
            <Handle type="source" position={Position.Right} className="!w-1 !h-1 !bg-transparent" />
          </div>
          <div className="mt-2 text-center">
            <div className="text-sm font-medium">{data.label}</div>
            {data.ip && <div className="text-xs text-gray-500">{data.ip}</div>}
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-64">
        <div className="space-y-2">
          <h4 className="font-medium">Node Details</h4>
          <div className="text-sm space-y-1">
            <div className="flex justify-between">
              <span className="text-gray-500">Type:</span>
              <span>{data.details.type}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Status:</span>
              <span>{data.details.status}</span>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

const nodeTypes = {
  custom: CustomNode,
}

function getBgColor(color: string): string {
  switch (color) {
    case "red":
      return "FEE2E2"
    case "orange":
      return "FFEDD5"
    case "green":
      return "DCFCE7"
    default:
      return "F3F4F6"
  }
}

function getTextColor(color: string): string {
  switch (color) {
    case "red":
      return "DC2626"
    case "orange":
      return "EA580C"
    case "green":
      return "16A34A"
    default:
      return "374151"
  }
}

export function NetworkDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const onConnect = useCallback((params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges])

  useEffect(() => {
    const style = document.createElement("style")
    style.textContent = colorVariables
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <div className="bg-white rounded-lg">
      <div className="h-[300px] flex justify-center items-center">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          fitView
          fitViewOptions={{ padding: 0.2 }}
          minZoom={0.5}
          maxZoom={2}
          defaultViewport={{ x: 0, y: 0, zoom: 1 }}
          className="w-full h-full"
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>

      <div className="flex gap-6 items-center p-4 border-t">
        {[
          { color: "red", label: "Lorem" },
          { color: "orange", label: "Lorem" },
          { color: "green", label: "Lorem" },
        ].map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <div
              className="p-1.5 w-6 h-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `var(--${item.color}-bg)` }}
            >
              <Shield className="w-4 h-4" style={{ color: `var(--${item.color}-text)` }} />
            </div>
            <span style={{ color: `var(--${item.color}-bg)`, fontWeight:"semibold" }}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

