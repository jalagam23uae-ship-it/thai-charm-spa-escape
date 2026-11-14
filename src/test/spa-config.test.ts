import { describe, expect, it } from "vitest";
import { whatsappLink, GENERAL_MESSAGE } from "@/lib/spa-config";

describe("whatsappLink", () => {
  it("is disabled when no number is set", () => {
    expect(whatsappLink(null)).toBeNull();
  });
  it("builds a wa.me link with the encoded default message", () => {
    expect(whatsappLink("+66 81-234-5678")).toBe(`https://wa.me/66812345678?text=${encodeURIComponent(GENERAL_MESSAGE)}`);
  });
});
