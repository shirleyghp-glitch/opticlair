import OptiqueLogo from "@/components/optique-logo";

const footerLinks = [
  { href: "#services", label: "Services" },
  { href: "#collections", label: "Collections" },
  { href: "#localisation", label: "Localisation" },
  { href: "#contact", label: "Contact" },
];

const OptiqueFooter = () => {
  return (
    <footer className="border-t border-slate-200 bg-[#f7f4ee]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div className="flex items-center gap-3">
          <OptiqueLogo className="h-12 w-12" />
          <div>
            <p className="text-lg font-semibold text-slate-950">Opticlair</p>
            <p className="mt-1 text-sm text-slate-600">Opticien-lunetier · Conseil, confort et élégance.</p>
          </div>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3 py-2 hover:bg-white hover:text-slate-950">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default OptiqueFooter;