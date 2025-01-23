import Layout from "@/components/layout"
import { NetworkDiagram } from "@/components/network-diagram"
import { RiskTable } from "@/components/risk-table"
import { RiskSummary } from "@/components/risk-summary"

export default function DashboardPage() {
  return (
    <Layout>
      {/* Left Column - Description */}
      <div className="bg-white border border-[#E5E7EB] rounded-lg p-3 mt-[2rem]">
        <section>
          <h2 className="text-[20px] font-bold text-[#00732E] mb-2">Description</h2>
          <p className="text-[12px] text-[#5C5C5C]">
            Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui
            Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Sem
            Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla Vestibulum.
          </p>
        </section>

        <section className="mt-4">
          <h2 className="text-[20px] font-semibold text-[#00732E] mb-2">Extra</h2>
          <p className="text-[14px] text-[#5C5C5C]">
            Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus.
            Justo nisl nisi lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit.
          </p>
        </section>

        <section className="mt-4 space-y-1">
          {[
            { label: "Lorem Ipsum Dolor", value: "10/19/2017" },
            { label: "Lorem Ipsum Dolor", value: "Ut" },
            { label: "Lorem Ipsum Dolor", value: "Eros" },
            { label: "Lorem Ipsum Dolor", value: "Yes", isGreen: true },
            { label: "Lorem Ipsum Dolor", value: "Sit" },
            { label: "Lorem Ipsum Dolor", value: "Lorem Ipsum Dolor" },
            { label: "Lorem Ipsum Dolor", value: "Lorem Ipsum Dolor" },
          ].map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-[14px] font-bold text-[#5C5C5C]">{item.label}</span>
              <span className={`text-[14px] ${item.isGreen ? "text-[#00732E]" : "text-[#5C5C5C]"}`}>{item.value}</span>
            </div>
          ))}
        </section>
      </div>

      {/* Middle and Right Columns */}
      <div className="lg:col-span-2  mt-[2rem]">
        <div className="bg-white border border-[#E5E7EB] rounded-lg p-3">
          <section>
            <h2 className="text-[20px] font-semibold text-[#00732E] mb-2">Lorem Lorem Lorem</h2>
            <NetworkDiagram />
          </section>

          <section className="mt-4">
            <h2 className="text-[20px] font-semibold text-[#00732E] mb-2">Lorem Ipsum Dolor Sit</h2>
            <div className="min-[690px]:grid grid-cols-2 gap-2">
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
                <RiskTable />
              </div>
              <div className="bg-white border border-[#E5E7EB] rounded-lg p-4">
                <RiskSummary />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  )
}

