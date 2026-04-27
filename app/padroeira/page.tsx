import { Sparkles, Heart, Quote, CalendarDays } from "lucide-react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function PadroeiraPage() {
  return (
    <main className="min-h-screen bg-zinc-50 flex flex-col font-sans selection:bg-amber-900 selection:text-amber-50">
      <Header />

      <section className="relative h-[80vh] w-full bg-zinc-950 flex flex-col justify-end p-6 md:p-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://paroquiaboavista.com.br/wp-content/uploads/2022/12/2a500e28362b7d84bee8638386a78554.jpg"
            alt="Imaculada Conceição"
            className="w-full h-full object-cover brightness-90 object-top md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-start pb-8 md:pb-16">
          <span className="text-amber-400 font-medium tracking-[0.4em] uppercase text-xs mb-6 flex items-center gap-3">
            <Sparkles className="w-4 h-4" />
            Nossa Padroeira
          </span>
          <h1 className="font-serif text-5xl md:text-8xl text-zinc-100 leading-[1] tracking-tight mb-6 max-w-4xl drop-shadow-2xl">
            A Imaculada <br />
            <span className="text-amber-200 italic font-light">Conceição</span>
          </h1>
        </div>
      </section>

      <section className="py-24 px-4 w-full relative z-20 -mt-16 md:-mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-4 lg:col-start-1">
            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-zinc-100 sticky top-32">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6">
                <CalendarDays className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-serif text-2xl text-zinc-900 mb-2">
                Festa Padroeira
              </h3>
              <p className="text-zinc-500 mb-6 font-light">
                Comemorada solenemente em todo o mundo no dia 8 de Dezembro.
              </p>

              <div className="w-full h-px bg-zinc-100 mb-6"></div>

              <h3 className="font-serif text-2xl text-zinc-900 mb-2">Oração</h3>
              <p className="text-zinc-600 italic font-serif text-sm leading-relaxed mb-6">
                "Ó Maria concebida sem pecado, rogai por nós que recorremos a
                vós. Protegei nossa comunidade do Boa Vista e guiai nossos
                passos até o vosso Filho Jesus."
              </p>

              <a
                href="/intencoes"
                className="w-full bg-zinc-50 text-zinc-900 border border-zinc-200 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-100 hover:border-zinc-300 transition-colors flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 text-amber-600" />
                Deixe a sua intenção
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 flex flex-col pt-8 md:pt-16">
            <div className="prose prose-zinc prose-lg md:prose-xl font-light text-zinc-600 leading-relaxed max-w-none">
              <p className="first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:text-amber-600 first-letter:float-left first-letter:mr-6 first-letter:mt-2">
                Mais do que uma memória ou festa de um dos santos de Deus, no
                dia 8 de dezembro a Igreja comemora solenemente a Imaculada
                Conceição de Nossa Senhora, a Rainha de todos os santos. É a
                celebração de um mistério profundo da nossa fé e a identidade da
                nossa paróquia.
              </p>

              <p className="mt-8">
                O dogma da Imaculada Conceição foi proclamado pelo Papa Pio IX
                em 1854, através da bula <em>Ineffabilis Deus</em>. Ele declara
                que a Virgem Maria, desde o primeiro instante de sua concepção,
                por singular graça e privilégio de Deus Todo-Poderoso, em vista
                dos méritos de Jesus Cristo, foi preservada imune de toda mancha
                da culpa original.
              </p>

              <div className="my-16 relative">
                <div className="absolute -left-4 md:-left-12 top-0 bottom-0 w-1 bg-amber-200 rounded-full"></div>
                <Quote className="w-12 h-12 text-amber-500/20 absolute -top-6 -left-2 md:-left-8" />
                <h2 className="font-serif text-3xl md:text-4xl text-zinc-900 leading-tight italic pl-6 md:pl-0">
                  "Deus a escolheu e preparou para ser a morada digna de seu
                  Filho."
                </h2>
              </div>

              <p>
                Para nossa comunidade do Boa Vista, ter a Imaculada Conceição
                como padroeira é um chamado constante à pureza de coração e à
                caridade. A figura de Maria nos ensina que a verdadeira grandeza
                está na humildade e no "sim" confiante aos planos de Deus.
              </p>

              <figure className="my-12">
                <img
                  src="https://paroquiaboavista.com.br/wp-content/uploads/2022/11/920a1defb50d636a857f918eadbeee7d.jpg"
                  alt="Interior da Matriz"
                  className="w-full rounded-3xl shadow-2xl"
                />
                <figcaption className="text-center text-zinc-400 text-sm mt-4 italic">
                  A presença viva da comunidade.
                </figcaption>
              </figure>

              <h3 className="font-serif text-3xl text-zinc-900 mt-16 mb-6">
                Uma Devoção que Atravessa Gerações
              </h3>

              <p>
                A história da nossa paróquia se funde com a devoção mariana. Há
                mais de 60 anos, os pioneiros do bairro Boa Vista se reuniam em
                nome da Virgem Imaculada, construindo não apenas um templo de
                pedras, mas uma comunidade viva, solidária e missionária.
              </p>

              <p className="mt-8">
                Sempre que contemplamos a imagem de Nossa Senhora no altar
                central de nossa Matriz, somos convidados a levar Jesus às
                pessoas que sofrem, aos enfermos e aos que buscam sentido para a
                vida. Como disse uma de nossas paroquianas:{" "}
                <em>
                  "A Imaculada Conceição é uma graça muito grande; o meu amor
                  por Ela e o dela por mim é infinito e sem palavras."
                </em>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 text-center px-4 relative overflow-hidden mt-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <Sparkles className="w-10 h-10 text-amber-500 mb-8" />
          <h2 className="font-serif text-4xl md:text-5xl text-zinc-100 mb-6 leading-tight">
            Venha conhecer nossa comunidade
          </h2>
          <p className="text-zinc-400 text-lg font-light mb-10">
            Participe das nossas celebrações e faça parte desta grande família
            dedicada à Mãe de Deus.
          </p>
          <a
            href="/horarios"
            className="bg-amber-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition-colors"
          >
            Ver horários de Missa
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
