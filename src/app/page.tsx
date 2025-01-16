"use client";

import React, { useState } from "react";
import { ReactFlow } from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { Button } from "@/components/ui/button";

const initialNodes = [
  { id: "1", position: { x: 100, y: 100 }, data: { label: "1" } },
  { id: "2", position: { x: 200, y: 200 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
      <h1 className="p-4 text-2xl font-bold">Your Code should be here</h1>
      <div className="flex flex-col items-center justify-center">
        <p>count is: {count}</p>
        <Button onClick={() => setCount(count + 1)}>Click me</Button>
      </div>
      <div style={{ width: "50vw", height: "50vh" }}>
        <ReactFlow nodes={initialNodes} edges={initialEdges} />
      </div>
    </main>
  );
}
