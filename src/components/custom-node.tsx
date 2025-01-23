import React, { memo } from "react"
import { Handle, Position } from "reactflow"
import { Database, HardDrive, Layout } from "lucide-react"
import { cn } from "@/lib/utils"

interface CustomNodeProps {
  data: {
    label: string
    type: "service" | "database" | "storage"
    status: "healthy" | "warning" | "error"
  }
  selected: boolean
}

const CustomNode = memo(({ data, selected }: CustomNodeProps) => {
  const Icon = {
    service: Layout,
    database: Database,
    storage: HardDrive,
  }[data.type]

  const statusColor = {
    healthy: "bg-green-500",
    warning: "bg-yellow-500",
    error: "bg-red-500",
  }[data.status]

  return (
    <div
      className={cn(
        "px-4 py-2 shadow-lg rounded-lg bg-white border-2 border-transparent",
        selected && "border-blue-500",
      )}
    >
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      <div className="flex items-center gap-2">
        <Icon className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium">{data.label}</span>
        <div className={cn("w-2 h-2 rounded-full", statusColor)} />
      </div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  )
})
CustomNode.displayName = "CustomNode"

export default CustomNode

