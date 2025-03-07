import DashboardHeader from "@/components/Header";
import { Outlet } from "react-router";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Home() {
  return (
    <ProtectedRoute>
      <DashboardHeader />
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </ProtectedRoute>
  );
}
