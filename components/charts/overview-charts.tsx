"use client"

import { Line, Bar, Doughnut } from "react-chartjs-2"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
)

const options: ChartOptions<any> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: "top" as const,
            labels: {
                color: "#71717a", // zinc-500
            }
        },
    },
    scales: {
        x: {
            grid: {
                color: "#27272a", // zinc-800
                display: false,
            },
            ticks: {
                color: "#71717a",
            }
        },
        y: {
            grid: {
                color: "#27272a",
            },
            ticks: {
                color: "#71717a",
            }
        }
    }
}

export function LineChart() {
    const data: ChartData<"line"> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "Revenue",
                data: [1200, 1900, 3000, 5000, 2000, 3000, 7000],
                borderColor: "rgb(139, 92, 246)", // violet-500
                backgroundColor: "rgba(139, 92, 246, 0.5)",
                tension: 0.3,
            },
        ],
    }
    return <Line options={options} data={data} />
}

export function BarChart() {
    const data: ChartData<"bar"> = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
            {
                label: "New Users",
                data: [50, 100, 200, 300, 200, 400, 600],
                backgroundColor: "rgb(14, 165, 233)", // sky-500
            },
        ],
    }
    return <Bar options={options} data={data} />
}

export function DoughnutChart() {
    const data: ChartData<"doughnut"> = {
        labels: ["Direct", "Social", "Referral", "Organic"],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(54, 162, 235, 0.8)",
                    "rgba(255, 206, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
            },
        ],
    }

    const doughnutOptions = {
        ...options,
        scales: {
            x: { display: false },
            y: { display: false }
        }
    }

    return <Doughnut options={doughnutOptions} data={data} />
}
