import React from 'react';
import { Calendar, Clock, MapPin, Ticket, Laptop, Download, Hourglass } from 'lucide-react';
import Page from './components/Page';
import { Aurora, PromptCard, Reveal, Spotlight, WordRise, useActiveSection, useScrollProgress } from './components/motion';
import { Button, Container, DateStrip, Fact, H2, Lead, Section } from './components/ui';
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
    {
    time: '16:00',
    title: 'Afsluiting',
    body: 'Een aantal deelnemers presenteert hun oplossing. We sluiten af met hoe je je prototype werkend krijgt binnen je IT-afdeling, en je krijgt een certificaat.',
  },
];

// Typed in the hero card, one after another.
const prompts = [
  'Maak een intake-app waarin hiring managers vaste vragen over de rol beantwoorden.',
  'Bouw een onboardingportaal met een checklist per functie voor de eerste weken.',
  'Maak een interviewkit met vragen en een scorekaart per vacature.',
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
  {
    q: 'Moet ik echt kunnen programmeren?',
    a: 'Nee. Je moet in gewone taal kunnen uitleggen wat je wilt. De AI vertaalt dat voor je en maakt er een werkende app, webapp of andere toepassing van.',
  },
  {
    q: 'Kan ik op factuur betalen?',
    a: 'Ja. Bij je inschrijving kies je of je direct betaalt of een factuur ontvangt. Handig als je werkgever betaalt.',
  },
  {
    q: 'Hoe schrijf ik een team in met korting?',
    a: 'Kies bij je inschrijving het aantal personen. De korting wordt automatisch verrekend. Daarna krijg je een mail waarin je de gegevens van je collega\'s invult, en zij krijgen elk een eigen vragenlijst.',
  },
  {
    q: 'Wat ontvang ik na mijn inschrijving?',
    a: 'Je krijgt een bewijs van inschrijving en de factuur. Ongeveer twee weken voor de hackathon sturen we je een korte vragenlijst, zodat we weten welke use case je wilt bouwen.',
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
  { q: 'Hoeveel deelnemers zijn er?', a: 'Maximaal 20. Zo is er genoeg tijd om iedereen aan tafel te helpen.' },
  {
    q: 'Waar is het precies?',
    a: (
      <>
        Bij{' '}
        <a href="https://aristo.nl/vergaderlocatie-utrecht-centraal-station" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300">
          Aristo Utrecht Centraal
        </a>
        , Godebaldkwartier 357, 3511 DT Utrecht. Twee minuten lopen van het station.
      </>
    ),
  },
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
      Je kiest zelf of je direct betaalt of op factuur. Na je inschrijving krijg je een bewijs van inschrijving en de factuur. Op je inschrijving zijn de{' '}
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
    <div className="flex items-start gap-3 max-w-[70ch]">
      <Hourglass size={18} className="text-sky-400 mt-1 shrink-0" aria-hidden />
      <p className="text-slate-300 leading-relaxed">
        <span className="text-white font-semibold">Early bird tot en met 31 december, {daysLabel}.</span> Vanaf 1 januari
        betaal je {saving} euro meer per persoon. Moet je manager akkoord geven? Vraag het budget nu aan met <a href="#voor-je-manager" className="text-sky-400 hover:text-sky-300 underline underline-offset-2">de brief</a>.
      </p>
    </div>
  ) : null;

// Two hosts, overlapping: the studio portrait large, the stage photo in front.
const HostCollage: React.FC = () => (
  <figure>
    <div className="relative h-[300px] sm:h-[440px] lg:h-[500px]">
      <div className="absolute right-0 top-0 w-[72%] h-[76%] fade-in" style={{ animationDelay: '250ms' }}>
        <img
          src={hosts[0].image}
          alt={hosts[0].name}
          className="w-full h-full object-cover rounded-2xl bg-slate-800 float-slow"
        />
      </div>
      <div className="absolute left-0 bottom-0 w-[52%] h-[50%] fade-in" style={{ animationDelay: '450ms' }}>
        <img
          src={hosts[1].image}
          alt={hosts[1].name}
          className="w-full h-full object-cover rounded-2xl ring-8 ring-ink bg-slate-800 float-slower"
        />
      </div>
      <div className="absolute right-[-4px] sm:right-[-12px] bottom-[2%] w-[56%] sm:w-[50%] fade-in" style={{ animationDelay: '900ms' }}>
        <PromptCard prompts={prompts} />
      </div>
    </div>
    <figcaption className="mt-3 text-sm text-slate-400 text-right">
      Met {hosts[0].name} en {hosts[1].name}
    </figcaption>
  </figure>
);

const HackathonPage: React.FC = () => {
  const active = useActiveSection(toc.map(([id]) => id));
  const timelineRef = useScrollProgress<HTMLOListElement>();
  return (
  <Page>
    {/* Hero */}
    <div className="relative">
    <Aurora />
    <Container className="relative z-10 pt-12 md:pt-20 pb-12 md:pb-16">
      <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-14 items-center">
        <div>
          <div className="fade-in">
            <DateStrip date="di 2 feb 2027" rest="Utrecht Centraal, 10:00 tot 16:00, max 20 plekken" />
          </div>
          <WordRise
            text="Bouw in één dag je eigen HR-applicatie"
            accent="eigen HR-applicatie"
            className="mt-7 text-5xl md:text-7xl lg:text-[5.25rem] font-extrabold text-white tracking-[-0.035em] leading-[0.95] text-balance"
          />
          <div className="fade-in" style={{ animationDelay: '650ms' }}>
          <Lead className="mt-7">
            Je komt binnen met een idee voor een tool die jouw werk of dat van je collega's makkelijker maakt. Je gaat naar
            huis met een werkende eerste versie die je morgen aan je team en je IT-afdeling kunt laten zien.
          </Lead>
          <p className="mt-5 text-slate-400 max-w-[60ch]">
            Voor HR-professionals en corporate recruiters. Programmeren hoeft niet: je beschrijft in gewone taal wat je wilt
            en de AI schrijft de code.
          </p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 fade-in" style={{ animationDelay: '800ms' }}>
            <Button href={HACKATHON_CHECKOUT} shine>Reserveer je plek</Button>
            <span className="text-sm text-slate-400">
              {price.earlyBird && <span className="pulse-dot inline-block h-2 w-2 rounded-full bg-emerald-400 mr-2 align-middle" aria-hidden />}
              {price.amount} euro excl. btw{price.earlyBird ? `, early bird ${daysLabel}` : ''}. Maximaal 20 plekken. Direct betalen of op factuur.
            </span>
          </div>
        </div>
        <HostCollage />
      </div>
    </Container>
    </div>

    {/* Fact bar: everything you need to decide, in one row */}
    <Container className="pb-12 md:pb-16">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-x-6 gap-y-6 border-y border-white/10 py-6">
        <Reveal delay={0}><Fact icon={<Calendar size={18} />} label="Datum">Dinsdag 2 februari 2027</Fact></Reveal>
        <Reveal delay={80}><Fact icon={<Clock size={18} />} label="Tijd">10:00 tot 16:00, met lunch</Fact></Reveal>
        <Reveal delay={160}><Fact icon={<MapPin size={18} />} label="Locatie">Aristo, 2 min van Utrecht Centraal</Fact></Reveal>
        <Reveal delay={240}><Fact icon={<Ticket size={18} />} label={price.earlyBird ? 'Early bird' : 'Prijs'}>{price.amount} euro excl. btw</Fact></Reveal>
        <Reveal delay={320}><Fact icon={<Laptop size={18} />} label="Meenemen">Laptop en minimaal Claude Pro</Fact></Reveal>
      </div>
    </Container>

    {/* Atmosphere photo from an earlier session */}
    <Container className="pb-14 md:pb-20">
      <Reveal as="figure" variant="zoom">
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
      </Reveal>
    </Container>

    {/* Section nav for orientation */}
    <nav aria-label="Op deze pagina" className="border-t border-white/10 sticky top-16 z-30 bg-ink/90 backdrop-blur-md">
      <Container className="flex items-center justify-between gap-6">
        <ul className="flex gap-6 overflow-x-auto text-sm text-slate-400 whitespace-nowrap [mask-image:linear-gradient(to_right,black_85%,transparent)] lg:[mask-image:none] pr-8 lg:pr-0">
          {toc.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={`nav-link block py-3.5 hover:text-white ${active === id ? 'is-active' : ''}`} aria-current={active === id ? 'true' : undefined}>{label}</a>
            </li>
          ))}
        </ul>
        <a href={HACKATHON_CHECKOUT} className="btn-shine hidden lg:inline-flex px-4 py-1.5 rounded-full text-sm font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 whitespace-nowrap">
          Reserveer je plek
        </a>
      </Container>
    </nav>

    {/* Problem */}
    <Section id="herken-je-dit">
      <Container>
        <Reveal><H2>Herken je dit?</H2></Reveal>
        <ul className="space-y-4 max-w-2xl mb-8">
          {recognise.map((r, i) => (
            <Reveal as="li" key={r} delay={i * 90} className="flex gap-4 text-lg text-slate-200">
              <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden />
              <span>{r}</span>
            </Reveal>
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
        <Reveal><H2>Om vier uur sta je ergens anders</H2></Reveal>
        <Lead className="mb-10">
          Het moment dat je op je eigen laptop klikt en jouw idee doet wat het moet doen. Dat is waar de dag om draait.
        </Lead>
        <Reveal className="max-w-4xl rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-2 bg-slate-900/70 text-sm font-semibold">
            <p className="px-5 py-3 text-slate-400">'s Ochtends</p>
            <p className="px-5 py-3 text-sky-300 border-l border-white/10">Om 16:00</p>
          </div>
          {beforeAfter.map(([before, after], i) => (
            <Reveal key={before} delay={150 + i * 120} className="grid grid-cols-2 border-t border-white/10">
              <p className="px-4 md:px-5 py-4 text-sm md:text-base text-slate-400 leading-relaxed">{before}</p>
              <p className="px-4 md:px-5 py-4 text-sm md:text-base text-white leading-relaxed border-l border-white/10 bg-sky-400/[0.04]">{after}</p>
            </Reveal>
          ))}
        </Reveal>
      </Container>
    </Section>

    {/* Use cases */}
    <Section id="wat-je-bouwt">
      <Container>
        <Reveal><H2>Wat je op één dag kunt bouwen</H2></Reveal>
        <Lead className="mb-10">
          Voorbeelden van tools die HR- en talent-teams zelf hebben gebouwd. Je kiest er een, of je neemt je eigen idee mee.
        </Lead>
        <div className="grid md:grid-cols-2 gap-10 md:gap-12">
          {useCases.map((g) => (
            <div key={g.group}>
              <h3 className="text-sm font-semibold text-sky-300 mb-4">{g.group}</h3>
              <ul className="space-y-3">
                {g.items.map((u, i) => (
                  <Reveal as="li" key={u.title} delay={i * 80}>
                    <Spotlight className="lift rounded-xl border border-white/10 bg-white/[0.02] p-4 md:p-5">
                      <p className="text-white font-bold mb-1">{u.title}</p>
                      <p className="text-slate-300 leading-relaxed">{u.body}</p>
                    </Spotlight>
                  </Reveal>
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
        <Reveal><H2>Programma</H2></Reveal>
        <ol ref={timelineRef} className="timeline ml-1 max-w-3xl">
          {programme.map((p, i) => (
            <Reveal as="li" key={i} className="relative pl-8 pb-10 last:pb-0">
              <span className="dot absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-slate-600 z-10" aria-hidden />
              {p.time && <p className="text-sm text-sky-300 font-semibold mb-1">{p.time}</p>}
              <h3 className="text-lg font-bold text-white mb-1">{p.title}</h3>
              <p className="text-slate-300 leading-relaxed max-w-[65ch]">{p.body}</p>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>

    {/* Hosts */}
    <Section id="begeleiders">
      <Container>
        <Reveal><H2>Je begeleiders</H2></Reveal>
        <div className="grid md:grid-cols-2 gap-10">
          {hosts.map((h, i) => (
            <Reveal key={h.name} delay={i * 120} className="flex gap-5">
              <img src={h.image} alt={h.name} className="w-24 h-24 rounded-full object-cover shrink-0 ring-2 ring-white/10" loading="lazy" />
              <div>
                <h3 className="text-lg font-bold text-white">{h.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{h.role}</p>
                <p className="text-slate-300 leading-relaxed mb-2">{h.bio}</p>
                <a href={h.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block py-2 text-sm text-sky-400 hover:text-sky-300">
                  LinkedIn
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>

    {/* Pricing */}
    <Section id="prijzen">
      <Container>
        <Reveal><H2>Prijzen</H2></Reveal>
        <p className="text-slate-400 mb-8">Alle prijzen per persoon, exclusief btw. Lunch is inbegrepen.</p>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-4 max-w-4xl">
          <Reveal variant="zoom" className="glow-border rounded-2xl p-6 md:p-8">
            <p className="text-sm text-sky-300 font-medium mb-2">{price.earlyBird ? 'Early bird, tot en met 31 december' : 'Per persoon'}</p>
            <p className="font-display text-5xl font-extrabold tracking-[-0.03em] text-white mb-3">
              {price.amount} euro
              {price.earlyBird && <s className="ml-3 text-2xl font-bold text-slate-400 tracking-normal">{REGULAR_PRICE}</s>}
            </p>
            <p className="text-sm text-slate-400 mb-6">
              {price.earlyBird ? 'Maximaal 20 plekken. Geen teamkorting op de early bird.' : 'Maximaal 20 plekken. Of kies voor teamkorting, zie hiernaast.'}
            </p>
            <Button href={HACKATHON_CHECKOUT} full shine>Reserveer je plek</Button>
          </Reveal>
          <Reveal delay={120} className="rounded-2xl border border-white/10 p-6 md:p-8">
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
          </Reveal>
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
            <Reveal><H2>Akkoord nodig van je manager?</H2></Reveal>
            <Lead className="mb-6">
              Download een verzoek in Word, vul je eigen idee in en wat het je nu aan tijd kost, en stuur het door.
            </Lead>
            <Reveal as="div"><ul className="space-y-2 text-slate-300 mb-8">
              {[
                'Een mini business case: uren per week, wat die kosten en wanneer de dag zich terugverdient.',
                'Wat het kost en waarom je geen echte kandidaat- of medewerkersgegevens nodig hebt.',
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden />
                  <span>{t}</span>
                </li>
              ))}
            </ul></Reveal>
            <div className="flex flex-wrap items-center gap-4">
              <a href={MANAGER_LETTER} className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-slate-950 bg-sky-400 hover:bg-sky-300">
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
        <Reveal><H2>Veelgestelde vragen</H2></Reveal>
        <Reveal className="divide-y divide-white/10 border-y border-white/10 max-w-3xl">
          {faq.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 py-1 text-white font-medium">
                {f.q}
                <span className="inline-block text-slate-400 text-xl leading-none group-open:rotate-45 transition-transform" aria-hidden>+</span>
              </summary>
              <div className="mt-3 text-slate-300 leading-relaxed">{f.a}</div>
            </details>
          ))}
        </Reveal>
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
        <a href={HACKATHON_CHECKOUT} className="btn-shine px-5 py-2.5 rounded-full font-bold text-slate-950 bg-sky-400 hover:bg-sky-300 whitespace-nowrap">
          Reserveer je plek
        </a>
      </div>
    </div>
  </Page>
  );
};

export default HackathonPage;
