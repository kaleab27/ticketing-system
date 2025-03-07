import DashboardHeader from "@/components/Header";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <div>
      <DashboardHeader />
      <main className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}
