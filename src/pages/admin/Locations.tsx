
import React from "react";
import { MapPin, Building, Truck, Users } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Locations = () => {
  // Sample data - replace with real data later
  const cities = [
    {
      name: "Mumbai",
      totalKitchens: 12,
      occupancyRate: "85%",
      activeUsers: 42,
      growth: "+12%",
    },
    {
      name: "Delhi",
      totalKitchens: 10,
      occupancyRate: "90%",
      activeUsers: 38,
      growth: "+8%",
    },
    {
      name: "Bangalore",
      totalKitchens: 8,
      occupancyRate: "95%",
      activeUsers: 32,
      growth: "+15%",
    },
    {
      name: "Hyderabad",
      totalKitchens: 6,
      occupancyRate: "75%",
      activeUsers: 22,
      growth: "+10%",
    },
    {
      name: "Chennai",
      totalKitchens: 5,
      occupancyRate: "70%",
      activeUsers: 18,
      growth: "+5%",
    },
    {
      name: "Pune",
      totalKitchens: 4,
      occupancyRate: "80%",
      activeUsers: 16,
      growth: "+7%",
    },
  ];

  const kitchenSpaces = [
    {
      id: 1,
      name: "Andheri Kitchen Hub",
      city: "Mumbai",
      address: "Andheri East, Mumbai - 400069",
      totalSlots: 24,
      availableSlots: 4,
      rating: "4.8/5",
    },
    {
      id: 2,
      name: "Bandra Culinary Space",
      city: "Mumbai",
      address: "Linking Road, Bandra West, Mumbai - 400050",
      totalSlots: 18,
      availableSlots: 2,
      rating: "4.7/5",
    },
    {
      id: 3,
      name: "South Delhi Kitchen Complex",
      city: "Delhi",
      address: "Hauz Khas, New Delhi - 110016",
      totalSlots: 20,
      availableSlots: 0,
      rating: "4.9/5",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Kitchen Locations</h1>
            <p className="text-muted-foreground">
              Manage kitchen spaces and locations across cities
            </p>
          </div>
          <Button className="bg-synkris-green hover:bg-synkris-green/90 text-black">
            Add New Location
          </Button>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <Card key={city.name}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl">{city.name}</CardTitle>
                  <span className="text-sm font-medium text-green-600">{city.growth}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Building className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Kitchens</p>
                      <p className="text-lg font-bold">{city.totalKitchens}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Truck className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Occupancy</p>
                      <p className="text-lg font-bold">{city.occupancyRate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Active Users</p>
                      <p className="text-lg font-bold">{city.activeUsers}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Available Kitchen Spaces</CardTitle>
            <CardDescription>
              View and manage all kitchen locations and spaces
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="py-3 px-4 text-left font-medium">Kitchen Name</th>
                    <th className="py-3 px-4 text-left font-medium">City</th>
                    <th className="py-3 px-4 text-left font-medium">Total Slots</th>
                    <th className="py-3 px-4 text-left font-medium">Available</th>
                    <th className="py-3 px-4 text-left font-medium">Rating</th>
                    <th className="py-3 px-4 text-left font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {kitchenSpaces.map((kitchen) => (
                    <tr key={kitchen.id} className="border-b">
                      <td className="py-3 px-4">
                        <div>
                          <p className="font-medium">{kitchen.name}</p>
                          <p className="text-xs text-muted-foreground">{kitchen.address}</p>
                        </div>
                      </td>
                      <td className="py-3 px-4">{kitchen.city}</td>
                      <td className="py-3 px-4">{kitchen.totalSlots}</td>
                      <td className="py-3 px-4">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          kitchen.availableSlots > 0
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {kitchen.availableSlots}
                        </span>
                      </td>
                      <td className="py-3 px-4">{kitchen.rating}</td>
                      <td className="py-3 px-4">
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">Manage</Button>
                          <Button variant="outline" size="sm">View Map</Button>
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

export default Locations;
