
import React from "react";
import { Mail, FileText, UserCheck, ExternalLink } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const Forms = () => {
  // Sample data - replace with real data later
  const demoRequests = [
    {
      id: 1,
      name: "Rajesh Kumar",
      business: "Spice House",
      email: "rajesh@spicehouse.com",
      phone: "+91 9876543210",
      city: "Mumbai",
      date: "25 Oct 2023",
      status: "New",
    },
    {
      id: 2,
      name: "Priya Sharma",
      business: "South Bites",
      email: "priya@southbites.com",
      phone: "+91 8765432109",
      city: "Bangalore",
      date: "23 Oct 2023",
      status: "Contacted",
    },
    {
      id: 3,
      name: "Amit Singh",
      business: "Delhi Delights",
      email: "amit@delhidelights.com",
      phone: "+91 7654321098",
      city: "Delhi",
      date: "20 Oct 2023",
      status: "Scheduled",
    },
  ];

  const enterpriseLeads = [
    {
      id: 1,
      business: "Global Foods Inc.",
      industry: "Restaurant",
      email: "contact@globalfoods.com",
      phone: "+91 9876543210",
      monthlyOrders: "10,000+",
      location: "Multiple cities",
      date: "26 Oct 2023",
      status: "New",
    },
    {
      id: 2,
      business: "Hotel Luxury Chain",
      industry: "Hospitality",
      email: "business@luxuryhotels.com",
      phone: "+91 8765432109",
      monthlyOrders: "5,000+",
      location: "Pan India",
      date: "22 Oct 2023",
      status: "In Negotiation",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Form Submissions</h1>
          <p className="text-muted-foreground">
            Manage demo requests and enterprise sales inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Demo Requests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{demoRequests.length}</div>
              <p className="text-sm text-muted-foreground">
                Total demo requests received
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Enterprise Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{enterpriseLeads.length}</div>
              <p className="text-sm text-muted-foreground">
                Total enterprise inquiries
              </p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="demo">
          <TabsList className="mb-4">
            <TabsTrigger value="demo">Demo Requests</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise Inquiries</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demo">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Business</th>
                        <th className="py-3 px-4 text-left font-medium">Contact</th>
                        <th className="py-3 px-4 text-left font-medium">City</th>
                        <th className="py-3 px-4 text-left font-medium">Date</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {demoRequests.map((request) => (
                        <tr key={request.id} className="border-b">
                          <td className="py-3 px-4">{request.name}</td>
                          <td className="py-3 px-4">{request.business}</td>
                          <td className="py-3 px-4">
                            <div>
                              <p>{request.email}</p>
                              <p className="text-xs text-muted-foreground">{request.phone}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">{request.city}</td>
                          <td className="py-3 px-4">{request.date}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              request.status === "New"
                                ? "bg-blue-100 text-blue-800"
                                : request.status === "Contacted"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}>
                              {request.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="outline" size="sm">
                                <Mail className="h-3 w-3 mr-1" />
                                Contact
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="enterprise">
            <Card>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Business</th>
                        <th className="py-3 px-4 text-left font-medium">Industry</th>
                        <th className="py-3 px-4 text-left font-medium">Contact</th>
                        <th className="py-3 px-4 text-left font-medium">Monthly Orders</th>
                        <th className="py-3 px-4 text-left font-medium">Date</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {enterpriseLeads.map((lead) => (
                        <tr key={lead.id} className="border-b">
                          <td className="py-3 px-4">{lead.business}</td>
                          <td className="py-3 px-4">{lead.industry}</td>
                          <td className="py-3 px-4">
                            <div>
                              <p>{lead.email}</p>
                              <p className="text-xs text-muted-foreground">{lead.phone}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">{lead.monthlyOrders}</td>
                          <td className="py-3 px-4">{lead.date}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                              lead.status === "New"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button className="bg-synkris-green hover:bg-synkris-green/90 text-black" size="sm">
                                <UserCheck className="h-3 w-3 mr-1" />
                                Respond
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Forms;
