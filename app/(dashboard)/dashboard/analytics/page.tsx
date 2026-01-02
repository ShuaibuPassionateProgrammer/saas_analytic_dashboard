import { LineChart, BarChart, DoughnutChart } from "@/components/charts/overview-charts"

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6">
                        <h3 className="font-semibold leading-none tracking-tight">Revenue Over Time</h3>
                        <div className="h-[300px] mt-4">
                            <LineChart />
                        </div>
                    </div>
                </div>
                <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6">
                        <h3 className="font-semibold leading-none tracking-tight">Traffic Sources</h3>
                        <div className="h-[300px] mt-4">
                            <DoughnutChart />
                        </div>
                    </div>
                </div>
                <div className="col-span-7 rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6">
                        <h3 className="font-semibold leading-none tracking-tight">User Growth</h3>
                        <div className="h-[300px] mt-4">
                            <BarChart />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
