import React from 'react'
import { Bell, ChevronDown, ChevronLeft, Download, Home, IndianRupee, LogOut, Mail, NotebookIcon, NotepadText, Package, Printer, Search, Settings, ShoppingCart, Users, Wallet } from "lucide-react"

const MetricCard = ({ title, value, percentage, isPositive }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <div className="flex justify-between">
      <div>
        <p className="text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>
      <div className={isPositive ? "text-green-500" : "text-red-500"}>
        {percentage}% {isPositive ? "↑" : "↓"}
      </div>
    </div>
    <div className="mt-4 h-12 w-full bg-gray-200 rounded" />
  </div>
)

const SidebarButton = ({ icon, children }) => (
  <button className="flex items-center gap-2 w-full px-4 py-2 text-left hover:bg-gray-100 rounded-lg">
    {icon}
    <span>{children}</span>
  </button>
)

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-4 hidden md:block">
        <div className="flex items-center gap-2 pb-8">
          <div className="rounded-full bg-blue-500 p-2">
            <img
              alt="Logo"
              src="/placeholder.svg?height=24&width=24"
              className="h-6 w-6"
            />
          </div>
          <span className="text-xl font-bold">Infysales</span>
        </div>
        
        <nav className="space-y-2">
          <SidebarButton icon={<Home className="h-5 w-5" />}>Home</SidebarButton>
          <SidebarButton icon={<Package className="h-5 w-5" />}>Products</SidebarButton>
          <SidebarButton icon={<Users className="h-5 w-5" />}>Customer</SidebarButton>
          <SidebarButton icon={<NotebookIcon className="h-5 w-5" />}>Invoices</SidebarButton>
          <SidebarButton icon={<NotepadText className="h-5 w-5" />}>Template</SidebarButton>
          <SidebarButton icon={<IndianRupee className="h-5 w-5" />}>Purchanse order</SidebarButton>
        </nav>

        <div className="absolute bottom-4 space-y-2">
          <SidebarButton icon={<Settings className="h-5 w-5" />}>Settings</SidebarButton>
          <SidebarButton icon={<LogOut className="h-5 w-5" />}>Log out</SidebarButton>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <button className="p-2 hover:bg-gray-500 rounded-full border-4">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <h1 className="text-2xl font-bold">Hello Soyal!</h1>
            <p className="text-gray-500">Welcome back to dashboard.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
              <input className="w-full md:w-80 pl-10 pr-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Search..." />
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Mail className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Metrics */}
        <div className="mb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Total Customers" value="₹329.50" percentage="50.43" isPositive={true} />
          <MetricCard title="Total Revenue" value="₹200.00" percentage="12.32" isPositive={true} />
          <MetricCard title="Total Invoice Generated" value="₹200.00" percentage="10.89" isPositive={false} />
          <MetricCard title="Product Count" value="₹200.00" percentage="20.92" isPositive={true} />
        </div>

        {/* Charts */}
        {/* <div className="mb-8 grid gap-4 md:grid-cols-2">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="mb-4 text-lg font-medium">Customer Volume</h3>
            <div className="aspect-square w-full max-w-[200px] bg-gray-200 rounded" />
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-blue-500" />
                <span>62% New</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-cyan-500" />
                <span>13% Returning</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-gray-300" />
                <span>23% Inactive</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-lg shadow">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-medium">Sales Volume</h3>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm hover:bg-gray-100 rounded">Daily</button>
                <button className="px-3 py-1 text-sm hover:bg-gray-100 rounded">Weekly</button>
                <button className="px-3 py-1 text-sm hover:bg-gray-100 rounded">Monthly</button>
                <button className="px-3 py-1 text-sm hover:bg-gray-100 rounded">Yearly</button>
              </div>
            </div>
            <div className="h-[200px] w-full bg-gray-200 rounded" />
          </div>
        </div> */}

        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
  <div className="flex items-center justify-between p-4">
    <h3 className="text-lg font-medium">Recent Invoices</h3>
    <select className="p-2 border rounded">
      <option>This Weekly</option>
      <option>This Monthly</option>
      <option>This Yearly</option>
    </select>
  </div>
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="bg-gray-50">
          <th className="px-4 py-2 text-left">Invoice ID</th>
          <th className="px-4 py-2 text-left">Biller Name</th>
          <th className="px-4 py-2 text-left">Bill Date</th>
          <th className="px-4 py-2 text-left">Status</th>
          <th className="px-4 py-2 text-left">Qty</th>
          <th className="px-4 py-2 text-left">Total</th>
          <th className="px-4 py-2 text-left">Actions</th>
          <th className="px-4 py-2 text-left">Send To User</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t">
          <td className="px-4 py-2">#12345</td>
          <td className="px-4 py-2">Product Name</td>
          <td className="px-4 py-2">2024-01-20</td>
          <td className="px-4 py-2">
            <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs text-green-600">
              Completed
            </span>
          </td>
          <td className="px-4 py-2">1</td>
          <td className="px-4 py-2">$99.99</td>
          <td className="px-4 py-2 flex space-x-2">
            {/* Download Button */}
            <button className="px-2 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
              <Download className="h-5 w-5 inline-block mr-1" /> Download
            </button>
            {/* Print Button */}
            <button className="px-2 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600">
              <Printer className="h-5 w-5 inline-block mr-1" /> Print
            </button>
          </td>
          {/* Send Email Button */}
          <td className="px-4 py-2">
            <button className="px-2 py-1 bg-indigo-500 text-white text-sm rounded hover:bg-indigo-600">
              Send Email
            </button>
          </td>
        </tr>
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
</div>

      </main>
    </div>
  )
}