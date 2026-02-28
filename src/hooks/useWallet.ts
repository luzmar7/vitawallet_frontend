import { useEffect, useState } from "react";
import { getWallet } from "../api/wallet";

export interface Balance {
  currency: string;
  amount: string;
}

export function useWallet() {
  const [balances, setBalances] = useState<Balance[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  const fetchWallet = async () => {
    try {
      setLoading(true);
      const data = await getWallet();
      setBalances(data);
      setError("");
    } catch (err) {
      setError("Error loading wallet");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWallet();
  }, []);

  return {
    balances,
    loading,
    error,
    refetch: fetchWallet,
  };
}