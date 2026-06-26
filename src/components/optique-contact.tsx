import { type FormEvent, useState } from "react";
import { Clock3, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { showError, showSuccess } from "@/utils/toast";

const contactPoints = [
  { icon: MapPin, label: "Adresse", value: "Opticlair, Paris" },
  { icon: Phone, label: "Téléphone", value: "01 84 06 32 52" },
  { icon: MessageCircle, label: "WhatsApp", value: "06 52 15 85 98" },
  { icon: Mail, label: "Email", value: "opticlair.paris@gmail.com" },
  { icon: Clock3, label: "Horaires", value: "Mar-Sam · 10h00 – 19h30" },
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const OptiqueContact = () => {
  const [form, setForm] = useState(initialForm);

  const [sending, setSending] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/maqgoepg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        showSuccess("Votre message a bien été envoyé. Nous vous répondrons rapidement.");
        setForm(initialForm);
      } else {
        showError("Une erreur est survenue. Veuillez réessayer ou nous appeler.");
      }
    } catch {
      showError("Une erreur est survenue. Veuillez réessayer ou nous appeler.");
    }
    setSending(false);
  };

  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <Badge className="rounded-full bg-slate-100 px-4 py-1.5 text-slate-700 hover:bg-slate-100">
            Contact
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Parlez-nous de votre besoin, nous préparons votre venue.
          </h2>
          <p className="mt-4 max-w-xl text-slate-600">
            Lunettes de vue, solaires ou simple conseil : Opticlair vous répond rapidement pour organiser votre
            rendez-vous.
          </p>

          <div className="mt-8 grid gap-4">
            {contactPoints.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.label} className="rounded-3xl border-slate-200 shadow-sm">
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">{item.label}</p>
                      <p className="font-medium text-slate-900">{item.value}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <Card className="rounded-[2rem] border-slate-200 shadow-lg">
          <CardHeader className="pb-2">
            <CardTitle className="text-2xl text-slate-950">Demander un rendez-vous</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  className="h-12 rounded-2xl"
                  placeholder="Votre nom"
                  value={form.name}
                  onChange={(e) => setForm((current) => ({ ...current, name: e.target.value }))}
                />
                <Input
                  className="h-12 rounded-2xl"
                  placeholder="Votre téléphone"
                  value={form.phone}
                  onChange={(e) => setForm((current) => ({ ...current, phone: e.target.value }))}
                />
              </div>
              <Input
                className="h-12 rounded-2xl"
                placeholder="Votre email"
                value={form.email}
                onChange={(e) => setForm((current) => ({ ...current, email: e.target.value }))}
              />
              <Textarea
                className="min-h-36 rounded-2xl"
                placeholder="Décrivez votre besoin : examen de vue, nouvelle monture, solaires, verres progressifs..."
                value={form.message}
                onChange={(e) => setForm((current) => ({ ...current, message: e.target.value }))}
              />
              <Button disabled={sending} className="h-12 w-full rounded-full bg-emerald-600 text-base text-white hover:bg-emerald-700 disabled:opacity-60">
                {sending ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
              <p className="text-sm leading-6 text-slate-500">
                Nous vous recontactons dès que possible pour confirmer votre créneau.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default OptiqueContact;