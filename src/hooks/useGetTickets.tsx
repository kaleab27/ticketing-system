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

      try {
        const response = await fetch(`${url}/tickets`, options);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return error;
      }
    },
  });
}
