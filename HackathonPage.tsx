import React from 'react';
import Page from './components/Page';
import { Button, Container, H2, Kicker, Lead, Section, Todo } from './components/ui';
import { HACKATHON_CHECKOUT } from './data/events';

const recognise = [
  'Je hebt Excel-bestanden die eigenlijk een slimme applicatie zouden moeten zijn.',
  'Je wilt een dashboard om iets helder te laten zien.',
  'Je verzamelt elke maand heel veel data om één rapport te maken.',
  'Je zou willen dat IT het een keer maakt zoals jij het bedoelt.',
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
  {
    time: <Todo>TIJD</Todo>,
    title: 'Lunch',
    body: 'Lunch is inbegrepen.',
  },
  {
    time: <Todo>TIJD</Todo>,
    title: 'Bouwen',
    body: "Je bouwt je eigen applicatie. Wil je oefenen met recruitmentdata, dan gebruik je onze oefen-ATS met fictieve cv's en vacatures.",
  },
  {
    time: '16:00',
    title: 'Afsluiting',
    body: <Todo>JOUW ECHTE INVULLING VAN DE AFSLUITING HIER</Todo>,
  },
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
  {
    q: 'Hoe schrijf ik een team in met korting?',
    a: <Todo>JOUW ECHTE INSTRUCTIE VOOR TEAMINSCHRIJVINGEN HIER</Todo>,
  },
  {
    q: 'Waarom heb ik een Claude Code-abonnement nodig?',
    a: 'Je bouwt op de dag met Claude Code. Het abonnement kost 20 dollar per maand en je kunt het na één maand weer opzeggen.',
  },
  {
    q: 'Werk ik met echte kandidaatgegevens?',
    a: "Dat hoeft niet. Je kunt bouwen tegen onze oefen-ATS met fictieve cv's en vacatures.",
  },
  { q: 'Hoeveel deelnemers zijn er?', a: <Todo>JOUW ECHTE MAXIMUM AANTAL HIER</Todo> },
  { q: 'Waar is het precies?', a: <>Bij Utrecht Centraal Station. <Todo>EXACTE ZAAL EN ADRES HIER</Todo></> },
];

const HackathonPage: React.FC = () => (
  <Page>
    {/* Hero */}
    <Container className="pt-20 md:pt-28 pb-16 md:pb-24">
      <Kicker>HR Hackathon, dinsdag 2 februari 2027, Utrecht</Kicker>
      <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 max-w-3xl">
        Bouw in één dag je eigen HR-applicatie
      </h1>
      <Lead>
        Marcel van der Meer en Bas van de Haterd leren je als HR-professional of corporate recruiter zelf applicaties
        maken met vibe coding. Je komt met een idee. Wie wil, gaat naar huis met een werkend prototype.
      </Lead>
      <dl className="mt-10 grid sm:grid-cols-3 gap-6 max-w-2xl text-sm">
        <div>
          <dt className="text-gray-500 mb-1">Wanneer</dt>
          <dd className="text-white font-medium">2 februari 2027, 10:00 tot 16:00</dd>
        </div>
        <div>
          <dt className="text-gray-500 mb-1">Waar</dt>
          <dd className="text-white font-medium">Utrecht Centraal</dd>
        </div>
        <div>
          <dt className="text-gray-500 mb-1">Prijs</dt>
          <dd className="text-white font-medium">Vanaf 647 euro excl. btw</dd>
        </div>
      </dl>
      <div className="mt-10 flex flex-wrap gap-4">
        <Button href={HACKATHON_CHECKOUT}>Schrijf je in</Button>
        <Button href="#programma" variant="secondary">Bekijk het programma</Button>
      </div>
    </Container>

    {/* Problem */}
    <Section id="herken-je-dit">
      <H2>Herken je dit?</H2>
      <ul className="space-y-4 max-w-2xl mb-8">
        {recognise.map((r) => (
          <li key={r} className="flex gap-4 text-lg text-gray-200">
            <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden />
            <span>{r}</span>
          </li>
        ))}
      </ul>
      <Lead>Dan kun je het ook zelf bouwen. Samen met andere HR- en recruitmentprofessionals leer je in één dag hoe je een goed idee omzet in iets dat werkt.</Lead>
    </Section>

    {/* Programme */}
    <Section id="programma">
      <H2>Programma</H2>
      <ol className="border-l border-white/15 ml-1 max-w-3xl">
        {programme.map((p, i) => (
          <li key={i} className="relative pl-8 pb-10 last:pb-0">
            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden />
            <p className="text-sm text-gray-400 mb-1">{p.time}</p>
            <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
            <p className="text-gray-300 leading-relaxed">{p.body}</p>
          </li>
        ))}
      </ol>
    </Section>

    {/* Outcome */}
    <Section id="opbrengst">
      <H2>Wat je eraan hebt</H2>
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl">
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Je laat zien wat je bedoelt</h3>
          <p className="text-gray-300 leading-relaxed">
            Met een werkend voorbeeld laat je je IT-afdeling zien wat je nodig hebt.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">Je werk wordt makkelijker</h3>
          <p className="text-gray-300 leading-relaxed">Vervelende, terugkerende taken automatiseer je zelf weg.</p>
        </div>
      </div>
    </Section>

    {/* Hosts */}
    <Section id="begeleiders">
      <H2>Je begeleiders</H2>
      <div className="grid md:grid-cols-2 gap-10">
        {hosts.map((h) => (
          <div key={h.name} className="flex gap-5">
            <img src={h.image} alt={h.name} className="w-20 h-20 rounded-full object-cover shrink-0" loading="lazy" />
            <div>
              <h3 className="text-lg font-bold text-white">{h.name}</h3>
              <p className="text-sm text-gray-400 mb-3">{h.role}</p>
              <p className="text-gray-300 leading-relaxed mb-2">{h.bio}</p>
              <a href={h.linkedin} target="_blank" rel="noopener noreferrer" className="text-sm text-sky-400 hover:text-sky-300">
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* What to bring */}
    <Section id="meenemen">
      <H2>Wat je nodig hebt</H2>
      <ul className="space-y-3 text-gray-300 max-w-2xl">
        <li>Een laptop waarop je Claude kunt en mag installeren. Check dat vooraf bij je IT-afdeling.</li>
        <li>Een Claude Code-abonnement van 20 dollar per maand. Je kunt het na één maand opzeggen.</li>
      </ul>
    </Section>

    {/* Pricing */}
    <Section id="prijzen">
      <H2>Prijzen</H2>
      <p className="text-gray-400 mb-8">Alle prijzen per persoon, exclusief btw. Lunch is inbegrepen.</p>
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl">
        <div className="rounded-xl border border-sky-400/60 p-6">
          <p className="text-sm text-sky-400 font-medium mb-2">Early bird, tot en met 31 december</p>
          <p className="text-3xl font-black text-white mb-2">647 euro</p>
          <p className="text-sm text-gray-400">Geen teamkorting op de early bird.</p>
        </div>
        <div className="rounded-xl border border-white/10 p-6">
          <p className="text-sm text-gray-400 font-medium mb-2">Vanaf 1 januari</p>
          <p className="text-3xl font-black text-white mb-2">797 euro</p>
        </div>
        <div className="rounded-xl border border-white/10 p-6">
          <p className="text-sm text-gray-400 font-medium mb-2">Teamkorting, vanaf 1 januari</p>
          <ul className="text-white space-y-1">
            <li>2 personen: 747 euro p.p.</li>
            <li>3 personen: 727 euro p.p.</li>
            <li>4 of meer: 697 euro p.p.</li>
          </ul>
        </div>
      </div>
      <p className="mt-8 text-gray-300 max-w-2xl">
        Nog opleidingsbudget over dit jaar? Met de early bird boek je de training voor februari nu.
      </p>
      <div className="mt-8">
        <Button href={HACKATHON_CHECKOUT}>Schrijf je in</Button>
      </div>
    </Section>

    {/* FAQ */}
    <Section id="vragen">
      <H2>Veelgestelde vragen</H2>
      <div className="divide-y divide-white/10 border-y border-white/10 max-w-3xl">
        {faq.map((f) => (
          <details key={f.q} className="group py-5">
            <summary className="cursor-pointer list-none flex justify-between gap-4 text-white font-medium">
              {f.q}
              <span className="text-gray-500 group-open:rotate-45 transition-transform" aria-hidden>+</span>
            </summary>
            <div className="mt-3 text-gray-300 leading-relaxed">{f.a}</div>
          </details>
        ))}
      </div>
      <p className="mt-8 text-gray-400">
        Andere vraag? Mail naar{' '}
        <a href="mailto:hello@klikwork.com" className="text-sky-400 hover:text-sky-300">hello@klikwork.com</a>.
      </p>
    </Section>
  </Page>
);

export default HackathonPage;
