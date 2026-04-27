"use client";

import { Mail, Phone, MapPin, Send, Clock, Building } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

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

export default function ContatoPage() {
  const secretarias = [
    {
      nome: "Matriz Imaculada Conceição",
      horario: "Seg a Sex: 08h às 11h30 e 13h às 17h30 | Sáb: 08h às 11h30",
      endereco:
        "Rua Albano Schmidt, 1885 - Boa Vista, Joinville - SC, 89205-103",
      telefone: "(47) 3028-5061",
      email: "pfin05@diocesejoinville.com.br",
    },
    {
      nome: "Comunidade Jesus Misericordioso",
      horario: "Seg a Sex: 08h às 11h30 e 13h às 17h30 | Sáb: 08h às 11h30",
      endereco: "Rua das Violetas, 330 - Boa Vista, Joinville - SC, 89205-620",
      telefone: "(47) 3227-7572",
      email: "c0503@diocesejoinville.com.br",
    },
    {
      nome: "Comunidade Santa Luzia",
      horario: "Seg a Sex: 08h às 11h30 e 13h às 17h30 | Sáb: 08h às 11h30",
      endereco: "Rua Alcântara, 830 - Boa Vista, Joinville - SC, 89206-300",
      telefone: "(47) 3432-0913",
      email: "c0504@diocesejoinville.com.br",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Header />

      <section className="relative pt-40 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/InmaculadaConcepcion_071215.jpg"
            alt="Pintura Clássica"
            className="w-full h-full object-cover filter md:grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Fale Conosco
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-zinc-100">
            De portas abertas
          </h1>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div className="flex flex-col">
            <h2 className="font-serif text-4xl text-zinc-900 mb-6">
              Como podemos ajudar?
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed mb-12 text-lg">
              Sinta-se à vontade para nos enviar uma mensagem, ligar para nossa
              secretaria ou nos fazer uma visita. Nossa comunidade está sempre
              pronta para acolher você e sua família.
            </p>

            <div className="flex flex-col gap-8 mb-12">
              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 group-hover:border-amber-200 transition-colors shrink-0">
                  <Mail className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <div className="text-zinc-900 font-serif text-xl mb-1">
                    Email Geral
                  </div>
                  <div className="text-zinc-500">
                    pfin05@diocesejoinville.com.br
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5 group">
                <div className="p-4 bg-white rounded-2xl shadow-sm border border-zinc-100 group-hover:border-amber-200 transition-colors shrink-0">
                  <Phone className="w-6 h-6 text-amber-600" strokeWidth={1.5} />
                </div>
                <div className="pt-1">
                  <div className="text-zinc-900 font-serif text-xl mb-1">
                    Telefone da Matriz
                  </div>
                  <div className="text-zinc-500">(47) 3028-5061</div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-200">
              <span className="text-zinc-500 text-sm font-medium tracking-widest uppercase mb-4 block">
                Nossas Redes Sociais
              </span>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-all shadow-sm"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200 transition-all shadow-sm"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-zinc-100 relative overflow-hidden h-fit">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] rounded-full pointer-events-none"></div>

            <h3 className="font-serif text-3xl text-zinc-900 mb-8 relative z-10">
              Envie uma mensagem
            </h3>

            <form
              className="flex flex-col gap-8 relative z-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    className="bg-transparent border-b-2 border-zinc-200 text-zinc-900 pb-2 outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="bg-transparent border-b-2 border-zinc-200 text-zinc-900 pb-2 outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-transparent border-b-2 border-zinc-200 text-zinc-900 pb-2 outline-none focus:border-amber-500 transition-colors"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Assunto
                </label>
                <select className="bg-transparent border-b-2 border-zinc-200 text-zinc-900 pb-2 outline-none focus:border-amber-500 transition-colors cursor-pointer appearance-none">
                  <option value="" disabled selected>
                    Selecione um assunto...
                  </option>
                  <option value="intencao">Intenção de Missa</option>
                  <option value="sacramentos">
                    Informações sobre Sacramentos
                  </option>
                  <option value="dizimo">Dízimo</option>
                  <option value="duvidas">Dúvidas Gerais</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Sua Mensagem
                </label>
                <textarea
                  rows={4}
                  className="bg-transparent border-b-2 border-zinc-200 text-zinc-900 pb-2 outline-none focus:border-amber-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-zinc-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 mt-4 group">
                Enviar Mensagem
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
              Nossas Comunidades
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-100">
              Informações das Secretarias
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secretarias.map((sec, index) => (
              <div
                key={index}
                className="bg-zinc-950 p-8 rounded-[2rem] border border-zinc-800 hover:border-amber-500/30 transition-colors flex flex-col group"
              >
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-zinc-800">
                  <div className="p-3 bg-zinc-900 rounded-xl group-hover:bg-amber-500/10 transition-colors">
                    <Building className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="font-serif text-xl text-zinc-100 leading-tight">
                    {sec.nome}
                  </h3>
                </div>

                <div className="flex flex-col gap-6 flex-1">
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">
                        Atendimento
                      </span>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {sec.horario}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">
                        Endereço
                      </span>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {sec.endereco}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">
                        Telefone
                      </span>
                      <p className="text-zinc-300 text-sm leading-relaxed">
                        {sec.telefone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-zinc-500 mt-0.5 shrink-0" />
                    <div>
                      <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">
                        Email
                      </span>
                      <p className="text-zinc-300 text-sm leading-relaxed truncate">
                        {sec.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full h-[500px] bg-zinc-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.852655383186!2d-48.8252277!3d-26.3013093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94deb0f517430489%3A0xc3c5d6e246fc1d!2sPar%C3%B3quia%20Nossa%20Senhora%20Imaculada%20Concei%C3%A7%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 filter md:grayscale contrast-125 md:hover:grayscale-0 transition-all duration-1000"
        ></iframe>
      </section>

      <Footer />
    </main>
  );
}
