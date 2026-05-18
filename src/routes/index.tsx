import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Instagram,
  MessageCircle,
  Heart,
  Building2,
  Sparkles,
  Wine,
  PlayCircle,
  ArrowRight,
  Mail,
} from "lucide-react";

import heroPortrait from "@/assets/hero-portrait.jpg";
import aboutMic from "@/assets/about-microphone.jpg";
import perf1 from "@/assets/perf-1.jpg";
import perf2 from "@/assets/perf-2.jpg";
import perf3 from "@/assets/perf-3.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Marina Luz — Voz, Jazz & MPB | Contratação para Eventos" },
      {
        name: "description",
        content:
          "Marina Luz — cantora brasileira de Jazz e MPB. Voz cinematográfica para casamentos, eventos corporativos, bares e celebrações privadas. Contrate agora.",
      },
      { property: "og:title", content: "Marina Luz — Voz, Jazz & MPB" },
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

function Nav() {
  return (
    <nav className="fixed top-0 z-50 flex w-full items-center justify-between px-6 py-5 md:px-12 md:py-6">
      <span className="font-serif text-xl italic tracking-tight text-foreground md:text-2xl">
        Marina Luz
      </span>
      <div className="hidden gap-8 text-[10px] font-medium uppercase tracking-[0.25em] text-zinc-300 md:flex">
        <a href="#sobre" className="transition-colors hover:text-gold">Sobre</a>
        <a href="#performances" className="transition-colors hover:text-gold">Performances</a>
        <a href="#eventos" className="transition-colors hover:text-gold">Eventos</a>
        <a href="#galeria" className="transition-colors hover:text-gold">Galeria</a>
        <a href="#contato" className="transition-colors hover:text-gold">Contato</a>
      </div>
      <a
        href="#contato"
        className="rounded-full border border-gold/40 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-night md:hidden"
      >
        Contato
      </a>
    </nav>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <header
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroPortrait}
          alt="Marina Luz — retrato cinematográfico"
          width={1536}
          height={1920}
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/40 to-night/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-night/60 via-transparent to-night/40" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-[10px] font-semibold uppercase tracking-[0.5em] text-gold md:text-xs"
        >
          A nova voz do Jazz & MPB
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-serif text-6xl italic leading-none text-foreground md:text-9xl"
        >
          Marina Luz
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mx-auto mt-6 max-w-md text-sm font-light text-zinc-300 md:text-base"
        >
          Voz, presença e emoção — trilha sonora viva para os momentos que merecem
          ser eternizados.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row md:gap-4"
        >
          <a
            href="#contato"
            className="gold-glow group inline-flex items-center gap-2 bg-gold px-8 py-4 text-[11px] font-bold uppercase tracking-[0.25em] text-night transition-all duration-300 hover:bg-white"
          >
            Entrar em contato
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="glass-card flex size-12 items-center justify-center transition-colors hover:border-gold/50"
            >
              <Instagram className="size-4 text-zinc-200" />
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="glass-card flex size-12 items-center justify-center transition-colors hover:border-gold/50"
            >
              <MessageCircle className="size-4 text-zinc-200" />
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

function About() {
  return (
    <section
      id="sobre"
      className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 md:grid-cols-2 md:gap-20 md:px-12 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9 }}
        className="relative"
      >
        <img
          src={aboutMic}
          alt="Microfone vintage iluminado"
          loading="lazy"
          width={1024}
          height={1280}
          className="aspect-[4/5] w-full rounded-sm object-cover"
        />
        <div className="absolute -bottom-8 -right-8 -z-10 h-56 w-56 rounded-full bg-wine/40 blur-3xl" />
        <div className="absolute -left-6 -top-6 -z-10 h-40 w-40 rounded-full bg-gold/10 blur-3xl" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
      >
        <motion.span
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-6 block text-[10px] uppercase tracking-[0.4em] text-gold"
        >
          Sobre
        </motion.span>
        <motion.h2
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-8 font-serif text-4xl leading-tight text-balance md:text-5xl"
        >
          Elegância em cada nota,{" "}
          <span className="italic text-gold">emoção</span> em cada verso.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-6 text-base font-light leading-relaxed text-zinc-400 md:text-lg"
        >
          Marina Luz é a interpretação contemporânea dos grandes clássicos da MPB
          e do Jazz. Com presença de palco magnética e timbre íntimo, transforma
          cada apresentação em uma experiência cinematográfica — feita sob medida
          para o momento, o público e a história a ser contada.
        </motion.p>
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mb-10 text-sm font-light leading-relaxed text-zinc-500"
        >
          Influências: Gal Costa, Ella Fitzgerald, Marisa Monte, Norah Jones,
          Rosa Passos.
        </motion.p>

        <motion.ul variants={fadeUp} className="space-y-4">
          {[
            ["Estilo", "Jazz, MPB, Bossa & Pop Acústico"],
            ["Formação", "Voz, piano e trio acústico"],
            ["Regiões", "São Paulo, Rio de Janeiro & Interior"],
          ].map(([label, value]) => (
            <li
              key={label}
              className="flex items-center justify-between border-b border-white/5 pb-4 text-sm"
            >
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                {label}
              </span>
              <span className="text-zinc-200">{value}</span>
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

const performances = [
  {
    img: perf1,
    title: "Coração Vagabundo",
    label: "Live Session · Caetano Cover",
  },
  {
    img: perf2,
    title: "Fly Me To The Moon",
    label: "Studio Session · Acústico",
  },
  {
    img: perf3,
    title: "Showcase Corporativo",
    label: "Highlight · Evento Privado",
  },
];

function Performances() {
  return (
    <section id="performances" className="section-fade py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex flex-col items-start justify-between gap-4 md:mb-20 md:flex-row md:items-end"
        >
          <div>
            <span className="mb-4 block text-[10px] uppercase tracking-[0.4em] text-gold">
              Performances
            </span>
            <h2 className="font-serif text-4xl text-balance md:text-6xl">
              Assista, sinta, contrate.
            </h2>
          </div>
          <p className="max-w-sm text-sm font-light text-zinc-500">
            Registros íntimos de ensaios, sessões acústicas e momentos ao vivo
            recentes.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {performances.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              className="group cursor-pointer"
            >
              <div className="relative mb-5 aspect-[3/4] overflow-hidden rounded-sm bg-zinc-900">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={768}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/20 to-transparent" />
                <div className="absolute inset-0 bg-gold/0 transition-colors duration-500 group-hover:bg-gold/10" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <PlayCircle
                    className="size-16 text-gold drop-shadow-[0_0_20px_rgba(197,160,89,0.6)]"
                    strokeWidth={1}
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-gold">
                    {p.label}
                  </span>
                </div>
              </div>
              <h3 className="font-serif text-xl italic text-zinc-200 transition-colors group-hover:text-gold">
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
    <section id="eventos" className="bg-zinc-950 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center md:mb-20"
        >
          <span className="mb-4 block text-[10px] uppercase tracking-[0.4em] text-gold">
            Contratações
          </span>
          <h2 className="font-serif text-4xl text-balance md:text-5xl">
            A trilha sonora do{" "}
            <span className="italic text-gold">seu momento</span>.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px border border-white/5 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-zinc-950 p-10 transition-colors duration-500 hover:bg-zinc-900"
              >
                <div className="mb-8 flex size-12 items-center justify-center border border-gold/60 transition-all duration-500 group-hover:rotate-45 group-hover:border-gold">
                  <Icon
                    className="size-5 text-gold transition-transform duration-500 group-hover:-rotate-45"
                    strokeWidth={1.2}
                  />
                </div>
                <h4 className="mb-4 font-serif text-2xl">{e.title}</h4>
                <p className="text-sm font-light leading-relaxed text-zinc-500">
                  {e.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const galleryItems = [
  { img: gallery1, span: "md:col-span-2 md:row-span-2", aspect: "aspect-[4/5]" },
  { img: gallery2, span: "", aspect: "aspect-square" },
  { img: gallery4, span: "", aspect: "aspect-square" },
  { img: gallery3, span: "md:col-span-2", aspect: "aspect-[16/10]" },
  { img: gallery5, span: "", aspect: "aspect-[3/4]" },
];

function Gallery() {
  return (
    <section id="galeria" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 flex items-end justify-between md:mb-20"
        >
          <div>
            <span className="mb-4 block text-[10px] uppercase tracking-[0.4em] text-gold">
              Galeria
            </span>
            <h2 className="font-serif text-4xl text-balance md:text-6xl">
              Capítulos <span className="italic">visuais</span>.
            </h2>
          </div>
        </motion.div>

        <div className="grid auto-rows-[180px] grid-cols-2 gap-3 md:auto-rows-[220px] md:grid-cols-4 md:gap-4">
          {galleryItems.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-sm bg-zinc-900 ${g.span}`}
            >
              <img
                src={g.img}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-night/20 transition-opacity duration-500 group-hover:bg-night/0" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-gold/40" />
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
      `Olá Marina! Sou ${formData.name}.\nEvento: ${formData.eventType}\nData: ${formData.date}\n\n${formData.message}`,
    );
    window.open(`https://wa.me/5500000000000?text=${text}`, "_blank");
  };

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-night py-24 md:py-32"
    >
      <div className="absolute left-1/2 top-1/2 -z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-wine/20 blur-[120px]" />
      <div className="absolute right-0 top-1/4 -z-0 h-80 w-80 rounded-full bg-gold/5 blur-[100px]" />

      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-2 md:gap-24 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-6 block text-[10px] uppercase tracking-[0.4em] text-gold">
            Contato
          </span>
          <h2 className="mb-8 font-serif text-5xl leading-tight text-balance md:text-7xl">
            Vamos criar algo{" "}
            <span className="italic text-gold">memorável?</span>
          </h2>
          <p className="mb-12 max-w-md text-base font-light leading-relaxed text-zinc-400">
            Disponível para datas selecionadas em 2025 e 2026. Conte sobre o
            evento e retornamos com proposta personalizada em até 24h.
          </p>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition-all hover:border-gold/50 hover:bg-white/10 md:w-auto md:pr-12"
          >
            <div className="flex items-center gap-4">
              <div className="flex size-12 items-center justify-center rounded-full bg-gold/10 ring-1 ring-gold/30">
                <MessageCircle className="size-5 text-gold" strokeWidth={1.5} />
              </div>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                  Resposta rápida
                </p>
                <p className="font-medium text-zinc-100">Falar pelo WhatsApp</p>
              </div>
            </div>
            <ArrowRight className="size-4 text-gold transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass-card space-y-6 rounded-2xl p-8 md:p-10"
        >
          <Field
            label="Seu nome"
            value={formData.name}
            onChange={(v) => setFormData({ ...formData, name: v })}
            placeholder="Como devemos te chamar?"
            required
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Field
              label="Tipo de evento"
              value={formData.eventType}
              onChange={(v) => setFormData({ ...formData, eventType: v })}
              placeholder="Casamento, bar, corporativo..."
              required
            />
            <Field
              label="Data prevista"
              type="date"
              value={formData.date}
              onChange={(v) => setFormData({ ...formData, date: v })}
            />
          </div>
          <div className="space-y-2">
            <label className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              Mensagem
            </label>
            <textarea
              rows={4}
              maxLength={1000}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Conte um pouco sobre o evento, local e atmosfera desejada..."
              className="w-full resize-none border-b border-white/10 bg-transparent py-3 text-sm text-zinc-200 transition-colors placeholder:text-zinc-600 focus:border-gold focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="group flex w-full items-center justify-center gap-3 bg-gold py-5 text-[11px] font-bold uppercase tracking-[0.3em] text-night transition-all duration-500 hover:bg-white"
          >
            Enviar solicitação
            <Mail className="size-4 transition-transform group-hover:translate-x-1" />
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
    <div className="space-y-2">
      <label className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500">
        {label}
      </label>
      <input
        type={type}
        required={required}
        maxLength={255}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border-b border-white/10 bg-transparent py-3 text-sm text-zinc-200 transition-colors placeholder:text-zinc-600 focus:border-gold focus:outline-none [color-scheme:dark]"
      />
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-16 text-center md:px-12">
      <h2 className="mb-3 font-serif text-3xl italic">Marina Luz</h2>
      <p className="mb-10 text-sm italic text-zinc-500">
        A trilha sonora dos momentos que merecem ser eternizados.
      </p>
      <div className="mb-10 flex justify-center gap-8 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
        <a href="#" className="transition-colors hover:text-gold">Instagram</a>
        <a href="#" className="transition-colors hover:text-gold">YouTube</a>
        <a href="#" className="transition-colors hover:text-gold">Spotify</a>
        <a href="#" className="transition-colors hover:text-gold">WhatsApp</a>
      </div>
      <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-600">
        © {new Date().getFullYear()} Marina Luz — Arte em Performance
      </p>
    </footer>
  );
}

function LandingPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-night text-foreground selection:bg-gold/30 selection:text-night">
      <Nav />
      <Hero />
      <About />
      <Performances />
      <Events />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
