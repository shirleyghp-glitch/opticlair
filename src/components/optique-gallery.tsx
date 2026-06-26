import { Badge } from "@/components/ui/badge";

const photos = [
  { src: "/images/photo-2.png", alt: "Intérieur de la boutique Opticlair" },
  { src: "/images/photo-3.png", alt: "Présentation des collections Opticlair" },
  { src: "/images/photo-1.png", alt: "Espace conseil Opticlair" },
  { src: "/images/photo-4.png", alt: "Vitrine Opticlair" },
];

const OptiqueGallery = () => {
  return (
    <section id="galerie" className="bg-[#f7f4ee] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <Badge className="rounded-full bg-amber-100 px-4 py-1.5 text-amber-800 hover:bg-amber-100">
            Notre boutique
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Découvrez l'univers Opticlair
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-600">
            Un espace chaleureux où conseil, élégance et savoir-faire se rencontrent.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {photos.map((photo) => (
            <div
              key={photo.src}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="h-80 w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptiqueGallery;
