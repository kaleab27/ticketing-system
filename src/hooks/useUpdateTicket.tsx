import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useUpdateTicket() {
  const queryClient = useQueryClient();
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2IyNDY4ODY2ZjFiZWE3MWFhYWNlMiIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0MTM2NjM4NiwiZXhwIjoxNzQxMzY5OTg2fQ.hxH93UbitJce3IBQpjr-oxF2OiLks67k0YP6Jo2oXlg"; //localStorage.getItem("token");
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
