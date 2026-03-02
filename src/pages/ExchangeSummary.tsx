import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import { createExchange } from "../api/exchange";
import SuccessModal from "../components/SucessModal";

export default function ExchangeSummary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { from, to, amount, quote } = state || {};
  const [successModal, setSuccessModal] = useState(false);

  const handleExchange = async () => {
    try {
      await createExchange(from, to, amount);
      setSuccessModal(true);
    } catch (err: any) {
      alert(err.response?.data?.error || "Exchange failed");
    }
  };
  return (
    <Layout>
      <div className="exchange-container">
        <h2 className="exchange-title">Resumen de transacción</h2>

        <div className="summary-card">
          <p>
            Monto a intercambiar: {amount} {from}
          </p>
          <p>
            Tasa de cambio: 1 {to} = {quote?.rate}
          </p>
          <p>
            Total a recibir: {quote?.to_amount} {to}
          </p>
        </div>

        <div className="exchange-actions">
          <Button variant="secondary" fullWidth onClick={() => navigate(-1)}>
            Atrás
          </Button>

          <Button variant="primary" fullWidth onClick={handleExchange}>
            Intercambiar
          </Button>
        </div>
      </div>
      <SuccessModal
        open={successModal}
        currency={to}
        onClose={() => {
          setSuccessModal(false);
          navigate("/dashboard");
        }}
      />
    </Layout>
  );
}
