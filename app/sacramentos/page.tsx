"use client";

import {
  Droplets,
  Flame,
  UtensilsCrossed,
  Heart,
  Cross,
  UserCheck,
  Stethoscope,
  ArrowRight,
} from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { motion } from "framer-motion";

const sacramentos = [
  {
    title: "Batismo",
    icon: Droplets,
    image:
      "https://paroquiaboavista.com.br/wp-content/uploads/2022/11/920a1defb50d636a857f918eadbeee7d.jpg",
    description:
      "O fundamento de toda a vida cristã, a porta da vida no Espírito e a porta que dá acesso aos outros sacramentos.",
    info: "Preparação para pais e padrinhos: 2º Sábado do mês.",
  },
  {
    title: "Eucaristia",
    icon: UtensilsCrossed,
    image:
      "https://images.unsplash.com/photo-1548625361-ecde2bbcd529?q=80&w=1000&auto=format&fit=crop",
    description:
      "A fonte e o ápice de toda a vida cristã. Na Eucaristia, o próprio Cristo está presente, oferecido e recebido.",
    info: "Missa Matriz: Quartas (19h30), Sábados (19h) e Domingos (08h e 19h).",
  },
  {
    title: "Crisma",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1000&auto=format&fit=crop",
    description:
      "Pelo sacramento da Confirmação, os fiéis são vinculados mais perfeitamente à Igreja e enriquecidos com uma força especial do Espírito Santo.",
    info: "Inscrições para catequese de adultos e jovens na Secretaria.",
  },
  {
    title: "Matrimônio",
    icon: Heart,
    image:
      "https://paroquiaboavista.com.br/wp-content/uploads/2022/11/InmaculadaConcepcion_071215.jpg",
    description:
      "A aliança matrimonial pela qual o homem e a mulher constituem entre si uma comunhão íntima de toda a vida.",
    info: "Agendamento com antecedência mínima de 6 meses.",
  },
];

export default function SacramentosPage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans">
      <Header />

      <section className="relative pt-40 pb-20 bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/InmaculadaConcepcion_071215.jpg"
            alt="Fundo Sacro"
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Mistérios da Fé
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-zinc-100 italic">
            Os Sete Sacramentos
          </h1>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col gap-32">
          {sacramentos.map((sacra, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 lg:gap-24 items-center`}
            >
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/5] md:aspect-video lg:aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative group">
                  <div className="absolute inset-0 bg-zinc-900/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <img
                    src={sacra.image}
                    alt={sacra.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col items-start">
                <div className="p-3 bg-amber-50 rounded-2xl mb-6">
                  <sacra.icon
                    className="w-6 h-6 text-amber-600"
                    strokeWidth={1.5}
                  />
                </div>
                <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-6">
                  {sacra.title}
                </h2>
                <p className="text-zinc-600 text-lg font-light leading-relaxed mb-8">
                  {sacra.description}
                </p>
                <div className="bg-zinc-100 p-6 rounded-2xl border-l-4 border-amber-500 w-full mb-8">
                  <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-2 font-semibold">
                    Informação Prática
                  </span>
                  <p className="text-zinc-800 text-sm font-medium italic">
                    {sacra.info}
                  </p>
                </div>
                <button className="flex items-center gap-2 text-zinc-900 font-bold hover:text-amber-700 transition-colors group">
                  Saiba mais sobre o {sacra.title}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-zinc-900 py-32 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              title: "Confissão",
              icon: Cross,
              desc: "Horários: Terça a Sexta das 14h às 17h.",
            },
            {
              title: "Unção dos Enfermos",
              icon: Stethoscope,
              desc: "Atendimento emergencial: Ligue para a Secretaria.",
            },
            {
              title: "Ordem",
              icon: UserCheck,
              desc: "Sente o chamado? Converse com o nosso Pároco.",
            },
          ].map((item, i) => (
            <div key={i} className="text-center flex flex-col items-center">
              <item.icon
                className="w-10 h-10 text-amber-500 mb-6"
                strokeWidth={1}
              />
              <h3 className="font-serif text-2xl text-zinc-100 mb-4">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
