import { describe, expect, it } from "vitest";
import { whatsappLink, mapsLink, GENERAL_MESSAGE } from "@/lib/spa-config";

describe("whatsappLink", () => {
  it("is disabled when no number is set", () => {
    expect(whatsappLink(null)).toBeNull();
  });
  it("builds a wa.me link with the encoded default message", () => {
    expect(whatsappLink("+66 81-234-5678")).toBe(`https://wa.me/66812345678?text=${encodeURIComponent(GENERAL_MESSAGE)}`);
  });
});

describe("mapsLink", () => {
  it("is disabled when no address is set", () => {
    expect(mapsLink(null)).toBeNull();
  });
  it("builds a Google Maps search link from the address", () => {
    expect(mapsLink("123 Silom Road, Bangkok")).toBe(
      "https://www.google.com/maps/search/?api=1&query=123%20Silom%20Road%2C%20Bangkok",
    );
  });
});
