import { Globe } from "lucide-react";
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
        <div className="flex flex-col items-end gap-4">
          <nav className="flex flex-wrap gap-3 text-sm text-slate-600">
            {footerLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-full px-3 py-2 hover:bg-white hover:text-slate-950">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com/opticlairXII/"
              target="_blank"
              rel="noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-sm transition-colors hover:bg-[#1877F2] hover:text-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default OptiqueFooter;