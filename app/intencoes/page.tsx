"use client";

import { useState } from "react";
import { Heart, Send, Sparkles, Flame, ChevronDown } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function IntencoesPage() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIntencao, setSelectedIntencao] = useState("");

  const intencoesOptions = [
    "Pela Saúde / Cura",
    "Por um Falecimento (Missa de 7º Dia, etc.)",
    "Ação de Graças (Agradecimento)",
    "Pela Família",
    "Outras Intenções",
  ];

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Header />

      <section className="relative pt-40 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=2000&auto=format&fit=crop"
            alt="Velas acesas numa igreja"
            className="w-full h-full object-cover filter grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 flex items-center justify-center gap-2">
            <Flame className="w-4 h-4" />
            Livro de Orações
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-zinc-100 mb-6 drop-shadow-xl">
            Pedidos de Intenção
          </h1>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="flex flex-col sticky top-32">
            <h2 className="font-serif text-4xl text-zinc-900 mb-6">
              Coloque as suas preces no Altar
            </h2>
            <p className="text-zinc-600 font-light leading-relaxed mb-8 text-lg">
              Em todas as Santas Missas celebradas na nossa paróquia, colocamos
              no altar as intenções da nossa comunidade. Se está a passar por um
              momento difícil, se deseja agradecer uma graça alcançada, ou rezar
              por um ente querido, deixe aqui o seu pedido.
            </p>

            <div className="bg-amber-50 border border-amber-200/60 p-8 rounded-[2rem] relative">
              <Sparkles className="w-8 h-8 text-amber-500/30 absolute top-6 right-6" />
              <h3 className="font-serif text-2xl text-amber-900 mb-4">
                A força da oração mútua
              </h3>
              <p className="text-amber-800/80 italic font-light leading-relaxed">
                "Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e
                abrir-se-vos-á. Pois todo o que pede, recebe; o que busca,
                encontra; e àquele que bate, abrir-se-á." <br />
                <span className="font-medium text-amber-900 mt-2 block">
                  — Mateus 7, 7-8
                </span>
              </p>
            </div>
          </div>

          <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-zinc-100 relative overflow-visible">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300"></div>

            <h3 className="font-serif text-3xl text-zinc-900 mb-2 mt-4">
              Escreva a sua Intenção
            </h3>
            <p className="text-zinc-500 text-sm mb-10">
              O seu pedido será incluído nas orações da nossa comunidade.
            </p>

            <form
              className="flex flex-col gap-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Seu Nome{" "}
                  <span className="text-zinc-400 font-normal lowercase">
                    (opcional)
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Como prefere ser identificado?"
                  className="bg-transparent border-b-2 border-zinc-200 text-zinc-900 pb-2 outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-300"
                />
              </div>

              <div className="flex flex-col relative">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Tipo de Intenção
                </label>

                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full flex items-center justify-between bg-transparent border-b-2 ${
                    selectedIntencao ? "text-zinc-900" : "text-zinc-300"
                  } border-zinc-200 pb-2 outline-none focus:border-amber-500 transition-colors text-left`}
                >
                  {selectedIntencao || "Selecione o motivo da prece..."}
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-400 transition-transform duration-300 ${
                      isDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => setIsDropdownOpen(false)}
                    ></div>
                    <ul className="absolute top-full left-0 w-full mt-2 bg-white border border-zinc-100 rounded-2xl shadow-xl overflow-hidden z-40 py-2">
                      {intencoesOptions.map((option, idx) => (
                        <li
                          key={idx}
                          onClick={() => {
                            setSelectedIntencao(option);
                            setIsDropdownOpen(false);
                          }}
                          className="px-6 py-3 hover:bg-amber-50 text-zinc-700 hover:text-amber-900 cursor-pointer transition-colors text-sm font-medium"
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  A sua Prece
                </label>
                <textarea
                  rows={5}
                  placeholder="Escreva aqui o seu pedido de oração..."
                  className="bg-transparent border-b-2 border-zinc-200 text-zinc-900 pb-2 outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-zinc-300"
                ></textarea>
              </div>

              <button className="w-full bg-zinc-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-600 transition-colors flex items-center justify-center gap-2 mt-4 group">
                Enviar Prece
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
