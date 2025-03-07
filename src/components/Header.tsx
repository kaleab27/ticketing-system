import { useState } from "react";
import { Link } from "react-router";
import { useLocation } from "react-router";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const NavLink = ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <Link
      to={href}
      className={`px-3 py-2 rounded-md text-sm font-medium ${
        isActive(href)
          ? "bg-primary text-primary-foreground"
          : "text-gray-700 hover:bg-gray-100 hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-primary">
              Ticketing System
            </Link>
            <nav className="hidden md:ml-6 md:flex md:space-x-4">
              <NavLink href="/dashboard">Dashboard</NavLink>
              <NavLink href="/dashboard/admin">Admin Dashboard</NavLink>
            </nav>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm text-gray-700">Demo User</span>
            <Button variant="outline">Sign Out (Demo)</Button>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink href="/dashboard">Dashboard</NavLink>
            <NavLink href="/dashboard/admin">Admin Dashboard</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">
                  Demo User
                </div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <Button variant="outline" className="w-full justify-start">
                Sign Out (Demo)
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
