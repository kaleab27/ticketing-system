import { CreateTicketForm } from "@/components/CreateTicket";
import { TicketList} from "@/components/TicketList";
import useGetTickets from "@/hooks/useGetTickets";

export default function Dashboard() {
  const { data, isPending, error } = useGetTickets();
  console.log(data, isPending, error);
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold mb-4">Create New Ticket</h2>
          <CreateTicketForm />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">All Tickets</h2>
          {error ? "There was an error loading the tickets" : isPending ? "Loading Tickets" : <TicketList tickets={data} isAdmin={false} />}
        </div>
      </div>
    </div>
  );
}
