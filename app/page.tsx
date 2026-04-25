import {
  ArrowUpRight,
  Clock,
  MapPin,
  Heart,
  BookOpen,
  Play,
} from "lucide-react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SantoDoDia from "./components/SantoDoDia/SantoDoDia";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans selection:bg-amber-900 selection:text-amber-50">
      <Header />

      <section className="relative w-full min-h-[90vh] flex flex-col justify-end p-4 md:p-8 overflow-hidden">
        <div className="absolute inset-0 bg-zinc-950">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/InmaculadaConcepcion_071215.jpg"
            alt="Pintura Clássica Anjos"
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8 pb-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-zinc-100 leading-[0.9] tracking-tight mb-6">
              Imaculada <br />
              <span className="text-amber-200 italic font-light">
                Conceição
              </span>
            </h1>
            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-md">
              Uma comunidade de fé no bairro Boa Vista. Tradição, acolhimento e
              a presença viva do Cristo.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-2xl w-full md:w-80 shrink-0">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="text-zinc-200 text-sm font-medium tracking-wide">
                Próxima Missa
              </span>
            </div>
            <div className="text-3xl font-serif text-white mb-1">
              Hoje, 19h30
            </div>
            <div className="text-zinc-400 text-sm mb-6">
              Matriz Imaculada Conceição
            </div>
            <button className="w-full bg-white text-zinc-950 hover:bg-amber-50 transition-colors py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 group">
              Ver todos os horários
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-24 max-w-7xl mx-auto w-full relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 bg-zinc-200 rounded-3xl p-8 md:p-12 relative overflow-hidden group cursor-pointer h-[400px] flex flex-col justify-end">
            <img
              src="https://paroquiaboavista.com.br/wp-content/uploads/2022/12/2a500e28362b7d84bee8638386a78554.jpg"
              alt="Nossa Senhora"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="relative z-10">
              <span className="text-amber-300 font-medium tracking-widest text-xs uppercase mb-3 block">
                Nossa Padroeira
              </span>
              <h2 className="font-serif text-3xl md:text-5xl text-white mb-4">
                Conheça a história da Imaculada
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-4 md:gap-6">
            <div className="bg-white rounded-3xl p-8 border border-zinc-200 hover:border-amber-200 hover:shadow-xl transition-all group cursor-pointer flex-1 flex flex-col justify-between">
              <Heart
                className="w-8 h-8 text-amber-600 mb-4"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-serif text-2xl text-zinc-900 mb-2">
                  Dízimo
                </h3>
                <p className="text-zinc-500 text-sm">
                  Devolva a Deus com alegria aquilo que Ele te deu com amor.
                </p>
              </div>
            </div>
            <div className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-zinc-700 transition-all group cursor-pointer flex-1 flex flex-col justify-between">
              <BookOpen
                className="w-8 h-8 text-zinc-300 mb-4"
                strokeWidth={1.5}
              />
              <div>
                <h3 className="font-serif text-2xl text-white mb-2">
                  Liturgia Diária
                </h3>
                <p className="text-zinc-400 text-sm">
                  Acompanhe as leituras e o Evangelho de hoje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 max-w-7xl mx-auto w-full relative z-20">
        <SantoDoDia />
      </section>

      <section className="py-24 px-4 bg-zinc-100">
        <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <span className="text-amber-600 font-medium tracking-widest text-xs uppercase mb-6 block">
              Homilia da Semana
            </span>
            <h2 className="font-serif text-4xl md:text-6xl text-zinc-900 mb-8 leading-tight">
              Sexta-feira Santa: Quem é o Cristo pra você?
            </h2>
            <p className="text-zinc-600 text-lg mb-10 leading-relaxed font-light">
              Nesta reflexão profunda, Padre Hugo Marques nos convida a olhar
              para a cruz não apenas como um símbolo histórico, mas como um
              espelho da nossa própria jornada espiritual nos dias de hoje.
            </p>
            <a
              href="https://www.youtube.com/watch?v=XRVSjYDxioc&t=4s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium hover:bg-amber-900 transition-colors flex items-center gap-3 group"
            >
              <Play className="w-4 h-4 fill-white group-hover:fill-amber-100 transition-colors" />
              Ver no YouTube
            </a>
          </div>

          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-video rounded-3xl overflow-hidden relative shadow-2xl">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/XRVSjYDxioc?start=4"
                title="Homilia da Semana"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="absolute -bottom-8 -left-8 md:-bottom-12 md:-left-12 bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-zinc-100 max-w-[280px] hidden md:block">
              <div className="font-serif text-4xl text-amber-600 mb-2">"</div>
              <p className="text-zinc-800 italic text-sm md:text-base font-serif mb-4 leading-relaxed">
                Para mim, ser devota da Imaculada Conceição é assim, quando eu
                estou bem eu levo Jesus para as pessoas...
              </p>
              <span className="text-zinc-400 text-xs uppercase tracking-widest font-medium block">
                Ivânia Bertoldi
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-4 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-zinc-900 mb-4">
              Nossas Comunidades
            </h2>
            <p className="text-zinc-500">
              Encontre a igreja mais próxima de você.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Matriz Imaculada",
              address: "Rua Albano Schmidt, 1885",
              img: "https://paroquiaboavista.com.br/wp-content/uploads/2022/11/920a1defb50d636a857f918eadbeee7d.jpg",
            },
            {
              name: "Santa Luzia",
              address: "Rua das Oliveiras, 120",
              img: "https://paroquiaboavista.com.br/wp-content/uploads/2022/11/file.jpg",
            },
            {
              name: "Jesus Misericordioso",
              address: "Av. Júpiter, 450",
              img: "https://paroquiaboavista.com.br/wp-content/uploads/2023/02/74530024fa785ed0ebfe7109f4bbfdbd.jpg",
            },
          ].map((church, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden mb-6 relative">
                <img
                  src={church.img}
                  alt={church.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 mb-2">
                {church.name}
              </h3>
              <div className="flex items-center gap-2 text-zinc-500">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{church.address}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
