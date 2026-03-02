import { renderHook } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useExchangeQuote } from "./useExchangeQuote";

vi.mock("../api/prices", () => ({
  getQuote: vi.fn(() =>
    Promise.resolve({
      from_currency: "USD",
      to_currency: "BTC",
      rate: "0.000015",
      from_amount: "100",
      to_amount: "0.0015",
    })
  ),
}));

describe("useExchangeQuote", () => {
  it("returns initial state correctly", () => {
    const { result } = renderHook(() => useExchangeQuote("USD", "BTC", ""));

    expect(result.current.quote).toBe(null);
  });
});
