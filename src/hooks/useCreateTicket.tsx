import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useCreateTicket() {
  const queryClient = useQueryClient();
  const token = localStorage.getItem("token");
  const url = import.meta.env.VITE_BACKEND_ENDPOINT;

  return useMutation({
    mutationFn: async (ticketData: { title: string; description: string }) => {
      const response = await fetch(`${url}/tickets`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(ticketData),
      });

      if (!response.ok) {
        throw new Error("Failed to create ticket");
      }

      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tickets"] });
    },
    onError: (error) => {
      console.error("Error creating ticket:", error);
    },
  });
}
