import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { path: "/", label: "Início" },
  { path: "/a-casa", label: "A Casa" },
  { path: "/o-daime", label: "O Daime" },
  { path: "/guia-do-visitante", label: "Guia do visitante" },
  { path: "/agenda", label: "Agenda" },
  { path: "/contato", label: "Contato" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isActive = (p: string) => (p === "/" ? location.pathname === "/" : location.pathname.startsWith(p));

  return (
    <nav className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
      <div className="glass pointer-events-auto w-full max-w-[1050px] px-8 py-3 flex items-center justify-between">
        <Link to="/" className="text-white tracking-tight" style={{ fontWeight: 600, fontSize: "1rem" }}>
          Casa de Maria Damião
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              className={`px-4 py-2 rounded-full text-[0.85rem] transition-all ${
                isActive(l.path)
                  ? "bg-white/15 text-white border border-white/20"
                  : "text-[#E0E0E0] hover:text-white hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full mt-2 inset-x-0 glass pointer-events-auto p-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.path}
              to={l.path}
              onClick={() => setOpen(false)}
              className={`px-4 py-3 rounded-xl text-sm ${
                isActive(l.path) ? "bg-white/15 text-white" : "text-[#E0E0E0]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
