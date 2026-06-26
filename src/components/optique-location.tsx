import { Clock3, MapPin, Navigation, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const locationInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    value: "Opticlair · Paris (quartier indiqué sur la carte)",
  },
  {
    icon: Clock3,
    title: "Horaires",
    value: "Mar – Sam · 10h00 – 19h30",
  },
  {
    icon: PhoneCall,
    title: "Téléphone",
    value: "01 84 06 32 52",
  },
];

const mapsUrl = "https://www.google.com/maps/place/Opticlair/@48.8968231,2.3456031,17z/";

const OptiqueLocation = () => {
  return (
    <section id="localisation" className="bg-[#f7f4ee] py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
        <div className="space-y-6">
          <Badge className="rounded-full bg-emerald-100 px-4 py-1.5 text-emerald-800 hover:bg-emerald-100">
            Où nous trouver
          </Badge>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Retrouvez Opticlair facilement et préparez votre visite.
            </h2>
            <p className="max-w-xl text-slate-600">
              Le magasin apparaît sur Google Maps à Paris. Vous pouvez nous localiser, préparer votre itinéraire
              et nous contacter depuis le site.
            </p>
          </div>

          <div className="grid gap-4">
            {locationInfo.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.title}</p>
                      <p className="font-medium text-slate-900">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Button asChild className="h-12 rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
            <a href={mapsUrl} target="_blank" rel="noreferrer">
              Ouvrir dans Google Maps
              <Navigation className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        <Card className="overflow-hidden rounded-[2rem] border-slate-200 shadow-lg">
          <CardContent className="p-0">
            <iframe
              title="Carte Google Maps Opticlair"
              src="https://www.google.com/maps?q=48.8968231,2.3456031&z=17&output=embed"
              className="h-[420px] w-full border-0 sm:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OptiqueLocation;