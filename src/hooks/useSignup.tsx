import { useState } from "react";

interface SignupResponse {
  token: string;
}

export default function useSignup() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  const signup = async (name: string, email: string, password: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_ENDPOINT}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password, role: "user" }),
        }
      );

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data: SignupResponse = await response.json();
      localStorage.setItem("token", data.token);
      setToken(data.token);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, token, loading, error };
}
