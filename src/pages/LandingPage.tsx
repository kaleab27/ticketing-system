import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, MessageSquare, Shield, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bold text-primary">
                TicketPro
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-primary"
              >
                Log in
              </Link>
              <Button asChild>
                <Link to="/signup">Sign up</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="bg-gradient-to-b from-primary/10 to-primary/5 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:hidden">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-primary/60 opacity-30 blur"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-md">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-medium">
                        Cannot access my account
                      </span>
                      <span className="ml-auto text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        Open
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-md">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">
                        App crashes on startup
                      </span>
                      <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                        In Progress
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-md">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Password reset issue</span>
                      <span className="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Resolved
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                Streamline your support with our ticketing system
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                A simple, efficient way to manage support requests and keep your
                customers happy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/signup">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/dashboard">View Demo</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary to-primary/60 opacity-30 blur"></div>
                <div className="relative bg-white p-6 rounded-lg shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-md">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="font-medium">
                        Cannot access my account
                      </span>
                      <span className="ml-auto text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                        Open
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-md">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <span className="font-medium">
                        App crashes on startup
                      </span>
                      <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                        In Progress
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-primary/5 rounded-md">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Password reset issue</span>
                      <span className="ml-auto text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        Resolved
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to provide excellent customer support and
              manage requests efficiently.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Ticket Management
                  </h3>
                  <p className="text-gray-600">
                    Create, track, and resolve support tickets in one
                    centralized system.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Role-Based Access
                  </h3>
                  <p className="text-gray-600">
                    Different dashboards and permissions for users and
                    administrators.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Secure Authentication
                  </h3>
                  <p className="text-gray-600">
                    Robust user authentication and authorization system.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <CheckCircle className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    Status Tracking
                  </h3>
                  <p className="text-gray-600">
                    Track the status of tickets from open to resolved.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our ticketing system is designed to be simple and intuitive.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Create a Ticket</h3>
              <p className="text-gray-600">
                Users submit support requests with details about their issue.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Admin Review</h3>
              <p className="text-gray-600">
                Administrators review and update the status of tickets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Resolution</h3>
              <p className="text-gray-600">
                Issues are resolved and marked as completed in the system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of organizations that use our ticketing system to
              provide better support.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <Link to="/signup">Sign up for free</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/login">Log in</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <Link to="/" className="text-xl font-bold text-primary">
                TicketPro
              </Link>
              <p className="text-sm text-gray-600 mt-2">
                © {new Date().getFullYear()} TicketPro. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}
