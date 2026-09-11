import Reveal from "./components/Reveal";
import Slideshow from "./components/Slideshow";
import { WhatsAppIcon, InstagramIcon, MailIcon } from "./components/icons";
import heroClinic from "./assets/hero-clinic.jpg";
import perfil from "./assets/perfil.jpg";
import sobre01 from "./assets/sobre-01.jpg";
import sobre02 from "./assets/sobre-02.jpg";
import sobre03 from "./assets/sobre-03.jpg";
import sobre04 from "./assets/sobre-04.jpg";
import resultado01 from "./assets/resultado-01.jpg";
import resultado02 from "./assets/resultado-02.jpg";
import resultado03 from "./assets/resultado-03.jpg";
import resultado04 from "./assets/resultado-04.jpg";
import resultado05 from "./assets/resultado-05.jpg";
import resultado06 from "./assets/resultado-06.jpg";
import resultado07 from "./assets/resultado-07.jpg";
import resultado08 from "./assets/resultado-08.jpg";
import resultado09 from "./assets/resultado-09.jpg";
import resultado10 from "./assets/resultado-10.jpg";
import resultado11 from "./assets/resultado-11.jpg";
import resultado12 from "./assets/resultado-12.jpg";
import resultado13 from "./assets/resultado-13.jpg";
import resultado14 from "./assets/resultado-14.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/drajulianeklobukoski";
const WHATSAPP_URL = "https://wa.me/5515991424605";
const EMAIL_URL = "mailto:juhklobukoski@gmail.com";
const EMAIL_LABEL = "juhklobukoski@gmail.com";
const WHATSAPP_LABEL = "(15) 99142-4605";

const contactLinks = [
  { label: "WhatsApp", value: WHATSAPP_LABEL, href: WHATSAPP_URL, Icon: WhatsAppIcon },
  { label: "Instagram", value: "@drajulianeklobukoski", href: INSTAGRAM_URL, Icon: InstagramIcon },
  { label: "E-mail", value: EMAIL_LABEL, href: EMAIL_URL, Icon: MailIcon },
];

const marqueeRowTop = [
  { src: resultado01, alt: "Harmonização facial — antes e depois" },
  { src: resultado02, alt: "Perfil facial — antes e depois" },
  { src: resultado03, alt: "Contorno mandibular — antes e depois" },
  { src: resultado04, alt: "Rinomodelação — antes e depois" },
  { src: resultado05, alt: "Skin care — antes e depois" },
];

const marqueeRowBottom = [
  { src: resultado06, alt: "Perfil masculino — antes e depois" },
  { src: resultado07, alt: "Toxina botulínica — antes e depois" },
  { src: resultado08, alt: "Preenchimento labial — antes e depois" },
  { src: resultado09, alt: "Rejuvenescimento — antes e depois" },
  { src: resultado03, alt: "Definição facial — antes e depois" },
];

const marqueeRowNew = [
  { src: resultado10, alt: "Perfil facial suavizado — antes e depois" },
  { src: resultado11, alt: "Harmonização de perfil — antes e depois" },
  { src: resultado12, alt: "Rejuvenescimento facial — antes e depois" },
  { src: resultado13, alt: "Harmonização facial — antes e depois" },
  { src: resultado14, alt: "Uniformização de pele — antes e depois" },
];

const procedures = [
  {
    n: "01",
    title: "Harmonização Facial",
    text: "Projeto individual de proporções: equilíbrio, leveza e traços que continuam sendo os seus.",
  },
  {
    n: "02",
    title: "Preenchimento Labial",
    text: "Volume, hidratação e desenho natural, respeitando a assinatura do seu sorriso.",
  },
  {
    n: "03",
    title: "Toxina Botulínica",
    text: "Suaviza linhas de expressão mantendo o movimento vivo e a expressão real.",
  },
  {
    n: "04",
    title: "Contorno & Mandíbula",
    text: "Definição de ângulo mandibular e mento para um perfil firme e cinematográfico.",
  },
  {
    n: "05",
    title: "Bioestimuladores",
    text: "Estímulo de colágeno para firmeza progressiva e qualidade de pele a longo prazo.",
  },
  {
    n: "06",
    title: "Protocolos de Pele",
    text: "Skinbooster, peelings e cuidado clínico para textura, viço e uniformidade.",
  },
];

const sobreImages = [
  { src: sobre01, alt: "Dra. Juliane Klobukoski em Madri" },
  { src: sobre02, alt: "Dra. Juliane Klobukoski em Zurique" },
  { src: sobre03, alt: "Dra. Juliane Klobukoski no Coliseu, Roma" },
  { src: sobre04, alt: "Dra. Juliane Klobukoski em Paris" },
];

const methodSteps = [
  {
    n: "01",
    title: "Avaliação",
    text: "Leitura facial completa e escuta do que te incomoda.",
  },
  {
    n: "02",
    title: "Projeto",
    text: "Definição de etapas, técnicas e expectativa de resultado.",
  },
  {
    n: "03",
    title: "Aplicação",
    text: "Técnica precisa, conforto e materiais de alta performance.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    text: "Retorno para ajuste fino e manutenção do resultado.",
  },
];

function MarqueeRow({
  images,
  duration,
  reverse,
}: {
  images: { src: string; alt: string }[];
  duration: number;
  reverse?: boolean;
}) {
  const doubled = [...images, ...images];
  return (
    <div className="marquee-mask overflow-hidden py-3">
      <div
        className="animate-marquee flex w-max gap-5"
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {doubled.map((img, i) => (
          <figure
            key={i}
            className="group relative w-[240px] shrink-0 overflow-hidden rounded-xl border border-border sm:w-[300px]"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-[320px] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06] sm:h-[400px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80" />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              <span>Antes</span>
              <span className="text-gold">Depois</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="relative overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <a href="#top" className="font-display text-sm uppercase tracking-[0.34em] text-gold-gradient">
            JK
          </a>
          <nav className="hidden gap-8 text-xs uppercase tracking-[0.22em] text-muted-foreground md:flex">
            <a href="#resultados" className="transition-colors hover:text-gold">
              Resultados
            </a>
            <a href="#procedimentos" className="transition-colors hover:text-gold">
              Procedimentos
            </a>
            <a href="#metodo" className="transition-colors hover:text-gold">
              Método
            </a>
            <a href="#sobre" className="transition-colors hover:text-gold">
              Sobre
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-gold/40 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-gold transition-all hover:bg-gold hover:text-primary-foreground"
          >
            Agendar
          </a>
        </div>
      </header>

      <section id="top" className="relative h-[100svh] min-h-[640px] w-full">
        <img
          src={heroClinic}
          alt="Clínica de estética avançada com iluminação dourada"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ transform: "scale(1.08)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/55 to-background" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
          <span className="text-[11px] uppercase tracking-[0.4em] text-muted-foreground">Estética Avançada</span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-6xl md:text-7xl">
            Dra. Juliane
            <span className="block text-gold-gradient">Klobukoski</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Traços em equilíbrio, resultado natural e uma leitura de rosto feita para você — não para um padrão.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="glow-gold rounded-full bg-gold px-8 py-3.5 text-xs uppercase tracking-[0.24em] text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Agendar avaliação
            </a>
            <a
              href="#resultados"
              className="text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-gold"
            >
              Ver resultados
            </a>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-8 z-10 flex justify-center">
          <div className="shimmer h-px w-32 bg-gold/60" />
        </div>
      </section>

      <section id="resultados" className="relative -mt-16 py-20 sm:py-28">
        <Reveal className="mx-auto mb-10 max-w-6xl px-6">
          <span className="text-[11px] uppercase tracking-[0.34em] text-gold">Resultados reais</span>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            Antes e depois em movimento contínuo
          </h2>
        </Reveal>

        <MarqueeRow images={marqueeRowTop} duration={80} />
        <MarqueeRow images={marqueeRowBottom} duration={95} reverse />
        <MarqueeRow images={marqueeRowNew} duration={88} />

        <Reveal className="mx-auto mt-10 max-w-6xl px-6">
          <p className="max-w-lg text-sm leading-relaxed text-muted-foreground">
            Cada imagem é de um paciente real. Resultados variam conforme anatomia, protocolo e resposta individual.
          </p>
        </Reveal>
      </section>

      <section id="procedimentos" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.34em] text-gold">Procedimentos</span>
            <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
              Protocolos desenhados rosto a rosto
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {procedures.map((proc) => (
              <Reveal key={proc.n}>
                <article className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-secondary">
                  <span className="font-display text-xs tracking-[0.3em] text-gold/70">{proc.n}</span>
                  <h3 className="mt-6 text-xl font-medium">{proc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{proc.text}</p>
                  <div className="mt-8 h-px w-10 bg-gold/50 transition-all duration-500 group-hover:w-full" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="relative py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.34em] text-gold">O método</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-5xl">
              Diagnóstico, projeto e execução
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              A avaliação começa antes da agulha: análise de proporções, expressão e histórico. A partir daí nasce um
              plano em etapas, com previsibilidade e segurança clínica.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <p className="font-display text-2xl text-gold-gradient sm:text-3xl">+8</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">anos de prática</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold-gradient sm:text-3xl">+2mil</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">procedimentos</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold-gradient sm:text-3xl">100%</p>
                <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-muted-foreground">plano individual</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ol className="surface-card space-y-8 rounded-2xl p-8">
              {methodSteps.map((step) => (
                <li key={step.n} className="flex gap-5">
                  <span className="font-display text-xs text-gold/70">{step.n}</span>
                  <div>
                    <h3 className="text-base font-medium">{step.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      <section id="sobre" className="relative py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.34em] text-gold">Sobre mim</span>
            <div className="mt-6 flex items-center gap-5">
              <img
                src={perfil}
                alt="Dra. Juliane Klobukoski"
                className="h-20 w-20 shrink-0 rounded-full border border-gold/40 object-cover"
              />
              <h2 className="text-2xl font-semibold leading-tight sm:text-4xl">Dra. Juliane Klobukoski</h2>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Em breve, mais sobre a minha trajetória por aqui.
            </p>
          </Reveal>

          <Reveal>
            <Slideshow images={sobreImages} className="aspect-[4/5] w-full sm:aspect-[16/10]" />
          </Reveal>
        </div>
      </section>

      <section className="relative py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">
              Vamos desenhar o seu <span className="text-gold-gradient">antes e depois</span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              Agende sua avaliação e receba um plano feito para o seu rosto.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="glow-gold mt-10 inline-block rounded-full bg-gold px-10 py-4 text-xs uppercase tracking-[0.24em] text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              Falar com a equipe
            </a>

            <div className="mt-12 flex items-center justify-center gap-6">
              {contactLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                  aria-label={label}
                  title={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all hover:bg-gold hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
          <span>Dra. Juliane Klobukoski</span>
          <div className="flex items-center gap-5">
            {contactLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto:") ? undefined : "_blank"}
                rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                aria-label={label}
                title={label}
                className="transition-colors hover:text-gold"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}
