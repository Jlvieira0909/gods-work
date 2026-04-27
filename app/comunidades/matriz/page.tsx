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
  History,
  BookOpen,
  Sparkles,
} from "lucide-react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function MatrizPage() {
  const [activeTab, setActiveTab] = useState<
    "historia" | "parocos" | "padroeira"
  >("historia");

  const massTimes = [
    { day: "Sábados", time: "19h00" },
    { day: "Domingos", time: "08h00 e 19h00" },
    { day: "Quartas-feiras", time: "19h30 (Novena)" },
    { day: "Quintas-feiras", time: "16h00 (Missa da Saúde)" },
  ];

  const parocos = [
    {
      num: "1º",
      nome: "Pe. Helmuth Berkembrock",
      desc: "A Igreja no mundo inteiro passa pela transformação do Concílio Vaticano II: os leigos devem assumir seu protagonismo. Árdua tarefa de construir uma nova igreja.",
    },
    {
      num: "2º",
      nome: "Pe. Felício Girelli",
      desc: "Pastor acolhedor e amigo das famílias. Término da construção da igreja-templo, que logo recebeu a alcunha de 'igreja redonda'.",
    },
    {
      num: "3º",
      nome: "Monsenhor Boleslau",
      desc: "Igreja assume papel social. Pastor que acolhe os pobres e humildes, muitos migrantes em busca de melhor condição de vida.",
    },
    {
      num: "4º",
      nome: "Pe. Floriano",
      desc: "Criação da Comunidade Santa Luzia. Igreja que acolhe a todos, sem distinção, com forte formação de lideranças.",
    },
    {
      num: "5º",
      nome: "Pe. Dulcio",
      desc: "Nascimento dos Grupos Bíblicos de Reflexão, Pastoral da Juventude, movimentos familiares e uma liturgia com muita intensidade.",
    },
    {
      num: "6º",
      nome: "Pe. Gilberto",
      desc: "Igreja jovem, renovada e ministerial. Criação de novas comunidades e fortalecimento do compromisso social.",
    },
    {
      num: "7º",
      nome: "Pe. Ivanor",
      desc: "Implantação sistemática do dízimo, reforma da matriz e unificação das comunidades formando a Jesus Misericordioso.",
    },
    {
      num: "8º",
      nome: "Pe. Otávio (2008 - 2016)",
      desc: "Resgate da espiritualidade, missões populares, novo método para a catequese e grandes celebrações do jubileu de 50 anos.",
    },
  ];

  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans selection:bg-amber-900 selection:text-amber-50">
      <Header />

      <section className="relative h-[70vh] w-full bg-zinc-950 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/920a1defb50d636a857f918eadbeee7d.jpg"
            alt="Igreja Matriz"
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
              <span className="text-amber-200 italic font-light">Matriz</span>
            </h1>
            <p className="text-zinc-300 text-lg max-w-xl font-light leading-relaxed">
              Centro de nossa vida paroquial no bairro Boa Vista, acolhendo
              gerações sob o manto da Imaculada Conceição.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          <div className="lg:col-span-7">
            <span className="text-amber-600 font-medium tracking-widest text-xs uppercase mb-6 block">
              Memória Paroquial
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-8 leading-tight">
              A origem e evolução <br /> da nossa fé
            </h2>

            <div className="flex flex-wrap items-center gap-6 border-b border-zinc-200 mb-10">
              <button
                onClick={() => setActiveTab("historia")}
                className={`pb-4 text-sm font-medium uppercase tracking-widest transition-colors flex items-center gap-2 ${
                  activeTab === "historia"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <History className="w-4 h-4" />
                História
              </button>
              <button
                onClick={() => setActiveTab("parocos")}
                className={`pb-4 text-sm font-medium uppercase tracking-widest transition-colors flex items-center gap-2 ${
                  activeTab === "parocos"
                    ? "text-amber-600 border-b-2 border-amber-600"
                    : "text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Users className="w-4 h-4" />
                Párocos
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
                Nossa Padroeira
              </button>
            </div>

            <div className="min-h-[600px]">
              <AnimatePresence mode="wait">
                {activeTab === "historia" && (
                  <motion.div
                    key="historia"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="prose prose-zinc prose-lg text-zinc-600 font-light leading-relaxed space-y-6"
                  >
                    <p>
                      Em 1932, quando ainda não havia uma igreja na região, foi
                      celebrada a primeira Missa no local onde hoje é a
                      Cooperativa Tupy, na então casa do Sr. Antônio de Oliveira
                      Borges. O Padre Arry Bauer, vigário da Catedral, foi quem
                      presidiu a celebração.
                    </p>
                    <p>
                      Até os anos 50, os fiéis tinham que ir até a Paróquia São
                      Francisco Xavier, atual Catedral, para ir às Missas, como
                      testemunha um paroquiano: "nós saíamos cedo de casa, de pé
                      descalço pra não sujar os sapatos, pois tinha muita lama
                      quando chovia. Quando chegávamos ali onde hoje é a Ciser
                      tinha uma bica d'água onde lavávamos os pés e colocávamos
                      os calçados pra chegar bonitos na igreja".
                    </p>
                    <p>
                      Em 1948, Monsenhor Sebastião Scarzello celebrou uma missa
                      debaixo de uma grande cerejeira, que marcaria o local da
                      capela, no terreno do Sr. Abílio do Amaral, atual matriz.
                      Pouco depois, Frei Salvador e um grupo de senhores criaram
                      a primeira "diretoria".
                    </p>
                    <p>
                      Após muitos esforços, em 08 de maio de 1955, a capela já
                      estava erguida. O sonho tornara-se realidade, a Boa vista
                      tinha sua igreja.
                    </p>
                    <p>
                      A Paróquia nasce com o Concílio Vaticano II em 1965. A
                      paróquia Imaculada Conceição foi criada no mesmo ano em
                      que terminou o Concílio. A tarefa da evangelização não é
                      mais restringida apenas ao padre, mas a todo batizado. O
                      cristão é convidado não apenas a "estar" na Igreja, mas
                      "ser" Igreja.
                    </p>
                    <p>
                      Com o passar dos anos e o crescimento da população,
                      surgiram novas comunidades irmãs para a matriz, como a
                      Comunidade Santa Luzia em 1991 e, mais tarde, com a
                      unificação de outras áreas, a comunidade Jesus
                      Misericordioso.
                    </p>
                  </motion.div>
                )}

                {activeTab === "parocos" && (
                  <motion.div
                    key="parocos"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {parocos.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-white border border-zinc-100 rounded-2xl shadow-sm hover:border-amber-200 transition-colors group"
                      >
                        <div className="flex items-center gap-4 mb-3">
                          <span className="w-10 h-10 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center font-serif text-lg group-hover:bg-amber-100 transition-colors shrink-0">
                            {item.num}
                          </span>
                          <h3 className="font-serif text-xl text-zinc-900">
                            {item.nome}
                          </h3>
                        </div>
                        <p className="text-zinc-500 font-light text-sm pl-14 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
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
                    <p>
                      Mais do que memória ou festa de um dos santos de Deus,
                      neste dia estamos solenemente comemorando a Imaculada
                      Conceição de Nossa Senhora, a Rainha de todos os santos.
                    </p>
                    <p>
                      Esta verdade, reconhecida pela Igreja de Cristo, é muito
                      antiga. Muitos padres e doutores da Igreja oriental, ao
                      exaltarem a grandeza de Maria, Mãe de Deus, usavam
                      expressões como: cheia de graça, lírio da inocência, mais
                      pura que os anjos.
                    </p>
                    <p>
                      A Igreja ocidental, que sempre muito amou a Santíssima
                      Virgem, tinha uma certa dificuldade para a aceitação do
                      mistério da Imaculada Conceição. Foi o franciscano João
                      Duns Escoto quem solucionou a dificuldade ao mostrar que
                      era sumamente conveniente que Deus preservasse Maria do
                      pecado original, pois a Santíssima Virgem era destinada a
                      ser mãe do seu Filho.
                    </p>
                    <p>
                      Rapidamente a doutrina da Imaculada Conceição de Maria, no
                      seio de sua mãe Sant'Ana, foi introduzida no calendário
                      romano. A própria Virgem Maria apareceu em 1830 a Santa
                      Catarina Labouré pedindo que se cunhasse uma medalha com a
                      oração: "Ó Maria concebida sem pecado, rogai por nós que
                      recorremos a vós".
                    </p>
                    <p>
                      No dia 8 de dezembro de 1854, através da bula{" "}
                      <em>Ineffabilis Deus</em> do Papa Pio IX, a Igreja
                      oficialmente reconheceu e declarou solenemente como dogma:
                      "Maria isenta do pecado original".
                    </p>
                    <p>
                      A própria Virgem Maria, na sua aparição em Lourdes, em
                      1858, confirmou a definição dogmática e a fé do povo
                      dizendo para Santa Bernadette e para todos nós: "Eu Sou a
                      Imaculada Conceição".
                    </p>
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
                      Rua Albano Schmidt, 1885 - Boa Vista, Joinville - SC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-amber-50 rounded-lg shrink-0">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-zinc-400 text-xs uppercase tracking-widest block mb-1">
                      Telefone
                    </span>
                    <p className="text-zinc-800 text-sm">(47) 3028-5061</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contato"
                className="w-full bg-zinc-950 text-white py-4 rounded-2xl font-semibold mt-12 hover:bg-amber-600 transition-all flex items-center justify-center gap-2 group"
              >
                Falar com a Secretaria
                <Users className="w-4 h-4 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1548625361-ecde2bbcd529?q=80&w=1000&auto=format&fit=crop"
            alt="Interior Sacro"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <Church
            className="w-12 h-12 text-amber-500 mx-auto mb-8"
            strokeWidth={1}
          />
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-100 mb-6 italic">
            Participe ativamente
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-12">
            A vida em nossa Matriz é feita pela união de todos. Conheça as
            formas de se engajar e servir ao próximo.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Pastorais", "Movimentos", "Dízimo", "Eventos"].map((item) => (
              <div
                key={item}
                className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-zinc-300 text-sm font-medium hover:border-amber-500/50 transition-colors cursor-default"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
