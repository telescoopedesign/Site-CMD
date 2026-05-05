import { useRef } from "react";
import { PageHeader } from "../components/PageHeader";
import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import {
  ArrowUpRight,
  Compass,
  MessageCircle,
  ClipboardCheck,
  Leaf,
  Shirt,
  MapPin,
  Music,
  Coffee,
  Sun,
} from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=2400";

const steps = [
  {
    n: "01",
    icon: Compass,
    t: "A intenção",
    short: "Antes da palavra, a pergunta. O que está te trazendo?",
    d: "Antes de qualquer mensagem, sente-se com a pergunta: o que está te trazendo até aqui? Não precisa de resposta pronta, e não precisa ser bonita. Precisa de honestidade. A casa não responde curiosidade nem urgência. Responde quem chega com clareza, mesmo que essa clareza seja a de não saber.",
    img: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    n: "02",
    icon: MessageCircle,
    t: "A primeira conversa",
    short: "Antes de agendar qualquer coisa, a gente conversa.",
    d: "Escreva à casa pelo WhatsApp ou e-mail. Você será recebido por alguém da comunidade para uma conversa, pessoalmente ou por chamada, antes de qualquer agendamento. Esse encontro não é entrevista. É escuta. É também o momento em que respondemos suas perguntas e contamos sobre o que vai acontecer.",
    img: "https://images.unsplash.com/photo-1534551767192-78b8dd45b51b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    t: "Anamnese e leitura",
    short: "Um formulário de saúde e leituras introdutórias.",
    d: "Pediremos um formulário de saúde com histórico médico, medicações em uso e contraindicações conhecidas. Indicaremos também leituras introdutórias sobre a doutrina, para que você chegue ao trabalho com algum repertório. Esse passo não é burocrático. É cuidado. O Daime exige um corpo e uma mente preparados.",
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    n: "04",
    icon: Leaf,
    t: "Preparação de dieta",
    short: "Três dias antes: leveza no prato e silêncio interno.",
    d: "Três dias antes do trabalho: alimentação leve e vegetariana, sem álcool, sem sexo, sem carnes vermelhas, sem fermentados ou alimentos muito condimentados. A dieta também é um silêncio interno: durma cedo, evite excessos, recolha-se. O corpo limpo recebe melhor, e o que não foi dito antes do trabalho costuma vir à tona durante.",
    img: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    n: "05",
    icon: Shirt,
    t: "Roupas e o que levar",
    short: "Branco para os trabalhos. Casaco, água, lanterna.",
    d: "Branco para os trabalhos oficiais — calça branca para homens, saia ou vestido branco para mulheres. Casaco para a madrugada na mata, água, lanterna pequena. Nada de eletrônicos no salão, nem perfume forte. Recomendamos sapato fechado e meia, porque a igreja é aberta e a mata vem junto.",
    img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    n: "06",
    icon: MapPin,
    t: "A chegada",
    short: "Chegue uma hora antes. Caminhe pela mata. Respire.",
    d: "Chegue ao sítio uma hora antes do trabalho começar. Caminhe pela mata, sente-se em algum canto, respire. Você será apresentado aos dirigentes da noite e a uma pessoa da casa que vai te acompanhar durante todo o trabalho. Antes de entrar no salão, há um momento de oração coletiva.",
    img: "https://images.unsplash.com/photo-1448375240586-882707db888b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    n: "07",
    icon: Music,
    t: "O trabalho",
    short: "Cantos, silêncio e contemplação. Você nunca está sozinho.",
    d: "O trabalho dura entre quatro e seis horas, com cantos coletivos, momentos de bailado e momentos de concentração em silêncio. Se precisar de algo — água, ir ao banheiro, sair para respirar — há sempre fiscais atentos. Você nunca está sozinho. O importante é se entregar ao ritmo do salão e confiar no canto.",
    img: "https://images.unsplash.com/photo-1761909546822-5f14c571b4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    n: "08",
    icon: Coffee,
    t: "O fechamento",
    short: "Café e pão simples. Conversas baixas. Recolhimento.",
    d: "Ao fim do trabalho, café e pão simples são servidos. As conversas são baixas, sem pressa. Recolha-se com o que veio. Não se discute o conteúdo do trabalho na hora — o que apareceu precisa pousar antes de virar palavra. Quem vier de longe pode descansar no sítio antes de voltar para a cidade.",
    img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
  {
    n: "09",
    icon: Sun,
    t: "Integração",
    short: "Nos dias seguintes: durma, escreva, caminhe, escute.",
    d: "Nos dias seguintes ao trabalho, durma bem, escreva o que vier, caminhe sem celular, escute. O que aconteceu na sessão é apenas um preâmbulo do que vai se desdobrar na sua vida nas semanas que seguem. Em até uma semana, retomamos contato para escutar como você está. A integração também é parte da doutrina.",
    img: "https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200",
  },
];

function TimelineStep({ s, i }: { s: typeof steps[0]; i: number }) {
  const Icon = s.icon;
  const reverse = i % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center"
    >
      {/* Image */}
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
        className={`relative overflow-hidden rounded-2xl border border-white/15 h-[320px] md:h-[440px] ${reverse ? "md:order-2" : ""}`}
      >
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] hover:scale-105"
          style={{ backgroundImage: `url(${s.img})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#041C04]/60 via-transparent to-transparent" />
        <div className="absolute top-6 left-6 glass-strong w-14 h-14 rounded-xl flex items-center justify-center">
          <Icon size={22} className="text-white" strokeWidth={1.5} />
        </div>
      </motion.div>

      {/* Content */}
      <div className={reverse ? "md:order-1 md:pr-8" : "md:pl-8"}>
        <div className="flex items-baseline gap-5 mb-5">
          <span className="text-white/40 text-sm tracking-[0.3em]" style={{ fontWeight: 500 }}>{s.n}</span>
          <span className="h-px flex-1 bg-white/10" />
        </div>
        <h3 className="text-white text-3xl md:text-4xl lg:text-5xl mb-5 leading-[1.1]" style={{ fontWeight: 600 }}>
          {s.t}
        </h3>
        <p className="text-white/80 text-lg leading-[1.5] mb-6" style={{ fontWeight: 500 }}>
          {s.short}
        </p>
        <p className="text-[#E0E0E0] leading-[1.85]">{s.d}</p>
      </div>
    </motion.div>
  );
}

export function GuiaDoVisitante() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <div className="bg-[#041C04]">
      <PageHeader
        eyebrow="03 / Guia do Visitante"
        title={<>Nove passos para a primeira visita.</>}
        intro="Receber bem é parte da doutrina. Aqui está, em ordem, o caminho que pedimos a quem chega."
        image={HERO}
      />

      {/* Steps */}
      <section className="relative py-32 px-8 lg:px-20 overflow-hidden">
        <div className="relative z-10 max-w-[1200px] mx-auto" ref={trackRef}>
          {/* Animated vertical line — desktop only */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/[0.06]" />
          <motion.div
            style={{ height: lineHeight, opacity: lineOpacity }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px"
          >
            <div className="w-full h-full bg-gradient-to-b from-transparent via-white/60 to-white/30" />
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)]" />
          </motion.div>

          <div className="space-y-24 md:space-y-40">
            {steps.map((s, i) => (
              <TimelineStep key={s.n} s={s} i={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 lg:px-20 pb-16">
        <div className="max-w-[1100px] mx-auto glass p-12 md:p-16 lg:p-20 text-center">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— Pronto para começar</p>
          <h2 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.1] max-w-3xl mx-auto mb-8" style={{ fontWeight: 600 }}>
            Pronto para dar o<br />próximo passo?
          </h2>
          <p className="text-[#E0E0E0] max-w-xl mx-auto mb-12 leading-relaxed">
            Entre em contato pelo WhatsApp. Nossa equipe vai te orientar sobre os próximos trabalhos e como iniciar o processo.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/5521989992913"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-strong px-10 py-4 text-sm text-white hover:bg-white/20 transition-all"
              style={{ fontWeight: 500 }}
            >
              Falar no WhatsApp <ArrowUpRight size={16} />
            </a>
            <Link
              to="/agenda"
              className="inline-flex items-center gap-3 px-10 py-4 text-sm text-[#E0E0E0] hover:text-white border border-white/20 rounded-2xl transition-all"
              style={{ fontWeight: 500 }}
            >
              Ver a agenda
            </Link>
          </div>
        </div>
      </section>

      {/* Quote — Padrinho Ricardo */}
      <section className="px-8 lg:px-20 pb-32 pt-8">
        <div className="max-w-[1000px] mx-auto text-center">
          <p className="text-white text-2xl md:text-4xl leading-[1.3]" style={{ fontWeight: 500 }}>
            “A sessão do Daime é apenas um preâmbulo do que você vai viver na sua vida. Não é em si início, meio e fim. É só o começo.”
          </p>
          <p className="mt-10 text-[0.72rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60">— Padrinho Ricardo</p>
        </div>
      </section>
    </div>
  );
}
