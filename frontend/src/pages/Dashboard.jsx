import "../styles/dashboard.css"
import StatCard from "../components/StatCard";

export default function Dashboard() {
  return (
    <div>
      <h1 className="page-title">Inventory Dashboard</h1>
      <div>
        <StatCard title= "Total Products" value="120"/>
        <StatCard title="Total Sales" value="$12,500" />
        <StatCard title="Total Purchases" value="$8,300"/>
        <div className="charts-grid">
            <div className="chart-box">Product Trends (Chart)</div>
            <div className="chart-box">Sales Growth (Chart)</div>
            <div className="chart-box">Purchase Distribution (Chart)</div>
        </div>

      </div>
    </div>
  );
}