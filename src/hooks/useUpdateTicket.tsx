import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUpdateTicket() {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");
  const url = import.meta.env.VITE_BACKEND_ENDPOINT;

  return useMutation({
    mutationFn: async ({
      ticketId,
      status,
    }: {
      ticketId: string;
      status: "Open" | "In Progress" | "Closed";
    }) => {
      const response = await fetch(`${url}/tickets/${ticketId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      });

      if (!response.ok) {
        throw new Error("Failed to update ticket status.");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
    onError: (error) => {
      console.error("Error updating ticket:", error);
    },
  });
}
