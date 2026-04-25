"use client";

import { Mail, Phone, MapPin, Send, ExternalLink } from "lucide-react";

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export default function Footer() {
  const linksUteis = [
    "Vatican News",
    "Arquidiocese de Joinville",
    "CNBB",
    "Adipros",
    "Catequese de Joinville",
    "Setor Juvenil",
    "Família EPC",
  ];

  return (
    <footer className="bg-zinc-950 pt-24 pb-8 border-t border-zinc-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          <div className="lg:col-span-4 flex flex-col">
            <h3 className="font-serif text-3xl text-zinc-100 mb-8">
              Links Úteis
            </h3>
            <ul className="flex flex-col gap-4">
              {linksUteis.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-amber-400 transition-colors flex items-center gap-2 group w-fit text-sm tracking-wide"
                  >
                    {link}
                    <ExternalLink className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <span className="text-amber-600 font-medium tracking-widest text-xs uppercase mb-3 block">
              Contato
            </span>
            <h3 className="font-serif text-5xl text-zinc-100 mb-10">
              Fale conosco
            </h3>

            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-white/5 p-3 rounded-full group-hover:bg-amber-500/10 transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-zinc-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <div>
                  <div className="text-zinc-100 font-medium mb-1">Email</div>
                  <div className="text-zinc-500 text-sm">
                    pfin05@arquijoinville.com.br
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-white/5 p-3 rounded-full group-hover:bg-amber-500/10 transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-zinc-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <div>
                  <div className="text-zinc-100 font-medium mb-1">Telefone</div>
                  <div className="text-zinc-500 text-sm">(47) 3028-5061</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="bg-white/5 p-3 rounded-full group-hover:bg-amber-500/10 transition-colors shrink-0">
                  <MapPin className="w-5 h-5 text-zinc-300 group-hover:text-amber-400 transition-colors" />
                </div>
                <div>
                  <div className="text-zinc-100 font-medium mb-1">Endereço</div>
                  <div className="text-zinc-500 text-sm leading-relaxed">
                    Rua Albano Schmidt, 1885 - Boa Vista
                    <br />
                    Joinville - SC, CEP: 89205-100
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col">
            <h3 className="font-serif text-2xl text-zinc-100 mb-8">
              Envie sua mensagem
            </h3>
            <form
              className="flex flex-col gap-6"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Nome"
                  className="bg-transparent border-b border-zinc-800 text-zinc-100 placeholder:text-zinc-600 pb-3 outline-none focus:border-amber-500 transition-colors text-sm"
                />
                <input
                  type="tel"
                  placeholder="Telefone"
                  className="bg-transparent border-b border-zinc-800 text-zinc-100 placeholder:text-zinc-600 pb-3 outline-none focus:border-amber-500 transition-colors text-sm"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="bg-transparent border-b border-zinc-800 text-zinc-100 placeholder:text-zinc-600 pb-3 outline-none focus:border-amber-500 transition-colors text-sm"
              />
              <input
                type="text"
                placeholder="Assunto"
                className="bg-transparent border-b border-zinc-800 text-zinc-100 placeholder:text-zinc-600 pb-3 outline-none focus:border-amber-500 transition-colors text-sm"
              />
              <textarea
                placeholder="Deixe a sua mensagem"
                rows={3}
                className="bg-transparent border-b border-zinc-800 text-zinc-100 placeholder:text-zinc-600 pb-3 outline-none focus:border-amber-500 transition-colors text-sm resize-none"
              ></textarea>
              <button className="w-fit bg-zinc-100 text-zinc-950 px-8 py-3 rounded-full text-sm font-semibold hover:bg-amber-400 transition-colors flex items-center gap-2 mt-2">
                Enviar
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-900 gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="text-zinc-500 text-xs text-center md:text-left">
              Paróquia Nossa Senhora Imaculada Conceição. Todos os direitos
              reservados.
            </span>
            <span className="text-zinc-600 text-xs flex items-center gap-1">
              Desenvolvido por João Luiz Vieira
            </span>
          </div>

          <div className="font-serif text-xl text-zinc-700 italic font-light tracking-widest">
            60 ANOS
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-amber-500/10 hover:text-amber-400 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-amber-500/10 hover:text-amber-400 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
