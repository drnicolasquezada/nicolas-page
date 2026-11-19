import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Sparkles,
  Syringe,
  Droplets,
  Layers,
  Wand2,
  HeartPulse,
  Menu,
  X,
  Phone,
  MapPin,
  Instagram,
  MessageCircle,
  GraduationCap,
  Award,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";

import p1 from "@/assets/photos/IMG_3364.webp";
import p2 from "@/assets/photos/IMG_3398.webp";
import p3 from "@/assets/photos/IMG_3451.webp";
import p4 from "@/assets/photos/IMG_3475.webp";
import p5 from "@/assets/photos/IMG_3493.webp";
import p6 from "@/assets/photos/IMG_3499.webp";
import p7 from "@/assets/photos/IMG_3519.webp";
import p8 from "@/assets/photos/IMG_3535.webp";
import p9 from "@/assets/photos/IMG_3558.webp";
import p10 from "@/assets/photos/IMG_3564.webp";

const PHOTOS = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

const WHATSAPP_URL = "https://wa.me/56951739948?text=Hola%20Dr.%20Nicol%C3%A1s%2C%20quisiera%20agendar%20una%20evaluaci%C3%B3n.";
const BOOK_URL = "#contacto";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Nicolás Quezada Tapia — Armonización Facial Premium" },
      {
        name: "description",
        content:
          "Cirujano-Dentista especialista en armonización orofacial. Resultados naturales con técnica precisa: bótox, ácido hialurónico, bioestimuladores e hilos tensores.",
      },
      { property: "og:title", content: "Dr. Nicolás Quezada Tapia — Armonización Facial Premium" },
      {
        property: "og:description",
        content:
          "Armonización facial con precisión, naturalidad y elegancia. Agenda tu evaluación personalizada.",
      },
      { property: "og:image", content: `https://dr.armonizate.cl${PHOTOS[1]}` },
      { property: "og:url", content: "https://dr.armonizate.cl/" },
    ],
    links: [{ rel: "canonical", href: "https://dr.armonizate.cl/" }],
  }),
  component: Landing,
});

const NAV = [
  { label: "Doctor", href: "#doctor" },
  { label: "Tratamientos", href: "#tratamientos" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Galería", href: "#galeria" },
  { label: "Contacto", href: "#contacto" },
];

const TREATMENTS = [
  {
    icon: Syringe,
    name: "Toxina Botulínica",
    desc: "Suaviza líneas de expresión y previene el envejecimiento con un efecto natural y descansado.",
  },
  {
    icon: Droplets,
    name: "Ácido Hialurónico",
    desc: "Define y armoniza el rostro con rellenos de alta precisión y proporciones equilibradas.",
  },
  {
    icon: Layers,
    name: "Bioestimuladores",
    desc: "Activa la producción de colágeno para un rejuvenecimiento progresivo y duradero.",
  },
  {
    icon: Wand2,
    name: "Hilos Tensores",
    desc: "Lifting sin cirugía: redefine contornos con efecto inmediato y recuperación mínima.",
  },
  {
    icon: HeartPulse,
    name: "Mesoterapia Facial",
    desc: "Hidratación profunda con vitaminas y antioxidantes para una piel luminosa y firme.",
  },
  {
    icon: Sparkles,
    name: "Armonización Integral",
    desc: "Plan personalizado que combina técnicas para un resultado armónico y natural.",
  },
];

const DIFFS = [
  { icon: Stethoscope, t: "Enfoque personalizado", d: "Cada plan se diseña a partir de tu rostro, tus rasgos y tus objetivos." },
  { icon: Sparkles, t: "Resultados naturales", d: "Realzamos tu belleza sin perder tu esencia ni tu expresión." },
  { icon: ShieldCheck, t: "Técnica precisa", d: "Procedimientos seguros, materiales de primera línea y protocolo clínico riguroso." },
  { icon: GraduationCap, t: "Formación sólida", d: "Estudios en Chile y Brasil con perfeccionamiento continuo en estética facial." },
  { icon: HeartPulse, t: "Atención cercana", d: "Acompañamiento profesional antes, durante y después de cada tratamiento." },
  { icon: Award, t: "Experiencia clínica", d: "Cientos de procedimientos realizados en armonización y rejuvenecimiento facial." },
];

function Landing() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-xl tracking-wide">Dr. Nicolás Quezada</span>
            <span className="hidden sm:inline text-[10px] uppercase tracking-[0.3em] text-gold ml-2">
              Armonización Orofacial
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </a>
            ))}
            <a
              href={BOOK_URL}
              className="text-sm px-5 py-2 rounded-full bg-foreground text-background hover:bg-foreground/90 transition"
            >
              Agendar
            </a>
          </nav>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-border bg-background">
            <nav className="px-6 py-4 flex flex-col gap-4">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-foreground/80"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={BOOK_URL}
                onClick={() => setOpen(false)}
                className="text-sm text-center px-5 py-3 rounded-full bg-foreground text-background"
              >
                Agendar evaluación
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative pt-28 lg:pt-36 pb-20 overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.85 0.08 82 / 0.6), transparent 70%)" }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 items-center relative">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="gold-divider" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                Estética Orofacial · Santiago, Chile
              </span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-foreground">
              Armonización facial con{" "}
              <em className="text-gold not-italic font-light">precisión</em>,{" "}
              naturalidad y elegancia.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Resultados armónicos que realzan tu belleza sin perder tu esencia. Tratamientos
              estéticos diseñados con criterio clínico y mirada artística.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={BOOK_URL}
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition shadow-luxe"
              >
                Agendar evaluación
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>
              <a
                href="#tratamientos"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-foreground/20 text-sm tracking-wide hover:border-foreground/60 transition"
              >
                Ver tratamientos
              </a>
            </div>
            <div className="mt-14 grid grid-cols-3 gap-6 max-w-md">
              {[
                ["+500", "Pacientes"],
                ["6+", "Años clínicos"],
                ["100%", "Personalizado"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-foreground">{n}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-luxe">
              <img
                src={PHOTOS[1]}
                alt="Dr. Nicolás Quezada Tapia"
                className="w-full h-full object-cover"
              />
              <div
                aria-hidden
                className="absolute inset-0 ring-1 ring-inset rounded-[2rem]"
                style={{ boxShadow: "inset 0 0 0 1px color-mix(in oklab, var(--gold) 25%, transparent)" }}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-background rounded-2xl p-5 shadow-soft border border-border max-w-[220px]">
              <div className="flex items-center gap-2 text-gold mb-1">
                <Sparkles size={14} />
                <span className="text-[10px] uppercase tracking-[0.25em]">STUDIO</span>
              </div>
              <p className="text-sm font-display leading-snug">
                "Cada rostro merece una mirada única."
              </p>
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full border border-gold/40 hidden lg:block" />
          </div>
        </div>
      </section>

      {/* DOCTOR */}
      <section id="doctor" className="py-24 lg:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden shadow-luxe">
              <img src={PHOTOS[0]} alt="Dr. Nicolás Quezada" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-divider" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">El doctor</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              Dr. Nicolás Quezada Tapia
            </h2>
            <p className="mt-2 text-gold font-display text-xl italic">
              Cirujano-Dentista · Especialista en Armonización Orofacial
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg max-w-2xl">
              Con una formación rigurosa entre Chile y Brasil, el Dr. Nicolás combina precisión
              clínica con sensibilidad estética. Su filosofía: realzar la belleza natural de cada
              paciente respetando su esencia, sus proporciones y su expresión.
            </p>
            <ul className="mt-10 space-y-5">
              {[
                ["Cirujano-Dentista", "Pontificia Universidad Católica de Chile"],
                ["Diplomado en Medicina Estética", "Academia de Medicina y Cirugía Estética de Chile"],
                ["Armonización Orofacial", "UniCPO, São Paulo, Brasil"],
                ["Perfeccionamiento continuo", "Múltiples cursos avanzados en su especialidad"],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4 pb-5 border-b border-border/70 last:border-0">
                  <GraduationCap className="text-gold shrink-0 mt-1" size={20} />
                  <div>
                    <div className="font-medium">{t}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="tratamientos" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-divider" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Tratamientos</span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              Procedimientos diseñados para realzar tu belleza natural.
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              Cada tratamiento se planifica con criterio clínico, técnica avanzada y un objetivo
              estético armónico.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TREATMENTS.map((t) => {
              const Icon = t.icon;
              return (
                <article
                  key={t.name}
                  className="group p-8 rounded-2xl bg-card border border-border/70 hover:border-gold/50 transition-all duration-500 hover:shadow-soft hover:-translate-y-0.5"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-gold/15 transition">
                    <Icon size={20} className="text-gold" />
                  </div>
                  <h3 className="font-display text-2xl mb-3">{t.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="filosofia" className="py-24 lg:py-32 bg-foreground text-background relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, oklch(0.72 0.1 80 / 0.4), transparent 50%), radial-gradient(circle at 80% 70%, oklch(0.72 0.1 80 / 0.2), transparent 50%)",
          }}
        />
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 items-center relative">
          <div className="lg:col-span-6">
            <div className="aspect-[4/5] rounded-[1.5rem] overflow-hidden shadow-luxe">
              <img src={PHOTOS[7]} alt="Dr. Nicolás en consulta" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-divider" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-background/60">
                Filosofía
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight text-background">
              Armonización, rejuvenecimiento y estética orofacial.
            </h2>
            <p className="mt-6 text-background/70 text-lg leading-relaxed">
              Una evaluación personalizada es el punto de partida para diseñar un plan que respete
              tus proporciones, tu rostro y tu historia. Trabajamos desde la naturalidad: cada
              decisión clínica busca un resultado armónico, seguro y con técnica de excelencia.
            </p>
            <div className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
              {[
                "Análisis facial detallado",
                "Materiales de primera línea",
                "Protocolo clínico riguroso",
                "Seguimiento personalizado",
              ].map((i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="text-background/85 text-sm tracking-wide">{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="galeria" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div className="max-w-xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="gold-divider" />
                <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">Galería</span>
              </div>
              <h2 className="font-display text-4xl lg:text-5xl leading-tight">
                El estudio, la técnica, la mirada.
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Una mirada editorial al trabajo clínico del Dr. Nicolás y al ambiente de STUDIO.
            </p>
          </div>

          {/* Editorial masonry */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-5">
            <GalleryImg src={PHOTOS[4]} className="row-span-2 aspect-[3/5]" />
            <GalleryImg src={PHOTOS[2]} className="aspect-[4/3]" />
            <GalleryImg src={PHOTOS[5]} className="row-span-2 aspect-[3/5]" />
            <GalleryImg src={PHOTOS[3]} className="aspect-[4/3]" />
            <GalleryImg src={PHOTOS[6]} className="aspect-square" />
            <GalleryImg src={PHOTOS[8]} className="aspect-[4/3]" />
            <GalleryImg src={PHOTOS[9]} className="row-span-2 aspect-[3/5]" />
            <GalleryImg src={PHOTOS[1]} className="aspect-[4/3]" />
            <GalleryImg src={PHOTOS[0]} className="aspect-square object-top" />
            <GalleryImg src={PHOTOS[7]} className="aspect-[4/3]" />
          </div>
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-24 lg:py-32 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-divider" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
                Por qué elegirnos
              </span>
            </div>
            <h2 className="font-display text-4xl lg:text-5xl leading-tight">
              Excelencia médica con sensibilidad estética.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
            {DIFFS.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.t}>
                  <Icon size={22} className="text-gold mb-4" />
                  <h3 className="font-display text-2xl mb-2">{d.t}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{d.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contacto" className="py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <div className="flex justify-center mb-6">
            <span className="gold-divider" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1]">
            Tu rostro merece una mirada{" "}
            <em className="text-gold not-italic font-light">experta</em>.
          </h2>
          <p className="mt-6 text-muted-foreground text-lg max-w-2xl mx-auto">
            Agenda tu evaluación personalizada y descubre el plan ideal para realzar tu belleza
            natural con resultados armónicos y seguros.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-foreground text-background text-sm tracking-wide hover:bg-foreground/90 transition shadow-luxe"
            >
              Agenda tu evaluación
              <span>→</span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-foreground/20 text-sm tracking-wide hover:border-foreground/60 transition"
            >
              <MessageCircle size={16} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-foreground text-background/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-10">
          <div>
            <div className="font-display text-2xl text-background mb-3">Dr. Nicolás Quezada T.</div>
            <p className="text-sm text-background/60 max-w-xs leading-relaxed">
              Armonización orofacial y estética facial premium. Resultados naturales con criterio
              clínico y precisión técnica.
            </p>
          </div>
          <div className="space-y-3 text-sm">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">Contacto</div>
            <a href={WHATSAPP_URL} className="flex items-center gap-2 hover:text-background transition">
              <Phone size={14} /> WhatsApp directo
            </a>
            <div className="flex items-center gap-2">
              <MapPin size={14} /> Santiago, Chile
            </div>
            <a href="https://instagram.com/drnicolas_quezada" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-background transition">
              <Instagram size={14} /> @drnicolas_quezada
            </a>
          </div>
          <div className="text-sm">
            <div className="text-[11px] uppercase tracking-[0.3em] text-gold mb-3">STUDIO</div>
            <p className="text-background/60 leading-relaxed">
              Espacio clínico dedicado a la armonización facial, el rejuvenecimiento y la estética
              orofacial con estándares de excelencia.
            </p>
          </div>
        </div>
        <div className="border-t border-background/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-wrap justify-between items-center gap-3 text-xs text-background/50">
            <div>© {new Date().getFullYear()} Dr. Nicolás Quezada Tapia. Todos los derechos reservados.</div>
            <div>Armonización Orofacial · Santiago, Chile</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function GalleryImg({ src, className = "" }: { src: string; className?: string }) {
  return (
    <div className={`group relative overflow-hidden rounded-xl bg-secondary ${className}`}>
      <img
        src={src}
        alt="Dr. Nicolás Quezada"
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
}
