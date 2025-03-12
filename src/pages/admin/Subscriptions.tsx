
import React from "react";
import { CreditCard, DollarSign, TrendingUp, Users } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Subscriptions = () => {
  // Sample data - replace with real data later
  const subscriptionStats = [
    {
      title: "Monthly Revenue",
      value: "₹9.2L",
      description: "↑ 12% from last month",
      icon: DollarSign,
    },
    {
      title: "Active Subscriptions",
      value: "124",
      description: "↑ 4% from last month",
      icon: CreditCard,
    },
    {
      title: "New Subscribers",
      value: "18",
      description: "This month",
      icon: Users,
    },
    {
      title: "Renewal Rate",
      value: "92%",
      description: "↑ 2% from last month",
      icon: TrendingUp,
    },
  ];

  const plans = [
    {
      id: 1,
      name: "Synkris Lite",
      price: "₹20,000/month",
      description: "Shared Kitchen",
      subscribers: 65,
      revenue: "₹13.0L",
    },
    {
      id: 2,
      name: "Synkris Pro",
      price: "₹50,000/month",
      description: "Dedicated Kitchen",
      subscribers: 42,
      revenue: "₹21.0L",
    },
    {
      id: 3,
      name: "Synkris Elite",
      price: "Custom Pricing",
      description: "Enterprise",
      subscribers: 17,
      revenue: "₹35.2L",
    },
  ];

  const upcomingRenewals = [
    {
      id: 1,
      businessName: "Spice Junction",
      plan: "Synkris Pro",
      renewalDate: "28 Oct 2023",
      amount: "₹50,000",
    },
    {
      id: 2,
      businessName: "Tandoor Express",
      plan: "Synkris Lite",
      renewalDate: "30 Oct 2023",
      amount: "₹20,000",
    },
    {
      id: 3,
      businessName: "Curry Tales",
      plan: "Synkris Elite",
      renewalDate: "02 Nov 2023",
      amount: "₹1,50,000",
    },
  ];

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">Subscriptions</h1>
          <p className="text-muted-foreground">
            Manage subscription plans and payments
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {subscriptionStats.map((stat) => (
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
              <CardTitle>Subscription Plans</CardTitle>
              <CardDescription>
                Overview of all available plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {plans.map((plan) => (
                  <div key={plan.id} className="flex justify-between items-center p-4 rounded-lg border">
                    <div>
                      <h3 className="font-semibold">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{plan.price}</p>
                      <p className="text-sm text-muted-foreground">{plan.subscribers} subscribers</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Renewals</CardTitle>
              <CardDescription>
                Subscriptions due in the next 7 days
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingRenewals.map((renewal) => (
                  <div key={renewal.id} className="flex justify-between items-center p-4 rounded-lg border">
                    <div>
                      <h3 className="font-semibold">{renewal.businessName}</h3>
                      <p className="text-sm text-muted-foreground">{renewal.plan}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{renewal.amount}</p>
                      <p className="text-sm text-muted-foreground">Due: {renewal.renewalDate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Subscriptions;
