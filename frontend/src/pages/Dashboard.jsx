import { useState, useEffect } from "react";
import StatCard from "../components/StatCard";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalSales: 0,
    totalPurchases: 0,
    lowStock: 0,
    todaySales: 0,
    todayPurchases: 0
  });

  const [recentTransactions, setRecentTransactions] = useState([]);

  useEffect(() => {
    // Mock data - in real app, fetch from API
    setStats({
      totalProducts: 156,
      totalSales: 45800,
      totalPurchases: 32400,
      lowStock: 8,
      todaySales: 1250,
      todayPurchases: 800
    });

    setRecentTransactions([
      { id: 1, type: "sale", product: "Laptop", amount: 45000, time: "2 hours ago" },
      { id: 2, type: "purchase", product: "Mouse", amount: 800, time: "3 hours ago" },
      { id: 3, type: "sale", product: "Keyboard", amount: 3500, time: "5 hours ago" },
      { id: 4, type: "sale", product: "Monitor", amount: 12000, time: "6 hours ago" },
    ]);
  }, []);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600">Welcome back! Here's your inventory overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard 
          title="Total Products" 
          value={stats.totalProducts}
          icon="📦"
          color="blue"
          trend="+12%"
        />
        <StatCard 
          title="Total Sales" 
          value={`$${stats.totalSales.toLocaleString()}`}
          icon="💰"
          color="green"
          trend="+8%"
        />
        <StatCard 
          title="Total Purchases" 
          value={`$${stats.totalPurchases.toLocaleString()}`}
          icon="🛒"
          color="purple"
          trend="+5%"
        />
        <StatCard 
          title="Low Stock Alert" 
          value={stats.lowStock}
          icon="⚠️"
          color="red"
          trend="-2"
        />
      </div>

      {/* Today's Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Today's Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600">💰</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Today's Sales</p>
                  <p className="text-sm text-gray-500">Total revenue today</p>
                </div>
              </div>
              <p className="text-xl font-bold text-green-600">${stats.todaySales.toLocaleString()}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600">🛒</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900">Today's Purchases</p>
                  <p className="text-sm text-gray-500">Total spending today</p>
                </div>
              </div>
              <p className="text-xl font-bold text-blue-600">${stats.todayPurchases.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-4">
            <button className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors">
              <span className="text-2xl mb-2 block">➕</span>
              <span className="text-sm font-medium text-blue-700">Add Product</span>
            </button>
            <button className="p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
              <span className="text-2xl mb-2 block">💸</span>
              <span className="text-sm font-medium text-green-700">New Sale</span>
            </button>
            <button className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors">
              <span className="text-2xl mb-2 block">📊</span>
              <span className="text-sm font-medium text-purple-700">View Report</span>
            </button>
            <button className="p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors">
              <span className="text-2xl mb-2 block">🔍</span>
              <span className="text-sm font-medium text-orange-700">Search</span>
            </button>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Recent Transactions</h2>
          <button className="text-blue-600 hover:text-blue-500 text-sm font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Product</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Type</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Amount</th>
                <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Time</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-sm text-gray-900">{transaction.product}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${
                      transaction.type === 'sale' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {transaction.type}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-900">${transaction.amount.toLocaleString()}</td>
                  <td className="py-3 px-4 text-sm text-gray-500">{transaction.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}