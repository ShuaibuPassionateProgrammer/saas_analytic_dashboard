import { KPICard } from "@/components/dashboard/kpi-card"
import { DollarSign, Users, CreditCard, Activity } from "lucide-react"

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <KPICard
                    title="Total Revenue"
                    value="$45,231.89"
                    icon={DollarSign}
                    description="+20.1% from last month"
                />
                <KPICard
                    title="Subscriptions"
                    value="+2350"
                    icon={Users}
                    description="+180.1% from last month"
                />
                <KPICard
                    title="Sales"
                    value="+12,234"
                    icon={CreditCard}
                    description="+19% from last month"
                />
                <KPICard
                    title="Active Now"
                    value="+573"
                    icon={Activity}
                    description="+201 since last hour"
                />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                {/* Placeholder for charts/recent activity */}
                <div className="col-span-4 rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6">
                        <h3 className="font-semibold leading-none tracking-tight">Overview</h3>
                        <p className="text-sm text-muted-foreground">Monthly revenue overview.</p>
                        <div className="h-[300px] flex items-center justify-center border-dashed border-2 border-zinc-200 dark:border-zinc-800 rounded-md mt-4">
                            Chart Placeholder
                        </div>
                    </div>
                </div>
                <div className="col-span-3 rounded-xl border bg-card text-card-foreground shadow">
                    <div className="p-6">
                        <h3 className="font-semibold leading-none tracking-tight">Recent Sales</h3>
                        <p className="text-sm text-muted-foreground">You made 265 sales this month.</p>
                        <div className="space-y-8 mt-4">
                            <div className="flex items-center">
                                <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Olivia Martin</p>
                                    <p className="text-sm text-muted-foreground">olivia.martin@email.com</p>
                                </div>
                                <div className="ml-auto font-medium">+$1,999.00</div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Jackson Lee</p>
                                    <p className="text-sm text-muted-foreground">jackson.lee@email.com</p>
                                </div>
                                <div className="ml-auto font-medium">+$39.00</div>
                            </div>
                            <div className="flex items-center">
                                <div className="h-9 w-9 rounded-full bg-zinc-200 dark:bg-zinc-800" />
                                <div className="ml-4 space-y-1">
                                    <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
                                    <p className="text-sm text-muted-foreground">isabella.nguyen@email.com</p>
                                </div>
                                <div className="ml-auto font-medium">+$299.00</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
