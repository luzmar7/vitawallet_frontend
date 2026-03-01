import type { Transaction } from "../hooks/useTransactions";

import "../styles/transactionList.css"
interface Props {
  transactions: Transaction[];
}

export default function TransactionList({ transactions }: Props) {
  return (
    <div className="transaction-list">
      {transactions.map((tx) => (
        <div key={tx.id} className="transaction-item">
          <div>
            <p className="text-body">
              {tx.from_currency} → {tx.to_currency}
            </p>
            <span className="text-caption-12 transaction-date">
              {new Date(tx.created_at).toLocaleString()}
            </span>
          </div>

          <div
            className={`transaction-status ${
              tx.status === "completed" ? "completed" : "failed"
            }`}
          >
            {tx.status}
          </div>
        </div>
      ))}
    </div>
  );
}