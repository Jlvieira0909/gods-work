import { Calendar } from "lucide-react";

async function fetchSantoDoDia() {
  return {
    nome: "Santa Ludovina",
    dataAtual: new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    }).format(new Date()),
    descricao:
      "Invocada como intercessora dos doentes crônicos, ofereceu todos os seus sofrimentos físicos pela conversão dos pecadores e pelas almas do purgatório.",
    imagem:
      "https://paroquiaboavista.com.br/wp-content/uploads/2022/11/InmaculadaConcepcion_071215.jpg",
  };
}

export default async function SantoDoDia() {
  const santo = await fetchSantoDoDia();

  return (
    <div className="w-full bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col md:flex-row group">
      <div className="w-full md:w-2/5 relative min-h-[300px] md:min-h-full overflow-hidden bg-zinc-950">
        <img
          src={santo.imagem}
          alt={santo.nome}
          className="absolute inset-0 w-full h-full object-cover filter md:sepia-[.3] contrast-125 opacity-60 group-hover:scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-zinc-900 via-zinc-900/40 to-transparent"></div>

        <div className="absolute top-6 left-6 w-12 h-12 border-l border-t border-amber-500/30"></div>
        <div className="absolute bottom-6 right-6 w-12 h-12 border-r border-b border-amber-500/30"></div>
      </div>

      <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center relative z-10 -mt-10 md:mt-0 bg-gradient-to-t md:bg-gradient-to-l from-zinc-900 to-transparent">
        <div className="flex items-center gap-2 mb-6">
          <Calendar className="w-4 h-4 text-amber-500" />
          <span className="text-amber-500 text-xs font-medium uppercase tracking-widest">
            Santo do Dia • {santo.dataAtual}
          </span>
        </div>

        <h3 className="font-serif text-3xl md:text-5xl text-zinc-100 mb-4 leading-tight">
          {santo.nome}
        </h3>

        <p className="text-zinc-400 leading-relaxed font-light mb-8 max-w-lg text-sm md:text-base">
          {santo.descricao}
        </p>

        <button className="w-fit text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors uppercase tracking-wider flex items-center gap-2 border-b border-amber-500/30 hover:border-amber-400 pb-1">
          Ler biografia completa
        </button>
      </div>
    </div>
  );
}
