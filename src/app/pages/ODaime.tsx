import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1761071181789-16e0feda3c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=2400";
const PLANT = "https://images.unsplash.com/photo-1752416579251-75f119575ecb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400";
const VINE = "https://images.unsplash.com/photo-1685250385544-1a931f0a2a31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1400";

const chaSlides = [
  {
    n: "I",
    t: "Vinho das almas",
    b: "Ayahuasca, em quéchua, significa vinho das almas. É a bebida cerimonial que nasce do encontro de duas plantas da floresta amazônica: o cipó jagube e a folha chacrona. Cozidas juntas, durante horas, em fornalha de barro, num rito chamado feitio.",
  },
  {
    n: "II",
    t: "A folha que carrega o DMT",
    b: "A chacrona é portadora de DMT, uma substância que o próprio corpo humano produz e que está presente também em muitas plantas. Há uma semelhança quase exata com algo que mora no nosso cérebro. Por isso, no Daime, dizem: a doutrina não traz nada de novo. Ela acorda o que já está aqui.",
  },
  {
    n: "III",
    t: "O cipó que abre a porta",
    b: "O jagube é um inibidor de MAO, a enzima monoaminoxidase. No corpo, a MAO desativa o DMT antes que ele chegue ao cérebro. Sozinha, a folha não passa. É o cipó que abre a porta. Pai e Rainha, força e luz: um sem o outro não faz Daime.",
  },
  {
    n: "IV",
    t: "Como age",
    b: "Tomado em ritual, o Daime atua como expansor de consciência: amplia a percepção, dissolve a separação entre observador e mundo, e tem efeito antidepressivo natural reconhecido por estudos do Fundão. Aqui, em casa, os efeitos são imediatos. Em laboratório, sustentam-se por até vinte e quatro horas.",
  },
  {
    n: "V",
    t: "O que não é",
    b: "O Daime não é alucinógeno no sentido comum, e não é droga. É classificado pelo CONAD como expansor de consciência, de uso sacramental. Mestre Gabriel ensinava: não somos uma sociedade secreta, somos uma sociedade discreta. A gente respeita o chamado de cada um, porque a experiência pode ser muito forte.",
  },
];

function ChaCarousel() {
  const [i, setI] = useState(0);
  const total = chaSlides.length;
  const go = (d: number) => setI((i + d + total) % total);
  const slide = chaSlides[i];

  return (
    <div className="relative">
      <div className="glass-strong p-10 lg:p-16 min-h-[440px] flex flex-col">
        <div className="flex items-center justify-between mb-10">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60">
            — {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Próximo"
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={slide.n}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.4 }}
            className="flex-1"
          >
            <span className="text-white/40 text-sm tracking-[0.3em] block mb-4">{slide.n}</span>
            <h3 className="text-white text-3xl md:text-4xl lg:text-5xl leading-[1.1] mb-8 max-w-2xl" style={{ fontWeight: 600 }}>
              {slide.t}
            </h3>
            <p className="text-[#E0E0E0] text-lg leading-[1.85] max-w-3xl">{slide.b}</p>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex gap-2">
          {chaSlides.map((s, idx) => (
            <button
              key={s.n}
              onClick={() => setI(idx)}
              aria-label={`Slide ${idx + 1}`}
              className={`h-1 rounded-full transition-all ${idx === i ? "w-12 bg-white" : "w-6 bg-white/25 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function ODaime() {
  return (
    <div className="bg-[#041C04]">
      <PageHeader eyebrow="02 / O Daime" title={<>Doutrina, medicina, oração.</>} intro="O Santo Daime é caminho, não experiência. Para quem quer entender antes de provar." image={HERO} />

      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-12">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— Origem</p>
            <h2 className="text-white text-4xl lg:text-5xl leading-[1.1]" style={{ fontWeight: 600 }}>A doutrina do Mestre Irineu.</h2>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-6 text-[#E0E0E0] text-lg leading-[1.85]">
            <p>O Santo Daime nasce com Raimundo Irineu Serra, no Acre, no início do século XX. Mestre Irineu, homem negro, maranhense, seringueiro, recebe a doutrina em sucessivos encontros com a Floresta, com a Virgem da Conceição, e com a tradição cristã.</p>
            <p>Cantando hinos que diz terem sido entregues por Ela, ele funda em 1930 o que hoje chamamos de Santo Daime: doutrina cristã, com matriz indígena, e a presença viva da Ayahuasca como sacramento.</p>
            <p>Na Casa de Maria Damião, essa raiz é nossa estrutura. Mas reconhecemos a doutrina como uma das muitas pontes possíveis para o sagrado, e seguimos abertos ao diálogo com outras tradições e formas de conhecimento espiritual.</p>
          </div>
        </div>
      </section>

      <section className="px-8 lg:px-20 pb-24">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {[
            { t: "Chacrona", lat: "Psychotria viridis", img: PLANT, b: "A folha. Cresce em arbustos da Amazônia e da Mata Atlântica. Carrega a luz do sacramento. É, dizem os antigos, a Rainha da Floresta." },
            { t: "Jagube", lat: "Banisteriopsis caapi", img: VINE, b: "O cipó. Tronco lenhoso da floresta. Carrega a força. É, na linguagem da casa, o Pai. Junto da chacrona, faz o Daime." },
          ].map((p) => (
            <div key={p.t} className="rounded-[16px] overflow-hidden border border-white/15 flex flex-col">
              <div className="h-72 bg-cover bg-center shrink-0" style={{ backgroundImage: `url(${p.img})` }} />
              <div className="bg-black/35 backdrop-blur-xl p-10 flex-1">
                <p className="text-[#E0E0E0]/60 text-xs uppercase tracking-[0.25em] mb-3 italic">{p.lat}</p>
                <h3 className="text-white text-4xl lg:text-5xl mb-6" style={{ fontWeight: 600 }}>{p.t}</h3>
                <p className="text-[#E0E0E0] leading-[1.85]">{p.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-8 lg:px-20">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6 text-center">— Princípios</p>
          <h2 className="text-white text-4xl lg:text-5xl text-center mb-16" style={{ fontWeight: 600 }}>O que sustenta a doutrina.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { n: "I", t: "Harmonia", d: "Harmonia consigo, com o próximo, com a natureza. Antes de palavra bonita, é disciplina diária." },
              { n: "II", t: "Amor", d: "Amor que não é sentimento, mas força que une. O sacramento o desperta, a doutrina o educa." },
              { n: "III", t: "Verdade", d: "Verdade na palavra e na ação. Quem não anda na linha, não chega ao Sol." },
              { n: "IV", t: "Justiça", d: "Justiça com tempo, com lugar, com responsabilidade. Cada um responde por seu caminho." },
            ].map((p, i) => (
              <motion.div key={p.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} className="glass p-10">
                <span className="text-white/40 text-sm tracking-[0.2em]">— {p.n}</span>
                <h3 className="text-white text-2xl mt-4 mb-4" style={{ fontWeight: 600 }}>{p.t}</h3>
                <p className="text-[#E0E0E0] leading-[1.8]">{p.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 lg:px-20 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-14 max-w-3xl">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— A medicina</p>
            <h2 className="text-white text-4xl lg:text-5xl leading-[1.1]" style={{ fontWeight: 600 }}>
              Mas, afinal, o que é o Daime?
            </h2>
            <p className="text-[#E0E0E0] mt-6 text-lg leading-[1.8]">
              Cinco passagens curtas para entender, sem mistério e sem reverência exagerada, a planta, a química e a lei por trás do sacramento da casa.
            </p>
          </div>

          <ChaCarousel />
        </div>
      </section>

      <section className="px-8 lg:px-20 pb-24">
        <div className="max-w-[1100px] mx-auto glass-strong p-12 lg:p-20 text-center">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-8">— Palavra do Padrinho</p>
          <p className="text-white text-2xl md:text-3xl leading-[1.35] mb-8" style={{ fontWeight: 500 }}>
            “Não há certezas no Daime, exceto uma única certeza: se você tomar o Daime direito, você não sairá da mesma maneira que entrou. Você sairá melhor.”
          </p>
          <p className="mt-6 text-[0.72rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60">— Padrinho Júlio</p>
        </div>
      </section>
    </div>
  );
}
