import { mkdir, writeFile, cp } from 'node:fs/promises';
await mkdir('dist/server',{recursive:true});
await writeFile('dist/server/index.js',`const redirects = {'/visita-sidra-kane/':'/visita/','/quienes-somos/':'/historia/','/la-coleccion-kane/':'/coleccion/','/english/':'/en/'};\nexport default { async fetch(request, env) { const url = new URL(request.url); const destination = redirects[url.pathname.replace(/\\/?$/, '/')]; if(destination) { url.pathname = destination; return Response.redirect(url.href, 301); } return env.ASSETS.fetch(request); } };\n`);
await writeFile('dist/server/wrangler.json',JSON.stringify({name:'sidra-kane',main:'index.js',compatibility_date:'2026-06-01',assets:{directory:'../client',binding:'ASSETS',html_handling:'auto-trailing-slash',not_found_handling:'404-page'}},null,2));
await mkdir('dist/.openai',{recursive:true});
await cp('.openai/hosting.json','dist/.openai/hosting.json');
