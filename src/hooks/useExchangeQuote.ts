// src/hooks/useExchangeQuote.ts
import { useEffect, useState } from "react";
import { getQuote } from "../api/prices";

interface Quote {
  from_currency: string;
  to_currency: string;
  rate: string;
  from_amount: string;
  to_amount: string;
}
export function useExchangeQuote(from: string, to: string, amount: string) {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!amount || Number(amount) <= 0) return;

    const fetchQuote = async () => {
      try {
        setLoading(true);
        const data = await getQuote(from, to, amount);
        setQuote(data);
        setError("");
      } catch {
        setError("Error fetching quote");
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchQuote, 500); // debounce
    return () => clearTimeout(timeout);
  }, [from, to, amount]);

  return { quote, loading, error };
}
