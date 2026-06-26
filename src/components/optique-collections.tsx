import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const collections = [
  {
    title: "Montures optiques",
    description: "Des lignes discrètes ou affirmées pour un usage quotidien confortable et stylé.",
    image: "https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Lunettes solaires",
    description: "Une protection efficace avec des formes modernes et faciles à porter.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Univers féminin",
    description: "Des montures délicates et contemporaines pour sublimer le regard.",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Style signature",
    description: "Des pièces marquantes pour celles et ceux qui aiment une vraie présence.",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=900&q=80",
  },
];

const OptiqueCollections = () => {
  return (
    <section id="collections" className="bg-[#f7f4ee] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <Badge className="rounded-full bg-amber-100 px-4 py-1.5 text-amber-800 hover:bg-amber-100">
            Nos collections
          </Badge>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Une sélection pensée pour le confort, l'allure et la qualité.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {collections.map((item) => (
            <Card key={item.title} className="overflow-hidden rounded-[2rem] border-slate-200 bg-white shadow-sm">
              <div className="relative">
                <img src={item.image} alt={item.title} className="h-72 w-full object-cover" />
                <div className="absolute inset-0 bg-slate-950/10" />
              </div>
              <CardContent className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="text-sm leading-7 text-slate-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OptiqueCollections;