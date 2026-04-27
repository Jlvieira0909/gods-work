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

export default function SantaLuziaPage() {
  const [activeTab, setActiveTab] = useState<
    "comunidade" | "padroeira" | "coordenacoes"
  >("comunidade");

  const massTimes = [
    { day: "Sábados", time: "17h00" },
    { day: "Domingos", time: "08h00" },
    { day: "1ª Sexta-feira", time: "19h30" },
    { day: "Todo dia 13", time: "19h30" },
  ];

  const coordenacoes = [
    { pastoral: "CMPC", nome: "Rosileide (vice Claudio)" },
    { pastoral: "Financeiro", nome: "Luiz" },
    { pastoral: "Patrimônio", nome: "Santo e Anésio" },
    { pastoral: "Catequese do Crisma", nome: "Maria Carolina e Rene" },
    { pastoral: "Catequese da Eucaristia", nome: "Ivânia" },
    { pastoral: "Liturgia", nome: "Marize" },
    { pastoral: "Dízimo", nome: "Adilene" },
    { pastoral: "Ministro da Eucaristia", nome: "Marlene" },
    { pastoral: "Ministro da Acolhida", nome: "Marlene" },
    { pastoral: "Coroinhas", nome: "Rafael" },
    { pastoral: "Acólitos", nome: "Jairo e Soraia" },
    { pastoral: "Terço dos Homens", nome: "José Orlando" },
    { pastoral: "Apostolado da Oração", nome: "Teresinha" },
    { pastoral: "Kairós", nome: "Vinicius" },
    { pastoral: "GBR", nome: "José" },
    { pastoral: "Música", nome: "Manoel e Abraão" },
    { pastoral: "Legião de Maria", nome: "Eronita" },
    { pastoral: "Ação Social", nome: "José Roberto e Silvane" },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans selection:bg-amber-900 selection:text-amber-50">
      <Header />

      <section className="relative h-[70vh] w-full bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/file.jpg"
            alt="Comunidade Santa Luzia"
            className="w-full h-full object-cover brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
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
              Comunidade <br />
              <span className="text-amber-200 italic font-light">
                Santa Luzia
              </span>
            </h1>
            <p className="text-zinc-300 text-lg max-w-xl font-light leading-relaxed">
              Uma comunidade vibrante e acolhedora, construída sob a proteção e
              a luz da virgem mártir de Siracusa.
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
                onClick={() => setActiveTab("padroeira")}
                className={`pb-4 text-sm font-medium uppercase tracking-widest transition-colors flex items-center gap-2 ${
                  activeTab === "padroeira"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Sparkles className="w-4 h-4" />
                Santa Luzia
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
                      Situada na Rua Alcântara, em dezembro de 1991 nascia a
                      segunda comunidade da Paróquia, a Santa Luzia. A padroeira
                      escolhida pelo <strong>Padre Floriano</strong> está
                      diretamente ligada ao nome do loteamento onde se encontra
                      a comunidade.
                    </p>
                    <p>
                      No início, as celebrações aconteciam no Colégio Albano
                      Schmidt e a inauguração da nova capela se deu no dia 13 de
                      dezembro de 1991, quando foi trazida da matriz uma imagem
                      de Santa Luzia em grande procissão. Neste dia, ao chegarem
                      na porta da capela, Pe. Floriano reuniu os fiéis
                      emocionados com uma bela pregação onde dizia que ali
                      nascia a <em>"Comunidade da Esperança"</em>. Logo após,
                      Madre Amélia cortava a fita para que os fiéis entrassem na
                      nova igreja.
                    </p>
                    <p>
                      Tivemos em nossa história muitos momentos marcantes de
                      espiritualidade e ação conjunta para a construção de uma
                      nova igreja. Um destes momentos foi a dedicação de nossa
                      igreja em 13 de dezembro de 2015, onde todo o nosso
                      ambiente sagrado recebeu esta unção.
                    </p>
                    <p>
                      A Comunidade Santa Luzia sempre contou com lideranças
                      leigas muito atuantes e unidas, obstinadas em construir
                      uma igreja humana e material. Somos pessoas oriundas de
                      diversas partes do país, acolhidos por Jesus o Bom Pastor.
                    </p>
                    <p>
                      As <strong>Irmãs Canossianas</strong> sempre tiveram papel
                      importante na vida da comunidade, e nos dão o impulso para
                      sermos uma igreja vibrante e unida em todos estes anos.
                      Sob a proteção de nossa padroeira Santa Luzia, a
                      intercessão de Santa Madalena de Canossa e Santa Bakhita,
                      nos unimos a Santa Maria, Mãe de Deus e das Dores.
                    </p>
                  </motion.div>
                )}

                {activeTab === "padroeira" && (
                  <motion.div
                    key="padroeira"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="prose prose-zinc prose-lg text-zinc-600 font-light leading-relaxed space-y-6"
                  >
                    <figure className="my-8">
                      <img
                        src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/file.jpg"
                        alt="Pintura Clássica de Santa Luzia"
                        className="w-full rounded-3xl shadow-xl"
                      />
                      <figcaption className="text-center text-zinc-400 text-sm mt-4 italic">
                        Santa Luzia, protetora dos olhos.
                      </figcaption>
                    </figure>

                    <p>
                      O nome de Santa Luzia vem do latim e significa{" "}
                      <em>portadora da luz</em>. Ela é invocada pelos fiéis como
                      a protetora dos olhos, que são a "janela da alma", nosso
                      verdadeiro canal de luz.
                    </p>
                    <p>
                      Santa Luzia nasceu em Siracusa (Itália) no fim do século
                      III. Conta-se que pertencia a uma família italiana rica,
                      que lhe deu ótima formação cristã, a ponto de ter feito um
                      voto de viver a virgindade perpétua. Porém, com a morte do
                      pai, Luzia soube que sua mãe queria vê-la casada com um
                      jovem de distinta família, porém, pagão.
                    </p>
                    <p>
                      Ao pedir um período para analisar o casamento e tendo a
                      mãe gravemente enferma, Santa Luzia propôs à mãe que
                      fossem em romaria ao túmulo da mártir Santa Águeda e que a
                      cura da grave doença seria a confirmação do "não" para o
                      casamento.
                    </p>
                    <p>
                      Milagrosamente, foi o que ocorreu logo com a chegada das
                      romeiras. Assim, Santa Luzia voltou para Siracusa com a
                      certeza da vontade de Deus. Ela vendeu tudo, deu aos
                      pobres, e logo foi acusada pelo jovem que a queria como
                      esposa.
                    </p>
                    <p>
                      Não querendo oferecer sacrifício aos falsos deuses nem
                      quebrar o seu santo voto, ela enfrentou as autoridades
                      perseguidoras. Conta-se que antes de sua morte teriam
                      arrancado os seus olhos. O prefeito da cidade, Pascásio,
                      quis levar à desonra a virgem cristã, mas não houve força
                      humana que a pudesse arrastar. Firme como um monte de
                      granito, várias juntas de bois não foram capazes de a
                      levar.
                    </p>
                    <p>
                      As chamas do fogo também se mostravam impotentes diante
                      dela, até que por fim a espada acabou com vida tão
                      preciosa. A decapitação de Santa Luzia se deu no ano de
                      303.
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
                    <span className="text-zinc-500 font-mono text-sm uppercase tracking-tighter">
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
                      Rua Alcântara, 830 - Boa Vista, Joinville - SC
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
                    <p className="text-zinc-800 text-sm">(47) 3432-0913</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/554734320913"
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
