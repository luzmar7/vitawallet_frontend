
import type { Transaction } from "../hooks/useTransactions";
interface Props {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: Props) {
  return (
    <div style={{ marginTop: "20px" }}>
      {transactions.map((tx) => (
        <div
          key={tx.id}
          style={{
            background: "white",
            padding: "15px",
            borderRadius: "10px",
            marginBottom: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p style={{ margin: 0 }}>
              {tx.from_currency} → {tx.to_currency}
            </p>
            <small>{new Date(tx.created_at).toLocaleString()}</small>
          </div>

          <div
            style={{
              color: tx.status === "completed" ? "green" : "red",
            }}
          >
            {tx.status}
          </div>
        </div>
      ))}
    </div>
  );
}