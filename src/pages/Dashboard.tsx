import Layout from "../components/Layout";
import { useWallet } from "../hooks/useWallet";
import BalanceCard from "../components/BalanceCard";
import { useTransactions } from "../hooks/useTransactions";
import TransactionList from "../components/TransactionList";

export default function Dashboard() {
  const { balances, loading, error } = useWallet();
  const {
    transactions,
    loading: txLoading,
    error: txError,
  } = useTransactions();

  return (
    <Layout>
      <h2>Hola 👋</h2>

      <h3>Mis saldos</h3>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <div style={{ display: "flex", gap: "20px" }}>
          {balances.map((balance) => (
            <BalanceCard
              key={balance.currency}
              currency={balance.currency}
              amount={balance.amount}
            />
          ))}
        </div>
      )}
      <h3 style={{ marginTop: "40px" }}>Historial</h3>

      {txLoading && <p>Cargando historial...</p>}
      {txError && <p style={{ color: "red" }}>{txError}</p>}

      {!txLoading && !txError && (
        <TransactionList transactions={transactions} />
      )}
    </Layout>
  );
}