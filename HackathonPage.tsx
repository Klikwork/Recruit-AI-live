import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Laptop, CreditCard } from 'lucide-react';
import Page from './components/Page';
import { Button, Container, Fact, H2, Lead, Section, Todo } from './components/ui';
import { HACKATHON_CHECKOUT, hackathonPrice } from './data/events';

const price = hackathonPrice();

const recognise = [
  'Je hebt Excel-bestanden die eigenlijk een slimme applicatie zouden moeten zijn.',
  'Je wilt een dashboard om iets helder te laten zien.',
  'Je verzamelt elke maand heel veel data om één rapport te maken.',
  'Je zou willen dat IT het een keer maakt zoals jij het bedoelt.',
];

const beforeAfter: [string, string][] = [
  ['Je legt in een mail uit wat je nodig hebt en wacht op IT.', 'Je opent een werkend voorbeeld en laat zien wat je bedoelt.'],
  ['Elke maand plak je cijfers uit drie bestanden in één rapport.', 'Je hebt een eerste versie van een tool die dat voor je doet.'],
  ['Vibe coding is iets waar je over leest.', 'Je hebt het zelf gedaan, met je eigen idee.'],
];

const programme: { time: React.ReactNode; title: string; body: React.ReactNode }[] = [
  {
    time: '10:00',
    title: 'Wat wij zelf gebouwd hebben',
    body: 'We beginnen met voorbeelden: een to-do-app, een chatbot die meningen van medewerkers uitvraagt en indeelt, en een CRM-systeem.',
  },
  {
    time: <Todo>TIJD</Todo>,
    title: 'Je eigen idee kiezen',
    body: 'Je kiest wat je wilt bouwen. Neem een idee mee, of een Excel-bestand of rapport dat je nu met de hand bijhoudt.',
  },
  { time: <Todo>TIJD</Todo>, title: 'Lunch', body: 'Lunch is inbegrepen.' },
  {
    time: <Todo>TIJD</Todo>,
    title: 'Bouwen',
    body: "Je bouwt je eigen applicatie. Wil je oefenen met recruitmentdata, dan gebruik je onze oefen-ATS met fictieve cv's en vacatures.",
  },
  { time: '16:00', title: 'Afsluiting', body: <Todo>JOUW ECHTE INVULLING VAN DE AFSLUITING HIER</Todo> },
];

const hosts = [
  {
    name: 'Marcel van der Meer',
    role: 'Oprichter van Klikwork Talent Imagineers',
    image: 'https://media-01.imu.nl/storage/klikwork.com/32015/marcel-van-der-meer-portret-1105-hr.jpg',
    linkedin: 'https://www.linkedin.com/in/marcel-vd-meer/',
    bio: 'Marcel heeft duizenden recruiters getraind in AI en automatisering en wereldwijd meer dan 500 bedrijven ondersteund. Hij helpt teams uitzoeken waar tijd weglekt en wat ze als eerste moeten oplossen.',
  },
  {
    name: 'Bas van de Haterd',
    role: 'Expert in recruitmenttechnologie, organisator van Digitaal-Werven',
    image: 'https://media-01.imu.nl/storage/klikwork.com/32015/bas-vd-haterd.jpeg',
    linkedin: 'https://www.linkedin.com/in/basvandehaterd/',
    bio: 'Bas is expert in recruitmenttechnologie en assessments. Hij helpt organisaties AI inzetten voor eerlijkere en efficiëntere selectie, en sprak daarover van Sydney tot Bogotá.',
  },
];

const faq: { q: string; a: React.ReactNode }[] = [
  { q: 'Moet ik kunnen programmeren?', a: <Todo>JOUW ECHTE ANTWOORD HIER</Todo> },
  {
    q: 'Kan ik op factuur betalen?',
    a: <>Inschrijven gaat via de betaalpagina. <Todo>JOUW ECHTE ANTWOORD OVER BETALEN OP FACTUUR HIER</Todo></>,
  },
  { q: 'Hoe schrijf ik een team in met korting?', a: <Todo>JOUW ECHTE INSTRUCTIE VOOR TEAMINSCHRIJVINGEN HIER</Todo> },
  {
    q: 'Waarom heb ik een Claude Code-abonnement nodig?',
    a: 'Je bouwt op de dag met Claude Code. Het abonnement kost 20 dollar per maand en je kunt het na één maand weer opzeggen.',
  },
  { q: 'Werk ik met echte kandidaatgegevens?', a: "Dat hoeft niet. Je kunt bouwen tegen onze oefen-ATS met fictieve cv's en vacatures." },
  { q: 'Hoeveel deelnemers zijn er?', a: <Todo>JOUW ECHTE MAXIMUM AANTAL HIER</Todo> },
  { q: 'Waar is het precies?', a: <>Bij Utrecht Centraal Station. <Todo>EXACTE ZAAL EN ADRES HIER</Todo></> },
];

const toc = [
  ['herken-je-dit', 'Herken je dit?'],
  ['om-vier-uur', 'Om vier uur'],
  ['programma', 'Programma'],
  ['begeleiders', 'Begeleiders'],
  ['meenemen', 'Wat je nodig hebt'],
  ['prijzen', 'Prijzen'],
  ['vragen', 'Vragen'],
];

const InfoCard: React.FC = () => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 space-y-5">
    <Fact icon={<Calendar size={18} />} label="Datum">Dinsdag 2 februari 2027</Fact>
    <Fact icon={<Clock size={18} />} label="Tijd">10:00 tot 16:00, met lunch</Fact>
    <Fact icon={<MapPin size={18} />} label="Locatie">Utrecht Centraal</Fact>
    <Fact icon={<Ticket size={18} />} label={price.label}>{price.amount} euro excl. btw</Fact>
    <Fact icon={<Laptop size={18} />} label="Meenemen">Laptop waarop je Claude mag installeren</Fact>
    <Button href={HACKATHON_CHECKOUT} full>Schrijf je in</Button>
    <BuyNote />
  </div>
);

// What happens after the click. Facts still to be supplied stay visible as Todo markers.
const BuyNote: React.FC<{ showNext?: boolean }> = ({ showNext = true }) => (
  <div className="text-sm text-slate-400 space-y-1">
    {showNext && <p>
      {price.earlyBird
        ? 'Vanaf 1 januari 797 euro, met teamkorting vanaf 2 personen.'
        : 'Teamkorting vanaf 2 personen.'}
    </p>}
    <p>
      Je rekent af op de betaalpagina van Klikwork. <Todo>WAT JE NA BETALING ONTVANGT EN ANNULERINGSVOORWAARDEN</Todo>
    </p>
  </div>
);

const HackathonPage: React.FC = () => (
  <Page>
    {/* Hero */}
    <Container className="pt-16 md:pt-24 pb-14 md:pb-20">
      <div className="grid lg:grid-cols-[1fr_22rem] gap-12 items-start">
        <div>
          <p className="text-slate-400 mb-4">HR Hackathon met Marcel van der Meer en Bas van de Haterd</p>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 text-balance">
            Bouw in één dag je eigen HR-applicatie
          </h1>
          <Lead>
            Je komt binnen met een idee, een Excel-bestand of een rapport waar je elke maand uren in steekt. Je gaat naar
            huis met een werkende eerste versie die je morgen aan je collega's en je IT-afdeling kunt laten zien.
          </Lead>
          <p className="mt-6 text-slate-400 max-w-[65ch]">
            Voor HR-professionals en corporate recruiters. Je bouwt met vibe coding: je beschrijft wat je wilt en de AI
            schrijft de code.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 lg:hidden">
            <Button href={HACKATHON_CHECKOUT}>Schrijf je in</Button>
            <Button href="#programma" variant="secondary">Bekijk het programma</Button>
          </div>
        </div>
        <aside className="hidden lg:block">
          <InfoCard />
        </aside>
      </div>
    </Container>

    {/* Section nav for orientation */}
    <nav aria-label="Op deze pagina" className="border-t border-white/10 sticky top-16 z-30 bg-slate-950/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6">
        <ul className="flex gap-6 overflow-x-auto text-sm text-slate-400 whitespace-nowrap [mask-image:linear-gradient(to_right,black_85%,transparent)] lg:[mask-image:none] pr-8 lg:pr-0">
          {toc.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className="block py-3.5 hover:text-white">{label}</a>
            </li>
          ))}
        </ul>
        <a href={HACKATHON_CHECKOUT} className="hidden lg:inline-flex px-4 py-1.5 rounded-full text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 whitespace-nowrap">
          Schrijf je in, {price.amount} euro
        </a>
      </Container>
    </nav>

    {/* Problem */}
    <Section id="herken-je-dit">
      <Container>
        <H2>Herken je dit?</H2>
        <ul className="space-y-4 max-w-2xl mb-8">
          {recognise.map((r) => (
            <li key={r} className="flex gap-4 text-lg text-slate-200">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden />
              <span>{r}</span>
            </li>
          ))}
        </ul>
        <Lead>
          Dan kun je het ook zelf bouwen. Samen met andere HR- en recruitmentprofessionals leer je in één dag hoe je een
          goed idee omzet in iets dat werkt.
        </Lead>
      </Container>
    </Section>

    {/* Dream outcome */}
    <Section id="om-vier-uur">
      <Container>
        <H2>Om vier uur sta je ergens anders</H2>
        <Lead className="mb-10">
          Het moment dat je op je eigen laptop klikt en jouw idee doet wat het moet doen. Dat is waar de dag om draait.
        </Lead>
        <div className="max-w-4xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-2 bg-slate-900/70 text-sm font-semibold">
            <p className="px-5 py-3 text-slate-400">'s Ochtends</p>
            <p className="px-5 py-3 text-sky-300 border-l border-white/10">Om 16:00</p>
          </div>
          {beforeAfter.map(([before, after]) => (
            <div key={before} className="grid grid-cols-2 border-t border-white/10">
              <p className="px-4 md:px-5 py-4 text-sm md:text-base text-slate-400 leading-relaxed">{before}</p>
              <p className="px-4 md:px-5 py-4 text-sm md:text-base text-white leading-relaxed border-l border-white/10">{after}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>

    {/* Programme */}
    <Section id="programma">
      <Container>
        <H2>Programma</H2>
        <ol className="border-l border-white/15 ml-1 max-w-3xl">
          {programme.map((p, i) => (
            <li key={i} className="relative pl-8 pb-10 last:pb-0">
              <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden />
              <p className="text-sm text-slate-400 mb-1">{p.time}</p>
              <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
              <p className="text-slate-300 leading-relaxed max-w-[65ch]">{p.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>

    {/* Hosts */}
    <Section id="begeleiders">
      <Container>
        <H2>Je begeleiders</H2>
        <div className="grid md:grid-cols-2 gap-10">
          {hosts.map((h) => (
            <div key={h.name} className="flex gap-5">
              <img src={h.image} alt={h.name} className="w-24 h-24 rounded-full object-cover shrink-0 ring-2 ring-white/10" loading="lazy" />
              <div>
                <h3 className="text-lg font-bold text-white">{h.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{h.role}</p>
                <p className="text-slate-300 leading-relaxed mb-2">{h.bio}</p>
                <a href={h.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-sm text-sky-400 hover:text-sky-300">
                  LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>

    {/* What to bring */}
    <Section id="meenemen">
      <Container>
        <H2>Wat je nodig hebt</H2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
          <Fact icon={<Laptop size={18} />} label="Laptop">
            Een laptop waarop je Claude kunt en mag installeren. Check dat vooraf bij je IT-afdeling.
          </Fact>
          <Fact icon={<CreditCard size={18} />} label="Abonnement">
            Claude Code, 20 dollar per maand. Je kunt het na één maand opzeggen.
          </Fact>
        </div>
      </Container>
    </Section>

    {/* Pricing */}
    <Section id="prijzen">
      <Container>
        <H2>Prijzen</H2>
        <p className="text-slate-400 mb-8">Alle prijzen per persoon, exclusief btw. Lunch is inbegrepen.</p>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-4 max-w-4xl">
          <div className="rounded-2xl border border-sky-400/60 bg-sky-400/5 p-6 md:p-8">
            <p className="text-sm text-sky-300 font-medium mb-2">{price.earlyBird ? 'Early bird, tot en met 31 december' : 'Per persoon'}</p>
            <p className="text-5xl font-black text-white mb-3">{price.amount} euro</p>
            <p className="text-sm text-slate-400 mb-6">
              {price.earlyBird ? 'Geen teamkorting op de early bird.' : 'Of kies voor teamkorting, zie hiernaast.'}
            </p>
            <Button href={HACKATHON_CHECKOUT} full>Schrijf je in</Button>
          </div>
          <div className="rounded-2xl border border-white/10 p-6 md:p-8">
            <p className="text-sm text-slate-400 font-medium mb-4">{price.earlyBird ? 'Vanaf 1 januari' : 'Teamkorting'}</p>
            <dl className="divide-y divide-white/10 text-white">
              {[
                ...(price.earlyBird ? [['1 persoon', '797 euro']] : []),
                ['2 personen', '747 euro p.p.'],
                ['3 personen', '727 euro p.p.'],
                ['4 of meer', '697 euro p.p.'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-4 py-2.5">
                  <dt className="text-slate-300">{k}</dt>
                  <dd className="font-semibold tabular-nums">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        {price.earlyBird && (
          <p className="mt-8 text-slate-300 max-w-[65ch]">
            Nog opleidingsbudget over dit jaar? Met de early bird boek je de training voor februari nu.
          </p>
        )}
        <div className="mt-6 max-w-[65ch]">
          <BuyNote showNext={false} />
        </div>
      </Container>
    </Section>

    {/* FAQ */}
    <Section id="vragen" className="pb-32 lg:pb-20">
      <Container>
        <H2>Veelgestelde vragen</H2>
        <div className="divide-y divide-white/10 border-y border-white/10 max-w-3xl">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-1 text-white font-medium">
                {f.q}
                <span className="inline-block text-slate-400 text-xl leading-none group-open:rotate-45 transition-transform" aria-hidden>+</span>
              </summary>
              <div className="mt-3 text-slate-300 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </div>
        <p className="mt-8 text-slate-400">
          Andere vraag? Mail naar{' '}
          <a href="mailto:hello@klikwork.com" className="text-sky-400 hover:text-sky-300">hello@klikwork.com</a>.
        </p>
      </Container>
    </Section>

    {/* Mobile sticky CTA */}
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/95 backdrop-blur-md">
      <div className="px-4 py-3 flex items-center justify-between gap-4">
        <div className="text-sm">
          <p className="text-white font-semibold">2 feb 2027, Utrecht</p>
          <p className="text-slate-400">{price.earlyBird ? 'Early bird ' : ''}{price.amount} euro excl. btw</p>
        </div>
        <a href={HACKATHON_CHECKOUT} className="px-5 py-2.5 rounded-full font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 whitespace-nowrap">
          Schrijf je in
        </a>
      </div>
    </div>
  </Page>
);

export default HackathonPage;
