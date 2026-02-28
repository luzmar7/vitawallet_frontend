// src/pages/Exchange.tsx
import { useState } from "react";
import Layout from "../components/Layout";
import { useExchangeQuote } from "../hooks/useExchangeQuote";
import { createExchange } from "../api/exchange";
import { useWallet } from "../hooks/useWallet";

const currencies = ["USD", "CLP", "BTC", "USDT", "USDC"];

export default function Exchange() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BTC");
  const [amount, setAmount] = useState("");
  const { balances } = useWallet();
  const availableBalance =
  balances.find((b) => b.currency === from)?.amount || "0";

  const { quote, loading } = useExchangeQuote(from, to, amount);

  const handleConfirm = async () => {
    try {
      await createExchange(from, to, amount);
      alert("Exchange successful");
    } catch (err: any) {
      alert(err.response?.data?.error || "Exchange failed");
    }
  };

  return (
    <Layout>
        <p style={{ color: "#00a6a6", marginTop: "10px" }}>
  Saldo disponible: {availableBalance} {from}
</p>
      <h2>¿Qué deseas intercambiar?</h2>

      {/* FROM */}
      <div style={{ marginTop: "20px" }}>
        <label>Moneda origen</label>
        <select value={from} onChange={(e) => setFrom(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Monto a intercambiar</label>
        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      {/* TO */}
      <div style={{ marginTop: "20px" }}>
        <label>Moneda destino</label>
        <select value={to} onChange={(e) => setTo(e.target.value)}>
          {currencies
            .filter((currency) => currency !== from)
            .map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>

      <div style={{ marginTop: "20px" }}>
        <label>Quiero recibir</label>
        <input value={quote?.to_amount || ""} disabled />
      </div>

      <button
        onClick={handleConfirm}
        disabled={!amount || loading || from === to}
        style={{ marginTop: "30px" }}
      >
        {loading ? "Calculando..." : "Confirmar"}
      </button>
    </Layout>
  );
}