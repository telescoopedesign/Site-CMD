import { PageHeader } from "../components/PageHeader";
import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowUpRight, Calendar, Clock, MapPin } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1750350436036-fd8aaa2e027d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=2400";
const FEATURED_IMG = "https://images.unsplash.com/photo-1761909546822-5f14c571b4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600";

const featured = {
  date: "10 MAI 2026",
  weekday: "Domingo",
  time: "20h às 00h",
  title: "Concentração de Maio",
  category: "Doutrina",
  type: "Concentração",
  description:
    "Trabalho de cura da casa. Noite de hinos, silêncio e contemplação, conduzida pelos dirigentes da Casa de Maria Damião. Aberto a fardados e visitantes recebidos previamente em conversa.",
  meta: "Salão da Casa, Vargem Grande",
  image: FEATURED_IMG,
};

const upcoming = [
  { date: "17 MAI", weekday: "Domingo", title: "Hinário do Mestre Irineu", time: "20h às 06h", category: "Doutrina", type: "Hinário" },
  { date: "06 JUN", weekday: "Sábado", title: "Estrela", time: "20h às 02h", category: "Doutrina", type: "Concentração" },
  { date: "14 JUN", weekday: "Domingo", title: "Círculo na Floresta", time: "16h às 20h", category: "Livre", type: "Círculo" },
  { date: "21 JUN", weekday: "Domingo", title: "São João, Hinário", time: "18h às 04h", category: "Doutrina", type: "Hinário" },
  { date: "12 JUL", weekday: "Domingo", title: "Concentração", time: "20h às 00h", category: "Doutrina", type: "Concentração" },
];

const categoryStyle = (c: string) =>
  c === "Doutrina"
    ? "bg-white/10 text-white border-white/20"
    : "bg-transparent text-[#E0E0E0] border-white/15";

export function Agenda() {
  return (
    <div className="bg-[#041C04]">
      <PageHeader
        eyebrow="04 / Agenda"
        title={<>Próximos trabalhos.</>}
        intro="Os trabalhos seguem o calendário tradicional do Santo Daime. Visitantes participam mediante conversa prévia."
        image={HERO}
      />

      {/* FEATURED — próximo trabalho */}
      <section className="px-8 lg:px-20 pt-24 pb-16">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]">Próximo trabalho</p>
          </div>

          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-0"
          >
            {/* Image */}
            <div className="md:col-span-6 relative h-[320px] md:h-auto min-h-[420px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${featured.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#041C04]/70 via-transparent to-transparent" />
              <div className="absolute top-6 left-6 glass-strong px-4 py-2 text-xs uppercase tracking-[0.25em] text-white">
                {featured.type}
              </div>
              <div className="absolute bottom-6 left-6 right-6 md:hidden">
                <p className="text-white text-4xl leading-none" style={{ fontWeight: 600 }}>
                  {featured.date}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-6 p-8 md:p-12 flex flex-col justify-between gap-8">
              <div>
                <div className="hidden md:flex items-baseline gap-4 mb-6">
                  <p className="text-white text-5xl lg:text-6xl leading-none" style={{ fontWeight: 600 }}>
                    {featured.date}
                  </p>
                  <p className="text-[#E0E0E0] text-sm uppercase tracking-[0.25em]">{featured.weekday}</p>
                </div>

                <h2 className="text-white text-3xl lg:text-4xl mb-5 leading-[1.15]" style={{ fontWeight: 600 }}>
                  {featured.title}
                </h2>
                <p className="text-[#E0E0E0] leading-[1.8] mb-8">{featured.description}</p>

                <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#E0E0E0]">
                  <span className="flex items-center gap-2"><Clock size={14} /> {featured.time}</span>
                  <span className="flex items-center gap-2"><MapPin size={14} /> {featured.meta}</span>
                  <span className="flex items-center gap-2"><Calendar size={14} /> {featured.category}</span>
                </div>
              </div>

              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-3 glass-strong px-8 py-4 text-sm text-white hover:bg-white/20 transition-all w-full md:w-fit"
                style={{ fontWeight: 500 }}
              >
                Solicitar visita <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.article>
        </div>
      </section>

      {/* UPCOMING — lista discreta */}
      <section className="px-8 lg:px-20 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/50 mb-3">Calendário</p>
              <h2 className="text-[#E0E0E0] text-2xl lg:text-3xl" style={{ fontWeight: 500 }}>
                Próximos trabalhos previstos
              </h2>
            </div>
            <p className="text-xs text-[#E0E0E0]/50 max-w-sm leading-relaxed">
              Datas sujeitas ao calendário ritual da casa. Confirmação oficial sempre próxima do trabalho.
            </p>
          </div>

          <div className="space-y-2">
            {upcoming.map((e, i) => (
              <motion.div
                key={e.date + e.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="grid grid-cols-12 gap-4 items-center py-5 px-5 border-b border-white/[0.06] hover:bg-white/[0.03] rounded-lg transition-colors"
              >
                <div className="col-span-4 md:col-span-2">
                  <p className="text-[#E0E0E0] text-base" style={{ fontWeight: 500 }}>{e.date}</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#E0E0E0]/40 mt-0.5">{e.weekday}</p>
                </div>
                <div className="col-span-8 md:col-span-5">
                  <p className="text-[#E0E0E0]" style={{ fontWeight: 500 }}>{e.title}</p>
                </div>
                <div className="col-span-6 md:col-span-2 hidden md:block">
                  <span
                    className={`inline-block text-[10px] uppercase tracking-[0.2em] px-3 py-1 rounded-full border ${categoryStyle(e.category)}`}
                  >
                    {e.type}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-3 text-right text-xs text-[#E0E0E0]/60">
                  {e.time}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TIPOS DE TRABALHO */}
      <section className="px-8 lg:px-20 pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-4">Tipos de trabalho</p>
            <h2 className="text-white text-3xl lg:text-4xl max-w-2xl leading-[1.2]" style={{ fontWeight: 600 }}>
              O que acontece na casa.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* 01 — Doutrina */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass p-10 flex flex-col"
            >
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— 01 / Dentro da doutrina</p>
              <h3 className="text-white text-2xl lg:text-3xl mb-6" style={{ fontWeight: 600 }}>
                Trabalhos da Doutrina do Daime
              </h3>
              <p className="text-[#E0E0E0] leading-[1.8] mb-8 flex-1">
                Conduzidos por dirigentes fardados, seguem o calendário ritual tradicional. Acontecem em geral à noite, mas alguns se estendem pela madrugada e outros começam ao fim da tarde, conforme o tipo de trabalho.
              </p>
              <ul className="space-y-2.5">
                {[
                  ["Concentração", "Cura, silêncio e hinos."],
                  ["Hinário", "Hinários do Mestre Irineu, Padrinho Sebastião e da Casa."],
                  ["Estrela", "Trabalho de força em datas específicas."],
                  ["Missa", "Para os que partiram."],
                ].map(([t, d]) => (
                  <li key={t} className="flex flex-col">
                    <span className="text-white text-sm" style={{ fontWeight: 500 }}>{t}</span>
                    <span className="text-[#E0E0E0]/70 text-xs leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 02 — Livres */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="glass p-10 flex flex-col"
            >
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— 02 / Caminhos da casa</p>
              <h3 className="text-white text-2xl lg:text-3xl mb-6" style={{ fontWeight: 600 }}>
                Trabalhos Livres
              </h3>
              <p className="text-[#E0E0E0] leading-[1.8] mb-8 flex-1">
                Encontros que nascem da escuta da casa, fora do formato litúrgico tradicional. Mais quietos, em contato com a mata, abertos a quem chega com cuidado.
              </p>
              <ul className="space-y-2.5">
                {[
                  ["Círculo Sagrado da Floresta", "Roda sentada na mata, em escuta."],
                  ["Sagrado Feminino", "Ciclo de mulheres, conduzido por madrinhas."],
                  ["Sagrado Masculino", "Ciclo de homens, conduzido por padrinhos."],
                ].map(([t, d]) => (
                  <li key={t} className="flex flex-col">
                    <span className="text-white text-sm" style={{ fontWeight: 500 }}>{t}</span>
                    <span className="text-[#E0E0E0]/70 text-xs leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* 03 — Feitio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.16 }}
              className="glass p-10 flex flex-col"
            >
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— 03 / O preparo</p>
              <h3 className="text-white text-2xl lg:text-3xl mb-6" style={{ fontWeight: 600 }}>
                Feitio
              </h3>
              <p className="text-[#E0E0E0] leading-[1.8] mb-6 flex-1">
                O feitio é o ritual de preparo do próprio chá. Durante alguns dias, a comunidade colhe a folha e bate o cipó, em rezas e cantos, e cozinha tudo em fornalha de barro. Cada gota do Daime servido em sessão nasceu desse trabalho de mãos. É também ele um trabalho espiritual, talvez o mais íntimo da casa.
              </p>
              <ul className="space-y-2.5">
                {[
                  ["Colheita", "Folha de chacrona da própria mata."],
                  ["Bateção", "Cipó jagube preparado em ronda, ao som dos hinos."],
                  ["Cozimento", "Horas de fornalha, em vigília, até o ponto."],
                ].map(([t, d]) => (
                  <li key={t} className="flex flex-col">
                    <span className="text-white text-sm" style={{ fontWeight: 500 }}>{t}</span>
                    <span className="text-[#E0E0E0]/70 text-xs leading-relaxed">{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
