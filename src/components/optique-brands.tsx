import { Badge } from "@/components/ui/badge";

const brands = [
  { name: "Cartier", style: "luxury" },
  { name: "Gucci", style: "luxury" },
  { name: "Yves Saint Laurent", style: "luxury" },
  { name: "Tom Ford", style: "luxury" },
  { name: "Prada", style: "luxury" },
  { name: "Maybach", style: "luxury" },
];

const OptiqueBrands = () => {
  return (
    <section id="marques" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <Badge className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-700 hover:bg-slate-100">
            Nos marques
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Les grandes maisons que nous représentons
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Opticlair vous propose une sélection des plus belles marques de lunetterie de luxe.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="flex h-20 w-48 items-center justify-center rounded-2xl border border-slate-200 bg-[#f7f4ee] px-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <span className="text-center text-lg font-semibold tracking-wide text-slate-800">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptiqueBrands;
