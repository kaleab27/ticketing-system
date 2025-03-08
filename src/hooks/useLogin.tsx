import { useState } from "react";

interface LoginResponse {
  token: string;
  role: "user" | "admin";
}

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_ENDPOINT}/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        throw new Error("Invalid email or password");
      }

      const data: LoginResponse = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.role);
      setToken(data.token);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { login, token, loading, error };
}
