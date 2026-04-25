import { Clock, Calendar, MapPin, Bell } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function HorariosPage() {
  const comunidades = [
    {
      nome: "Matriz Imaculada Conceição",
      cor: "border-amber-500/30",
      missas: [
        { dia: "Sábados", hora: "19h00" },
        { dia: "Domingos", hora: "08h00 e 19h00" },
        { dia: "Quartas-feiras", hora: "19h30 (Novena)" },
        { dia: "Quintas-feiras", hora: "16h00 (Missa da Saúde)" },
      ],
    },
    {
      nome: "Comunidade Santa Luzia",
      cor: "border-zinc-800",
      missas: [
        { dia: "Sábados", hora: "17h00" },
        { dia: "Domingos", hora: "08h00" },
        { dia: "1ª Sexta-feira", hora: "19h30" },
        { dia: "Todo dia 13", hora: "19h30" },
      ],
    },
    {
      nome: "Comunidade Jesus Misericordioso",
      cor: "border-zinc-800",
      missas: [
        { dia: "Domingos", hora: "09h30" },
        { dia: "2ª Sexta-feira", hora: "15h00" },
      ],
    },
  ];

  const agendaSemanal = [
    {
      dia: "Segunda-feira",
      evento: "Terço dos Homens",
      hora: "20h00",
      local: "Matriz",
    },
    {
      dia: "Terça-feira",
      evento: "Grupo de Oração",
      hora: "19h30",
      local: "Santa Luzia",
    },
    {
      dia: "Quarta-feira",
      evento: "Novena Perpétua",
      hora: "19h30",
      local: "Matriz",
    },
    {
      dia: "Quinta-feira",
      evento: "Adoração ao Santíssimo",
      hora: "08h às 18h",
      local: "Matriz",
    },
    {
      dia: "Sexta-feira",
      evento: "Atendimento de Confissões",
      hora: "14h às 17h",
      local: "Secretaria",
    },
    {
      dia: "Sábado",
      evento: "Catequese Paroquial",
      hora: "09h00",
      local: "Todas as Comunidades",
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
            className="w-full h-full object-cover filter grayscale"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="text-amber-500 font-medium tracking-[0.3em] uppercase text-xs mb-4 block">
            Liturgia e Vida
          </span>
          <h1 className="font-serif text-5xl md:text-7xl text-zinc-100">
            Horários de Celebrações
          </h1>
        </div>
      </section>

      <section className="py-24 px-4 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comunidades.map((item, index) => (
            <div
              key={index}
              className={`bg-white p-8 md:p-12 rounded-[2.5rem] border ${item.cor} shadow-sm flex flex-col h-full`}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-zinc-100 rounded-lg">
                  <MapPin className="w-5 h-5 text-zinc-900" />
                </div>
                <h2 className="font-serif text-2xl text-zinc-900">
                  {item.nome}
                </h2>
              </div>

              <div className="flex flex-col gap-6 flex-1">
                {item.missas.map((missa, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-end border-b border-zinc-100 pb-4"
                  >
                    <div className="flex flex-col">
                      <span className="text-zinc-400 text-xs uppercase tracking-wider mb-1">
                        {missa.dia}
                      </span>
                      <span className="text-zinc-900 font-medium">
                        {missa.hora}
                      </span>
                    </div>
                    <Clock className="w-4 h-4 text-amber-600/40" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-zinc-900 text-zinc-100 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex p-3 bg-white/5 rounded-2xl mb-6">
              <Calendar className="w-6 h-6 text-amber-500" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl mb-4">
              Agenda da Semana
            </h2>
            <p className="text-zinc-400 font-light">
              Acompanhe as atividades e encontros de nossa paróquia.
            </p>
          </div>

          <div className="space-y-4">
            {agendaSemanal.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 md:p-8 rounded-3xl border border-white/5 bg-white/0 hover:bg-white/5 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12">
                  <div className="text-amber-500 font-serif text-xl w-32">
                    {item.dia}
                  </div>
                  <div>
                    <div className="text-zinc-100 font-medium text-lg mb-1 group-hover:text-amber-200 transition-colors">
                      {item.evento}
                    </div>
                    <div className="text-zinc-500 text-sm flex items-center gap-2">
                      <MapPin className="w-3 h-3" />
                      {item.local}
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 flex items-center gap-3 text-zinc-400 font-mono text-sm">
                  <Bell className="w-4 h-4 text-amber-600" />
                  {item.hora}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 text-center bg-zinc-50">
        <div className="max-w-5xl mx-auto bg-zinc-950 p-12 md:p-16 rounded-[3rem] border border-zinc-900 shadow-2xl relative overflow-hidden flex flex-col items-center">
          <div className="absolute inset-0 opacity-10">
            <img
              src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/InmaculadaConcepcion_071215.jpg"
              alt="Textura"
              className="w-full h-full object-cover filter grayscale mix-blend-screen"
            />
          </div>
          <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>

          <div className="relative z-10 max-w-2xl">
            <h3 className="font-serif text-3xl md:text-4xl text-zinc-100 mb-6">
              Atendimento da Secretaria
            </h3>
            <p className="text-zinc-400 mb-10 font-light leading-relaxed text-lg">
              Precisa marcar uma intenção de missa ou falar com o Padre? Nossa
              secretaria atende de
              <span className="text-amber-400 font-medium">
                {" "}
                Segunda a Sexta, das 08h às 12h e das 13h30 às 18h
              </span>
              .
            </p>
            <a
              href="/contato"
              className="inline-block bg-white text-zinc-950 px-10 py-4 rounded-full text-sm font-semibold hover:bg-amber-50 transition-colors"
            >
              Falar com a Secretaria
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
