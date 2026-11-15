import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock, MessageCircle, Leaf, ArrowDown } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { contact, whatsappLink, treatmentMessage, type Treatment } from "@/lib/spa-config";
import heroWide from "@/assets/hero-wide.jpg";
import hero from "@/assets/hero.jpg";
import thai from "@/assets/thai-massage.jpg";
import aroma from "@/assets/aromatherapy.jpg";
import deep from "@/assets/deep-tissue.jpg";
import reflex from "@/assets/reflexology.jpg";
import stone from "@/assets/hot-stone.jpg";
import couples from "@/assets/couples.jpg";
import about from "@/assets/about.jpg";
import spaInterior from "@/assets/spa-interior.jpg";
import herbal from "@/assets/herbal-compress.jpg";
import lounge from "@/assets/relaxation-lounge.jpg";
import footRitual from "@/assets/foot-ritual.jpg";
import candle from "@/assets/candle-ambiance.jpg";
import garden from "@/assets/spa-garden.jpg";
import massageDetail from "@/assets/massage-detail.jpg";
import petalBath from "@/assets/petal-bath.jpg";
import wellnessTea from "@/assets/wellness-tea.jpg";
import headMassage from "@/assets/head-massage.jpg";
import zenFountain from "@/assets/zen-fountain.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Thai Charm Spa — Relax. Restore. Reconnect." },
      { name: "description", content: "Make time for yourself at Thai Charm Spa. Explore Thai massage treatments and request an appointment." },
      { property: "og:title", content: "Thai Charm Spa — Relax. Restore. Reconnect." },
      { property: "og:description", content: "Explore treatments and request an appointment at Thai Charm Spa." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const nav = [
  ["Home", "home"], ["Treatments", "treatments"], ["Packages", "packages"],
  ["About", "about"], ["Gallery", "gallery"], ["Contact", "contact"],
] as const;

// OWNER: these are proposed treatments — confirm each one and fill in duration/price before launch.
const treatments: Treatment[] = [
  { name: "Traditional Thai Massage", description: "A clothed, mat-based massage combining gentle pressure and assisted stretches at an unhurried pace.", duration: null, price: null, image: thai, alt: "Therapist guiding a client through a gentle Thai massage stretch" },
  { name: "Aromatherapy Oil Massage", description: "Flowing strokes with warm, lightly scented oil for a soft and soothing experience.", duration: null, price: null, image: aroma, alt: "Massage oil bottles beside rolled towels and frangipani flowers" },
  { name: "Deep Tissue Massage", description: "Slower, firmer pressure focused on the back and shoulders, adjusted to your comfort.", duration: null, price: null, image: deep, alt: "Therapist massaging a client's upper back, client covered with a towel" },
  { name: "Foot Reflexology", description: "Focused pressure on the feet and lower legs in a quiet, reclined setting.", duration: null, price: null, image: reflex, alt: "Therapist giving a foot massage on a towel-covered bed" },
  { name: "Hot Stone Massage", description: "Smooth, warmed stones glide alongside hands-on massage for a deeply calming session.", duration: null, price: null, image: stone, alt: "Smooth massage stones beside folded towels and a ceramic bowl" },
  { name: "Couples Massage", description: "Share a relaxing session side by side in the same peaceful room.", duration: null, price: null, image: couples, alt: "Two prepared massage beds in a calm room (illustrative concept)" },
];

// OWNER: replace with real packages, or remove this section and its nav item if none.
const packages = [
  { name: "Package name", includes: "Included treatments", duration: null, price: null },
  { name: "Package name", includes: "Included treatments", duration: null, price: null },
  { name: "Package name", includes: "Included treatments", duration: null, price: null },
];

const gallery = [
  { src: spaInterior, label: "Treatment suite" },
  { src: massageDetail, label: "Massage ritual" },
  { src: garden, label: "Spa garden" },
  { src: lounge, label: "Relaxation lounge" },
  { src: herbal, label: "Herbal compress" },
  { src: footRitual, label: "Foot ritual" },
  { src: candle, label: "Evening ambiance" },
  { src: hero, label: "Treatment room" },
  { src: couples, label: "Couples room" },
  { src: about, label: "Spa details" },
  { src: stone, label: "Hot stone therapy" },
  { src: aroma, label: "Aromatherapy" },
  { src: petalBath, label: "Floral bath ritual" },
  { src: wellnessTea, label: "Wellness tea" },
  { src: headMassage, label: "Head massage" },
  { src: zenFountain, label: "Garden fountain" },
];

const faqs = [
  { q: "How do I book an appointment?", a: "Send us a message on WhatsApp or call us. We'll reply with available times — your appointment is only confirmed once we reply." },
  { q: "How long are the treatments?", a: "Durations are listed on each treatment card. [Owner to confirm available durations.]" },
  { q: "When should I arrive?", a: "[Owner to confirm recommended arrival time.]" },
  { q: "What is your cancellation policy?", a: "[Owner to supply cancellation policy wording.]" },
  { q: "Which treatments do you offer?", a: "See our treatment menu above. Ask us on WhatsApp if you'd like help choosing." },
];

function Placeholder({ children }: { children: ReactNode }) {
  return <span className="rounded bg-accent px-1.5 py-0.5 text-xs font-medium text-accent-foreground">{children}</span>;
}

function ActionLink({ href, children, variant = "primary", external }: { href: string | null; children: ReactNode; variant?: "primary" | "outline"; external?: boolean }) {
  const base = "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2";
  const styles = variant === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]" : "border border-primary text-primary hover:bg-accent";
  if (!href) {
    return <span aria-disabled="true" title="Available once contact details are added" className={`${base} ${styles} cursor-not-allowed opacity-50`}>{children}</span>;
  }
  return <a href={href} className={`${base} ${styles}`} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>;
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return (
    <div className="reveal mx-auto mb-14 max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
      <h2 className="mt-3 text-4xl text-foreground md:text-5xl">{title}</h2>
      {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
    </div>
  );
}

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const els = root.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
  return ref;
}

function Index() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rootRef = useReveal();
  const wa = whatsappLink(contact.whatsapp);
  const tel = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : null;
  const mail = contact.email ? `mailto:${contact.email}` : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerSolid = scrolled || open;

  return (
    <div ref={rootRef} className="min-h-screen bg-background text-foreground">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${headerSolid ? "border-b border-border bg-background/90 shadow-sm backdrop-blur" : "bg-transparent"}`}>
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className={`flex items-center gap-2 font-display text-2xl font-semibold transition-colors ${headerSolid ? "text-primary" : "text-hero-foreground"}`}>
            <Leaf className="h-5 w-5" aria-hidden /> Thai Charm Spa
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
            {nav.map(([l, id]) => (
              <a key={id} href={`#${id}`} className={`text-sm transition-colors ${headerSolid ? "text-foreground/80 hover:text-primary" : "text-hero-foreground/85 hover:text-hero-foreground"}`}>{l}</a>
            ))}
            <a href="#contact" className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]">Book Now</a>
          </nav>
          <button className={`lg:hidden ${headerSolid ? "text-foreground" : "text-hero-foreground"}`} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-5 pb-5 lg:hidden" aria-label="Mobile">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="block py-3 text-foreground/80">{l}</a>)}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-full bg-primary py-3 text-center font-medium text-primary-foreground">Book Now</a>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="relative flex min-h-svh items-center justify-center overflow-hidden">
          <img src={heroWide} alt="Elegant spa treatment room with two massage beds, warm wood and soft golden light" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
          <div className="relative z-10 mx-auto max-w-3xl px-5 py-32 text-center text-hero-foreground">
            <p className="reveal text-xs font-bold uppercase tracking-[0.35em]">Thai Charm Spa</p>
            <h1 className="reveal mt-6 text-5xl leading-[1.1] md:text-7xl" style={{ transitionDelay: "120ms" }}>Relax. Restore. Reconnect.</h1>
            <p className="reveal mx-auto mt-6 max-w-md text-lg text-hero-foreground/85" style={{ transitionDelay: "240ms" }}>Make time for yourself at Thai Charm Spa.</p>
            <div className="reveal mt-10 flex flex-wrap justify-center gap-3" style={{ transitionDelay: "360ms" }}>
              <a href="#treatments" className="rounded-full border border-hero-foreground/60 px-7 py-3 text-sm font-medium text-hero-foreground transition-all hover:bg-hero-foreground/10">Explore Treatments</a>
              <a href="#contact" className="rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[var(--shadow-soft)]">Book Now</a>
            </div>
          </div>
          <a href="#treatments" aria-label="Scroll to treatments" className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-hero-foreground/70">
            <ArrowDown className="h-6 w-6" aria-hidden />
          </a>
        </section>

        <section id="treatments" className="bg-sage/50 py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="Treatment menu" title="Treatments" intro="Choose an experience and send us a request — we'll reply with available times." />
            <p className="reveal mb-10 text-center"><Placeholder>Preview: proposed treatments — owner to confirm</Placeholder></p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {treatments.map((t, i) => (
                <article key={t.name} className="reveal group flex flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1.5" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                  <div className="overflow-hidden">
                    <img src={t.image} alt={t.alt} width={1024} height={768} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-2xl">{t.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{t.description}</p>
                    <dl className="mt-4 flex justify-between border-t border-border pt-4 text-sm">
                      <div><dt className="sr-only">Duration</dt><dd>{t.duration ?? <Placeholder>Duration TBC</Placeholder>}</dd></div>
                      <div><dt className="sr-only">Price</dt><dd className="font-bold">{t.price ?? <Placeholder>Price TBC</Placeholder>}</dd></div>
                    </dl>
                    <div className="mt-5">
                      <ActionLink href={whatsappLink(contact.whatsapp, treatmentMessage(t.name))} variant="outline" external>
                        Request This Treatment<span className="sr-only">: {t.name}</span>
                      </ActionLink>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="Combine & unwind" title="Packages" />
            <p className="reveal mb-10 text-center"><Placeholder>Draft: package details to be supplied by owner</Placeholder></p>
            <div className="grid gap-8 md:grid-cols-3">
              {packages.map((p, i) => (
                <article key={i} className="reveal rounded-3xl border border-border bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-soft)]" style={{ transitionDelay: `${i * 100}ms` }}>
                  <h3 className="text-2xl">{p.name} {i + 1}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.includes}</p>
                  <p className="mt-6 text-sm">{p.duration ?? <Placeholder>Total duration TBC</Placeholder>}</p>
                  <p className="mt-2 font-bold">{p.price ?? <Placeholder>Price TBC</Placeholder>}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-sage/50 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div className="reveal relative md:justify-self-center">
              <img src={about} alt="" width={768} height={1024} loading="lazy" className="aspect-[3/4] w-full max-w-md rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
              <img src={candle} alt="Candles and orchid creating a calm spa ambiance" width={1024} height={1024} loading="lazy" className="absolute -bottom-8 -right-4 hidden w-44 rounded-2xl border-4 border-background object-cover shadow-[var(--shadow-soft)] md:block lg:-right-12 lg:w-56" />
            </div>
            <div className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary">About us</p>
              <h2 className="mt-3 text-4xl md:text-5xl">A quiet place to unwind</h2>
              <p className="mt-6 text-muted-foreground">Life moves quickly. Thai Charm Spa is a place to slow down — to step away from the everyday, breathe deeply and give yourself time to rest.</p>
              <p className="mt-4 text-muted-foreground">Inspired by Thai traditions of care and hospitality, every visit is designed to feel calm, unhurried and welcoming.</p>
              <p className="mt-6"><Placeholder>Owner to add: our story, team and facilities</Placeholder></p>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="The atmosphere" title="Gallery" intro="A glimpse of the calm that waits for you." />
            <div className="reveal columns-2 gap-4 md:columns-3 [&>figure]:mb-4">
              {gallery.map((g, i) => (
                <figure key={i} className="group relative break-inside-avoid overflow-hidden rounded-2xl">
                  <img src={g.src} alt={`${g.label} — inspiration image`} loading="lazy" width={1024} height={1024} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-foreground/60 to-transparent p-4 pt-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-medium text-hero-foreground">{g.label}</span>
                    <span className="rounded-full bg-hero-foreground/20 px-2.5 py-0.5 text-[10px] uppercase tracking-wide text-hero-foreground">Inspiration</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="bg-sage/50 py-24">
          <div className="mx-auto max-w-3xl px-5">
            <SectionHeading eyebrow="Good to know" title="Frequently asked questions" />
            <Accordion type="single" collapsible className="reveal rounded-3xl bg-card px-6 shadow-[var(--shadow-soft)]">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`f${i}`}>
                  <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="contact" className="py-24">
          <div className="mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="Book & visit" title="Request an appointment" intro="Tap below to open a WhatsApp message to us. Your appointment is confirmed once we reply." />
            <div className="grid gap-10 lg:grid-cols-2">
              <ul className="reveal space-y-5 rounded-3xl bg-card p-8 shadow-[var(--shadow-soft)]">
                {[
                  [MapPin, "Address", contact.address], [Clock, "Opening hours", contact.openingHours],
                  [Phone, "Phone", contact.phone], [MessageCircle, "WhatsApp", contact.whatsapp], [Mail, "Email", contact.email],
                ].map(([Icon, label, val]) => {
                  const I = Icon as typeof MapPin;
                  return (
                    <li key={label as string} className="flex gap-4">
                      <I className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                      <div><p className="text-sm font-bold">{label as string}</p><p className="text-muted-foreground">{(val as string | null) ?? <Placeholder>To be added</Placeholder>}</p></div>
                    </li>
                  );
                })}
              </ul>
              <div className="reveal relative flex flex-col justify-center gap-4 overflow-hidden rounded-3xl p-8" style={{ transitionDelay: "120ms" }}>
                <img src={footRitual} alt="" width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
                <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
                <div className="relative z-10 flex flex-col gap-4">
                  <ActionLink href={wa} external><MessageCircle className="h-4 w-4" aria-hidden /> Request an Appointment on WhatsApp</ActionLink>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <ActionLink href={tel} variant="outline">Call Us</ActionLink>
                    <ActionLink href={mail} variant="outline">Email Us</ActionLink>
                    <ActionLink href={contact.mapUrl} variant="outline" external>Get Directions</ActionLink>
                  </div>
                  {!wa && <p className="text-center text-xs text-hero-foreground/80">Buttons become active once contact details are added.</p>}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-secondary py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-3">
          <div>
            <p className="font-display text-2xl font-semibold text-primary">Thai Charm Spa</p>
            <p className="mt-2 text-sm text-muted-foreground">Relax. Restore. Reconnect.</p>
          </div>
          <nav aria-label="Footer" className="grid grid-cols-2 gap-2 text-sm">
            {nav.map(([l, id]) => <a key={id} href={`#${id}`} className="text-muted-foreground hover:text-primary">{l}</a>)}
          </nav>
          <div className="space-y-1 text-sm text-muted-foreground">
            {contact.address && <p>{contact.address}</p>}
            {contact.phone && <p>{contact.phone}</p>}
            {contact.email && <p>{contact.email}</p>}
            {!contact.address && !contact.phone && !contact.email && <Placeholder>Contact details to be added</Placeholder>}
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Thai Charm Spa</p>
      </footer>
    </div>
  );
}
