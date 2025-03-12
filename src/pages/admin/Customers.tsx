
import React from "react";
import { Users, Search, Filter } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Customers = () => {
  // Sample data - replace with real data later
  const customers = [
    {
      id: 1,
      businessName: "Spice Junction",
      ownerName: "Amit Singh",
      plan: "Synkris Pro",
      location: "Mumbai",
      status: "Active",
    },
    {
      id: 2,
      businessName: "Tandoor Express",
      ownerName: "Priya Sharma",
      plan: "Synkris Lite",
      location: "Delhi",
      status: "Active",
    },
    {
      id: 3,
      businessName: "South Delights",
      ownerName: "Raj Kumar",
      plan: "Synkris Elite",
      location: "Bangalore",
      status: "Pending",
    },
    {
      id: 4,
      businessName: "Urban Bites",
      ownerName: "Neha Gupta",
      plan: "Synkris Pro",
      location: "Hyderabad",
      status: "Suspended",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Customers</h1>
            <p className="text-muted-foreground">
              Manage all registered cloud kitchens and restaurant owners
            </p>
          </div>
          <Button className="bg-synkris-green hover:bg-synkris-green/90 text-black">
            Add New Customer
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Customer Management</CardTitle>
            <CardDescription>
              View and manage all registered businesses
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2 mb-6">
              <div className="relative flex-grow">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search customers..."
                  className="pl-8"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-1">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>

            <div className="rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="py-3 px-4 text-left font-medium">Business Name</th>
                    <th className="py-3 px-4 text-left font-medium">Owner</th>
                    <th className="py-3 px-4 text-left font-medium">Plan</th>
                    <th className="py-3 px-4 text-left font-medium">Location</th>
                    <th className="py-3 px-4 text-left font-medium">Status</th>
                    <th className="py-3 px-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map((customer) => (
                    <tr key={customer.id} className="border-b">
                      <td className="py-3 px-4">{customer.businessName}</td>
                      <td className="py-3 px-4">{customer.ownerName}</td>
                      <td className="py-3 px-4">{customer.plan}</td>
                      <td className="py-3 px-4">{customer.location}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          customer.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : customer.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {customer.status}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">View</Button>
                          <Button variant="outline" size="sm">Edit</Button>
                        </div>
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

export default Customers;
