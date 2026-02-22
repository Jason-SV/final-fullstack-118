import DashboardCard from "../components/DashboardCard"
export default function Dashboard() {
    return (
        <div className="flex flex-col gap-8">
            <p className="font-bold text-2xl">Welcome, Mr. Manager</p>
            <div className="grid grid-cols-3 gap-4 justify-items-start">
                <DashboardCard/>
                <DashboardCard/>
                <DashboardCard/>
            </div>
        </div>
    )
}