import { cn } from "@/lib/utils";

const logoSrc = "/images/logo.jpg";

type OptiqueLogoProps = {
  className?: string;
};

const OptiqueLogo = ({ className }: OptiqueLogoProps) => {
  return (
    <img
      src={logoSrc}
      alt="Opticlair, opticien-lunetier"
      className={cn(
        "h-14 w-14 rounded-full bg-[#f4f1ea] object-contain p-1 shadow-sm ring-1 ring-slate-900/10",
        className,
      )}
    />
  );
};

export default OptiqueLogo;