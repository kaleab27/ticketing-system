import { TicketList, Ticket } from "@/components/TicketList";

// Sample ticket data
const sampleTickets: Ticket[] = [
  {
    id: "1",
    title: "Cannot access email",
    description:
      "I'm unable to log into my email account. It says 'invalid credentials' but I'm sure my password is correct.",
    status: "open",
    created_at: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(), // 3 days ago
    user_id: "user1",
    profiles: {
      name: "Alice Johnson",
      email: "alice@example.com",
    },
  },
  {
    id: "2",
    title: "App crashes on startup",
    description:
      "The mobile app crashes immediately after I open it. I've tried restarting my phone but it didn't help.",
    status: "in progress",
    created_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(), // 5 days ago
    user_id: "user2",
    profiles: {
      name: "Bob Smith",
      email: "bob@example.com",
    },
  },
  {
    id: "3",
    title: "Billing discrepancy",
    description:
      "I was charged twice for my last month's subscription. Can you please check and refund the extra charge?",
    status: "open",
    created_at: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
    user_id: "user3",
    profiles: {
      name: "Charlie Brown",
      email: "charlie@example.com",
    },
  },
  {
    id: "4",
    title: "Feature request: Dark mode",
    description:
      "It would be great if you could add a dark mode to the web application. It's hard on the eyes at night.",
    status: "open",
    created_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(), // 7 days ago
    user_id: "user4",
    profiles: {
      name: "Diana Prince",
      email: "diana@example.com",
    },
  },
  {
    id: "5",
    title: "Password reset not working",
    description:
      "I've tried to reset my password multiple times, but I'm not receiving the reset email. Can you help?",
    status: "resolved",
    created_at: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
    user_id: "user5",
    profiles: {
      name: "Ethan Hunt",
      email: "ethan@example.com",
    },
  },
];

export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">All Support Tickets</h2>
        <TicketList tickets={sampleTickets} isAdmin={true} />
      </div>
    </div>
  );
}
