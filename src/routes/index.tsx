import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, Phone, Mail, MapPin, Clock, MessageCircle, Leaf, ArrowDown, Facebook, Instagram, Twitter } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { contact, whatsappLink, treatmentMessage, mapsLink, type Treatment } from "@/lib/spa-config";
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
import swedish from "@/assets/swedish-massage.jpg";
import sports from "@/assets/sports-massage.jpg";
import triggerPoint from "@/assets/trigger-point.jpg";
import balinese from "@/assets/balinese-massage.jpg";
import spaReception from "@/assets/spa-reception.jpg";
import spaEssentials from "@/assets/spa-essentials.jpg";
import meditationCorner from "@/assets/meditation-corner.jpg";
import steamRoom from "@/assets/steam-room.jpg";
import spaPool from "@/assets/spa-pool.jpg";
import herbalBalls from "@/assets/herbal-compress-balls.jpg";
import spaHallway from "@/assets/spa-hallway.jpg";
import welcomeDrink from "@/assets/welcome-drink.jpg";
import couplesSuite from "@/assets/couples-suite.jpg";
import handRitual from "@/assets/hand-ritual.jpg";
import gardenPath from "@/assets/garden-path.jpg";
import loungeTea from "@/assets/lounge-tea.jpg";
import oilCollection from "@/assets/oil-collection.jpg";
import towelStack from "@/assets/towel-stack.jpg";
import floatingFlowers from "@/assets/floating-flowers.jpg";
import petalTub from "@/assets/petal-tub.jpg";
import jadeTools from "@/assets/jade-tools.jpg";
import gardenPavilion from "@/assets/garden-pavilion.jpg";
import lanternWalk from "@/assets/lantern-walk.jpg";
import fruitPlatter from "@/assets/fruit-platter.jpg";
import bathSalts from "@/assets/bath-salts.jpg";
import massageTools from "@/assets/massage-tools.jpg";
import incenseLotus from "@/assets/incense-lotus.jpg";
import footSoak from "@/assets/foot-soak.jpg";
import herbalCompressTx from "@/assets/herbal-compress-treatment.jpg";
import scalpMassage from "@/assets/scalp-massage.jpg";
import prenatalMassage from "@/assets/prenatal-massage.jpg";
import facialMassage from "@/assets/facial-massage.jpg";
import lymphaticMassage from "@/assets/lymphatic-massage.jpg";
import neckShoulder from "@/assets/neck-shoulder.jpg";
import bodyScrub from "@/assets/body-scrub.jpg";
import shiatsuMassage from "@/assets/shiatsu-massage.jpg";
import postnatalMassage from "@/assets/postnatal-massage.jpg";
import stretchSession from "@/assets/stretch-session.jpg";
import herbalWrap from "@/assets/herbal-wrap.jpg";
import soundBath from "@/assets/sound-bath.jpg";
import abhyanga from "@/assets/abhyanga-massage.jpg";
import cupping from "@/assets/cupping-therapy.jpg";
import guaSha from "@/assets/gua-sha-therapy.jpg";
import bambooTools from "@/assets/bamboo-massage-tools.jpg";
import candleOil from "@/assets/candle-oil-massage.jpg";
import coffeePolish from "@/assets/coffee-coconut-polish.jpg";
import jadeRoller from "@/assets/jade-roller-facial.jpg";
import reiki from "@/assets/reiki-session.jpg";
import steamInhalation from "@/assets/herbal-steam-inhalation.jpg";
import dryBrushing from "@/assets/dry-brushing.jpg";
import coolingLeg from "@/assets/cooling-leg-treatment.jpg";
import eyePillow from "@/assets/eye-pillow-ritual.jpg";
import herbalSteamBath from "@/assets/herbal-steam-bath.jpg";
import sugarLimePolish from "@/assets/sugar-lime-polish.jpg";
import champiHairRitual from "@/assets/champi-hair-ritual.jpg";
import aromatherapyFootSoak from "@/assets/aromatherapy-foot-soak.jpg";
import coolGlobeFacial from "@/assets/cool-globe-facial.jpg";
import seatedChairMassage from "@/assets/seated-chair-massage.jpg";
import hotTowelRitual from "@/assets/hot-towel-ritual.jpg";
import himalayanSaltTherapy from "@/assets/himalayan-salt-therapy.jpg";
import guidedMeditation from "@/assets/guided-meditation.jpg";
import footReflexologyTools from "@/assets/foot-reflexology-tools.jpg";
import roseMilkBath from "@/assets/rose-milk-bath.jpg";
import sheaHandRitual from "@/assets/shea-hand-ritual.jpg";

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
  { name: "Swedish Massage", description: "Long, flowing strokes, kneading and light tapping with massage oil — ideal for beginners, stress relief and full-body relaxation.", duration: null, price: null, image: swedish, alt: "Therapist giving a Swedish massage to a towel-covered client" },
  { name: "Sports Massage", description: "Focused work on areas prone to overuse or strain, with stretching and medium-to-firm pressure — for active people, injury prevention and recovery.", duration: null, price: null, image: sports, alt: "Therapist stretching and massaging an athlete's leg" },
  { name: "Trigger Point Therapy", description: "Direct, concentrated pressure on specific muscle knots — often in the neck, shoulders or back — to release tight spots.", duration: null, price: null, image: triggerPoint, alt: "Therapist applying focused pressure to a client's shoulder" },
  { name: "Balinese Massage", description: "Gentle stretching, acupressure, reflexology and aromatherapy with warm oils to calm the nervous system and restore energy.", duration: null, price: null, image: balinese, alt: "Therapist giving a Balinese massage with warm oil in a tropical spa room" },
  { name: "Herbal Compress Massage", description: "Warm cloth bundles of Thai herbs are pressed and rolled over the back and shoulders to ease tightness.", duration: null, price: null, image: herbalCompressTx, alt: "Therapist pressing warm herbal compress bundles on a client's back" },
  { name: "Head, Scalp & Shoulder Massage", description: "Focused work through the scalp, neck and shoulders — a good choice after long screen days.", duration: null, price: null, image: scalpMassage, alt: "Therapist massaging a relaxed client's scalp" },
  { name: "Prenatal Massage", description: "Side-lying support with cushions and gentle, steady pressure for mums-to-be. Please tell us how far along you are.", duration: null, price: null, image: prenatalMassage, alt: "Pregnant client supported by cushions receiving a gentle shoulder massage" },
  { name: "Thai Facial Massage", description: "Light pressure across the face, temples and forehead to leave the skin and the mind feeling calmer.", duration: null, price: null, image: facialMassage, alt: "Therapist gently massaging a client's forehead and temples" },
  { name: "Lymphatic Drainage Massage", description: "Slow, light rhythmic strokes that encourage circulation — often chosen for heavy or puffy legs.", duration: null, price: null, image: lymphaticMassage, alt: "Therapist performing slow light strokes on a client's legs" },
  { name: "Neck & Shoulder Relief", description: "Targeted thumb pressure on the neck and shoulders while you stay seated and clothed — quick and effective.", duration: null, price: null, image: neckShoulder, alt: "Therapist working on the shoulders of a seated clothed client" },
  { name: "Salt & Herbal Body Scrub", description: "A coarse salt and herb polish to smooth the skin, finished with a warm rinse and light oil.", duration: null, price: null, image: bodyScrub, alt: "Bowls of sea salt, dried herbs and scrub ingredients on a stone shelf" },
  { name: "Shiatsu Massage", description: "Rhythmic thumb pressure along the back while you stay fully clothed on a mat, in the Japanese tradition.", duration: null, price: null, image: shiatsuMassage, alt: "Clothed client on a floor mat receiving thumb pressure along the back" },
  { name: "Postnatal Recovery Massage", description: "Gentle leg, foot and back care for new mums, with time for feeding breaks whenever you need them.", duration: null, price: null, image: postnatalMassage, alt: "Seated clothed client resting her feet in a wooden basin while a therapist supports her leg" },
  { name: "Assisted Stretch & Mobility", description: "A therapist guides you through slow, supported stretches to improve range of movement and ease stiffness.", duration: null, price: null, image: stretchSession, alt: "Therapist guiding a clothed client through a gentle leg stretch on a mat" },
  { name: "Herbal Body Wrap", description: "Warm herbal clay and wraps applied to the skin, then rested under a blanket while you relax.", duration: null, price: null, image: herbalWrap, alt: "Rolled cotton wraps, dried herbs and green clay arranged on a wooden tray" },
  { name: "Sound Bath Meditation", description: "Live singing bowls in a dim, candle-lit room to help you wind down before or after a treatment.", duration: null, price: null, image: soundBath, alt: "Brass singing bowls and a wooden mallet arranged on cushions in a candle-lit studio" },
  { name: "Ayurvedic Abhyanga Massage", description: "Long, soothing strokes with warm herbal oil poured slowly over the back and shoulders.", duration: null, price: null, image: abhyanga, alt: "Therapist pouring warm oil from a brass vessel over a towel-covered client's back" },
  { name: "Cupping Therapy", description: "Gentle silicone cups lift and release tight muscle across the back and shoulders.", duration: null, price: null, image: cupping, alt: "Clear silicone cupping cups arranged along a client's towel-covered back" },
  { name: "Gua Sha Body Therapy", description: "A smooth jade tool is glided over oiled skin to ease tension and encourage circulation.", duration: null, price: null, image: guaSha, alt: "Therapist gliding a green jade gua sha tool over a client's shoulder" },
  { name: "Bamboo Stick Massage", description: "Warm bamboo sticks of different sizes roll and press along the back for deep, even pressure.", duration: null, price: null, image: bambooTools, alt: "Bundle of polished bamboo massage sticks resting on folded towels beside a dish of oil" },
  { name: "Warm Candle Oil Massage", description: "Skin-warm candle oil is poured and massaged over the shoulders for a soft, aromatic finish.", duration: null, price: null, image: candleOil, alt: "Therapist pouring warm oil from a lit massage candle onto a towel-covered back" },
  { name: "Coffee & Coconut Body Polish", description: "Ground coffee and coconut polish smooth the skin, rinsed warm and finished with light oil.", duration: null, price: null, image: coffeePolish, alt: "Wooden tray with coffee grounds, halved coconut, sea salt and coconut oil" },
  { name: "Jade Roller Facial", description: "A cool jade roller glides over the face to de-puff the skin and calm the mind.", duration: null, price: null, image: jadeRoller, alt: "Therapist rolling a green jade facial roller over a relaxed client's cheek" },
  { name: "Reiki Energy Balancing", description: "Hands held gently above a fully clothed body in a quiet, candle-lit room to help you settle.", duration: null, price: null, image: reiki, alt: "Practitioner holding hands above a fully clothed client on a table beside candles and a singing bowl" },
  { name: "Herbal Steam Inhalation", description: "Warm lemongrass and lime steam breathed in to open the sinuses and quiet the head.", duration: null, price: null, image: steamInhalation, alt: "Ceramic bowl of steaming lemongrass, lime leaf and ginger infusion beside a folded towel" },
  { name: "Dry Brushing Ritual", description: "A natural bristle brush wakes the skin before your treatment, finished with a light oil.", duration: null, price: null, image: dryBrushing, alt: "Wooden dry brush on a folded towel beside loofah, body oil and dried herbs" },
  { name: "Cooling Mint Leg & Foot Treatment", description: "Menthol gel cools heavy legs and tired feet, with light pressure through the calves.", duration: null, price: null, image: coolingLeg, alt: "Therapist smoothing pale green menthol gel over a client's calf resting on a rolled towel" },
  { name: "Aromatherapy Eye Pillow Ritual", description: "A warm lavender eye pillow rests over the eyes while you lie back and let go.", duration: null, price: null, image: eyePillow, alt: "Therapist placing a lavender eye pillow over a relaxed client's eyes in candlelight" },
  { name: "Thai Herbal Steam Bath", description: "A cedar steam room filled with eucalyptus and lemongrass to open the airways and soften the skin.", duration: null, price: null, image: herbalSteamBath, alt: "Woven basket of steaming eucalyptus and lemongrass on a cedar bench in a wooden steam room" },
  { name: "Sugar & Lime Body Polish", description: "Coarse sugar and lime buff away dull skin, leaving the body smooth and lightly scented.", duration: null, price: null, image: sugarLimePolish, alt: "Glass bowl of sugar scrub with lime halves and mint on a wooden tray" },
  { name: "Champi Hair & Scalp Ritual", description: "Warm oil is poured through the hair while the scalp is massaged slowly until the head lets go.", duration: null, price: null, image: champiHairRitual, alt: "Therapist pouring warm oil over a client's scalp during a champi hair ritual" },
  { name: "Aromatherapy Foot Soak", description: "Feet rest in a copper basin of warm water, rose petals and lemongrass before the massage begins.", duration: null, price: null, image: aromatherapyFootSoak, alt: "Copper basin of warm water with floating rose petals, pumice stone and rolled towels" },
  { name: "Cool Globe Facial", description: "Chilled glass globes glide over the face to wake the skin and calm redness.", duration: null, price: null, image: coolGlobeFacial, alt: "Esthetician rolling chilled glass globes over a client's cheek" },
  { name: "Seated Chair Massage", description: "A short, fully clothed session in a chair that frees the shoulders and the neck.", duration: null, price: null, image: seatedChairMassage, alt: "Therapist working the shoulders of a clothed client seated in a wooden massage chair" },
  { name: "Hot Towel Neck Ritual", description: "Steaming eucalyptus towels are wrapped around the neck and shoulders to melt tension.", duration: null, price: null, image: hotTowelRitual, alt: "Steaming rolled towels with eucalyptus sprigs on a wooden tray" },
  { name: "Himalayan Salt Therapy", description: "Sit in warm salt light, breathe slowly and let the shoulders drop.", duration: null, price: null, image: himalayanSaltTherapy, alt: "Himalayan salt lamps and pink salt crystals glowing on a wooden shelf" },
  { name: "Guided Meditation & Breathing", description: "A quiet guided session on a floor cushion to slow the breath before or after a treatment.", duration: null, price: null, image: guidedMeditation, alt: "Client sitting cross-legged on a floor cushion in a candle-lit spa studio" },
  { name: "Foot Reflexology Tools", description: "Wooden sticks and a jade roller press the reflex points across the sole of the foot.", duration: null, price: null, image: footReflexologyTools, alt: "Wooden foot massage sticks and a jade roller on a folded towel beside a bowl of oil" },
  { name: "Rose & Milk Bath Soak", description: "A warm milky bath scattered with rose petals to soften the skin and settle the mind.", duration: null, price: null, image: roseMilkBath, alt: "Porcelain bathtub filled with milky water and rose petals, candles glowing on the rim" },
  { name: "Shea Hand & Nail Ritual", description: "Shea butter worked into the hands, cuticles and nails for a soft, nourished finish.", duration: null, price: null, image: sheaHandRitual, alt: "Ceramic bowl of whipped shea butter with a wooden spoon, rose petals and a dish of oil on a folded towel" },
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
  { src: spaReception, label: "Reception" },
  { src: spaEssentials, label: "Spa essentials" },
  { src: meditationCorner, label: "Meditation corner" },
  { src: steamRoom, label: "Herbal steam room" },
  { src: spaPool, label: "Spa pool" },
  { src: herbalBalls, label: "Herbal compress" },
  { src: spaHallway, label: "Treatment wing" },
  { src: welcomeDrink, label: "Welcome drink" },
  { src: couplesSuite, label: "Couples suite" },
  { src: handRitual, label: "Hand ritual" },
  { src: gardenPath, label: "Garden path" },
  { src: loungeTea, label: "Tea lounge" },
  { src: oilCollection, label: "Essential oils" },
  { src: towelStack, label: "Fresh towels" },
  { src: floatingFlowers, label: "Floating flowers" },
  { src: petalTub, label: "Petal bath" },
  { src: jadeTools, label: "Jade tools" },
  { src: gardenPavilion, label: "Garden pavilion" },
  { src: lanternWalk, label: "Lantern walk" },
  { src: fruitPlatter, label: "Fruit platter" },
  { src: bathSalts, label: "Bath salts" },
  { src: massageTools, label: "Massage tools" },
  { src: incenseLotus, label: "Incense & lotus" },
  { src: footSoak, label: "Foot soak" },
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

// 3D tilt-on-hover wrapper: rotates toward the cursor, springs back on leave.
// Transform is set inline (no re-renders); reveal animations live on a parent.
function Tilt({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(frame.current);
    frame.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) translateY(-6px)`;
      el.style.setProperty("--glare-x", `${((x + 0.5) * 100).toFixed(1)}%`);
      el.style.setProperty("--glare-y", `${((y + 0.5) * 100).toFixed(1)}%`);
    });
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(frame.current);
    el.style.transform = "";
  };
  return (
    <div ref={ref} className={`tilt ${className ?? ""}`} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
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
  const heroBgRef = useRef<HTMLDivElement>(null);
  const heroFrame = useRef(0);
  const wa = whatsappLink(contact.whatsapp);
  const tel = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, "")}` : null;
  const mail = contact.email ? `mailto:${contact.email}` : null;

  // Hero background drifts opposite the cursor for a subtle 3D parallax.
  const onHeroMove = (e: React.MouseEvent) => {
    const el = heroBgRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    cancelAnimationFrame(heroFrame.current);
    heroFrame.current = requestAnimationFrame(() => {
      el.style.transform = `scale(1.08) translate3d(${(-x * 18).toFixed(1)}px, ${(-y * 14).toFixed(1)}px, 0)`;
    });
  };
  const onHeroLeave = () => {
    const el = heroBgRef.current;
    if (!el) return;
    cancelAnimationFrame(heroFrame.current);
    el.style.transform = "";
  };

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
        <section id="home" className="relative flex min-h-svh items-center justify-center overflow-hidden" onMouseMove={onHeroMove} onMouseLeave={onHeroLeave}>
          <div ref={heroBgRef} className="hero-parallax absolute inset-0">
            <img src={heroWide} alt="Elegant spa treatment room with two massage beds, warm wood and soft golden light" width={1920} height={1088} className="h-full w-full object-cover" />
          </div>
          <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
          {/* Floating glass badges add depth above the parallax backdrop */}
          <div className="glass float-slow absolute left-[8%] top-[28%] z-10 hidden rounded-2xl px-5 py-4 text-hero-foreground shadow-[var(--shadow-soft)] lg:block" aria-hidden>
            <p className="font-display text-3xl font-semibold">{treatments.length}</p>
            <p className="text-xs uppercase tracking-widest text-hero-foreground/80">Treatments</p>
          </div>
          <div className="glass float-slower absolute bottom-[24%] right-[7%] z-10 hidden rounded-2xl px-5 py-4 text-hero-foreground shadow-[var(--shadow-soft)] lg:block" aria-hidden>
            <p className="flex items-center gap-2 text-sm font-medium"><Leaf className="h-4 w-4" aria-hidden /> Traditional Thai wellness</p>
            <p className="mt-1 text-xs text-hero-foreground/80">Calm, unhurried, welcoming</p>
          </div>
          <div className="relative z-10 mx-auto max-w-3xl px-5 py-32 text-center text-hero-foreground">
            <p className="reveal text-xs font-bold uppercase tracking-[0.35em]">Thai Charm Spa</p>
            <h1 className="text-3d reveal mt-6 text-5xl leading-[1.1] md:text-7xl" style={{ transitionDelay: "120ms" }}>Relax. Restore. Reconnect.</h1>
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

        <section id="treatments" className="relative overflow-hidden bg-sage/50 py-24">
          <div className="orb -left-24 top-24 h-72 w-72 bg-primary/25" aria-hidden />
          <div className="orb -right-20 bottom-16 h-80 w-80 bg-accent" style={{ animationDelay: "2s" }} aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="Treatment menu" title="Treatments" intro="Choose an experience and send us a request — we'll reply with available times." />
            <p className="reveal mb-10 text-center"><Placeholder>Preview: proposed treatments — owner to confirm</Placeholder></p>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {treatments.map((t, i) => (
                <div key={t.name} className="reveal" style={{ transitionDelay: `${(i % 3) * 100}ms` }}>
                <Tilt className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)]">
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
                </Tilt>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="relative overflow-hidden py-24">
          <div className="orb -right-24 top-10 h-72 w-72 bg-sage" aria-hidden />
          <div className="orb -left-20 bottom-10 h-64 w-64 bg-primary/20" style={{ animationDelay: "3s" }} aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="Combine & unwind" title="Packages" />
            <p className="reveal mb-10 text-center"><Placeholder>Draft: package details to be supplied by owner</Placeholder></p>
            <div className="grid gap-8 md:grid-cols-3">
              {packages.map((p, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                <Tilt max={9} className="h-full">
                <article className={`h-full rounded-3xl border p-8 text-center ${i === 1 ? "border-primary/30 bg-card shadow-[var(--shadow-soft)]" : "border-border bg-card"}`}>
                  <h3 className="text-2xl">{p.name} {i + 1}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{p.includes}</p>
                  <p className="mt-6 text-sm">{p.duration ?? <Placeholder>Total duration TBC</Placeholder>}</p>
                  <p className="mt-2 font-bold">{p.price ?? <Placeholder>Price TBC</Placeholder>}</p>
                </article>
                </Tilt>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="bg-sage/50 py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div className="reveal relative md:justify-self-center">
              <Tilt max={5}>
                <img src={about} alt="" width={768} height={1024} loading="lazy" className="aspect-[3/4] w-full max-w-md rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
              </Tilt>
              <img src={candle} alt="Candles and orchid creating a calm spa ambiance" width={1024} height={1024} loading="lazy" className="float-slow absolute -bottom-8 -right-4 hidden w-44 rounded-2xl border-4 border-background object-cover shadow-[var(--shadow-soft)] md:block lg:-right-12 lg:w-56" />
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

        <section id="gallery" className="relative overflow-hidden py-24">
          <div className="orb -left-24 top-1/3 h-80 w-80 bg-accent" style={{ animationDelay: "1s" }} aria-hidden />
          <div className="relative mx-auto max-w-6xl px-5">
            <SectionHeading eyebrow="The atmosphere" title="Gallery" intro="A glimpse of the calm that waits for you." />
            <div className="reveal columns-2 gap-4 md:columns-3 [&>figure]:mb-4">
              {gallery.map((g, i) => (
                <figure key={i} className="tilt-hover group relative break-inside-avoid overflow-hidden rounded-2xl">
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
              <div className="reveal" style={{ transitionDelay: "120ms" }}>
              <Tilt max={4} className="h-full">
              <div className="relative flex h-full flex-col justify-center gap-4 overflow-hidden rounded-3xl p-8">
                <img src={footRitual} alt="" width={1024} height={1024} loading="lazy" className="absolute inset-0 h-full w-full object-cover" aria-hidden />
                <div className="absolute inset-0 bg-hero-overlay" aria-hidden />
                <div className="relative z-10 flex flex-col gap-4">
                  <ActionLink href={wa} external><MessageCircle className="h-4 w-4" aria-hidden /> Request an Appointment on WhatsApp</ActionLink>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <ActionLink href={tel} variant="outline">Call Us</ActionLink>
                    <ActionLink href={mail} variant="outline">Email Us</ActionLink>
                    <ActionLink href={contact.mapUrl ?? mapsLink(contact.address)} variant="outline" external>Get Directions</ActionLink>
                  </div>
                  {!wa && <p className="text-center text-xs text-hero-foreground/80">Buttons become active once contact details are added.</p>}
                </div>
              </div>
              </Tilt>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <p className="font-display text-2xl font-semibold">Thai Charm Spa</p>
            <p className="text-sm text-primary-foreground/80">Relax. Restore. Reconnect. A calm escape for body and mind, rooted in traditional Thai wellness.</p>
            <div className="flex gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <span key={label} aria-label={`${label} (link to be added)`} title={`${label} — link to be added`} className="flex h-9 w-9 items-center justify-center rounded-full border border-primary-foreground/30 text-primary-foreground/70">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
              ))}
            </div>
          </div>
          <nav aria-label="Footer" className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Explore</p>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {nav.map(([l, id]) => (
                <li key={id}><a href={`#${id}`} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">{l}</a></li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Popular Treatments</p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {treatments.slice(0, 5).map((t) => (
                <li key={t.name}><a href="#treatments" className="transition-colors hover:text-primary-foreground">{t.name}</a></li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Visit Us</p>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              {contact.address && <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden />{contact.address}</li>}
              {contact.phone && <li className="flex items-center gap-2"><Phone className="h-4 w-4 shrink-0" aria-hidden />{contact.phone}</li>}
              {contact.email && <li className="flex items-center gap-2"><Mail className="h-4 w-4 shrink-0" aria-hidden />{contact.email}</li>}
              {!contact.address && !contact.phone && !contact.email && <li className="text-primary-foreground/60">Address, phone and email to be added</li>}
            </ul>
          </div>
        </div>
        <div className="border-t border-primary-foreground/15">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-primary-foreground/60 sm:flex-row">
            <p>© {new Date().getFullYear()} Thai Charm Spa. All rights reserved.</p>
            <a href="#home" className="transition-colors hover:text-primary-foreground">Back to top</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
