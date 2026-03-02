import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import BalanceCard from "./BalanceCard";

describe("BalanceCard", () => {
  it("renders currency and amount", () => {
    render(<BalanceCard currency="USD" amount="100" />);

    expect(screen.getByText("USD")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
  });
});
