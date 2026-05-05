import { useState } from "react";
import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { PageHeader } from "../components/PageHeader";
import fundoHeroACasa from "../../imports/Fundo-hero-a-casa-01.jpg";

const HERO = fundoHeroACasa;
const G1 = "https://images.unsplash.com/photo-1606102603887-47feb5d3ffea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200";
const G2 = "https://images.unsplash.com/photo-1761909546822-5f14c571b4fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200";
const G3 = "https://images.unsplash.com/photo-1761071181789-16e0feda3c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200";
const G4 = "https://images.unsplash.com/photo-1677778690144-35cd702a6172?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200";
const G5 = "https://images.unsplash.com/photo-1734901404365-e93d979b575b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1200";

const FOUNDERS = "https://images.unsplash.com/photo-1606102603887-47feb5d3ffea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=1600";

const T_ENCONTRO = "https://images.unsplash.com/photo-1607706189992-eae578626c86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=600";
const T_FARDA = "https://images.unsplash.com/photo-1518709268805-4e9042af2176?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=600";
const T_TERRAS = "https://images.unsplash.com/photo-1677778690189-3a29f90b13f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=600";
const T_LONA = "https://images.unsplash.com/photo-1734901404365-e93d979b575b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=600";
const T_IGREJA = "https://images.unsplash.com/photo-1606102603887-47feb5d3ffea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=600";
const T_HOJE = "https://images.unsplash.com/photo-1761071181789-16e0feda3c78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=600";

const timeline = [
  {
    y: "Anos 80",
    t: "O encontro",
    img: T_ENCONTRO,
    s: "Dois adolescentes se cruzam num centro espírita em Bangu. Anos depois, casariam.",
    d: "Júlio, com dezessete anos, psicografava à mesa quando Angélica, com doze, entrou pela primeira vez num centro espírita. Ela ouviu, antes mesmo de vê-lo, uma voz dizer eis aí o seu marido. Demoraram, namoraram à varanda sob olhar de mãe italiana, e casaram-se no dia 6 de janeiro, ao fim de uma tarde de verão, depois de uma chuvarada.",
  },
  {
    y: "1992",
    t: "A chegada ao Daime",
    img: T_FARDA,
    s: "Angélica resiste a uma sessão no Céu do Mar. Vai assim mesmo. Não saem mais.",
    d: "Convidada para uma sessão de Santo Daime, Angélica reagiu como muitos: isso é droga, é alucinógeno, não vou. Foi mesmo assim. Ao chegar à porta do Céu do Mar, largou as malas no chão e disse: cheguei em casa. Júlio foi atrás. Os dois se fardam, e permanecem cinco anos sob o acompanhamento de Padrinho Sebastião.",
  },
  {
    y: "1997-1998",
    t: "As terras chegam",
    img: T_TERRAS,
    s: "Numa sessão, a força anuncia: vocês terão suas terras. Sem dinheiro. Sem como.",
    d: "Em sessão no dia de São José, a força se apresentou e disse: daqui por diante, dentro da sua casa, nunca mais parará de ter Daime para você poder dar para os outros. Em novembro veio o aviso, em maio estavam aqui. O sítio em Vargem Grande foi pago em parte à vista, em parte parcelado, e parte em banana, fruto que o antigo dono ainda colhia da própria terra.",
  },
  {
    y: "1999",
    t: "A primeira igreja",
    img: T_LONA,
    s: "Bambu, lona azul de caminhão e vinte pessoas apertadas. Chovia dentro.",
    d: "A primeira igreja foi feita de estacas de bambu gigante amarelo e coberta com a lona azul de caminhão. Cabia umas vinte pessoas. Quando ventava, formavam-se poças enormes na lona, empurradas com bambu para que não cedesse. Banheiro no mato, carros atolados, tudo se levava e se trazia no fim de cada trabalho.",
  },
  {
    y: "Anos 2000",
    t: "A casa de madeira",
    img: T_IGREJA,
    s: "Quando estávamos preparados, ele preparou a igreja. Sede de madeira em um mês.",
    d: "Perguntavam ao Daime quando teriam uma igreja sólida. Ele respondia: quando você for sólido, quando estiver preparado. Quando chegou a hora, a sede ficou pronta em um mês. Telhado doado. A viga central foi erguida com um braço só, o outro agarrado à pilastra. Cada aniversário da casa, lembrava-se daquela viga.",
  },
  {
    y: "Hoje",
    t: "Comunidade aberta",
    img: T_HOJE,
    s: "Vinte e oito anos de estudo. Casa ecumênica, porta aberta como coração.",
    d: "A casa segue ecumênica e recebe a todos: espíritas, ateus, cristãos, católicos, humanistas. Cerca de quarenta pessoas fardadas e um círculo maior que a sustenta. Visitantes são recebidos com tempo, leitura e conversa anterior. Como diz o hino: a porta aberta é o coração.",
  },
];

function TimelineItem({ item, open, onClick, idx }: { item: typeof timeline[0]; open: boolean; onClick: () => void; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.04 }}
      className="glass overflow-hidden"
    >
      <div className="p-7 flex flex-col md:flex-row md:items-center gap-6">
        <div
          className="w-full md:w-24 h-32 md:h-24 flex-shrink-0 rounded-xl bg-cover bg-center border border-white/15"
          style={{ backgroundImage: `url(${item.img})` }}
        />
        <div className="flex-1 min-w-0">
          <p className="text-[0.8rem] uppercase tracking-[0.25em] text-[#E0E0E0]/60 mb-2">{item.y}</p>
          <h3 className="text-white text-xl md:text-2xl mb-2" style={{ fontWeight: 500 }}>{item.t}</h3>
          <p className="text-[#E0E0E0]/80 leading-[1.7]">{item.s}</p>
        </div>
        <button
          onClick={onClick}
          className="self-start md:self-center flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-white border border-white/20 rounded-full hover:bg-white/10 transition-colors"
          style={{ fontWeight: 500 }}
        >
          {open ? "Ocultar" : "Ver mais"}
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="overflow-hidden">
          <div className="px-7 pb-8 md:pl-[7.5rem] md:pr-[7.5rem] text-[#E0E0E0] leading-[1.85] border-t border-white/10 pt-6">
            {item.d}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export function ACasa() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="bg-[#041C04]">
      <PageHeader eyebrow="01 / A Casa" title={<>O lugar, a história e a gente.</>} intro="Mais de vinte e oito anos de trabalho contínuo em uma clareira da Mata Atlântica." image={HERO} />

      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— Quem somos</p>
            <h2 className="text-white text-4xl lg:text-5xl leading-[1.1]" style={{ fontWeight: 600 }}>Uma casa onde domina o amor.</h2>
          </div>
          <div className="col-span-12 md:col-span-7 space-y-6 text-[#E0E0E0] text-lg leading-[1.85]">
            <p>A Casa de Maria Damião é uma casa ecumênica. Recebe a todos: espíritas, ateus, cristãos, católicos, humanistas. Há vinte e oito anos formou-se aqui uma egrégora de estudo contínuo, em que pessoas de muitas origens encontram um terreno comum.</p>
            <p>Somos uma comunidade pequena de pessoas fardadas e um círculo maior de simpatizantes que sustentam a casa: professoras, artistas, médicos, pais e mães. Nada aqui é grande. Tudo é cuidado.</p>
            <p>A casa foi feita, nas palavras dos padrinhos, com quatro coisas: coragem, sangue, suor e lágrimas. E nada para nós é difícil. Tudo é impossível, e a gente tem que superar.</p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="px-8 lg:px-20 pb-32">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-12">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— Os fundadores</p>
            <h2 className="text-white text-4xl lg:text-5xl leading-[1.1] max-w-3xl" style={{ fontWeight: 600 }}>Padrinho Júlio<br />e Madrinha Angélica.</h2>
          </div>

          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 md:col-span-5 h-[420px] md:h-auto rounded-2xl overflow-hidden border border-white/15">
              <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${FOUNDERS})` }} />
            </div>

            <div className="col-span-12 md:col-span-7 grid grid-cols-1 gap-5">
              <div className="glass p-10">
                <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-5">— Antes de tudo</p>
                <p className="text-[#E0E0E0] text-lg leading-[1.85]">
                  Conheceram-se ainda na adolescência, num centro espírita em Bangu. Júlio, com dezessete anos, psicografava à mesa. Angélica, com doze, sentou-se num baú chinês e escutou pela primeira vez a voz que diria, anos depois, sim ao casamento.
                </p>
              </div>

              <div className="glass p-10">
                <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-5">— A escolha do caminho</p>
                <p className="text-[#E0E0E0] text-lg leading-[1.85]">
                  Quando Angélica decidiu ir ao Céu do Mar, Júlio foi atrás. Os dois se fardaram, estudaram com Padrinho Sebastião, e cinco anos depois receberam a notícia, em força, de que teriam suas próprias terras. Não tinham dinheiro. Tudo se fez assim mesmo.
                </p>
              </div>

              <div className="glass p-10">
                <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-5">— O que sustentam</p>
                <p className="text-[#E0E0E0] text-lg leading-[1.85]">
                  Hoje conduzem a casa com a mesma disposição do começo: acolhimento, valor à mulher esquecida por séculos, fraternidade na linha do que o Mestre desejava. Carregam, segundo quem os conhece, uma resiliência que frutificou. Se tivessem que fazer tudo de novo, fariam tudo novamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline accordion */}
      <section className="py-24 px-8 lg:px-20 border-t border-white/10">
        <div className="max-w-[1100px] mx-auto">
          <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— Caminho</p>
          <h2 className="text-white text-4xl lg:text-5xl mb-4" style={{ fontWeight: 600 }}>Vinte e oito anos.</h2>
          <p className="text-[#E0E0E0] mb-12 max-w-xl leading-relaxed">A história em seis tempos. Toque para abrir.</p>
          <div className="space-y-3">
            {timeline.map((item, i) => (
              <TimelineItem
                key={item.y}
                item={item}
                idx={i}
                open={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <h2 className="text-white text-4xl lg:text-5xl" style={{ fontWeight: 600 }}>A casa, em imagens.</h2>
            <p className="text-[#E0E0E0]/60 text-sm uppercase tracking-[0.2em]">— Galeria</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:auto-rows-[220px]">
            <div className="md:col-span-8 md:row-span-2 h-[260px] md:h-auto bg-cover bg-center rounded-2xl border border-white/10" style={{ backgroundImage: `url(${G1})` }} />
            <div className="md:col-span-4 h-[220px] md:h-auto bg-cover bg-center rounded-2xl border border-white/10" style={{ backgroundImage: `url(${G2})` }} />
            <div className="md:col-span-4 h-[220px] md:h-auto bg-cover bg-center rounded-2xl border border-white/10" style={{ backgroundImage: `url(${G3})` }} />
            <div className="md:col-span-7 md:row-span-2 h-[260px] md:h-auto bg-cover bg-center rounded-2xl border border-white/10" style={{ backgroundImage: `url(${G4})` }} />
            <div className="md:col-span-5 h-[220px] md:h-auto bg-cover bg-center rounded-2xl border border-white/10" style={{ backgroundImage: `url(${G5})` }} />
            <div className="md:col-span-5 h-[220px] md:h-auto bg-cover bg-center rounded-2xl border border-white/10" style={{ backgroundImage: `url(${G2})` }} />
          </div>
        </div>
      </section>

      <section className="py-32 px-8 lg:px-20">
        <div className="max-w-[1100px] mx-auto glass p-16 lg:p-24 text-center">
          <p className="text-white text-2xl md:text-4xl leading-[1.3]" style={{ fontWeight: 500 }}>
            “O Senhor é o meu pastor e com ele nada faltará. Uma casa dele eu recebi, de flores brancas. A porta aberta é o coração.”
          </p>
          <p className="mt-10 text-[0.72rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60">— Hino de Maria Damião</p>
        </div>
      </section>
    </div>
  );
}
