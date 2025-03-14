
import React, { useState } from "react";
import { Mail, FileText, UserCheck, Phone, MessageSquare, Search, Filter } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

// Sample data - in real implementation, this would come from an API or database
import { demoRequests, enterpriseLeads, contactSubmissions } from "@/data/formSubmissions";

const Forms = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("demo");
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  
  // Filter functions for each tab
  const filteredDemoRequests = demoRequests.filter(request => {
    const matchesSearch = 
      request.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !statusFilter || request.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const filteredEnterpriseLeads = enterpriseLeads.filter(lead => {
    const matchesSearch = 
      lead.business.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !statusFilter || lead.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const filteredContactSubmissions = contactSubmissions.filter(message => {
    const matchesSearch = 
      message.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      message.subject.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = !statusFilter || message.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setStatusFilter(null);
  };

  const renderStatusBadge = (status: string) => {
    const colors = {
      "New": "bg-blue-100 text-blue-800",
      "Contacted": "bg-yellow-100 text-yellow-800",
      "Scheduled": "bg-green-100 text-green-800",
      "In Negotiation": "bg-purple-100 text-purple-800",
      "Responded": "bg-teal-100 text-teal-800"
    };
    
    const colorClass = colors[status as keyof typeof colors] || "bg-gray-100 text-gray-800";
    
    return (
      <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
        {status}
      </span>
    );
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Form Submissions</h1>
          <p className="text-muted-foreground">
            Manage all customer form submissions in one place
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
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
              <CardTitle className="flex items-center gap-2 text-lg">
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

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 text-lg">
                <MessageSquare className="h-5 w-5" />
                Contact Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{contactSubmissions.length}</div>
              <p className="text-sm text-muted-foreground">
                Total contact form submissions
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-4 md:justify-between">
          <div className="relative w-full md:w-auto md:min-w-[300px]">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search submissions..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9"
            />
          </div>
          
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  <Filter className="h-4 w-4" />
                  {statusFilter ? `Status: ${statusFilter}` : "Filter by Status"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setStatusFilter(null)}>
                  All Statuses
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("New")}>
                  New
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("Contacted")}>
                  Contacted
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("Scheduled")}>
                  Scheduled
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("In Negotiation")}>
                  In Negotiation
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("Responded")}>
                  Responded
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs defaultValue="demo" value={activeTab} onValueChange={handleTabChange}>
          <TabsList className="w-full md:w-auto mb-4 grid grid-cols-3 md:flex">
            <TabsTrigger value="demo">Demo Requests</TabsTrigger>
            <TabsTrigger value="enterprise">Enterprise Inquiries</TabsTrigger>
            <TabsTrigger value="contact">Contact Messages</TabsTrigger>
          </TabsList>
          
          <TabsContent value="demo">
            <Card>
              <CardContent className="pt-6 overflow-auto">
                <div className="rounded-md border overflow-x-auto">
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
                      {filteredDemoRequests.length > 0 ? filteredDemoRequests.map((request) => (
                        <tr key={request.id} className="border-b">
                          <td className="py-3 px-4 whitespace-nowrap">{request.name}</td>
                          <td className="py-3 px-4 whitespace-nowrap">{request.business}</td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="truncate max-w-[150px]">{request.email}</p>
                              <p className="text-xs text-muted-foreground">{request.phone}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">{request.city}</td>
                          <td className="py-3 px-4 whitespace-nowrap">{request.date}</td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            {renderStatusBadge(request.status)}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button variant="outline" size="sm" className="flex items-center">
                                <Mail className="h-3 w-3 mr-1" />
                                <span className="hidden md:inline">Contact</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-muted-foreground">
                            No demo requests found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="enterprise">
            <Card>
              <CardContent className="pt-6 overflow-auto">
                <div className="rounded-md border overflow-x-auto">
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
                      {filteredEnterpriseLeads.length > 0 ? filteredEnterpriseLeads.map((lead) => (
                        <tr key={lead.id} className="border-b">
                          <td className="py-3 px-4 whitespace-nowrap">{lead.business}</td>
                          <td className="py-3 px-4 whitespace-nowrap">{lead.industry}</td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="truncate max-w-[150px]">{lead.email}</p>
                              <p className="text-xs text-muted-foreground">{lead.phone}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">{lead.monthlyOrders}</td>
                          <td className="py-3 px-4 whitespace-nowrap">{lead.date}</td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            {renderStatusBadge(lead.status)}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button className="bg-synkris-green hover:bg-synkris-green/90 text-black" size="sm">
                                <UserCheck className="h-3 w-3 mr-1" />
                                <span className="hidden md:inline">Respond</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-muted-foreground">
                            No enterprise leads found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contact">
            <Card>
              <CardContent className="pt-6 overflow-auto">
                <div className="rounded-md border overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b bg-muted/50">
                        <th className="py-3 px-4 text-left font-medium">Name</th>
                        <th className="py-3 px-4 text-left font-medium">Contact</th>
                        <th className="py-3 px-4 text-left font-medium">Subject</th>
                        <th className="py-3 px-4 text-left font-medium">Message</th>
                        <th className="py-3 px-4 text-left font-medium">Date</th>
                        <th className="py-3 px-4 text-left font-medium">Status</th>
                        <th className="py-3 px-4 text-left font-medium">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredContactSubmissions.length > 0 ? filteredContactSubmissions.map((message) => (
                        <tr key={message.id} className="border-b">
                          <td className="py-3 px-4 whitespace-nowrap">{message.name}</td>
                          <td className="py-3 px-4">
                            <div>
                              <p className="truncate max-w-[150px]">{message.email}</p>
                              <p className="text-xs text-muted-foreground">{message.phone}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">{message.subject}</td>
                          <td className="py-3 px-4">
                            <p className="truncate max-w-[180px]">{message.message}</p>
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">{message.date}</td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            {renderStatusBadge(message.status)}
                          </td>
                          <td className="py-3 px-4 whitespace-nowrap">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">View</Button>
                              <Button className="bg-synkris-green hover:bg-synkris-green/90 text-black" size="sm">
                                <Phone className="h-3 w-3 mr-1" />
                                <span className="hidden md:inline">Reply</span>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      )) : (
                        <tr>
                          <td colSpan={7} className="py-8 text-center text-muted-foreground">
                            No contact messages found
                          </td>
                        </tr>
                      )}
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
