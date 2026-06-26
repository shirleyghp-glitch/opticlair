import { ArrowRight, BadgeCheck, Eye, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import OptiqueLogo from "@/components/optique-logo";

const highlights = [
  { label: "Montures", value: "Sélection premium" },
  { label: "Conseil", value: "Personnalisé en boutique" },
  { label: "Suivi", value: "Réglages et ajustages offerts" },
];

const OptiqueHero = () => {
  return (
    <section id="top" className="bg-[#f7f4ee]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white px-3 py-2 shadow-sm ring-1 ring-slate-200">
              <OptiqueLogo className="h-10 w-10" />
              <div>
                <p className="text-sm font-semibold text-slate-950">Opticlair</p>
                <p className="text-xs text-slate-500">Opticien-lunetier</p>
              </div>
            </div>

            <Badge className="rounded-full bg-emerald-100 px-4 py-1.5 text-emerald-800 hover:bg-emerald-100">
              Optique indépendante à Paris
            </Badge>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Des lunettes choisies avec goût, précision et attention.
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-600">
                Opticlair vous accueille dans un univers élégant pour trouver vos lunettes de vue, vos solaires
                et les verres les plus adaptés à votre quotidien.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full bg-slate-950 px-6 text-base text-white hover:bg-slate-800">
                <a href="#contact">
                  Prendre rendez-vous
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-slate-300 px-6 text-base text-slate-700 hover:bg-white"
              >
                <a href="#collections">Découvrir les collections</a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <Card key={item.label} className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="p-4">
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <p className="mt-1 text-base font-semibold text-slate-950">{item.value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 hidden h-24 w-24 rounded-full bg-amber-100 lg:block" />
            <Card className="overflow-hidden rounded-[2rem] border-0 bg-slate-950 shadow-2xl shadow-slate-950/15">
              <div className="relative">
                <img
                  src="/images/photo-4.png"
                  alt="Client essayant une monture élégante chez l'opticien"
                  className="h-[520px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-950/20" />
                <div className="absolute left-5 top-5 flex items-center gap-3 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-slate-800 backdrop-blur">
                  <OptiqueLogo className="h-8 w-8" />
                  <span>Signature Opticlair</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 space-y-3">
                  <Card className="rounded-3xl border-white/40 bg-white/92 shadow-lg backdrop-blur">
                    <CardContent className="flex items-center justify-between p-4">
                      <div>
                        <p className="text-sm text-slate-500">Conseil personnalisé</p>
                        <p className="text-base font-semibold text-slate-950">
                          Essayage, réglage et suivi dans la même visite
                        </p>
                      </div>
                      <div className="rounded-full bg-emerald-600 p-3 text-white">
                        <Eye className="h-5 w-5" />
                      </div>
                    </CardContent>
                  </Card>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm text-slate-700 backdrop-blur">
                      <BadgeCheck className="h-4 w-4 text-emerald-600" />
                      Ajustage offert
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-sm text-slate-700 backdrop-blur">
                      <MapPin className="h-4 w-4 text-emerald-600" />
                      Paris
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OptiqueHero;