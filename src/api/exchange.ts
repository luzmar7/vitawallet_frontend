// src/api/exchange.ts
import api from "./axios";

export const createExchange = async (
  from_currency: string,
  to_currency: string,
  amount: string
) => {
  const response = await api.post("/exchange", {
    from_currency,
    to_currency,
    amount,
  });

  return response.data;
};