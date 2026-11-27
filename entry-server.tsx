// Build-time only: renders each page to static HTML so search engines and AI crawlers
// (which often do not run JavaScript) see the full text. See scripts/prerender.mjs.
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import AgendaPage from './AgendaPage';
import HackathonPage from './HackathonPage';

const pages: Record<string, React.FC> = {
  'index.html': App,
  'agenda.html': AgendaPage,
  'hr-hackathon.html': HackathonPage,
};

export const files = Object.keys(pages);
export const render = (file: string) => {
  const Page = pages[file];
  return renderToString(<Page />);
};
