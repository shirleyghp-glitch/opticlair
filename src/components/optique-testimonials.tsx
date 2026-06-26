import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Camille D.",
    role: "Cliente fidèle",
    quote:
      "J'ai trouvé une monture parfaite en quelques minutes. L'accueil est doux, précis et très rassurant.",
  },
  {
    name: "Julien M.",
    role: "Verres progressifs",
    quote:
      "Le conseil a été excellent, et les réglages sont faits avec beaucoup de soin. On sent le professionnalisme.",
  },
  {
    name: "Sarah L.",
    role: "Achat solaire",
    quote:
      "La sélection est superbe et les modèles sont vraiment élégants. Je suis repartie avec une vraie paire coup de cœur.",
  },
];

const OptiqueTestimonials = () => {
  return (
    <section id="avis" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Badge className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-700 hover:bg-slate-100">
              Avis clients
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              La confiance de nos clients, notre plus belle vitrine.
            </h2>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            4,9/5 sur l'expérience en boutique
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name} className="rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-6">
                <p className="text-base leading-8 text-slate-700">« {item.quote} »</p>
                <div className="mt-6">
                  <p className="font-semibold text-slate-950">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptiqueTestimonials;