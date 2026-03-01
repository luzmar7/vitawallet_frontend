import React from "react";
import "../styles/textField.css";

interface TextFieldProps {
  label?: string;
  name?: string;
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  success?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  onIconRightClick?: () => void;
  type?: React.HTMLInputTypeAttribute;
  value?: string;
  disabled?: boolean;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export default function TextField({
  label,
  name,
  placeholder,
  helperText,
  error = false,
  success = false,
  iconLeft,
  iconRight,
  onIconRightClick,
  type = "text",
  value,
  disabled = false,
  required = false,
  onChange,
  onBlur,
}: TextFieldProps) {
  return (
    <div
      className={`form-group ${error ? "error" : ""} ${
        success ? "success" : ""
      }`}
    >
      {label && (
        <label className="form-label text-caption-14">
          {label}
        </label>
      )}

      <div className="input-wrapper">
        {iconLeft && (
          <span className="input-icon-left">
            {iconLeft}
          </span>
        )}

        <input
          name={name}
          type={type}
          className={`form-input ${iconLeft ? "has-left" : ""} ${
            iconRight ? "has-right" : ""
          }`}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onBlur={onBlur}
        />

        {iconRight && (
          <span
            className={`input-icon-right ${
              success ? "success" : ""
            }`}
            onClick={onIconRightClick}
            style={{ cursor: onIconRightClick ? "pointer" : "default" }}
          >
            {iconRight}
          </span>
        )}
      </div>

      {helperText && (
        <span className="form-helper text-caption-12">
          {helperText}
        </span>
      )}
    </div>
  );
}