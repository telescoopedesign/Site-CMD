import { motion } from "motion/react";

interface Props {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  image: string;
}

export function PageHeader({ eyebrow, title, intro, image }: Props) {
  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden bg-[#041C04]">
      <div
        className="absolute inset-0 bg-cover"
        style={{ 
          backgroundImage: `url(${image})`, 
          backgroundPosition: "right center",
          filter: "contrast(1.15) brightness(1.1) saturate(1.1)"
        }}
      />
      {/* Filtro de cor verde do site - mais suave para manter os highlights */}
      <div className="absolute inset-0 bg-[#041C04]/25 mix-blend-multiply pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, rgba(4,28,4,0.98) 0%, rgba(4,28,4,0.85) 35%, rgba(4,28,4,0.35) 65%, rgba(4,28,4,0.05) 100%)",
        }}
      />
      {/* Fade para a próxima seção */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#041C04] via-[#041C04]/80 to-transparent pointer-events-none" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-20 w-full pt-24">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0] mb-6">
          — {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-white text-[2.6rem] sm:text-[3.6rem] lg:text-[5rem] leading-[1] tracking-tight max-w-3xl"
          style={{ fontWeight: 600, letterSpacing: "-0.025em" }}
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }} className="mt-8 text-[#E0E0E0] max-w-xl text-base lg:text-lg leading-relaxed">
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
