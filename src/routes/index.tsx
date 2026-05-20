import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState, type RefObject } from "react";
import {
  Instagram,
  MessageCircle,
  Heart,
  Building2,
  Sparkles,
  Wine,
  PlayCircle,
  ArrowRight,
} from "lucide-react";

import rebeca1 from "@/assets/rebeca1.jpg";
import rebeca3 from "@/assets/rebeca3.jpg";
import rebeca4 from "@/assets/rebeca4.jpg";
import rebeca5 from "@/assets/rebeca5.jpg";
import rebeca6 from "@/assets/rebeca6.jpg";
import rebeca8 from "@/assets/rebeca8.jpg";import rebeca9 from "@/assets/rebeca9.jpg";import music1 from "@/assets/music1.mp4";
import music2 from "@/assets/music2.mp4";
import music3 from "@/assets/music3.mp4";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rebeca Castelo — Cantora | Contratação para Eventos" },
      {
        name: "description",
        content:
          "Rebeca Castelo — cantora brasileira de Jazz e MPB. Voz cinematográfica para casamentos, eventos corporativos, bares e celebrações privadas. Contrate agora.",
      },
      { property: "og:title", content: "Rebeca Castelo — Cantora" },
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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Nav({ navOpacity }: { navOpacity?: MotionValue<number> }) {
  return (
    <motion.nav
      style={{ opacity: navOpacity }}
      className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-12 md:py-6"
    >
      <span className="font-serif text-gold italic tracking-tight text-foreground md:text-2xl">
        Rebeca Castelo
      </span>
      <div className="hidden gap-8 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-300 md:flex">
        <a href="#sobre" className="relative overflow-hidden transition-all duration-300 hover:text-gold group">
          Sobre
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#performances" className="relative overflow-hidden transition-all duration-300 hover:text-gold group">
          Performances
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#eventos" className="relative overflow-hidden transition-all duration-300 hover:text-gold group">
          Eventos
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#galeria" className="relative overflow-hidden transition-all duration-300 hover:text-gold group">
          Galeria
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
        </a>
        <a href="#contato" className="relative overflow-hidden transition-all duration-300 hover:text-gold group">
          Contato
          <span className="absolute bottom-0 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
      <a
        href="#contato"
        className="rounded-full border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-night md:hidden"
      >
        Contato
      </a>
    </motion.nav>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <img
          src={rebeca1}
          alt="Rebeca Castelo — retrato cinematográfico"
          width={1536}
          height={1920}
          className="h-full w-full object-cover object-[center_40%] opacity-85"
        />
        {/* Glow backdrop cinematográfico */}
        <div className="absolute -inset-32 z-0 rounded-full bg-wine/20 blur-3xl" />
        {/* Gradientes cinematográficos premium */}
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/70 via-transparent to-night/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/10 via-transparent to-night/40" />
      </motion.div>

      <motion.div
        style={{ opacity, y: contentY }}
        className="relative z-10 px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mb-6 text-[9px] font-semibold uppercase tracking-[0.6em] text-gold md:text-[10px] letter-spacing"
        >
          A Nova Voz do Nordeste
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.35 }}
          className="font-seriferi text-7xl italic leading-tight text-foreground md:text-10xl font-heading-bold drop-shadow-xl"
        >
          Rebeca Castelo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.65 }}
          className="mx-auto mt-8 max-w-2xl text-sm font-light leading-relaxed text-zinc-300 md:text-lg text-premium"
        >
          <span className="text-foreground font-medium">Voz</span>, presença e
          <span className="text-gold/90 font-medium"> emoção</span> — trilha sonora viva para os
          <span className="text-gold/80 font-medium"> momentos</span> que merecem ser eternizados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-12 flex flex-col items-center justify-center gap-4 md:flex-row md:gap-5"
        >
          <a
            href="#contato"
            className="btn-gold group inline-flex items-center gap-3 px-10 py-4 text-[10px] font-bold uppercase tracking-[0.35em] text-night transition-all duration-500 hover:shadow-xl"
          >
            Solicitar Orçamento
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-2" />
          </a>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/rebeca.castelob/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="group flex size-12 items-center justify-center overflow-hidden transition-all duration-500 ease-out hover:scale-110 btn-premium"
            >
              <Instagram className="size-5 text-gold/80 transition-all duration-500 group-hover:text-white" />
            </a>
            <a
              href="https://wa.me/5583996801089"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="group flex size-12 items-center justify-center overflow-hidden transition-all duration-500 ease-out hover:scale-110 btn-premium"
            >
              <MessageCircle className="size-5 text-gold/80 transition-all duration-500 group-hover:text-white" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-px animate-pulse bg-gradient-to-b from-transparent via-gold to-transparent" />
      </motion.div>
    </header>
  );
}

function About({ sectionRef }: { sectionRef?: RefObject<HTMLElement | null> }) {
  return (
    <section
      ref={sectionRef}
      id="sobre"
      className="relative section-fade-alt py-32 md:py-48 noise"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-24 px-6 md:grid-cols-2 md:gap-32 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <img
            src={rebeca3}
            alt="Microfone vintage iluminado"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-[4/5] w-full rounded-2xl opacity-95 object-cover shadow-2xl shadow-wine/40 transition-transform duration-700 hover:scale-105"
          />
          {/* Glow cinematãfico atrás da imagem */}
          <div className="absolute -bottom-12 -right-12 -z-10 h-80 w-80 rounded-full bg-wine/30 blur-3xl" />
          <div className="absolute -left-8 -top-8 -z-10 h-48 w-48 rounded-full bg-gold/15 blur-2xl" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.12 }}
        >
          <motion.span
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-8 block text-[8px] uppercase tracking-[0.6em] text-gold/90 font-semibold"
          >
            Sobre Rebeca
          </motion.span>
          <motion.h2
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mb-10 max-w-3xl font-serif text-5xl leading-tight text-balance md:text-6xl font-heading drop-shadow-lg"
          >
            Elegância em cada <span className="italic text-gold/90">nota</span>,{" "}
            <span className="italic text-gold/90">emoção</span> em cada verso.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mb-8 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg text-premium"
          >
            <span className="font-medium text-foreground">Rebeca Castelo</span> é a interpretação contemporânea dos
            <span className="text-gold/90 font-medium"> grandes clássicos</span> da MPB e do Jazz. Com presença de
            <span className="text-gold/80 font-medium"> palco magnética</span> e
            <span className="text-gold/90 font-medium"> timbre íntimo</span>, transforma cada apresentação em uma
            experiência <span className="text-gold/80 font-medium">cinematográfica</span> — feita sob medida para o momento, o
            público e a história a ser contada.
          </motion.p>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8 }}
            className="mb-14 max-w-2xl text-sm leading-7 text-zinc-400 font-light"
          >
            <span className="text-gold/70 font-medium">Influências:</span> Gal Costa, Elis Regina, Vanessa da Mata, Jessie J, Whitney Houston, Céline Dion.
          </motion.p>

          <motion.ul variants={fadeUp} className="space-y-6">
            {[
              ["Estilo", "Versatilidade musical, interpretando diversos estilos de acordo com o evento e solicitação do contratante."],
              ["Especialidade", "Cantora para eventos e performances intimistas"],
              ["Regiões", "Campina Grande - PB"],
            ].map(([label, value]) => (
              <li
                key={label}
                className="flex flex-col gap-4 border-b border-gold/10 pb-6 text-sm md:grid md:grid-cols-[auto_1fr] md:gap-8 md:items-center"
              >
                <span className="text-xs uppercase tracking-[0.4em] text-gold/70 font-semibold whitespace-nowrap">
                  {label}
                </span>
                <span className="max-w-lg text-zinc-300 leading-7 font-light">{value}</span>
              </li>
            ))}
          </motion.ul>
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

function Performances() {
  return (
    <section id="performances" className="section-fade py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-start justify-between gap-6 md:mb-28 md:flex-row md:items-end"
        >
          <div>
            <span className="mb-5 block text-[8px] uppercase tracking-[0.6em] text-gold/90 font-semibold">
              Performances
            </span>
            <h2 className="font-serif text-5xl leading-tight text-balance md:text-7xl font-heading drop-shadow-lg">
              Voz &
              <span className="italic text-gold/90"> Emoção</span>{" "}
              
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 font-light text-zinc-400">
            Registros de ensaios, sessões acústicas e momentos ao vivo recentes.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {performances.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-xl bg-zinc-950">
                {p.src ? (
                  <video
                    src={p.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={rebeca8}
                    alt={p.title}
                    loading="lazy"
                    width={768}
                    height={1024}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-night/95 via-night/30 to-transparent" />
                <div className="absolute inset-0 pointer-events-none bg-gold/0 transition-colors duration-500 group-hover:bg-gold/15" />
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <PlayCircle
                    className="size-20 text-gold drop-shadow-[0_0_30px_rgba(197,160,89,0.5)] transition-transform duration-500 group-hover:scale-110"
                    strokeWidth={1}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-night to-transparent p-8">
                  <span className="text-[8px] uppercase tracking-[0.35em] text-gold/90 font-semibold">
                    {p.label}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-2xl italic leading-tight text-zinc-200 transition-colors duration-300 group-hover:text-gold/90">
                {p.title}
              </h3>
            </motion.div>
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
    <section id="eventos" className="section-fade-alt py-32 md:py-48 noise">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center md:mb-28"
        >
          <span className="mb-5 block text-[8px] uppercase tracking-[0.6em] text-gold/90 font-semibold">
            Contratações
          </span>
          <h2 className="font-serif text-5xl leading-tight text-balance md:text-7xl font-heading drop-shadow-lg">
            A trilha sonora do{" "}
            <span className="italic text-gold/90">seu momento</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px border border-gold/15 bg-gradient-to-b from-gold/5 to-gold/0 md:grid-cols-2 lg:grid-cols-4 rounded-xl overflow-hidden">
          {eventTypes.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative bg-gradient-to-br from-zinc-900/80 to-zinc-950 p-10 md:p-12 transition-all duration-500 hover:from-zinc-800/90 hover:to-zinc-900 border-b border-r border-gold/10 last:border-b-0 lg:last:border-b lg:last:border-r-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-lg" />
                <div className="relative z-10">
                  <div className="mb-8 flex size-14 items-center justify-center border border-gold/40 transition-all duration-500 group-hover:scale-110 group-hover:border-gold/80 group-hover:shadow-lg group-hover:shadow-gold/20 rounded-lg">
                    <Icon
                      className="size-6 text-gold/80 transition-all duration-500 group-hover:text-gold"
                      strokeWidth={1.2}
                    />
                  </div>
                  <h4 className="mb-4 font-serif text-2xl leading-tight font-heading transition-colors duration-300">{e.title}</h4>
                  <p className="text-sm leading-7 font-light text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">
                    {e.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const galleryItems = [
  { img: rebeca6, span: "md:col-span-2 md:row-span-2", aspect: "aspect-[4/5]" },
  { img: rebeca4, span: "", aspect: "aspect-square" },
  { img: rebeca5, span: "", aspect: "aspect-square" },
  { img: rebeca8, span: "md:col-span-2", aspect: "aspect-[20/10]", objectPosition: "object-[center_30%]" },
];

function Gallery() {
  return (
    <section id="galeria" className="section-fade py-32 md:py-48">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex items-end justify-between md:mb-28"
        >
          <div>
            <span className="mb-5 block text-[8px] uppercase tracking-[0.6em] text-gold/90 font-semibold">
              Galeria
            </span>
            <h2 className="font-serif text-5xl leading-tight text-balance md:text-7xl font-heading drop-shadow-lg">
              Capítulos{" "}
              <span className="italic text-gold/90">visuais</span>.
            </h2>
          </div>
        </motion.div>

        <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[260px] md:grid-cols-4 md:gap-5">
          {galleryItems.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-xl bg-zinc-900 ${g.span}`}
            >
              <img
                src={g.img}
                alt=""
                loading="lazy"
                className={`h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-120 ${g.objectPosition || ''}`}
              />
              <div className="absolute inset-0 bg-night/25 transition-opacity duration-500 group-hover:bg-night/0" />
              <div className="absolute inset-0 ring-1 ring-inset ring-gold/0 transition-all duration-500 group-hover:ring-gold/40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    eventType: "",
    date: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá Rebeca! Sou ${formData.name}.\nEvento: ${formData.eventType}\nData: ${formData.date}\n\n${formData.message}`,
    );
    window.open(`https://wa.me/5583996801089?text=${text}`, "_blank");
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden section-fade-alt py-32 md:py-48"
      style={{
        backgroundImage: `url(${rebeca9})`,
        backgroundColor: "rgba(8, 8, 8, 0.75)",
        backgroundSize: "cover",
        backgroundPosition: "center 25%",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-night/80" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-night/95 via-night/50 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-night/70 via-transparent to-night/70" />
      {/* Backdrop cinematográfico com múltiplas luzes desfocadas */}
      <div className="absolute left-1/4 top-1/3 -z-0 h-96 w-96 rounded-full bg-wine/25 blur-[120px]" />
      <div className="absolute right-1/4 top-1/4 -z-0 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 -z-0 h-96 w-96 rounded-full bg-wine/15 blur-[140px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-20 px-6 md:grid-cols-2 md:gap-32 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          <span className="mb-8 block text-[8px] uppercase tracking-[0.6em] text-gold/90 font-semibold">
            Contato & Agendamento
          </span>
          <h2 className="mb-10 font-serif text-6xl leading-tight text-balance md:text-7xl font-heading drop-shadow-lg">
            Vamos criar algo{" "}
            <span className="italic text-gold/90">memorável?</span>
          </h2>
          <p className="mb-14 max-w-md text-base leading-8 font-light text-zinc-400">
            Disponível de segunda a domingo para agendamentos. Conte sobre o
            evento e retornamos com a resposta em até 24h.
          </p>

          <a
            href="https://wa.me/5583996801089"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-between gap-5 glass-card-premium rounded-2xl p-6 md:w-auto md:pr-14 hover:border-gold/50 hover:bg-white/8"
          >
            <div className="flex items-center gap-5">
              <div className="flex size-14 items-center justify-center rounded-full bg-gold/15 ring-1 ring-gold/40 group-hover:bg-gold/20 group-hover:ring-gold/60 transition-all duration-300">
                <MessageCircle className="size-6 text-gold/90 group-hover:text-gold transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="text-[9px] uppercase tracking-[0.4em] text-gold/70 font-semibold">
                  Resposta Rápida
                </p>
                <p className="font-medium text-foreground group-hover:text-gold/90 transition-colors duration-300">Falar pelo WhatsApp</p>
              </div>
            </div>
            <ArrowRight className="size-4 text-gold/80 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="glass-card-premium space-y-8 rounded-2xl p-10 md:p-12 border border-gold/15"
        >
          <Field
            label="Seu nome completo"
            value={formData.name}
            onChange={(v) => setFormData({ ...formData, name: v })}
            placeholder="Como devemos te chamar?"
            required
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Field
              label="Tipo de evento"
              value={formData.eventType}
              onChange={(v) => setFormData({ ...formData, eventType: v })}
              placeholder="Casamento, corporativo, bar..."
              required
            />
            <Field
              label="Data prevista"
              type="date"
              value={formData.date}
              onChange={(v) => setFormData({ ...formData, date: v })}
            />
          </div>
          <div className="space-y-3">
            <label className="block text-[9px] uppercase tracking-[0.4em] text-gold/70 font-semibold">
              Mensagem
            </label>
            <textarea
              rows={5}
              maxLength={1000}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Conte um pouco sobre o evento, local, atmosfera desejada e qualquer detalhe importante..."
              className="w-full resize-none border-b border-gold/20 bg-transparent py-3 text-sm text-foreground transition-colors placeholder:text-zinc-600 focus:border-gold/50 focus:outline-none focus:bg-white/5 rounded-lg px-4 py-3"
            />
          </div>
          <button
            type="submit"
            className="btn-gold group flex w-full items-center justify-center gap-3 py-5 text-[10px] font-bold uppercase tracking-[0.35em] text-night transition-all duration-500 rounded-lg hover:shadow-2xl"
          >
            Agendar Apresentação
          </button>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div className="space-y-3">
      <label className="block text-[9px] uppercase tracking-[0.4em] text-gold/70 font-semibold">
        {label}
      </label>
      <input
        type={type}
        required={required}
        maxLength={255}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b border-gold/20 bg-transparent py-3 text-sm text-foreground transition-all placeholder:text-zinc-600 focus:border-gold/50 focus:outline-none focus:bg-white/5 rounded-lg px-4 py-3 [color-scheme:dark]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gold/10 bg-gradient-to-b from-night via-night to-night/95 px-6 py-20 text-center md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="mb-4 font-serif text-4xl italic tracking-tight font-heading drop-shadow-lg">Rebeca Castelo</h2>
        <p className="mb-12 text-sm leading-7 text-zinc-400 font-light max-w-2xl mx-auto">
          A trilha sonora dos <span className="text-gold/80 font-medium">momentos</span> que merecem ser
          <span className="text-gold/90 font-medium"> eternizados</span>.
        </p>
        <div className="mb-12 flex flex-wrap justify-center gap-8 text-[9px] uppercase tracking-[0.35em] text-gold/70 font-semibold">
          <a href="https://www.instagram.com/rebeca.castelob/" target="_blank" rel="noreferrer" className="transition-all duration-300 hover:text-gold">Instagram</a>
          <a href="#" className="transition-all duration-300 hover:text-gold">YouTube</a>
          <a href="#" className="transition-all duration-300 hover:text-gold">Spotify</a>
          <a href="https://wa.me/5583996801089" target="_blank" rel="noreferrer" className="transition-all duration-300 hover:text-gold">WhatsApp</a>
        </div>
        <div className="h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent mb-8" />
        <p className="text-[9px] uppercase tracking-[0.35em] text-zinc-600 font-semibold">
          © {new Date().getFullYear()} Rebeca Castelo — Arte em Performance
        </p>
      </motion.div>
    </footer>
  );
}

function LandingPage() {
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"],
  });
  const navOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-night text-foreground selection:bg-gold/30 selection:text-night">
      <Nav navOpacity={navOpacity} />
      <Hero />
      <About sectionRef={aboutRef} />
      <Performances />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
