
import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  FileText,
  MapPin,
  LogOut,
  MenuIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(true);
  const navigate = useNavigate();

  const navItems = [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      title: "Customers",
      icon: Users,
      href: "/admin/customers",
    },
    {
      title: "Subscriptions",
      icon: CreditCard,
      href: "/admin/subscriptions",
    },
    {
      title: "Forms",
      icon: FileText,
      href: "/admin/forms",
    },
    {
      title: "Locations",
      icon: MapPin,
      href: "/admin/locations",
    },
    {
      title: "Reports",
      icon: FileText,
      href: "/admin/reports",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 z-40 h-screen transition-transform",
          sidebarOpen ? "w-64" : "w-16",
          "bg-sidebar border-r border-border"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <span className={cn("font-bold text-xl", !sidebarOpen && "hidden")}>
            Syn<span className="text-synkris-green">kris</span>
          </span>
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>

        <nav className="space-y-1 px-2 py-4">
          {navItems.map((item) => (
            <button
              key={item.title}
              onClick={() => navigate(item.href)}
              className={cn(
                "flex items-center w-full px-4 py-2 text-sm rounded-lg",
                "hover:bg-gray-100 transition-colors",
                "text-gray-700 hover:text-gray-900"
              )}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span className={cn(!sidebarOpen && "hidden")}>{item.title}</span>
            </button>
          ))}

          <button
            onClick={() => navigate("/login")}
            className={cn(
              "flex items-center w-full px-4 py-2 text-sm rounded-lg mt-8",
              "hover:bg-red-50 transition-colors",
              "text-red-600 hover:text-red-700"
            )}
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span className={cn(!sidebarOpen && "hidden")}>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Main content */}
      <main
        className={cn(
          "transition-all duration-200",
          sidebarOpen ? "ml-64" : "ml-16"
        )}
      >
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
