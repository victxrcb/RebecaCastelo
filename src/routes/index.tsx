import { createFileRoute } from "@tanstack/react-router";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import {
  Instagram,
  MessageCircle,
  Heart,
  Building2,
  Sparkles,
  Wine,
  Play,
  ArrowRight,
  ArrowUp,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Check,
} from "lucide-react";

import rebeca1 from "@/assets/rebeca1.jpg";
import rebeca3 from "@/assets/rebeca3.jpg";
import rebeca4 from "@/assets/rebeca4.jpg";
import rebeca5 from "@/assets/rebeca5.jpg";
import rebeca6 from "@/assets/rebeca6.jpg";
import rebeca8 from "@/assets/rebeca8.jpg";
import rebeca9 from "@/assets/rebeca9.jpg";
import music1 from "@/assets/music1.mp4";
import music2 from "@/assets/music2.mp4";
import music3 from "@/assets/music3.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rebeca Astela — Cantora | Contratação para Eventos" },
      {
        name: "description",
        content:
          "Rebeca Astela — cantora brasileira de Jazz e MPB. Voz cinematográfica para casamentos, eventos corporativos, bares e celebrações privadas. Contrate agora.",
      },
      { property: "og:title", content: "Rebeca Astela — Cantora" },
      {
        property: "og:description",
        content:
          "Presença artística sofisticada para transformar seu evento em uma experiência cinematográfica.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: LandingPage,
});

const WHATSAPP_URL = "https://wa.me/5583996801089";
const INSTAGRAM_URL = "https://www.instagram.com/rebeca_castelocantora/";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const navLinks = [
  { id: "sobre", label: "Sobre" },
  { id: "performances", label: "Performances" },
  { id: "eventos", label: "Eventos" },
  { id: "galeria", label: "Galeria" },
  { id: "contato", label: "Contato" },
];

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function useLockBody(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [locked]);
}

function setSpotlight(e: ReactMouseEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-gradient-to-r from-gold/40 via-gold to-gold/40"
    />
  );
}

function Nav({ scrolled, active }: { scrolled: boolean; active: string }) {
  const [open, setOpen] = useState(false);
  useLockBody(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-gold/10 bg-night/70 py-3 backdrop-blur-xl md:py-4"
            : "border-b border-transparent py-5 md:py-7"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
          <a
            href="#inicio"
            className="font-serif text-xl italic tracking-tight text-gold transition-opacity hover:opacity-80 md:text-2xl"
          >
            Rebeca Astela
          </a>

          <ul className="hidden items-center gap-1 text-[11px] font-medium uppercase tracking-[0.22em] md:flex">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative block px-4 py-2 transition-colors duration-300 ${
                      isActive ? "text-gold" : "text-zinc-300 hover:text-foreground"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-indicator"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-x-4 -bottom-0.5 h-px bg-gold"
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-gold/40 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold transition-all duration-300 hover:bg-gold hover:text-night active:scale-95 lg:inline-flex"
          >
            Agendar
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            aria-expanded={open}
            className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 md:hidden"
          >
            <Menu className="size-5" strokeWidth={1.5} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] flex flex-col bg-night/95 px-6 py-5 backdrop-blur-2xl md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex items-center justify-between">
              <span className="font-serif text-xl italic text-gold">Rebeca Astela</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="flex size-11 items-center justify-center rounded-full border border-gold/30 text-gold"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
            </div>
            <motion.ul
              initial="hidden"
              animate="visible"
              transition={{ staggerChildren: 0.06, delayChildren: 0.1 }}
              className="mt-16 space-y-2"
            >
              {navLinks.map((link, i) => (
                <motion.li key={link.id} variants={fadeUp} transition={{ duration: 0.5, ease }}>
                  <a
                    href={`#${link.id}`}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-gold/10 py-4 font-serif text-4xl italic text-foreground transition-colors active:text-gold"
                  >
                    <span className="font-sans text-xs not-italic tabular-nums text-gold/60">
                      0{i + 1}
                    </span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mt-auto flex gap-3 pb-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="btn-gold flex flex-1 items-center justify-center gap-2 rounded-full py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-night"
              >
                <MessageCircle className="size-4" /> WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="btn-premium flex size-14 items-center justify-center rounded-full"
              >
                <Instagram className="size-5 text-gold" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SplitTitle({ text, delay = 0 }: { text: string; delay?: number }) {
  const words = text.split(" ");
  let index = 0;
  return (
    <span aria-hidden="true" className="inline-block">
      {words
        .map((word, w) => (
          <span
            key={w}
            className="inline-block overflow-hidden px-[0.04em] pb-[0.12em] align-bottom"
          >
            {word.split("").map((char) => {
              const i = index++;
              return (
                <motion.span
                  key={i}
                  className="inline-block"
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: delay + i * 0.045, ease }}
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        ))
        .flatMap((node, w) => (w === 0 ? [node] : [" ", node]))}
    </span>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const light = useMotionTemplate`radial-gradient(520px circle at ${mx}px ${my}px, rgba(197,160,89,0.13), transparent 70%)`;

  return (
    <header
      ref={ref}
      id="inicio"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set(e.clientX - rect.left);
        my.set(e.clientY - rect.top);
      }}
      className="relative flex min-h-[100dvh] w-full items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0">
        <img
          src={rebeca1}
          alt="Rebeca Astela — retrato cinematográfico"
          width={1536}
          height={1920}
          fetchPriority="high"
          className="h-full w-full object-cover object-[center_40%] opacity-85"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-transparent to-night/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(8,8,8,0.6)_100%)]" />
      </motion.div>

      <motion.div
        style={{ background: light }}
        className="pointer-events-none absolute inset-0 z-[1] hidden md:block"
      />

      <motion.div style={{ opacity, y: contentY }} className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease }}
          className="mb-6 flex items-center justify-center gap-3 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.32em] text-gold md:gap-4 md:text-[11px] md:tracking-[0.5em]"
        >
          <span className="h-px w-6 bg-gradient-to-r from-transparent to-gold md:w-12" />
          A Nova Voz do Nordeste
          <span className="h-px w-6 bg-gradient-to-l from-transparent to-gold md:w-12" />
        </motion.p>

        <h1
          aria-label="Rebeca Astela"
          className="font-heading-bold text-6xl italic leading-[0.95] text-foreground drop-shadow-2xl sm:text-7xl md:text-8xl lg:text-[9.5rem]"
        >
          <SplitTitle text="Rebeca Astela" delay={0.3} />
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="text-premium mx-auto mt-8 max-w-xl text-pretty text-sm text-zinc-300 md:text-lg"
        >
          <span className="font-medium text-foreground">Voz</span>, presença e
          <span className="font-medium text-gold/90"> emoção</span> — trilha sonora viva para os
          <span className="font-medium text-gold/80"> momentos</span> que merecem ser eternizados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease }}
          className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-5"
        >
          <a
            href="#contato"
            className="btn-gold group inline-flex items-center gap-3 rounded-full px-10 py-4 text-[11px] font-bold uppercase tracking-[0.3em] text-night"
          >
            Solicitar Orçamento
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </a>
          <div className="flex gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="btn-premium group flex size-12 items-center justify-center rounded-full active:scale-95"
            >
              <Instagram className="size-5 text-gold/80 transition-colors duration-300 group-hover:text-gold" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="btn-premium group flex size-12 items-center justify-center rounded-full active:scale-95"
            >
              <MessageCircle className="size-5 text-gold/80 transition-colors duration-300 group-hover:text-gold" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3 text-[9px] uppercase tracking-[0.4em] text-zinc-400 transition-colors hover:text-gold"
      >
        Role
        <span className="relative flex h-10 w-6 justify-center rounded-full border border-gold/30">
          <motion.span
            animate={{ y: [6, 20, 6], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-0 block size-1 rounded-full bg-gold"
          />
        </span>
      </motion.a>
    </header>
  );
}

const marqueeItems = [
  "Casamentos",
  "MPB",
  "Eventos Corporativos",
  "Pop",
  "Bares & Lounges",
  "Voz & Violão",
  "Celebrações Privadas",
  "Romântico",
];

function Marquee() {
  return (
    <div
      className="marquee relative overflow-hidden border-y border-gold/10 bg-night py-6"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <span
            key={i}
            className={`flex shrink-0 items-center gap-10 px-5 font-serif text-2xl italic md:text-3xl ${
              i % 2 ? "text-outline" : "text-zinc-300"
            }`}
          >
            {item}
            <Sparkles className="size-4 text-gold/60" strokeWidth={1.2} />
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <section id="sobre" className="noise section-fade-alt relative py-32 md:pb-52 md:pt-44">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 md:grid-cols-[1fr_1.1fr] md:gap-28 md:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease }}
          className="relative"
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-wine/40">
            <motion.img
              style={{ y: imgY, scale: 1.12 }}
              src={rebeca3}
              alt="Rebeca Astela em retrato artístico"
              loading="lazy"
              width={1024}
              height={1280}
              className="h-full w-full object-cover opacity-95"
            />
            <div className="absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-gold/15" />
          </div>
          <div className="absolute -bottom-12 -right-12 -z-10 h-80 w-80 rounded-full bg-wine/40 blur-3xl" />
          <div className="absolute -left-8 -top-8 -z-10 h-48 w-48 rounded-full bg-gold/15 blur-2xl" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5, ease }}
            className="glass-card-premium absolute -bottom-8 left-6 flex items-center gap-4 rounded-2xl px-5 py-4 shadow-xl shadow-night/60 md:-right-10 md:left-auto"
          >
            <span className="flex h-6 items-end gap-[3px]" aria-hidden="true">
              {[0, 0.2, 0.4, 0.1].map((d, i) => (
                <span
                  key={i}
                  className="eq-bar block h-full w-[3px] rounded-full bg-gold"
                  style={{ animationDelay: `${d}s` }}
                />
              ))}
            </span>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/70">Ao vivo</p>
              <p className="flex items-center gap-1.5 text-sm text-foreground">
                <MapPin className="size-3.5 text-gold" /> Campina Grande e região.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.span variants={fadeUp} transition={{ duration: 0.6 }} className="eyebrow mb-8">
            Sobre Rebeca
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8, ease }}
            className="font-heading mb-10 max-w-3xl text-balance text-5xl leading-[1.05] md:text-6xl"
          >
            Elegância em cada <span className="italic text-gold/90">nota</span>,{" "}
            <span className="italic text-gold/90">emoção</span> em cada verso.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="text-premium mb-8 max-w-[60ch] text-pretty text-base text-zinc-300 md:text-lg"
          >
            Rebeca Astela é a tradução da <span className="italic text-gold/90">música</span> em{" "}
            <span className="italic text-gold/90">emoção</span> e{" "}
            <span className="italic text-gold/90">presença</span>. Com um timbre marcante e uma
            presença de palco envolvente, transforma cada apresentação em uma experiência{" "}
            <span className="italic text-gold/90">única</span> e{" "}
            <span className="italic text-gold/90">memorável</span> — passeando com naturalidade por
            diferentes estilos musicais para criar a atmosfera perfeita para cada momento, público e
            história a ser vivida.
          </motion.p>
          <motion.div variants={fadeUp} transition={{ duration: 0.8 }} className="mb-14">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70">
              Influências
            </p>
            <ul className="flex flex-wrap gap-2">
              {[
                "Gal Costa",
                "Elis Regina",
                "Vanessa da Mata",
                "Jessie J",
                "Whitney Houston",
                "Céline Dion",
              ].map((name) => (
                <li
                  key={name}
                  className="cursor-default rounded-full border border-gold/15 bg-white/[0.02] px-4 py-1.5 text-xs text-zinc-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:text-gold"
                >
                  {name}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.dl variants={fadeUp} className="space-y-0">
            {[
              [
                "Estilo",
                "Versatilidade musical, interpretando diversos estilos de acordo com o evento e solicitação do contratante.",
              ],
              ["Especialidade", "Cantora para eventos e performances intimistas"],
              ["Regiões", "Campina Grande e região."],
            ].map(([label, value]) => (
              <div
                key={label}
                className="group flex flex-col gap-2 border-b border-gold/10 py-5 text-sm transition-colors duration-300 hover:border-gold/30 md:grid md:grid-cols-[9rem_1fr] md:items-baseline md:gap-8"
              >
                <dt className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/70 transition-colors group-hover:text-gold">
                  {label}
                </dt>
                <dd className="max-w-lg font-light leading-7 text-zinc-300">{value}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}

const performances = [
  {
    src: music1,
    title: "Aleluia (Hallelujah) - Bekah Costa",
    label: "Casamento · Cover Exclusivo",
  },
  {
    src: music2,
    title: "Você não vale nada - Calcinha Preta",
    label: "Show exclusivo bar Banana Beer",
  },
  {
    src: music3,
    title: "Lisboa - anavitoria",
    label: "Cover",
  },
];

function VideoCard({ p, index }: { p: (typeof performances)[number]; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const video = videoRef.current;
    if (!video) return;
    setStarted(true);
    // Se o navegador bloquear o play, os controles nativos já ficam visíveis.
    video.play().catch(() => {});
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease }}
      className={`group ${index === 1 ? "md:translate-y-16" : ""}`}
    >
      <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-gold/10 transition-shadow duration-500 group-hover:shadow-[0_30px_60px_-20px_rgba(45,11,18,0.9)]">
        <video
          ref={videoRef}
          src={`${p.src}#t=0.1`}
          controls={started}
          preload="metadata"
          playsInline
          onPlay={(e) => {
            document.querySelectorAll("video").forEach((v) => {
              if (v !== e.currentTarget) v.pause();
            });
          }}
          className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
            started ? "" : "group-hover:scale-105"
          }`}
        />

        <AnimatePresence>
          {!started && (
            <motion.button
              type="button"
              onClick={start}
              aria-label={`Reproduzir ${p.title}`}
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col justify-between p-6 text-left md:p-7"
            >
              <span className="absolute inset-0 bg-gradient-to-t from-night via-night/30 to-night/10" />
              <span className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />

              <span className="relative font-serif text-5xl italic text-outline">0{index + 1}</span>

              <span className="relative flex size-16 items-center justify-center self-center rounded-full border border-gold/50 bg-night/40 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-gold group-hover:bg-gold">
                <span className="absolute inset-0 animate-ping rounded-full border border-gold/30 [animation-duration:2.4s]" />
                <Play
                  className="ml-0.5 size-6 fill-gold text-gold transition-colors duration-500 group-hover:fill-night group-hover:text-night"
                  strokeWidth={1}
                />
              </span>

              <span className="relative text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/90">
                {p.label}
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <h3 className="font-serif text-2xl italic leading-tight text-zinc-200 transition-colors duration-300 group-hover:text-gold/90">
        {p.title}
      </h3>
    </motion.article>
  );
}

function Performances() {
  return (
    <section id="performances" className="section-fade py-32 md:pb-56 md:pt-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-24 md:flex-row md:items-end"
        >
          <div>
            <span className="eyebrow mb-6">Performances</span>
            <h2 className="font-heading text-balance text-5xl leading-[1.05] md:text-7xl">
              Voz &<span className="italic text-gold/90"> Emoção</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light leading-7 text-zinc-400">
            Registros de ensaios, sessões acústicas e momentos ao vivo recentes. Toque para
            assistir.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          {performances.map((p, i) => (
            <VideoCard key={p.title} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const eventTypes = [
  {
    icon: Heart,
    title: "Casamentos",
    desc: "Cerimônias, recepções e momentos únicos com trilha sonora personalizada.",
  },
  {
    icon: Building2,
    title: "Corporativos",
    desc: "Jantares, lançamentos e coquetéis com ambientação de alto padrão.",
  },
  {
    icon: Wine,
    title: "Bares & Lounges",
    desc: "Curadoria musical sofisticada para espaços que valorizam atmosfera.",
  },
  {
    icon: Sparkles,
    title: "Privados",
    desc: "Aniversários e celebrações intimistas com exclusividade total.",
  },
];

function Events() {
  return (
    <section id="eventos" className="noise section-fade-alt py-32 md:pb-52 md:pt-44">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 text-center md:mb-24"
        >
          <span className="eyebrow mb-6">Contratações</span>
          <h2 className="font-heading text-balance text-5xl leading-[1.05] md:text-7xl">
            A trilha sonora do <span className="italic text-gold/90">seu momento</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.a
                key={e.title}
                href="#contato"
                onMouseMove={setSpotlight}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1, ease }}
                whileHover={{ y: -6 }}
                className="spotlight group flex flex-col overflow-hidden rounded-2xl border border-gold/10 bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-9 transition-colors duration-500 hover:border-gold/35 md:p-10"
              >
                <div className="mb-10 flex items-start justify-between">
                  <div className="flex size-14 items-center justify-center rounded-xl border border-gold/30 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:border-gold/80 group-hover:bg-gold/10 group-hover:shadow-lg group-hover:shadow-gold/20">
                    <Icon
                      className="size-6 text-gold/80 transition-colors duration-500 group-hover:text-gold"
                      strokeWidth={1.2}
                    />
                  </div>
                  <span className="font-serif text-sm italic tabular-nums text-zinc-600 transition-colors group-hover:text-gold/60">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-heading mb-4 text-2xl leading-tight">{e.title}</h3>
                <p className="mb-8 text-sm font-light leading-7 text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                  {e.desc}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/60 transition-colors group-hover:text-gold">
                  Consultar data
                  <ArrowRight className="size-3.5 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const galleryItems = [
  {
    img: rebeca6,
    span: "col-span-2 row-span-2",
    alt: "Rebeca Astela em ensaio fotográfico",
  },
  { img: rebeca4, span: "", alt: "Rebeca Astela em retrato" },
  { img: rebeca5, span: "", alt: "Rebeca Astela em apresentação" },
  {
    img: rebeca8,
    span: "col-span-2",
    alt: "Rebeca Astela no palco",
    objectPosition: "object-[center_30%]",
  },
];

function Lightbox({
  index,
  onClose,
  onChange,
}: {
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  const total = galleryItems.length;
  const prev = () => onChange((index - 1 + total) % total);
  const next = () => onChange((index + 1) % total);
  useLockBody(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange((index - 1 + total) % total);
      if (e.key === "ArrowRight") onChange((index + 1) % total);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, total, onClose, onChange]);

  const item = galleryItems[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[80] flex items-center justify-center bg-night/95 p-4 backdrop-blur-xl md:p-12"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Galeria ampliada"
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={item.img}
          alt={item.alt}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.35, ease }}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[85dvh] max-w-full rounded-xl object-contain shadow-2xl shadow-black"
        />
      </AnimatePresence>

      <button
        type="button"
        onClick={onClose}
        aria-label="Fechar"
        className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full border border-gold/30 text-gold transition-colors hover:bg-gold/10 md:right-8 md:top-8"
      >
        <X className="size-5" strokeWidth={1.5} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Foto anterior"
        className="absolute left-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-night/50 text-gold transition-colors hover:bg-gold/10 md:left-8"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Próxima foto"
        className="absolute right-3 top-1/2 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-gold/30 bg-night/50 text-gold transition-colors hover:bg-gold/10 md:right-8"
      >
        <ChevronRight className="size-5" />
      </button>
      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tabular-nums tracking-[0.3em] text-zinc-400">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </p>
    </motion.div>
  );
}

function Gallery() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="galeria" className="section-fade py-32 md:pb-52 md:pt-44">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-24 md:flex-row md:items-end"
        >
          <div>
            <span className="eyebrow mb-6">Galeria</span>
            <h2 className="font-heading text-balance text-5xl leading-[1.05] md:text-7xl">
              Capítulos <span className="italic text-gold/90">visuais</span>.
            </h2>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold/80 transition-colors hover:text-gold"
          >
            <Instagram className="size-4" />
            Mais no Instagram
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-5">
          {galleryItems.map((g, i) => (
            <motion.button
              type="button"
              key={i}
              onClick={() => setOpen(i)}
              aria-label={`Ampliar foto: ${g.alt}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease }}
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl bg-zinc-900 ${g.span}`}
            >
              <img
                src={g.img}
                alt={g.alt}
                loading="lazy"
                className={`h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110 ${g.objectPosition || ""}`}
              />
              <span className="absolute inset-0 bg-night/30 transition-colors duration-500 group-hover:bg-night/0" />
              <span className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" />
              <span className="absolute bottom-4 right-4 flex size-10 translate-y-2 items-center justify-center rounded-full bg-night/60 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <ArrowUp className="size-4 rotate-45 text-gold" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <Lightbox index={open} onClose={() => setOpen(null)} onChange={setOpen} />
        )}
      </AnimatePresence>
    </section>
  );
}

const eventOptions = ["Casamento", "Corporativo", "Bar / Lounge", "Aniversário", "Outro"];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; eventType?: string }>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};
    if (!formData.name.trim()) nextErrors.name = "Informe seu nome.";
    if (!formData.eventType) nextErrors.eventType = "Escolha o tipo de evento.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    const text = encodeURIComponent(
      `Olá Rebeca! Sou ${formData.name}.\nEvento: ${formData.eventType}\nData: ${formData.date}\n\n${formData.message}`,
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
    setSent(true);
  };

  return (
    <section
      id="contato"
      className="section-fade-alt relative overflow-hidden py-32 md:pb-52 md:pt-44"
      style={{
        backgroundImage: `url(${rebeca9})`,
        backgroundColor: "rgba(8, 8, 8, 0.75)",
        backgroundSize: "cover",
        backgroundPosition: "center 25%",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-night via-night/60 to-night/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-transparent to-night/70" />
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-wine/30 blur-[120px]" />
      <div className="absolute right-1/4 top-1/4 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.1fr] md:gap-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease }}
        >
          <span className="eyebrow mb-8">Contato & Agendamento</span>
          <h2 className="font-heading mb-10 text-balance text-5xl leading-[1.05] md:text-7xl">
            Vamos criar algo <span className="italic text-gold/90">memorável?</span>
          </h2>
          <p className="mb-14 max-w-md text-base font-light leading-8 text-zinc-400">
            Disponível de segunda a domingo para agendamentos. Conte sobre o evento e retornamos com
            a resposta em até 24h.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onMouseMove={setSpotlight}
            className="glass-card-premium spotlight group inline-flex w-full items-center justify-between gap-5 overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:border-gold/50 active:scale-[0.99] md:w-auto md:pr-10"
          >
            <div className="flex items-center gap-5">
              <div className="relative flex size-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40 transition-all duration-300 group-hover:bg-gold/25 group-hover:ring-gold/70">
                <span className="absolute right-0.5 top-0.5 size-2.5 rounded-full bg-emerald-400 ring-2 ring-night" />
                <MessageCircle
                  className="size-6 text-gold/90 transition-colors duration-300 group-hover:text-gold"
                  strokeWidth={1.5}
                />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70">
                  Resposta Rápida
                </p>
                <p className="font-medium text-foreground transition-colors duration-300 group-hover:text-gold/90">
                  Falar pelo WhatsApp
                </p>
              </div>
            </div>
            <ArrowRight className="size-4 text-gold/80 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          noValidate
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease }}
          className="glass-card-premium space-y-8 rounded-[1.75rem] p-7 shadow-2xl shadow-night/60 md:p-11"
        >
          <Field
            id="name"
            label="Seu nome completo"
            value={formData.name}
            onChange={(v) => {
              setFormData({ ...formData, name: v });
              if (errors.name) setErrors({ ...errors, name: undefined });
            }}
            placeholder="Como devemos te chamar?"
            error={errors.name}
            required
          />

          <fieldset className="space-y-3">
            <legend className="mb-3 block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70">
              Tipo de evento
            </legend>
            <div className="flex flex-wrap gap-2">
              {eventOptions.map((opt) => {
                const selected = formData.eventType === opt;
                return (
                  <label
                    key={opt}
                    className={`relative cursor-pointer select-none rounded-full border px-4 py-2 text-xs transition-all duration-300 has-[:focus-visible]:outline has-[:focus-visible]:outline-1 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold active:scale-95 ${
                      selected
                        ? "border-gold bg-gold text-night"
                        : "border-gold/20 text-zinc-300 hover:border-gold/50 hover:text-foreground"
                    }`}
                  >
                    <input
                      type="radio"
                      name="eventType"
                      value={opt}
                      checked={selected}
                      onChange={() => {
                        setFormData({ ...formData, eventType: opt });
                        if (errors.eventType) setErrors({ ...errors, eventType: undefined });
                      }}
                      className="sr-only"
                    />
                    <span className="inline-flex items-center gap-1.5">
                      {selected && <Check className="size-3" strokeWidth={2.5} />}
                      {opt}
                    </span>
                  </label>
                );
              })}
            </div>
            {errors.eventType && (
              <p role="alert" className="text-xs text-rose-300">
                {errors.eventType}
              </p>
            )}
          </fieldset>

          <Field
            id="date"
            label="Data prevista"
            type="date"
            value={formData.date}
            onChange={(v) => setFormData({ ...formData, date: v })}
          />

          <div className="space-y-3">
            <label
              htmlFor="message"
              className="flex items-baseline justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70"
            >
              Mensagem
              <span className="font-normal normal-case tracking-normal tabular-nums text-zinc-600">
                {formData.message.length}/1000
              </span>
            </label>
            <textarea
              id="message"
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Conte um pouco sobre o evento, local, atmosfera desejada e qualquer detalhe importante..."
              className="w-full resize-none rounded-xl border border-gold/15 bg-white/[0.02] px-4 py-3 text-sm text-foreground transition-all placeholder:text-zinc-600 focus:border-gold/60 focus:bg-white/[0.04] focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="btn-gold group flex w-full items-center justify-center gap-3 rounded-full py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-night"
          >
            Agendar Apresentação
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </button>

          <AnimatePresence>
            {sent && (
              <motion.p
                role="status"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center gap-2 text-center text-xs text-zinc-300"
              >
                <Check className="size-4 text-gold" />
                Sua mensagem foi preparada no WhatsApp. É só enviar.
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  error,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  error?: string;
}) {
  return (
    <div className="space-y-3">
      <label
        htmlFor={id}
        className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold/70"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        maxLength={255}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`w-full rounded-xl border bg-white/[0.02] px-4 py-3 text-sm text-foreground transition-all [color-scheme:dark] placeholder:text-zinc-600 focus:bg-white/[0.04] focus:outline-none ${
          error ? "border-rose-400/60" : "border-gold/15 focus:border-gold/60"
        }`}
      />
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs text-rose-300">
          {error}
        </p>
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/10 bg-night px-6 pb-12 pt-24 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease }}
        className="mx-auto max-w-7xl"
      >
        <div className="mb-16 flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="font-heading mb-4 text-5xl italic md:text-6xl">Rebeca Astela</p>
            <p className="max-w-md text-sm font-light leading-7 text-zinc-400">
              A trilha sonora dos <span className="font-medium text-gold/80">momentos</span> que
              merecem ser <span className="font-medium text-gold/90">eternizados</span>.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-premium inline-flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold"
            >
              <Instagram className="size-4" /> Instagram
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-premium inline-flex items-center gap-2 rounded-full px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-gold"
            >
              <MessageCircle className="size-4" /> WhatsApp
            </a>
          </div>
        </div>

        <div className="mb-8 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
            © {new Date().getFullYear()} Rebeca Astela — Arte em Performance
          </p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500 transition-colors hover:text-gold"
          >
            Voltar ao topo
            <span className="flex size-9 items-center justify-center rounded-full border border-gold/20 transition-all group-hover:-translate-y-1 group-hover:border-gold/60">
              <ArrowUp className="size-3.5" />
            </span>
          </a>
        </div>
      </motion.div>
    </footer>
  );
}

function FloatingWhatsApp({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Falar pelo WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="btn-gold group fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full md:bottom-8 md:right-8"
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-gold/30 [animation-duration:2.6s]" />
          <MessageCircle className="relative size-6 text-night" strokeWidth={1.8} />
          <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-night/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-gold opacity-0 ring-1 ring-gold/20 transition-opacity duration-300 group-hover:opacity-100 md:block">
            Agendar pelo WhatsApp
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

const sectionIds = ["inicio", ...navLinks.map((l) => l.id)];

function LandingPage() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const active = useActiveSection(sectionIds);

  useMotionValueEvent(scrollY, "change", (y) => {
    setScrolled(y > 40);
    setPastHero(y > window.innerHeight * 0.85);
  });

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[90] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-xs focus:font-semibold focus:text-night"
      >
        Pular para o conteúdo
      </a>
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <main className="relative min-h-screen overflow-x-hidden bg-night text-foreground selection:bg-gold/30 selection:text-foreground">
        <Nav scrolled={scrolled} active={active} />
        <Hero />
        <Marquee />
        <About />
        <Performances />
        <Events />
        <Gallery />
        <Contact />
        <Footer />
      </main>
      <FloatingWhatsApp visible={pastHero && active !== "contato"} />
    </MotionConfig>
  );
}
