import React from "react";
import "../styles/modal.css";
import SucessIllustration from "../assets/images/success-image.png";
interface SuccessModalProps {
  open: boolean;
  currency: string;
  onClose: () => void;
}

export default function SuccessModal({
  open,
  currency,
  onClose,
}: SuccessModalProps) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="success-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <img
          src={SucessIllustration}
          alt="Success"
          className="modal-image"
        />

        <h3>¡Intercambio exitoso!</h3>
        <p>Ya cuentas con los {currency} en tu saldo.</p>
      </div>
    </div>
  );
}