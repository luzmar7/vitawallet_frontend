import api from "./axios";

export const getTransactions = async (status?: string) => {
  const response = await api.get("/transactions", {
    params: status ? { status } : {},
  });

  return response.data;
};
