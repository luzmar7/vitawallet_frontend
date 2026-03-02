// src/pages/Exchange.tsx
import { useState } from "react";
import Layout from "../components/Layout";
import TextField from "../components/TextField.tsx";
import { useExchangeQuote } from "../hooks/useExchangeQuote";
import { useWallet } from "../hooks/useWallet";
import { useNavigate } from "react-router-dom";
import "../styles/exchange.css";
import CurrencySelect from "../components/CurrencySelect.tsx";
import Button from "../components/Button.tsx";

const currencies = ["USD", "CLP", "BTC", "USDT", "USDC"];

export default function Exchange() {
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("BTC");
  const [amount, setAmount] = useState("");
  const { balances } = useWallet();
  const navigate = useNavigate();
  const availableBalance =
    balances.find((b) => b.currency === from)?.amount || "0";

  const { quote, loading } = useExchangeQuote(from, to, amount);

  return (
    <Layout>
      <div className="exchange-container">
        <h2 className="exchange-title text-subtitle-24-semibold">
          ¿Qué deseas intercambiar?
        </h2>

        <p className="exchange-balance text-body">
          Saldo disponible: ${availableBalance} {from}
        </p>

        {/* MONTO */}
        <div className="exchange-section">
          <label className="text-caption-14">Monto a intercambiar</label>

          <div className="exchange-row">
            <CurrencySelect
              value={from}
              options={currencies}
              onChange={setFrom}
            />

            <TextField
              placeholder="0,00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              iconLeft="$"
            />
          </div>
        </div>

        {/* RECIBIR */}
        <div className="exchange-section">
          <label className="text-caption-14">Quiero recibir</label>

          <div className="exchange-row">
            <CurrencySelect
              value={to}
              options={currencies.filter((c) => c !== from)}
              onChange={setTo}
            />

            <TextField
              value={quote?.to_amount || ""}
              placeholder="0,00"
              iconLeft="≈"
              success={!!quote}
              disabled
            />
          </div>
        </div>

        <div className="exchange-actions">
          <Button
            variant="secondary"
            fullWidth
            onClick={() => window.history.back()}
          >
            Atrás
          </Button>

          <Button
            variant={!amount || loading || from === to ? "disabled" : "primary"}
            fullWidth
            onClick={() =>
              navigate("/exchange-summary", {
                state: { from, to, amount, quote },
              })
            }
          >
            {loading ? "Calculando..." : "Continuar"}
          </Button>
        </div>
      </div>
    </Layout>
  );
}
