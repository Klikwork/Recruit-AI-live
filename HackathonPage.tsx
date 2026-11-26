import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Laptop, Download, Hourglass } from 'lucide-react';
import Page from './components/Page';
import { Button, Container, DateStrip, Fact, H2, Lead, Section, Todo } from './components/ui';
import {
  HACKATHON_CHECKOUT,
  MANAGER_LETTER,
  REGULAR_PRICE,
  TERMS_URL,
  earlyBirdDaysLeft,
  hackathonPrice,
} from './data/events';

const price = hackathonPrice();
const daysLeft = earlyBirdDaysLeft();
const saving = REGULAR_PRICE - price.amount;
const daysLabel = daysLeft === 1 ? 'nog 1 dag' : `nog ${daysLeft} dagen`;

const recognise = [
  'Hiring managers leveren een intake aan van drie regels en jij mag de rest uitzoeken.',
  'Nieuwe medewerkers stellen in hun eerste week allemaal dezelfde vragen, en die komen bij jou terecht.',
  'Elke week mail je een update over de openstaande vacatures die niemand helemaal leest.',
  'Je HR-systeem kan bijna wat je wilt, en voor de rest staat er een verzoek bij IT of de leverancier.',
];

const beforeAfter: [string, string][] = [
  ['Je legt in een mail uit wat je nodig hebt en wacht op IT.', 'Je opent een werkend voorbeeld en laat zien wat je bedoelt.'],
  ['Je hebt een idee voor een tool die je werk makkelijker maakt.', 'Je hebt een eerste versie die je collega\'s kunnen proberen.'],
  ['Vibe coding is iets waar je over leest.', 'Je hebt het zelf gedaan, met je eigen idee.'],
];

// Use cases, grounded in what HR and talent teams have published about tools they built themselves
// (Netlify People team, PYN, The CHRO Office). Examples only, participants pick their own.
const useCases: { group: string; items: { title: string; body: string }[] }[] = [
  {
    group: 'Voor corporate recruiters',
    items: [
      {
        title: 'Intake-app voor hiring managers',
        body: 'De manager beantwoordt vaste vragen over de rol, het team en de must-haves. Jij krijgt een vacaturebrief waar je mee verder kunt.',
      },
      {
        title: 'Interviewkit per vacature',
        body: 'Vragen en een scorekaart per functie, zodat iedereen in het panel op dezelfde criteria beoordeelt.',
      },
      {
        title: 'Overzicht voor hiring managers',
        body: 'Per vacature zien waar kandidaten staan en waar het vastloopt, zonder dat jij elke week een update mailt.',
      },
      {
        title: 'Referralportaal',
        body: 'Medewerkers dragen iemand aan voor een vacature en zien wat er met hun tip gebeurt.',
      },
    ],
  },
  {
    group: 'Voor HR',
    items: [
      {
        title: 'Onboardingportaal',
        body: 'Een checklist per functie en locatie voor de eerste weken, met antwoorden op de vragen die elke nieuwe collega stelt.',
      },
      {
        title: 'Korte medewerkerspeiling',
        body: 'Een paar vragen per maand, met resultaten per team die je direct kunt bespreken.',
      },
      {
        title: 'Gesprekshulp voor leidinggevenden',
        body: 'Voorbereiding op een beoordelings-, ontwikkel- of verzuimgesprek, met gespreksstarters en ruimte voor afspraken.',
      },
      {
        title: 'Vraagbaak voor beleid en regelingen',
        body: 'Medewerkers zoeken zelf op hoe verlof, thuiswerken of de opleidingsregeling werkt, in plaats van jou te mailen.',
      },
    ],
  },
];

// Only the start and end time are fixed; the blocks in between have no times on purpose.
const programme: { time?: string; title: string; body: React.ReactNode }[] = [
  {
    time: '10:00',
    title: 'Wat wij zelf gebouwd hebben',
    body: 'We beginnen met voorbeelden: een to-do-app, een chatbot die meningen van medewerkers uitvraagt en indeelt, en een CRM-systeem.',
  },
  {
    title: 'Je eigen idee kiezen',
    body: 'Je kiest wat je wilt bouwen. Neem een idee mee uit je eigen werk, of kies een van de voorbeelden op deze pagina.',
  },
  { title: 'Lunch', body: 'Lunch is inbegrepen.' },
  {
    title: 'Bouwen',
    body: "Je bouwt je eigen applicatie. Wil je oefenen met recruitmentdata, dan gebruik je onze oefen-ATS met fictieve cv's en vacatures.",
  },
  { time: '16:00', title: 'Afsluiting', body: <Todo>JOUW ECHTE INVULLING VAN DE AFSLUITING HIER</Todo> },
];

const hosts = [
  {
    name: 'Marcel van der Meer',
    role: 'Oprichter van Klikwork Talent Imagineers',
    image: '/images/hosts/marcel-van-der-meer.webp',
    linkedin: 'https://www.linkedin.com/in/marcel-vd-meer/',
    bio: 'Marcel heeft duizenden recruiters getraind in AI en automatisering en wereldwijd meer dan 500 bedrijven ondersteund. Hij helpt teams uitzoeken waar tijd weglekt en wat ze als eerste moeten oplossen.',
  },
  {
    name: 'Bas van de Haterd',
    role: 'Expert in recruitmenttechnologie, organisator van Digitaal-Werven',
    image: '/images/hosts/bas-van-de-haterd.webp',
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
    q: 'Wat ontvang ik na mijn inschrijving?',
    a: 'Na betaling krijg je de factuur en een bewijs van inschrijving. Ongeveer twee weken voor de hackathon sturen we je een korte vragenlijst, zodat we weten welke use case je wilt bouwen.',
  },
  {
    q: 'Wat moet ik meenemen?',
    a: 'Een laptop waarop je Claude mag installeren (check dat vooraf bij je IT-afdeling) en minimaal een Claude Pro-abonnement. Dat kost 20 dollar per maand en je kunt het na één maand weer opzeggen.',
  },
  {
    q: 'Mijn manager moet het goedkeuren. Hoe pak ik dat aan?',
    a: (
      <>
        Download <a href={MANAGER_LETTER} className="text-sky-400 hover:text-sky-300">de brief voor je manager</a>, vul je
        eigen idee en de uren die het je nu kost in en stuur hem door. Doe het voor 31 december, dan geldt de early bird nog.
      </>
    ),
  },
  { q: 'Werk ik met echte kandidaatgegevens?', a: "Dat hoeft niet. Je kunt bouwen tegen onze oefen-ATS met fictieve cv's en vacatures." },
  { q: 'Hoeveel deelnemers zijn er?', a: <Todo>JOUW ECHTE MAXIMUM AANTAL HIER</Todo> },
  { q: 'Waar is het precies?', a: <>Bij Utrecht Centraal Station. <Todo>EXACTE ZAAL EN ADRES HIER</Todo></> },
];

const toc = [
  ['herken-je-dit', 'Herken je dit?'],
  ['wat-je-bouwt', 'Wat je bouwt'],
  ['programma', 'Programma'],
  ['begeleiders', 'Begeleiders'],
  ['prijzen', 'Prijzen'],
  ['voor-je-manager', 'Je manager'],
  ['vragen', 'Vragen'],
];

// What happens after the click. Facts still to be supplied stay visible as Todo markers.
const BuyNote: React.FC<{ showNext?: boolean }> = ({ showNext = true }) => (
  <div className="text-sm text-slate-400 space-y-1">
    {showNext && <p>
      {price.earlyBird
        ? 'Vanaf 1 januari 797 euro, met teamkorting vanaf 2 personen.'
        : 'Teamkorting vanaf 2 personen.'}
    </p>}
    <p>
      Je rekent af op de betaalpagina van Klikwork. Na betaling krijg je de factuur en een bewijs van inschrijving. Op je inschrijving zijn de{' '}
      <a href={TERMS_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
        algemene voorwaarden van Klikwork
      </a>{' '}
      van toepassing.
    </p>
  </div>
);

// The early bird deadline, said once: date, days left, what it saves.
const EarlyBirdBar: React.FC = () =>
  price.earlyBird ? (
    <div className="flex items-start gap-3 border-l-2 border-amber-300 pl-4 py-1">
      <Hourglass size={18} className="text-amber-300 mt-1 shrink-0" aria-hidden />
      <p className="text-slate-300 leading-relaxed">
        <span className="text-white font-semibold">Early bird tot en met 31 december, {daysLabel}.</span> Daarna{' '}
        {REGULAR_PRICE} euro, dus je bespaart {saving} euro per persoon. Moet je manager akkoord geven? Vraag het budget
        nu aan met <a href="#voor-je-manager" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">de brief</a>.
      </p>
    </div>
  ) : null;

// Two hosts, overlapping: the studio portrait large, the stage photo in front.
const HostCollage: React.FC = () => (
  <figure>
    <div className="relative h-[300px] sm:h-[440px] lg:h-[500px]">
      <img
        src={hosts[0].image}
        alt={hosts[0].name}
        className="absolute right-0 top-0 w-[72%] h-[76%] object-cover rounded-2xl bg-slate-800"
      />
      <img
        src={hosts[1].image}
        alt={hosts[1].name}
        className="absolute left-0 bottom-0 w-[52%] h-[50%] object-cover rounded-2xl ring-8 ring-ink bg-slate-800"
      />
    </div>
    <figcaption className="mt-3 text-sm text-slate-400 text-right">
      Met {hosts[0].name} en {hosts[1].name}
    </figcaption>
  </figure>
);

const HackathonPage: React.FC = () => (
  <Page>
    {/* Hero */}
    <Container className="pt-12 md:pt-20 pb-12 md:pb-16">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-14 items-center">
        <div>
          <DateStrip date="di 2 feb 2027" rest="Utrecht Centraal, 10:00 tot 16:00" />
          <h1 className="mt-7 text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold text-white tracking-[-0.035em] leading-[0.95] text-balance">
            Bouw in één dag je eigen HR-applicatie
          </h1>
          <Lead className="mt-7">
            Je komt binnen met een idee voor een tool die jouw werk of dat van je collega's makkelijker maakt. Je gaat naar
            huis met een werkende eerste versie die je morgen aan je team en je IT-afdeling kunt laten zien.
          </Lead>
          <p className="mt-5 text-slate-400 max-w-[60ch]">
            Voor HR-professionals en corporate recruiters. Je bouwt met vibe coding: je beschrijft wat je wilt en de AI
            schrijft de code.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <Button href={HACKATHON_CHECKOUT}>Schrijf je in, {price.amount} euro</Button>
            <span className="text-sm text-slate-400">
              {price.earlyBird ? `Early bird t/m 31 december, ${daysLabel}. Excl. btw.` : 'Per persoon, excl. btw.'}
            </span>
          </div>
        </div>
        <HostCollage />
      </div>
    </Container>

    {/* Fact bar: everything you need to decide, in one row */}
    <Container className="pb-12 md:pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 border-y border-white/10 py-6">
        <Fact icon={<Calendar size={18} />} label="Datum">Dinsdag 2 februari 2027</Fact>
        <Fact icon={<Clock size={18} />} label="Tijd">10:00 tot 16:00, met lunch</Fact>
        <Fact icon={<MapPin size={18} />} label="Locatie">Utrecht Centraal</Fact>
        <Fact icon={<Ticket size={18} />} label={price.earlyBird ? 'Early bird' : 'Prijs'}>{price.amount} euro excl. btw</Fact>
        <Fact icon={<Laptop size={18} />} label="Meenemen">Laptop en minimaal Claude Pro</Fact>
      </div>
    </Container>

    {/* Atmosphere photo from an earlier session */}
    <Container className="pb-14 md:pb-20">
      <figure>
        <img
          src="/images/sfeer/bouwdag-zaal.webp"
          srcSet="/images/sfeer/bouwdag-zaal-800.webp 800w, /images/sfeer/bouwdag-zaal.webp 1600w"
          sizes="(min-width: 1152px) 1104px, 100vw"
          width={1600}
          height={900}
          alt="Een zaal met deelnemers aan tafels, elk achter een laptop, die samen aan hun eigen toepassing werken."
          className="w-full aspect-[16/7] object-cover rounded-2xl border border-white/10"
          fetchPriority="high"
        />
        <figcaption className="mt-3 text-sm text-slate-400">Sfeerbeeld van een eerdere Klikwork-sessie.</figcaption>
      </figure>
    </Container>

    {/* Section nav for orientation */}
    <nav aria-label="Op deze pagina" className="border-t border-white/10 sticky top-16 z-30 bg-ink/90 backdrop-blur-md">
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

    {/* Use cases */}
    <Section id="wat-je-bouwt">
      <Container>
        <H2>Wat je op één dag kunt bouwen</H2>
        <Lead className="mb-10">
          Voorbeelden van tools die HR- en talent-teams zelf hebben gebouwd. Je kiest er een, of je neemt je eigen idee mee.
        </Lead>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {useCases.map((g) => (
            <div key={g.group}>
              <h3 className="text-sm font-semibold text-sky-300 mb-4">{g.group}</h3>
              <ul className="divide-y divide-white/10 border-y border-white/10">
                {g.items.map((u) => (
                  <li key={u.title} className="py-4">
                    <p className="text-white font-bold mb-1">{u.title}</p>
                    <p className="text-slate-300 leading-relaxed">{u.body}</p>
                  </li>
                ))}
              </ul>
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
              {p.time && <p className="text-sm text-sky-300 font-semibold mb-1">{p.time}</p>}
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

    {/* Pricing */}
    <Section id="prijzen">
      <Container>
        <H2>Prijzen</H2>
        <p className="text-slate-400 mb-8">Alle prijzen per persoon, exclusief btw. Lunch is inbegrepen.</p>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-4 max-w-4xl">
          <div className="rounded-2xl border border-sky-400/60 bg-sky-400/5 p-6 md:p-8">
            <p className="text-sm text-sky-300 font-medium mb-2">{price.earlyBird ? 'Early bird, tot en met 31 december' : 'Per persoon'}</p>
            <p className="font-display text-5xl font-extrabold tracking-[-0.03em] text-white mb-3">{price.amount} euro</p>
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
          <div className="mt-8 max-w-4xl">
            <EarlyBirdBar />
          </div>
        )}
        <div className="mt-6 max-w-[65ch]">
          <BuyNote showNext={false} />
        </div>
      </Container>
    </Section>

    {/* Manager letter */}
    <Section id="voor-je-manager">
      <Container>
        <div className="max-w-3xl">
          <div>
            <H2>Akkoord nodig van je manager?</H2>
            <Lead className="mb-6">
              Download een verzoek in Word, vul je eigen idee in en wat het je nu aan tijd kost, en stuur het door.
            </Lead>
            <ul className="space-y-2 text-slate-300 mb-8">
              {[
                'Een mini business case: uren per week, wat die kosten en wanneer de dag zich terugverdient.',
                'Wat het kost en waarom je geen echte kandidaat- of medewerkersgegevens nodig hebt.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <a href={MANAGER_LETTER} className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-slate-950 bg-sky-400 hover:bg-sky-300">
                <Download size={18} aria-hidden /> Download de brief
              </a>
              <span className="text-sm text-slate-400">Word-bestand. Opent ook in Google Docs.</span>
            </div>
          </div>
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
    <div className="lg:hidden fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 backdrop-blur-md">
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
