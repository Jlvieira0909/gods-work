"use client";

import {
  HeartHandshake,
  Church,
  Globe,
  Users,
  Send,
  Heart,
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

export default function DizimoPage() {
  const dimensoes = [
    {
      icon: Heart,
      title: "Dimensão Religiosa",
      desc: "É o seu ato de fé e gratidão a Deus. Reconhecemos que tudo o que temos e somos vem d'Ele, e devolvemos com alegria uma parte do que recebemos.",
    },
    {
      icon: Church,
      title: "Dimensão Eclesial",
      desc: "A sua partilha mantém a nossa paróquia viva. Custeia a água, luz, os funcionários, a manutenção do templo e os materiais para as Santas Missas.",
    },
    {
      icon: Globe,
      title: "Dimensão Missionária",
      desc: "Permite que a Palavra de Deus chegue mais longe. Ajuda a custear materiais de catequese, encontros de formação e o envio de missionários.",
    },
    {
      icon: HeartHandshake,
      title: "Dimensão Caritativa",
      desc: "O dízimo cuida dos mais necessitados. Uma parte de tudo o que é arrecadado é destinada à pastoral social para compra de cestas básicas e ajuda aos pobres.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Header />

      <section className="relative pt-40 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2022/12/2a500e28362b7d84bee8638386a78554.jpg"
            alt="Pintura Clássica"
            className="w-full h-full object-cover filter md:grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Devolva a Deus com Alegria
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-zinc-100 mb-6 drop-shadow-xl">
            A Graça do Dízimo
          </h1>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-serif text-4xl text-zinc-900 mb-6">
            Por que ser um Dizimista?
          </h2>
          <p className="text-zinc-600 text-lg font-light leading-relaxed">
            Ser dizimista é ter a consciência de que somos administradores dos
            bens de Deus. Ao partilhar, você não está pagando uma taxa, mas
            exercendo o seu papel de membro ativo na construção do Reino dos
            Céus. Veja onde a sua fidelidade atua:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {dimensoes.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-zinc-100 hover:border-amber-200 transition-colors group"
            >
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-amber-100 transition-colors">
                <item.icon
                  className="w-7 h-7 text-amber-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 mb-4">
                {item.title}
              </h3>
              <p className="text-zinc-500 font-light leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 px-4 bg-zinc-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/InmaculadaConcepcion_071215.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-4xl mx-auto bg-zinc-950 p-8 md:p-16 rounded-[3rem] shadow-2xl border border-zinc-800 relative z-10">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl text-zinc-100 mb-4">
              Faça o seu Cadastro
            </h2>
            <p className="text-zinc-400 font-light">
              Preencha o formulário abaixo e a nossa Pastoral do Dízimo entrará
              em contato com você para entregar o seu carnê.
            </p>
          </div>

          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  className="bg-transparent border-b-2 border-zinc-800 text-zinc-100 pb-2 outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Data de Nascimento
                </label>
                <input
                  type="date"
                  className="bg-transparent border-b-2 border-zinc-800 text-zinc-100 pb-2 outline-none focus:border-amber-500 transition-colors cursor-text appearance-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Telefone / WhatsApp
                </label>
                <input
                  type="tel"
                  className="bg-transparent border-b-2 border-zinc-800 text-zinc-100 pb-2 outline-none focus:border-amber-500 transition-colors"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="bg-transparent border-b-2 border-zinc-800 text-zinc-100 pb-2 outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-2">
                Endereço Completo
              </label>
              <input
                type="text"
                placeholder="Rua, Número, Bairro, CEP"
                className="bg-transparent border-b-2 border-zinc-800 text-zinc-100 pb-2 outline-none focus:border-amber-500 transition-colors placeholder:text-zinc-700"
              />
            </div>

            <button className="w-full bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition-colors flex items-center justify-center gap-2 mt-4 group">
              Quero ser Dizimista
              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
