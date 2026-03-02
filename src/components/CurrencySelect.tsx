import { useState } from "react";
import "../styles/CurrencySelect.css";

// import clp from "../assets/currencies/clp.png";
// import btc from "../assets/currencies/btc.png";
// import usdt from "../assets/currencies/usdt.png";
// import usdc from "../assets/currencies/usdc.png";
// import usd from "../assets/currencies/usd.png";

import btc from "../assets/icons/currencies/bitcoin.svg";
import clp from "../assets/icons/currencies/chile.svg";
import usdc from "../assets/icons/currencies/usdc.svg";
import usdt from "../assets/icons/currencies/tether.svg";
import usd from "../assets/icons/currencies/coin.svg";

import arrow from "../assets/icons/ui/arrow.svg";

interface CurrencySelectProps {
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const currencyIcons: Record<string, string> = {
  CLP: clp,
  BTC: btc,
  USDT: usdt,
  USDC: usdc,
  USD: usd,
};

export default function CurrencySelect({
  value,
  options,
  onChange,
}: CurrencySelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="currency-select">
      <div className="currency-select-trigger" onClick={() => setOpen(!open)}>
        <img src={currencyIcons[value]} alt={value} className="currency-icon" />

        <img
          src={arrow}
          alt="arrow"
          className={`currency-arrow ${open ? "open" : ""}`}
        />
      </div>

      {open && (
        <div className="currency-select-dropdown">
          {options.map((option) => (
            <div
              key={option}
              className="currency-option"
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              <img
                src={currencyIcons[option]}
                alt={option}
                className="currency-icon"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
