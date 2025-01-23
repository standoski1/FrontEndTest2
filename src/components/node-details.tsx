import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import type { NodeData } from "@/types/graph"

interface NodeDetailsProps {
  data: NodeData
  children: React.ReactNode
}

export function NodeDetails({ data, children }: NodeDetailsProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80">
        <Card>
          <CardHeader>
            <CardTitle>{data.label}</CardTitle>
            <CardDescription>Node Details</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="text-sm font-medium">Type</div>
                <div className="text-sm text-muted-foreground capitalize">{data.type}</div>
              </div>
              <div>
                <div className="text-sm font-medium">Status</div>
                <div className="text-sm text-muted-foreground capitalize">{data.status}</div>
              </div>
              {data.metrics && (
                <>
                  <div>
                    <div className="text-sm font-medium">CPU Usage</div>
                    <div className="text-sm text-muted-foreground">{data.metrics.cpu}%</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Memory Usage</div>
                    <div className="text-sm text-muted-foreground">{data.metrics.memory}%</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Latency</div>
                    <div className="text-sm text-muted-foreground">{data.metrics.latency}ms</div>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </PopoverContent>
    </Popover>
  )
}

