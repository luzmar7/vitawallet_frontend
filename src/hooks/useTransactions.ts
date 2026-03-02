import { useEffect, useState, useCallback } from "react";
import { getTransactions } from "../api/transactions";

export interface Transaction {
  id: number;
  from_currency: string;
  to_currency: string;
  from_amount: string;
  to_amount: string;
  status: string;
  created_at: string;
}

export function useTransactions(status?: string) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true);
      const data = await getTransactions(status);
      setTransactions(data);
      setError("");
    } catch {
      setError("Error loading transactions");
    } finally {
      setLoading(false);
    }
  }, [status]); // 👈 depende de status

  useEffect(() => {
    fetchTransactions();
  }, [fetchTransactions]); // 👈 ahora sí correcto

  return {
    transactions,
    loading,
    error,
    refetch: fetchTransactions,
  };
}
