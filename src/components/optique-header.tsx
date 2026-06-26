import { MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import OptiqueLogo from "@/components/optique-logo";

const links = [
  { href: "#services", label: "Services" },
  { href: "#collections", label: "Collections" },
  { href: "#avis", label: "Avis" },
  { href: "#localisation", label: "Nous trouver" },
  { href: "#contact", label: "Contact" },
];

const OptiqueHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f7f4ee]/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <OptiqueLogo className="h-14 w-14" />
            <div>
              <p className="text-lg font-semibold tracking-tight text-slate-950">Opticlair</p>
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Opticien-lunetier</p>
            </div>
          </a>
          <Button asChild variant="outline" className="h-11 rounded-full border-slate-300 px-4 text-slate-700 lg:hidden">
            <a href="tel:+33184063252">
              <PhoneCall className="mr-2 h-4 w-4" />
              01 84 06 32 52
            </a>
          </Button>
        </div>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-600 lg:justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 transition-colors hover:bg-white hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-slate-600 shadow-sm">
            <MapPin className="h-4 w-4 text-emerald-600" />
            Paris
          </div>
          <Button asChild className="h-11 rounded-full bg-emerald-600 px-5 text-white hover:bg-emerald-700">
            <a href="#contact">
              <PhoneCall className="mr-2 h-4 w-4" />
              Prendre rendez-vous
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default OptiqueHeader;