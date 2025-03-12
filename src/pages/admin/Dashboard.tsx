
import React from "react";
import { BarChart3, Users, CreditCard, AlertCircle, LayoutDashboard } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Dashboard = () => {
  // Sample data - replace with real data later
  const stats = [
    {
      title: "Active Kitchens",
      value: "24",
      description: "↑ 12% from last month",
      icon: LayoutDashboard,
    },
    {
      title: "Total Customers",
      value: "1,234",
      description: "↑ 8% from last month",
      icon: Users,
    },
    {
      title: "Monthly Revenue",
      value: "₹4.2L",
      description: "↑ 15% from last month",
      icon: CreditCard,
    },
    {
      title: "Pending Requests",
      value: "6",
      description: "Requires attention",
      icon: AlertCircle,
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back to your Synkris admin panel.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Your kitchen network's latest updates
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Add activity list here */}
                <p className="text-sm text-muted-foreground">
                  No recent activity to show
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common administrative tasks</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <button className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-gray-100">
                  View New Customer Requests
                </button>
                <button className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-gray-100">
                  Process Pending Payments
                </button>
                <button className="w-full text-left px-4 py-2 text-sm rounded-lg hover:bg-gray-100">
                  Generate Monthly Report
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Dashboard;
