"use client";

import { useState } from "react";
import {
  Clock,
  MapPin,
  Phone,
  Church,
  ArrowLeft,
  Users,
  Calendar,
  Sparkles,
  HeartHandshake,
} from "lucide-react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function JesusMisericordiosoPage() {
  const [activeTab, setActiveTab] = useState<
    "comunidade" | "devocao" | "coordenacoes"
  >("comunidade");

  const massTimes = [
    { day: "Domingos", time: "09h30" },
    { day: "2ª Sexta-feira do mês", time: "15h00" },
  ];

  const coordenacoes = [
    { pastoral: "Coordenação", nome: "Afonso Kuskovki" },
    { pastoral: "Vice", nome: "Jean/Edna" },
    { pastoral: "Tesoureiro", nome: "Marcos" },
    { pastoral: "Secretaria/Comissão", nome: "Edna" },
    { pastoral: "Conselheiro", nome: "Maria Lúcia e Antônio" },
    { pastoral: "Conselheiro", nome: "Joacir" },
    { pastoral: "Catequista 1ª Eucaristia", nome: "Luli" },
    { pastoral: "Música", nome: "Marcia" },
    { pastoral: "Coroinhas/Acólitos", nome: "Edna" },
    { pastoral: "Mil Ave Marias", nome: "Lucia e Afonso" },
    { pastoral: "Dízimo", nome: "Dione" },
    { pastoral: "Limpeza", nome: "Michele" },
    { pastoral: "Liturgia", nome: "Maria Lúcia" },
    { pastoral: "Ministros", nome: "Marcos" },
    { pastoral: "Ornamentação", nome: "Lucia" },
    { pastoral: "Pascom", nome: "Luli" },
    { pastoral: "Patrimônio", nome: "Alisson" },
    { pastoral: "Secretária", nome: "Simone" },
    { pastoral: "Terço da Misericórdia", nome: "Valdete" },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans selection:bg-amber-900 selection:text-amber-50">
      <Header />

      <section className="relative h-[70vh] w-full bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2023/02/74530024fa785ed0ebfe7109f4bbfdbd.jpg"
            alt="Jesus Misericordioso"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-end pb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/horarios"
              className="flex items-center gap-2 text-amber-400 text-sm font-medium uppercase tracking-widest mb-8 hover:text-amber-300 transition-colors w-fit"
            >
              <ArrowLeft className="w-4 h-4" />
              Comunidades
            </Link>
            <h1 className="font-serif text-5xl md:text-8xl text-zinc-100 leading-[1] tracking-tight mb-4">
              Jesus <br />
              <span className="text-amber-200 italic font-light">
                Misericordioso
              </span>
            </h1>
            <p className="text-zinc-300 text-lg max-w-xl font-light leading-relaxed">
              Uma comunidade nascida da unificação, guiada pela esperança e pela
              revelação do infinito amor e misericórdia de Deus.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7">
            <span className="text-amber-600 font-medium tracking-widest text-xs uppercase mb-6 block">
              Nossa Trajetória
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-8 leading-tight">
              A história da <br /> Comunidade
            </h2>

            <div className="flex flex-wrap items-center gap-6 border-b border-zinc-200 mb-10">
              <button
                onClick={() => setActiveTab("comunidade")}
                className={`pb-4 text-sm font-medium uppercase tracking-widest transition-colors flex items-center gap-2 ${
                  activeTab === "comunidade"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Church className="w-4 h-4" />A Comunidade
              </button>
              <button
                onClick={() => setActiveTab("devocao")}
                className={`pb-4 text-sm font-medium uppercase tracking-widest transition-colors flex items-center gap-2 ${
                  activeTab === "devocao"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Sparkles className="w-4 h-4" />A Devoção
              </button>
              <button
                onClick={() => setActiveTab("coordenacoes")}
                className={`pb-4 text-sm font-medium uppercase tracking-widest transition-colors flex items-center gap-2 ${
                  activeTab === "coordenacoes"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Users className="w-4 h-4" />
                Coordenações
              </button>
            </div>

            <div className="min-h-[600px]">
              <AnimatePresence mode="wait">
                {activeTab === "comunidade" && (
                  <motion.div
                    key="comunidade"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="prose prose-zinc prose-lg text-zinc-600 font-light leading-relaxed space-y-6"
                  >
                    <p>
                      Até final de 2006, a Paróquia Imaculada Conceição era
                      formada por quatro comunidades: Imaculada Conceição
                      (Matriz), na Rua Albano Schmidt; Santa Luzia, na Rua
                      Alcântara; Sagrada Família, na Rua das Violetas e a Nossa
                      Senhora de Guadalupe, na Rua Doutor Emílio Petry.
                    </p>
                    <p>
                      A comunidade Nossa Senhora de Guadalupe, fundada na época
                      do Pe. Gilberto, estava em um terreno que pertencia à
                      Prefeitura de Joinville e estava sob permissão de uso.
                    </p>
                    <p>
                      No dia 26 de fevereiro, em uma reunião do Conselho de
                      Pastoral Comunitário (CPC) da comunidade Sagrada Família,
                      Pe. Ivanor expôs sobre a devoção a Divina Misericórdia e
                      falou da aparição à Irmã Santa Faustina, em 22 de
                      fevereiro de 1930, na Polônia.
                    </p>
                    <p>
                      O padre também comentou sobre a unificação das comunidades
                      Sagrada Família e Nossa Senhora de Guadalupe. Segundo ele,
                      a prefeitura reclamava o terreno desta última. As duas se
                      fundiriam e formariam a comunidade Jesus Misericordioso
                      adotando a nova devoção.
                    </p>
                    <p>
                      Houve resistência de fiéis de ambas as comunidades. Além
                      disso, a festa da Divina Misericórdia já era realizada na
                      comunidade Santa Luzia, que foi convencida a ceder esta
                      celebração à nova comunidade (cf. L. Ata Comunidade Jesus
                      Misericordioso de 26/02/2007). Com a unificação das duas
                      comunidades e a criação da Comunidade Jesus
                      Misericordioso, no dia 26 de fevereiro de 2007, foi
                      definido o seu primeiro CPC.
                    </p>
                    <p>
                      A comunidade está localizada hoje na Rua das Violetas. Em
                      2012 contou com a criação de um moderno projeto criado
                      pelo Pe. Otávio Antunes, o qual não foi possível de se
                      concretizar ainda devido às leis de zoneamento do
                      município presentes na Lei de Ordenamento Territorial
                      (LOT), que permitem apenas 350m² na região.
                    </p>
                  </motion.div>
                )}

                {activeTab === "devocao" && (
                  <motion.div
                    key="devocao"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="prose prose-zinc prose-lg text-zinc-600 font-light leading-relaxed space-y-6"
                  >
                    <figure className="my-8">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Eugeniusz_Kazimirowski_-_Divine_Mercy_-_Google_Art_Project.jpg/800px-Eugeniusz_Kazimirowski_-_Divine_Mercy_-_Google_Art_Project.jpg"
                        alt="Pintura Original da Divina Misericórdia"
                        className="w-full rounded-3xl shadow-xl"
                      />
                      <figcaption className="text-center text-zinc-400 text-sm mt-4 italic">
                        "Jesus, eu confio em vós", pintura original por
                        Eugeniusz Kazimirowski (1934).
                      </figcaption>
                    </figure>

                    <p>
                      Nosso Senhor Jesus Cristo desceu do céu e se fez um de nós
                      para revelar o amor e a misericórdia de Deus. Os quatro
                      Evangelhos relatam abundantemente fatos em que Jesus se
                      revela misericordioso.
                    </p>
                    <p>
                      Porém, como se não bastasse, e como a humanidade tem
                      dificuldade para crer na misericórdia de Deus, Jesus
                      Misericordioso se revelou recentemente, no Século XX, a{" "}
                      <strong>Santa Faustina Kowalska</strong>.
                    </p>
                    <p>
                      Essas revelações são reconhecidas pela Igreja e trazem
                      esperança na misericórdia de Deus mas, também,
                      responsabilidade sobre nossos atos. Através da imagem
                      revelada, Jesus pede que confiemos infinitamente em Sua
                      bondade e compaixão por todos os pecadores.
                    </p>
                  </motion.div>
                )}

                {activeTab === "coordenacoes" && (
                  <motion.div
                    key="coordenacoes"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  >
                    {coordenacoes.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:border-amber-200 transition-colors group"
                      >
                        <span className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-1 block">
                          {item.pastoral}
                        </span>
                        <div className="flex items-center gap-2">
                          <HeartHandshake className="w-4 h-4 text-zinc-400 group-hover:text-amber-500 transition-colors" />
                          <span className="text-zinc-800 font-medium">
                            {item.nome}
                          </span>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="lg:col-span-5 sticky top-32">
            <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-xl border border-zinc-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-[40px] rounded-full pointer-events-none"></div>

              <h3 className="font-serif text-3xl text-zinc-900 mb-8 flex items-center gap-3">
                <Calendar className="w-6 h-6 text-amber-600" />
                Horários de Missa
              </h3>

              <div className="space-y-6 mb-12">
                {massTimes.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center border-b border-zinc-50 pb-4"
                  >
                    <span className="text-zinc-900 font-medium">
                      {item.day}
                    </span>
                    <span className="text-zinc-500 font-mono text-sm uppercase tracking-tighter text-right">
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                    <MapPin className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">
                      Localização
                    </span>
                    <p className="text-zinc-800 text-sm leading-relaxed">
                      Rua das Violetas, 330 - Boa Vista, Joinville - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">
                      Telefone da Secretaria
                    </span>
                    <p className="text-zinc-800 text-sm">(47) 3227-7572</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/554732277572"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-semibold mt-12 hover:bg-amber-600 transition-all flex items-center justify-center gap-2 group"
              >
                Falar no WhatsApp
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
