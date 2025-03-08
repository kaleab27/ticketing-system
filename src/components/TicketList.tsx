import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatDistanceToNow } from "date-fns";
import useUpdateTicket from "@/hooks/useUpdateTicket";

export interface Ticket {
  _id: string;
  title: string;
  description: string;
  status: "Open" | "In Progress" | "Closed";
  createdAt: string;
  user: string;
  profiles?: {
    name: string;
    email: string;
  };
}

interface TicketListProps {
  tickets: Ticket[];
  isAdmin: boolean;
}

export function TicketList({ tickets, isAdmin }: TicketListProps) {
  const [updating, setUpdating] = useState<string | null>(null);
  const updateTicket = useUpdateTicket();

  const handleStatusChange = async (ticketId: string, newStatus: "Open" | "In Progress" | "Closed") => {
    setUpdating(ticketId);
    try {
      updateTicket.mutate({ticketId, status: newStatus});

      console.log(newStatus);
    } catch (error) {
      console.error("Error updating ticket status:", error);
    } finally {
      setUpdating(null);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-red-100 text-red-800 hover:bg-red-200";
      case "in progress":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-200";
      case "resolved":
        return "bg-green-100 text-green-800 hover:bg-green-200";
      default:
        return "bg-gray-100 text-gray-800 hover:bg-gray-200";
    }
  };

  if (tickets.length === 0) {
    return (
      <Card>
        <CardContent className="p-6 text-center text-gray-500">
          No tickets found.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      {tickets.map((ticket) => (
        <Card key={ticket._id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{ticket.title}</h3>
              <Badge className={getStatusColor(ticket.status)}>
                {ticket.status}
              </Badge>
            </div>

            <p className="text-gray-600 mb-4">{ticket.description}</p>

            <div className="flex justify-between items-center text-sm text-gray-500">
              <div>
                {isAdmin && ticket.profiles && (
                  <p>
                    By:{" "}
                    <span className="font-medium">{ticket.profiles.name}</span>{" "}
                    ({ticket.profiles.email})
                  </p>
                )}
                <p>
                  Created:{" "}
                  {formatDistanceToNow(new Date(ticket.createdAt), {
                    addSuffix: true,
                  })}
                </p>
              </div>

              {isAdmin && (
                <div className="flex items-center space-x-2">
                  <span className="text-sm">Status:</span>
                  <Select
                    defaultValue={ticket.status}
                    onValueChange={(value) =>
                      handleStatusChange(ticket._id, value as "Open" | "In Progress" | "Closed")
                    }
                    disabled={updating === ticket._id}
                  >
                    <SelectTrigger className="w-[140px]">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Open">Open</SelectItem>
                      <SelectItem value="In Progress">In Progress</SelectItem>
                      <SelectItem value="Closed">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
