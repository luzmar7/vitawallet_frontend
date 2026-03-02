import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import ExchangeSummary from "./ExchangeSummary";

describe("ExchangeSummary", () => {
  it("renders summary data correctly", () => {
    const mockState = {
      from: "USD",
      to: "BTC",
      amount: "100",
      quote: {
        rate: "0.000015",
        to_amount: "0.0015",
      },
    };

    render(
      <MemoryRouter initialEntries={[{ pathname: "/", state: mockState }]}>
        <ExchangeSummary />
      </MemoryRouter>
    );

    expect(screen.getByText("Resumen de transacción")).toBeInTheDocument();

    expect(screen.getByText(/100 USD/)).toBeInTheDocument();
    expect(screen.getByText(/0.0015 BTC/)).toBeInTheDocument();
  });
});
