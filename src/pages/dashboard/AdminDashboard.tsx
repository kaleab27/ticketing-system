import { TicketList } from "@/components/TicketList";
import useGetTickets from "@/hooks/useGetTickets";

export default function AdminDashboard() {
  const { data, isPending, error } = useGetTickets();
  console.log(data, isPending, error);
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">All Support Tickets</h2>
        {error ? (
          "Error while loading the Tickets"
        ) : isPending ? (
          "Loading the Tickets"
        ) : (
          <TicketList tickets={data} isAdmin={true} />
        )}
      </div>
    </div>
  );
}
