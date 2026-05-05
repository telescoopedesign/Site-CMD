import { Link } from "react-router";
import { motion } from "motion/react";
import { Plus, Minus, ArrowUpRight, MapPin, Sparkle } from "lucide-react";
import { useState, useEffect } from "react";
import heroVideo from "../../imports/Hero-video-01.mp4";
import fundoFrase from "../../imports/Fundo-Secao-Frase.png";
import aCasa03Image from "../../imports/A-Casa-03.jpg";
import oDaime02Image from "../../imports/O-Daime-02.jpg";
import guia03Image from "../../imports/Guia-03.jpg";
import agenda02Image from "../../imports/agenda-02.jpg";

const FOREST = "https://images.unsplash.com/photo-1639618650270-9909d74a92fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=2400";
const FERN = "https://images.unsplash.com/photo-1761071181789-16e0feda3c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200";
const CANDLE = "https://images.unsplash.com/photo-1761909546822-5f14c571b4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200";
const CHAPEL = "https://images.unsplash.com/photo-1606102603887-47feb5d3ffea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200";

const faqs = [
  { q: "O que é o Santo Daime?", a: "Doutrina espiritual brasileira nascida na floresta amazônica no início do século XX, com Mestre Irineu. Reúne raízes cristãs, tradições indígenas e a presença viva da floresta. O sacramento é a Ayahuasca, feita do cipó jagube e da folha chacrona." },
  { q: "O uso do Daime é legal no Brasil?", a: "Sim. Desde 1986 o uso ritual da Ayahuasca é reconhecido como prática religiosa legítima, regulamentado pelo CONAD em 2010." },
  { q: "Posso visitar sem ter experiência prévia?", a: "Sim, com cuidado e preparo. Pedimos uma conversa anterior, leitura do Guia do Visitante e o preenchimento de uma anamnese." },
  { q: "Como é um trabalho?", a: "Ritual com cantos, momentos de silêncio e contemplação, conduzido por dirigentes experientes. Acontece à noite e dura entre quatro e seis horas, em nossa igreja de madeira na floresta." },
  { q: "Quem não deve participar?", a: "Pessoas com condições cardíacas graves, em uso de antidepressivos ISRS, com histórico de psicose ou esquizofrenia, gestantes e menores de 18 anos." },
];

function FAQ({ q, a, open, onClick }: { q: string; a: string; open: boolean; onClick: () => void }) {
  return (
    <div className="glass mb-3 overflow-hidden">
      <button onClick={onClick} className="w-full px-7 py-6 flex items-center justify-between gap-6 text-left">
        <span className="text-white text-lg" style={{ fontWeight: 500 }}>{q}</span>
        <span className="text-white flex-shrink-0">{open ? <Minus size={18} /> : <Plus size={18} />}</span>
      </button>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden">
          <p className="px-7 pb-6 text-[#E0E0E0] leading-[1.75]">{a}</p>
        </motion.div>
      )}
    </div>
  );
}

function HeroParticles() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(() => {
        setMousePos({
          x: (e.clientX / window.innerWidth - 0.5) * 40,
          y: (e.clientY / window.innerHeight - 0.5) * 40,
        });
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {[1, 2, 3].map((depth, layerIndex) => (
        <motion.div 
          key={layerIndex}
          className="absolute inset-0"
          animate={{ x: -mousePos.x * depth, y: -mousePos.y * depth }}
          transition={{ type: "spring", stiffness: 70, damping: 30 }}
        >
          {Array.from({ length: 20 }).map((_, idx) => {
            const i = layerIndex * 20 + idx;
            const size = 1 + (i % 2) * 0.5;
            const left = (i * 13.7 + layerIndex * 40) % 100;
            const top = (i * 29.3 + layerIndex * 60) % 100;
            const dur = 14 + (i % 8) * 2;
            const delay = (i * 0.7) % 8;
            const drift = 30 + (i % 5) * 10;
            const initialOpacity = 0.2 + (i % 6) * 0.1;
            return (
              <motion.div
                key={i}
                className="absolute rounded-full bg-[rgba(255,225,170,0.85)]"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  boxShadow: "0 0 4px rgba(255,220,160,0.5)",
                }}
                initial={{ opacity: initialOpacity }}
                animate={{
                  y: [0, -drift, 0],
                  x: [0, drift / 2, 0],
                  opacity: [initialOpacity, 0.9, initialOpacity],
                }}
                transition={{
                  duration: dur,
                  delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </motion.div>
      ))}
    </div>
  );
}

function BentoCard({ c, i }: { c: any; i: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: i * 0.08 }}
      className={`col-span-12 ${c.span}`}
    >
      <Link 
        to={c.to} 
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group block relative overflow-hidden rounded-2xl border border-white/15 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-white/30 cursor-none"
      >
        <div className={`relative ${c.h}`}>
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-[1500ms] ease-out group-hover:scale-110 group-hover:translate-x-2 group-hover:translate-y-1 group-hover:invert-[0.1] group-hover:saturate-50 group-hover:contrast-125"
            style={{ backgroundImage: `url(${c.img})` }}
          />
          {/* Cinematic color overlay and bottom gradient */}
          <div className="absolute inset-0 bg-[#041C04]/10 mix-blend-multiply group-hover:bg-transparent transition-colors duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#041C04] via-[#041C04]/50 to-transparent opacity-85 transition-opacity duration-1000 group-hover:opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#041C04] via-[#041C04]/10 to-transparent opacity-90" />
          
          <div className="absolute inset-0 p-8 lg:p-10 flex flex-col justify-between text-white">
            <div className="flex items-center justify-between">
              <span className="text-white/70 text-[0.8rem] tracking-[0.2em]" style={{ fontWeight: 500 }}>{c.n}</span>
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl mb-2" style={{ fontWeight: 600 }}>{c.t}</h3>
              <p className="text-[#E0E0E0] max-w-sm">{c.d}</p>
            </div>
          </div>

          {/* Mouse-following Saiba mais button */}
          <motion.div
            animate={{
              x: mousePos.x - 70,
              y: mousePos.y - 20,
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0.8,
            }}
            transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
            className="absolute top-0 left-0 z-50 pointer-events-none"
          >
            <div className="glass-strong px-5 py-2.5 rounded-full flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              <span className="text-white text-[0.7rem] tracking-[0.2em] uppercase font-medium">Saiba mais</span>
              <ArrowUpRight size={14} className="text-white" />
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}

export function Home() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-[#041C04]">
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        <video
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 inset-x-0 h-[85%] md:h-[88%] w-full object-cover"
          style={{ 
            objectPosition: "right center",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 0%, black 85%, transparent 100%)"
          }}
        />

        {/* Fog/Névoa layer */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-50 z-0">
          <motion.div
            className="absolute -bottom-[20%] left-[-20%] w-[140%] h-[70%]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(160,200,160,0.15) 0%, rgba(160,200,160,0) 70%)",
              filter: "blur(80px)",
            }}
            animate={{ x: ["-3%", "3%", "-3%"], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-[10%] right-[-20%] w-[120%] h-[60%]"
            style={{
              background: "radial-gradient(ellipse at center, rgba(200,220,180,0.12) 0%, rgba(200,220,180,0) 70%)",
              filter: "blur(60px)",
            }}
            animate={{ x: ["3%", "-3%", "3%"], opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Volumetric light beams — soft golden god-rays through canopy */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-screen opacity-75 z-10">
          {/* Faixa de luz maior principal */}
          <motion.div
            className="absolute top-[-30%] h-[160%] w-[350px] md:w-[500px]"
            style={{
              left: "40%",
              transform: "rotate(-12deg)",
              background: "linear-gradient(to bottom, rgba(255,235,180,0.25) 0%, rgba(255,220,150,0.12) 50%, rgba(255,200,130,0) 100%)",
              filter: "blur(40px)",
            }}
            animate={{ opacity: [0.3, 0.85, 0.3] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          {[
            { left: "55%", delay: 0, dur: 9, rot: -8 },
            { left: "68%", delay: 2, dur: 12, rot: -12 },
            { left: "78%", delay: 4, dur: 10, rot: -6 },
            { left: "88%", delay: 1, dur: 14, rot: -10 },
          ].map((b, i) => (
            <motion.div
              key={i}
              className="absolute top-[-20%] h-[140%] w-[180px]"
              style={{
                left: b.left,
                transform: `rotate(${b.rot}deg)`,
                background:
                  "linear-gradient(to bottom, rgba(255,220,150,0.18) 0%, rgba(255,210,140,0.10) 40%, rgba(255,200,130,0) 100%)",
                filter: "blur(28px)",
              }}
              animate={{ opacity: [0.3, 0.75, 0.3] }}
              transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}
        </div>

        {/* Floating motes — pó de sol no ar */}
        <HeroParticles />

        {/* Gradiente verde sutil para leitura */}
        {/* Sombra de 60% para manter 40% da visibilidade do vídeo */}
        <div className="absolute inset-0 pointer-events-none bg-[#041C04]/60" />
        <div className="relative z-10 h-full w-full px-8 lg:px-20">
          <div className="max-w-[1200px] mx-auto h-full flex flex-col items-center justify-center text-center pb-24">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.15 }}
            className="text-[3.5rem] sm:text-[5rem] lg:text-[7.5rem] leading-[0.95] max-w-4xl mx-auto bg-gradient-to-br from-white to-[#A5D6A7] bg-clip-text text-transparent drop-shadow-[0_12px_60px_rgba(0,0,0,1)]"
            style={{ fontWeight: 700, letterSpacing: "-0.03em" }}
          >
            Casa de<br />Maria Damião
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[1.05rem] md:text-[1.2rem] uppercase tracking-[0.15em] font-medium text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] mt-10 flex items-center justify-center flex-wrap gap-x-4 gap-y-2"
          >
            <span>Igreja de Santo Daime &middot; Centro Espírita Universalista</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-4 md:gap-6"
          >
            <Link
              to="/contato"
              className="glass-strong px-12 py-3.5 text-sm md:text-base text-white hover:bg-white/15 transition-all flex items-center gap-2"
              style={{ fontWeight: 500 }}
            >
              Fale conosco <ArrowUpRight size={16} />
            </Link>
            <Link
              to="/o-daime"
              className="px-12 py-3.5 text-sm md:text-base text-[#E0E0E0] hover:text-white border border-white/20 rounded-2xl transition-all"
              style={{ fontWeight: 500 }}
            >
              O que é o Daime
            </Link>
          </motion.div>
        </div>
      </div>

        {/* Hero corners — desde / adentre */}
        <div className="absolute inset-x-0 bottom-32 md:bottom-36 z-10 pointer-events-none px-8 lg:px-20">
          <div className="max-w-[1200px] mx-auto flex justify-between items-end">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="text-[#E0E0E0] text-[0.85rem] uppercase tracking-[0.3em] pointer-events-auto"
            >
              <span>Desde 1998</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 1 }}
              className="flex items-center gap-3 text-[#E0E0E0] text-[0.85rem] uppercase tracking-[0.3em] pointer-events-auto transform translate-x-4 md:translate-x-12"
            >
              <span>Adentre</span>
              <motion.span
                animate={{ scaleX: [1, 1.6, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                className="block w-6 h-px bg-white origin-left"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom band */}
        <div className="absolute left-0 right-0 bottom-0 z-10 border-y border-white/10 bg-[#041C04]/80 backdrop-blur-md">
          <div className="px-8 lg:px-20 py-5 md:py-6 max-w-[1200px] mx-auto flex items-center justify-center gap-5 md:gap-8">
            <Sparkle size={13} className="text-white/70 flex-shrink-0" strokeWidth={1.4} fill="currentColor" />
            <p className="text-white text-lg md:text-xl uppercase tracking-[0.25em] text-center" style={{ fontWeight: 300 }}>
              Uma casa espiritual aberta a todos os caminhos.
            </p>
            <Sparkle size={13} className="text-white/70 flex-shrink-0" strokeWidth={1.4} fill="currentColor" />
          </div>
        </div>
      </section>

      {/* Intro — editorial */}
      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— 01 / Bem-vindo</p>
            <h2 className="text-white text-4xl lg:text-5xl leading-[1.1]" style={{ fontWeight: 600 }}>
              Há vinte e oito anos numa clareira da Mata Atlântica.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-6 text-[#E0E0E0] text-lg leading-[1.85]">
            <p>A Casa de Maria Damião abre suas portas em uma clareira da Mata Atlântica, em Vargem Grande, há mais de duas décadas. É um lugar de cantos, de respiração funda, e do encontro entre pessoas que caminham no Santo Daime.</p>
            <p>Não somos um retiro, nem um centro turístico. Somos uma comunidade pequena, atenta, enraizada, que recebe visitantes com cuidado, leitura e tempo.</p>
            <p>Nossa raiz é a doutrina do Santo Daime, mas a casa não se restringe a ela. Cultivamos pontes com diversas tradições e formas de conhecimento espiritual, sempre que o caminho assim convida.</p>
          </div>
        </div>
      </section>

      {/* Pillars — glass */}
      <section className="px-8 lg:px-20 pb-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { kw: "Doutrina", t: "Cristã, indígena, viva.", b: "Hinários cantados há um século, recebidos por mestres da floresta. Aqui se reza no canto." },
            { kw: "Floresta", t: "A própria igreja respira.", b: "Mata Atlântica em volta da casa. O som das cigarras, o vento na madeira, tudo entra no trabalho." },
            { kw: "Cuidado", t: "Recebemos com tempo.", b: "Conversa antes, presença durante, escuta depois. Ninguém atravessa um trabalho sozinho." },
          ].map((c, i) => (
            <motion.div
              key={c.kw}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="glass p-10 hover-bob cursor-default"
            >
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-8">— 0{i + 2} {c.kw}</p>
              <h3 className="text-white text-2xl mb-4" style={{ fontWeight: 600 }}>{c.t}</h3>
              <p className="text-[#E0E0E0] leading-[1.8]">{c.b}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${fundoFrase})` }} />
        {/* Subtle overlay to ensure the image isn't too blown out */}
        <div className="absolute inset-0 bg-[#041C04]/20" />
        
        <div className="relative z-10 w-full max-w-[1000px] mx-auto">
          <div className="backdrop-blur-xl bg-black/40 border border-white/10 rounded-[2rem] p-10 md:p-16 lg:p-20 text-center shadow-2xl">
            <p className="text-[0.75rem] md:text-[0.85rem] uppercase tracking-[0.4em] text-[#E0E0E0]/80 mb-6 md:mb-8 flex items-center justify-center gap-4">
              <span className="w-4 h-[1px] bg-[#E0E0E0]/40"></span>
              NO CORAÇÃO DA FLORESTA
              <span className="w-4 h-[1px] bg-[#E0E0E0]/40"></span>
            </p>
            <p className="text-white text-2xl md:text-4xl lg:text-[2.75rem] leading-[1.3] md:leading-[1.4] max-w-4xl mx-auto" style={{ fontWeight: 500 }}>
              O lugar não foi construído sobre a mata. <span style={{ fontWeight: 800 }}>Ele foi acolhido por ela.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-4">— Caminhos</p>
              <h2 className="text-white text-4xl lg:text-5xl" style={{ fontWeight: 600 }}>Por onde começar.</h2>
            </div>
            <p className="text-[#E0E0E0] max-w-md leading-relaxed">Quatro portas para quem chega. Vá pela ordem, ou pela que estiver mais aberta hoje.</p>
          </div>

          <div className="grid grid-cols-12 gap-5">
            {[
              { n: "I", t: "O Daime", d: "A doutrina e a medicina.", to: "/o-daime", img: oDaime02Image, span: "md:col-span-7", h: "h-[320px]" },
              { n: "II", t: "Guia do Visitante", d: "Nove passos para a primeira visita.", to: "/guia-do-visitante", img: guia03Image, span: "md:col-span-5", h: "h-[320px]" },
              { n: "III", t: "Agenda", d: "Próximos trabalhos e calendário.", to: "/agenda", img: agenda02Image, span: "md:col-span-5", h: "h-[320px]" },
              { n: "IV", t: "A Casa", d: "Nossa história, a comunidade e o lugar.", to: "/a-casa", img: aCasa03Image, span: "md:col-span-7", h: "h-[320px]" },
            ].map((c, i) => (
              <BentoCard key={c.t} c={c} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-[1100px] mx-auto grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 md:col-span-4">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— Perguntas</p>
            <h2 className="text-white text-4xl lg:text-5xl leading-[1.1]" style={{ fontWeight: 600 }}>
              O que costumam perguntar antes de chegar.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8">
            {faqs.map((f, i) => (
              <FAQ key={i} q={f.q} a={f.a} open={open === i} onClick={() => setOpen(open === i ? null : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-20 pb-32">
        <div className="max-w-[1200px] mx-auto glass p-16 lg:p-24 text-center">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-8">— Visitar</p>
            <h2 className="text-white text-4xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto mb-8" style={{ fontWeight: 600 }}>
              Se sentir que é hora, escreva.
            </h2>
            <p className="text-[#E0E0E0] max-w-xl mx-auto mb-12 leading-relaxed">
              Toda visita começa com uma conversa. Conte um pouco de você. Respondemos pessoalmente.
            </p>
            <Link
              to="/contato"
              className="inline-flex items-center gap-3 glass-strong px-10 py-4 text-sm text-white hover:bg-white/20 transition-all"
              style={{ fontWeight: 500 }}
            >
              Fale conosco <ArrowUpRight size={16} />
            </Link>
          </div>
      </section>

      {/* Localização — full-bleed final section */}
      <section className="relative">
        <div className="px-8 lg:px-20 pb-12">
          <div className="max-w-[1200px] mx-auto flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-4">— Onde fica</p>
              <h2 className="text-white text-4xl lg:text-5xl max-w-2xl leading-[1.1]" style={{ fontWeight: 600 }}>
                Mata Atlântica, Vargem Grande.
              </h2>
            </div>
            <div className="max-w-md">
              <div className="flex items-start gap-4 text-[#E0E0E0]">
                <MapPin className="text-white flex-shrink-0 mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <p className="text-white" style={{ fontWeight: 500 }}>Estr. do Morgado, 2000</p>
                  <p className="text-sm leading-relaxed">Vargem Grande, Rio de Janeiro, RJ — 22785-550</p>
                  <p className="text-[#E0E0E0]/70 text-xs mt-3 leading-relaxed">
                    Cerca de 40 minutos da Barra da Tijuca, em meio ao maciço da Pedra Branca.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Estr.+do+Morgado,+2000,+Vargem+Grande,+Rio+de+Janeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 glass-strong px-5 py-2.5 text-xs text-white hover:bg-white/20 transition-all"
                  style={{ fontWeight: 500 }}
                >
                  Abrir no mapa <ArrowUpRight size={13} />
                </a>
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs text-[#E0E0E0] hover:text-white border border-white/20 rounded-2xl transition-all"
                  style={{ fontWeight: 500 }}
                >
                  Como chegar
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-[280px] md:h-[340px] border-t border-white/10">
          <iframe
            title="Localização Casa de Maria Damião"
            src="https://maps.google.com/maps?q=Estrada%20do%20Morgado%202000%2C%20Rio%20de%20Janeiro&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 mix-blend-multiply bg-[#041C04]/30" />
        </div>
      </section>
    </div>
  );
}
