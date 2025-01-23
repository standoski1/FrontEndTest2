export function RiskSummary() {
    return (
      <div className="h-full">
        <h3 className="font-medium text-[#667085] text-[16px] mb-6">Contextual Risk</h3>
        <div className="flex items-center justify-between">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-[#383874] text-[14px]"><span className="font-bold">2</span> Critical</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-[#383874] text-[14px]"><span className="font-bold">0</span> High</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-[#383874] text-[14px]"><span className="font-bold">0</span> Medium</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-[#383874] text-[14px]"><span className="font-bold">0</span> Low</span>
            </div>
          </div>
          <div className="relative">
            <div className="w-32 h-32 rounded-full border-[8px] border-[#C6190D] flex items-center justify-center">
              <span className="text-5xl font-bold">2</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  