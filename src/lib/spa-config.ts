// OWNER: replace every null with the real detail. Actions stay disabled until filled in.
export const contact = {
  businessName: "Thai Charm Spa",
  address: null as string | null,
  openingHours: null as string | null,
  phone: null as string | null, // e.g. "+66 2 123 4567"
  whatsapp: null as string | null, // digits with country code, e.g. "66812345678"
  email: null as string | null,
  mapUrl: null as string | null, // verified Google Maps link
};

export const GENERAL_MESSAGE =
  "Hello Thai Charm Spa, I would like to request an appointment. Please share your available treatments and times.";

export function whatsappLink(number: string | null, message = GENERAL_MESSAGE): string | null {
  if (!number) return null;
  const digits = number.replace(/\D/g, "");
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function treatmentMessage(name: string) {
  return `Hello Thai Charm Spa, I would like to request an appointment for ${name}. Please share your available times.`;
}

// OWNER: confirm each treatment, then fill duration and price (e.g. "60 min", "THB 800").
export type Treatment = { name: string; description: string; duration: string | null; price: string | null; image: string; alt: string };
