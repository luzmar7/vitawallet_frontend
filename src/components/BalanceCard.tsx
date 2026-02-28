interface BalanceCardProps {
    currency: string;
    amount: string;
  }
  
  export default function BalanceCard({ currency, amount }: BalanceCardProps) {
    return (
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          minWidth: "160px",
        }}
      >
        <p style={{ margin: 0, color: "#666" }}>{currency}</p>
        <h3 style={{ margin: "8px 0 0 0" }}>{amount}</h3>
      </div>
    );
  }