import { useState } from "react";
import { PageHeader } from "../components/PageHeader";
import { MapPin, Phone, Mail, Send, ArrowUpRight, Instagram, Youtube } from "lucide-react";

const HERO = "https://images.unsplash.com/photo-1639618649096-7e5bf3d3435f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=85&w=2400";

export function Contato() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#041C04]">
      <PageHeader
        eyebrow="05 / Contato"
        title={<>Escreva para a casa.</>}
        intro="Toda visita começa com uma conversa. A forma mais direta é pelo WhatsApp. Uma pessoa da comunidade responderá em até três dias."
        image={HERO}
      />

      {/* Primary — WhatsApp CTA */}
      <section className="px-8 lg:px-20 pt-24 pb-12">
        <div className="max-w-[1200px] mx-auto">
          <div className="glass-strong p-10 md:p-16 lg:p-20 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-7">
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— Forma principal de contato</p>
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6" style={{ fontWeight: 600 }}>
                Fale conosco no WhatsApp.
              </h2>
              <p className="text-[#E0E0E0] text-lg leading-[1.7] max-w-xl">
                Conversa direta com alguém da comunidade. Mande sua dúvida, conte um pouco de você. Respondemos em até três dias.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col gap-4">
              <a
                href="https://wa.me/5521989992913"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 glass-strong px-10 py-5 text-base text-white hover:bg-white/20 transition-all"
                style={{ fontWeight: 500 }}
              >
                <Phone size={18} />
                (21) 98999-2913
                <ArrowUpRight size={16} />
              </a>
              <p className="text-xs text-[#E0E0E0]/60 text-center leading-relaxed">
                Atendimento de terças a sextas, 14h às 18h.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="px-8 lg:px-20 pb-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-8">
            <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-3">— Ache-nos nas redes</p>
            <h3 className="text-white text-2xl md:text-3xl" style={{ fontWeight: 500 }}>
              A casa também respira por aqui.
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="https://www.instagram.com/casademariademiao"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 flex items-center gap-6 group hover:bg-white/[0.12] transition-all"
            >
              <div className="glass-strong w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Instagram size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[0.8rem] uppercase tracking-[0.25em] text-[#E0E0E0]/60 mb-1">Instagram</p>
                <p className="text-white text-lg truncate" style={{ fontWeight: 500 }}>@casademariademiao</p>
              </div>
              <ArrowUpRight size={18} className="text-white/60 group-hover:text-white transition-colors flex-shrink-0" />
            </a>
            <a
              href="https://www.youtube.com/@casademariademiao"
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-8 flex items-center gap-6 group hover:bg-white/[0.12] transition-all"
            >
              <div className="glass-strong w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0">
                <Youtube size={22} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[0.8rem] uppercase tracking-[0.25em] text-[#E0E0E0]/60 mb-1">YouTube</p>
                <p className="text-white text-lg truncate" style={{ fontWeight: 500 }}>Casa de Maria Damião</p>
              </div>
              <ArrowUpRight size={18} className="text-white/60 group-hover:text-white transition-colors flex-shrink-0" />
            </a>
          </div>
        </div>
      </section>

      {/* Secondary — info, map and e-mail form */}
      <section className="px-8 lg:px-20 pb-32">
        <div className="max-w-[1200px] mx-auto grid grid-cols-12 gap-6">
          <aside className="col-span-12 md:col-span-5 space-y-4">
            <div className="glass p-8">
              <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-6">— Encontrar</p>
              <ul className="space-y-5 text-[#E0E0E0]">
                <li className="flex gap-4">
                  <MapPin size={18} className="text-white flex-shrink-0 mt-1" />
                  <span className="leading-relaxed">Estr. do Morgado, 2000<br />Vargem Grande<br />Rio de Janeiro, RJ — 22785-550</span>
                </li>
                <li className="flex gap-4">
                  <Mail size={18} className="text-white flex-shrink-0 mt-1" />
                  <a href="mailto:contato@casademariademiao.com.br" className="hover:text-white transition-colors break-all">
                    contato@casademariademiao.com.br
                  </a>
                </li>
              </ul>
            </div>

            <div className="glass overflow-hidden p-2">
              <iframe
                title="Mapa Casa de Maria Damião"
                src="https://maps.google.com/maps?q=Estrada%20do%20Morgado%202000%2C%20Rio%20de%20Janeiro&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-72 rounded-xl"
                loading="lazy"
              />
            </div>
          </aside>

          <div className="col-span-12 md:col-span-7">
            <div className="glass overflow-hidden">
              <button
                onClick={() => setOpen(!open)}
                className="w-full p-8 md:p-10 flex items-start md:items-center justify-between gap-6 text-left hover:bg-white/[0.04] transition-colors"
              >
                <div>
                  <p className="text-[0.8rem] uppercase tracking-[0.3em] text-[#E0E0E0]/60 mb-3">— Prefere e-mail?</p>
                  <h3 className="text-white text-xl md:text-2xl mb-2" style={{ fontWeight: 500 }}>
                    Envie uma mensagem pelo formulário
                  </h3>
                  <p className="text-[#E0E0E0]/70 text-sm leading-relaxed max-w-md">
                    Se preferir não usar WhatsApp, escreva por aqui. Resposta no mesmo prazo de até três dias.
                  </p>
                </div>
                <span
                  className={`flex-shrink-0 w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center transition-transform text-xl ${open ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>

              {open && (
                <div className="px-8 md:px-10 pb-10 border-t border-white/10 pt-8">
                  {sent ? (
                    <div>
                      <p className="text-white text-xl mb-3" style={{ fontWeight: 600 }}>Recebemos sua mensagem.</p>
                      <p className="text-[#E0E0E0] leading-relaxed">Em breve uma pessoa da comunidade entrará em contato. Que o caminho até aqui seja leve.</p>
                    </div>
                  ) : (
                    <form onSubmit={onSubmit} className="space-y-5">
                      {[
                        { n: "name", l: "Seu nome", t: "text" },
                        { n: "email", l: "E-mail", t: "email" },
                        { n: "phone", l: "Telefone (opcional)", t: "tel" },
                      ].map((f) => (
                        <div key={f.n}>
                          <label htmlFor={f.n} className="block text-[0.8rem] uppercase tracking-[0.25em] text-[#E0E0E0]/60 mb-2">{f.l}</label>
                          <input
                            id={f.n}
                            name={f.n}
                            type={f.t}
                            required={f.n !== "phone"}
                            value={form[f.n as keyof typeof form]}
                            onChange={onChange}
                            className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-[#E0E0E0]/40 focus:bg-white/10 focus:border-white/30 outline-none transition-all"
                          />
                        </div>
                      ))}
                      <div>
                        <label htmlFor="message" className="block text-[0.8rem] uppercase tracking-[0.25em] text-[#E0E0E0]/60 mb-2">O que te traz aqui</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={form.message}
                          onChange={onChange}
                          className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white placeholder:text-[#E0E0E0]/40 focus:bg-white/10 focus:border-white/30 outline-none transition-all resize-none leading-relaxed"
                        />
                      </div>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-3 px-8 py-3 text-sm text-white border border-white/20 rounded-2xl hover:bg-white/10 transition-colors"
                        style={{ fontWeight: 500 }}
                      >
                        Enviar <Send size={14} />
                      </button>
                    </form>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
