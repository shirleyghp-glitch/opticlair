import { BadgeCheck, Eye, HeartHandshake, ScanSearch, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Eye,
    title: "Examen visuel",
    description: "Un accueil attentif pour évaluer vos besoins visuels et votre confort au quotidien.",
  },
  {
    icon: ScanSearch,
    title: "Choix des montures",
    description: "Des modèles élégants, confortables et sélectionnés pour leur tenue et leur style.",
  },
  {
    icon: ShieldCheck,
    title: "Verres performants",
    description: "Des solutions techniques adaptées aux écrans, à la conduite et à la vie active.",
  },
  {
    icon: HeartHandshake,
    title: "Conseil en boutique",
    description: "Une équipe à l'écoute pour vous guider simplement vers la bonne paire.",
  },
];

const OptiqueServices = () => {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Badge className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-700 hover:bg-slate-100">
              Nos services
            </Badge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Tout ce qu'il faut pour bien voir, bien porter et bien vivre.
            </h2>
          </div>
          <p className="max-w-xl text-slate-600">
            Opticlair accompagne chaque client avec des conseils clairs, des produits adaptés et un vrai
            sens du détail.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.title} className="rounded-3xl border-slate-200 shadow-sm transition-transform duration-300 hover:-translate-y-1">
                <CardHeader className="space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl text-slate-950">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-7 text-slate-600">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
          <Card className="rounded-3xl border-emerald-200 bg-[#f2f7f1] shadow-sm md:col-span-2 xl:col-span-4">
            <CardContent className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-medium text-emerald-700">Notre promesse</p>
                <h3 className="mt-1 text-2xl font-semibold text-slate-950">Une expérience fluide, élégante et rassurante.</h3>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <BadgeCheck className="h-5 w-5 text-emerald-600" />
                Réglages et ajustages inclus
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OptiqueServices;