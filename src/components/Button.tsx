import React from "react";
import "../styles/button.css";

type Variant = "primary" | "secondary" | "disabled";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  fullWidth?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function Button({
  children,
  variant = "primary",
  fullWidth = false,
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${
        fullWidth ? "btn-full" : ""
      }`}
      disabled={variant === "disabled"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}