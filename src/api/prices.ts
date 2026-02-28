// src/api/prices.ts
import api from "./axios";

export const getQuote = async (
  from_currency: string,
  to_currency: string,
  amount: string
) => {
  const response = await api.get("/prices/quote", {
    params: { from_currency, to_currency, amount },
  });

  return response.data;
};