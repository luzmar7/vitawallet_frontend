import { currencyIcons } from "../constants/currencyIcons";
import "../styles/balanceCard.css";

interface BalanceCardProps {
  currency: string;
  amount: string;
}

export default function BalanceCard({ currency, amount }: BalanceCardProps) {
  const icon = currencyIcons[currency];

  return (
    <div className="balance-card">
      <div className="balance-header">
        <p className="text-body balance-title">{currency}</p>

        {icon && (
          <img
            src={icon}
            alt={`${currency} icon`}
            className="currency-icon"
          />
        )}
      </div>

      <h3 className="text-subtitle-24-semibold balance-amount">
        {amount}
      </h3>
    </div>
  );
}