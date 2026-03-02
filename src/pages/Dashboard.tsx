import Layout from "../components/Layout";
import { useWallet } from "../hooks/useWallet";
import BalanceCard from "../components/BalanceCard";
import { useTransactions } from "../hooks/useTransactions";
import TransactionList from "../components/TransactionList";
import "../styles/dashboard.css"
import UserGreeting from "../components/UserGreeting";
import { useMe } from "../hooks/useMe";

export default function Dashboard() {
  const { balances, loading, error } = useWallet();
  const {
    transactions,
    loading: txLoading,
    error: txError,
  } = useTransactions();
  const { user, loading: userLoading } = useMe();

  return (
    <Layout>
      <div className="dashboard-container">
      <UserGreeting
        name={
          user?.email?.split("@")[0] || ""
        }
      />

        <section className="dashboard-section">
          <h3 className="text-subtitle-24">Mis saldos</h3>

          {loading && <p className="text-body">Cargando...</p>}
          {error && <p className="error-message">{error}</p>}

          {!loading && !error && (
            <div className="balance-wrapper">
              {balances.map((balance) => (
                <BalanceCard
                  key={balance.currency}
                  currency={balance.currency}
                  amount={balance.amount}
                />
              ))}
            </div>
          )}
        </section>

        <section className="dashboard-section">
          <h3 className="text-subtitle-24">Historial</h3>

          {txLoading && <p className="text-body">Cargando historial...</p>}
          {txError && <p className="error-message">{txError}</p>}

          {!txLoading && !txError && (
            <TransactionList transactions={transactions} />
          )}
        </section>
      </div>
    </Layout>
  );
}