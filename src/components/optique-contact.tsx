import { type FormEvent, useState } from "react";
import { Clock3, Globe, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
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
  { icon: Globe, label: "Langues", value: "Français, Anglais, Espagnol, Arabe, Portugais" },
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
            <a
              href="https://www.facebook.com/opticlairXII/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:bg-[#1877F2] hover:text-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1877F2] text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">Facebook</p>
                <p className="font-medium text-slate-900">Suivez-nous sur Facebook</p>
              </div>
            </a>
            <a
              href="https://www.instagram.com/opticlair_official"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#8134af] text-white">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <div>
                <p className="text-sm text-slate-500">Instagram</p>
                <p className="font-medium text-slate-900">Suivez-nous sur Instagram</p>
              </div>
            </a>
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