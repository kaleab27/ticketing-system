import { useQuery } from "@tanstack/react-query";

export default function useGetTickets() {
  return useQuery({
    queryKey: ["tickets"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const url = import.meta.env.VITE_BACKEND_ENDPOINT;

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await fetch(`${url}/tickets`, options);

      if (!response.ok) {
        throw new Error(`Error fetching tickets: ${response.statusText}`);
      }

      const data = await response.json()
      return data;
    },
  });
}
