import { useState } from "react";
import { MessageCircle, X, Send, ChevronRight } from "lucide-react";

type Message = { text: string; isUser: boolean };

const faq = [
  { q: "Quels sont vos horaires ?", r: "Nous sommes ouverts du mardi au samedi, de 10h00 à 19h30." },
  { q: "Où êtes-vous situés ?", r: "Opticlair est situé à Paris. Vous pouvez nous localiser sur la carte dans la section 'Nous trouver'." },
  { q: "Comment prendre rendez-vous ?", r: "Vous pouvez nous joindre par WhatsApp au 06 52 15 85 98 ou par téléphone au 01 84 06 32 52." },
  { q: "Quelles marques vendez-vous ?", r: "Nous proposons Cartier, Gucci, Yves Saint Laurent, Tom Ford, Prada, Maybach et bien d'autres." },
  { q: "Faites-vous des examens de vue ?", r: "Oui, nous réalisons des examens visuels complets en boutique." },
  { q: "Proposez-vous des verres progressifs ?", r: "Absolument, nous équipons nos clients avec des verres performants adaptés à chaque besoin." },
];

const quickReplies = [
  "Horaires",
  "Adresse",
  "Prendre RDV",
  "Marques",
];

const OptiqueChatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour ! Je suis le conseiller virtuel Opticlair. Comment puis-je vous aider ?", isUser: false },
  ]);
  const [input, setInput] = useState("");

  const addMessage = (text: string, isUser: boolean) => {
    setMessages((prev) => [...prev, { text, isUser }]);
  };

  const handleSend = (question: string) => {
    if (!question.trim()) return;
    addMessage(question, true);
    const found = faq.find((f) => f.q.toLowerCase().includes(question.toLowerCase()) || question.toLowerCase().includes(f.q.toLowerCase().split(" ").slice(0, 2).join(" ")));
    const reply = found ? found.r : "Je vous invite à nous contacter directement par WhatsApp au 06 52 15 85 98 pour toute question personnalisée.";
    setTimeout(() => addMessage(reply, false), 400);
    setInput("");
  };

  const handleQuickReply = (label: string) => {
    const match = faq.find((f) => f.q.includes(label));
    if (match) {
      addMessage(match.q, true);
      setTimeout(() => addMessage(match.r, false), 400);
    }
  };

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-80 flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/15">
          <div className="flex items-center justify-between bg-emerald-600 px-5 py-4 text-white">
            <div>
              <p className="font-semibold">Opticlair</p>
              <p className="text-xs text-emerald-100">Conseiller virtuel</p>
            </div>
            <button onClick={() => setOpen(false)} className="rounded-full p-1 hover:bg-emerald-500">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex h-72 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-6 ${
                    msg.isUser
                      ? "rounded-br-md bg-emerald-600 text-white"
                      : "rounded-bl-md bg-slate-100 text-slate-700"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 border-t border-slate-100 px-4 py-3">
            {quickReplies.map((label) => (
              <button
                key={label}
                onClick={() => handleQuickReply(label)}
                className="flex items-center gap-1 rounded-full border border-slate-200 px-3 py-1.5 text-xs text-slate-600 transition-colors hover:bg-slate-50"
              >
                {label}
                <ChevronRight className="h-3 w-3" />
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 border-t border-slate-100 px-4 py-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder="Posez votre question..."
              className="flex-1 rounded-full bg-slate-100 px-4 py-2 text-sm outline-none placeholder:text-slate-400"
            />
            <button
              onClick={() => handleSend(input)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white hover:bg-emerald-700"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-600 text-white shadow-lg shadow-emerald-600/30 transition-transform hover:scale-105 hover:bg-emerald-700"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </>
  );
};

export default OptiqueChatbot;
