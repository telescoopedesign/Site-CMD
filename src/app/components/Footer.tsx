import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#072807] border-t border-white/10">
      <div className="px-8 lg:px-20 py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">Casa de Maria Damião</p>
            <h3 className="text-3xl md:text-4xl text-white leading-tight mb-6" style={{ fontWeight: 400, letterSpacing: "-0.02em" }}>
              A porta aberta<br />é o coração.
            </h3>
            <p className="text-[#E0E0E0] leading-relaxed max-w-md text-sm">
              Casa espiritual na Mata Atlântica de Vargem Grande, Rio de Janeiro. Cultivamos a doutrina do Santo Daime e diversas pontes de conhecimento espiritual.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-5">Navegar</p>
            <ul className="space-y-3 text-sm">
              {[
                ["/", "Início"],
                ["/a-casa", "A Casa"],
                ["/o-daime", "O Daime"],
                ["/guia-do-visitante", "Guia do Visitante"],
                ["/agenda", "Agenda"],
                ["/contato", "Contato"],
              ].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-[#E0E0E0] hover:text-white transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-5">Encontrar</p>
            <address className="not-italic space-y-3 text-sm text-[#E0E0E0] leading-relaxed">
              <p>Estr. do Morgado, 2000<br />Vargem Grande, Rio de Janeiro, RJ<br />22785-550</p>
              <p>
                <a href="https://wa.me/5521989992913" className="hover:text-white">(21) 98999-2913</a>
              </p>
              <p>
                <a href="mailto:contato@casademariademiao.com.br" className="hover:text-white break-all">
                  contato@casademariademiao.com.br
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-[#E0E0E0]/50">
          <p>© {new Date().getFullYear()} Casa de Maria Damião</p>
          <p>Sob o céu da Mata Atlântica</p>
        </div>
      </div>
    </footer>
  );
}
