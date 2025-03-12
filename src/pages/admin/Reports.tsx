
import React from "react";
import { FileText, Download, Calendar, Filter } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';

const Reports = () => {
  // Sample data - replace with real data later
  const monthlyRevenue = [
    { name: 'Jan', revenue: 320000 },
    { name: 'Feb', revenue: 350000 },
    { name: 'Mar', revenue: 410000 },
    { name: 'Apr', revenue: 450000 },
    { name: 'May', revenue: 470000 },
    { name: 'Jun', revenue: 520000 },
    { name: 'Jul', revenue: 550000 },
    { name: 'Aug', revenue: 620000 },
    { name: 'Sep', revenue: 670000 },
    { name: 'Oct', revenue: 720000 },
  ];

  const customerGrowth = [
    { name: 'Jan', customers: 45 },
    { name: 'Feb', customers: 52 },
    { name: 'Mar', customers: 61 },
    { name: 'Apr', customers: 68 },
    { name: 'May', customers: 72 },
    { name: 'Jun', customers: 84 },
    { name: 'Jul', customers: 91 },
    { name: 'Aug', customers: 102 },
    { name: 'Sep', customers: 113 },
    { name: 'Oct', customers: 124 },
  ];

  const planDistribution = [
    { name: 'Synkris Lite', value: 65 },
    { name: 'Synkris Pro', value: 42 },
    { name: 'Synkris Elite', value: 17 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const cuisinePerformance = [
    { 
      name: 'North Indian', 
      orders: 2400, 
      revenue: 240000,
    },
    { 
      name: 'South Indian', 
      orders: 1800, 
      revenue: 180000,
    },
    { 
      name: 'Chinese', 
      orders: 2200, 
      revenue: 220000,
    },
    { 
      name: 'Continental', 
      orders: 1600, 
      revenue: 160000,
    },
    { 
      name: 'Fast Food', 
      orders: 2800, 
      revenue: 280000,
    },
  ];

  const reports = [
    {
      id: 1,
      name: "Monthly Performance - October 2023",
      type: "PDF",
      size: "1.2 MB",
      date: "01 Nov 2023",
    },
    {
      id: 2,
      name: "Quarterly Business Review - Q3 2023",
      type: "XLSX",
      size: "3.5 MB",
      date: "15 Oct 2023",
    },
    {
      id: 3,
      name: "User Acquisition Report - September 2023",
      type: "PDF",
      size: "0.9 MB",
      date: "05 Oct 2023",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Reports & Insights</h1>
            <p className="text-muted-foreground">
              View analytics and generate detailed reports
            </p>
          </div>
          <Button className="bg-synkris-green hover:bg-synkris-green/90 text-black flex items-center gap-2">
            <Download className="h-4 w-4" />
            Generate Report
          </Button>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="customers">Customers</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue</CardTitle>
                  <CardDescription>
                    Total revenue generated each month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={monthlyRevenue}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          formatter={(value) => [`₹${(value as number).toLocaleString()}`, 'Revenue']}
                        />
                        <Bar dataKey="revenue" fill="#4efd00" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Growth</CardTitle>
                  <CardDescription>
                    Total customers over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={customerGrowth}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="customers" stroke="#4efd00" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Subscription Distribution</CardTitle>
                  <CardDescription>
                    Breakdown of subscription plans
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={planDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {planDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Cuisines</CardTitle>
                  <CardDescription>
                    Orders and revenue by cuisine type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={cuisinePerformance}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" orientation="left" stroke="#4efd00" />
                        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="orders" fill="#4efd00" name="Orders" />
                        <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" name="Revenue (₹)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="revenue">
            <Card>
              <CardHeader>
                <CardTitle>Revenue Analysis</CardTitle>
                <CardDescription>
                  Detailed revenue breakdown
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">Detailed revenue analysis would be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="customers">
            <Card>
              <CardHeader>
                <CardTitle>Customer Insights</CardTitle>
                <CardDescription>
                  Customer acquisition and retention metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">Detailed customer insights would be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order Analytics</CardTitle>
                <CardDescription>
                  Order volume and processing metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center py-8 text-muted-foreground">Detailed order analytics would be displayed here</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Generated Reports</CardTitle>
            <CardDescription>
              Download previously generated reports
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="py-3 px-4 text-left font-medium">Report Name</th>
                    <th className="py-3 px-4 text-left font-medium">Type</th>
                    <th className="py-3 px-4 text-left font-medium">Size</th>
                    <th className="py-3 px-4 text-left font-medium">Generated On</th>
                    <th className="py-3 px-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {reports.map((report) => (
                    <tr key={report.id} className="border-b">
                      <td className="py-3 px-4 flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        {report.name}
                      </td>
                      <td className="py-3 px-4">{report.type}</td>
                      <td className="py-3 px-4">{report.size}</td>
                      <td className="py-3 px-4">{report.date}</td>
                      <td className="py-3 px-4">
                        <Button variant="outline" size="sm" className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          Download
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default Reports;
