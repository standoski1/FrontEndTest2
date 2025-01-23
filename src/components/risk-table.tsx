import { Badge } from "@/components/ui/badge"

export function RiskTable() {
  return (
    <div className="h-full p-0 m-0">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium text-[13px] text-[#858D9D]">Asset</h3>
        <h3 className="font-medium text-[13px] text-[#858D9D]">Contextual Risk</h3>
      </div>
      <div className="w-full h-[.7px] bg-[#ccc] mb-3"></div>
      <div className="space-y-4">
        {[
          { name: "Loremipsumdolorsit", ip: "192.168.1.1" },
          { name: "Loremipsumdolorsit002", ip: "192.168.1.2" },
        ].map((item, i) => (
          <>
           <div key={i} className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-[30px] flex items-center justify-center">
              <img
                src="/flow2.png"
                alt=""
                className="w-[1.4rem] h-[1.2rem] p-[3px]"
                />
              </div>
              <div>
                <div className="font-medium text-[13px] text-[#525D73]">{item.name}</div>
                <div className="text-sm text-[9.45px] text-[#667085]">{item.ip}</div>
              </div>
            </div>
            <Badge variant="destructive" className="bg-red-50 hover:bg-red-50 px-[15px] font-bold text-[14px] text-[#C6190D] border-red-100">
              Critical
            </Badge>
          </div>
          <div className="w-full h-[.7px] bg-[#ccc]"></div>
          </>
        ))}
      </div>
      <div className="mt-4 text-[13px] text-[#667085] text-center">Showing 1-2 of 2</div>
    </div>
  )
}

