// Injects server-rendered HTML into dist/*.html after `vite build`.
// The client still mounts with createRoot, so the page behaves exactly as before.
import { readFile, writeFile, rm } from 'node:fs/promises';
import { fileURLToPath, pathToFileURL } from 'node:url';
import path from 'node:path';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const { files, render } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href);

for (const file of files) {
  const target = path.join(root, 'dist', file);
  const html = await readFile(target, 'utf8');
  const marker = '<div id="root"></div>';
  if (!html.includes(marker)) throw new Error(`No empty root in ${file}`);
  await writeFile(target, html.replace(marker, `<div id="root">${render(file)}</div>`));
  console.log(`prerendered ${file}`);
}
await rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
