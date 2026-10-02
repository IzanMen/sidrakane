import type { APIRoute } from 'astro';
import { routes } from '../data/content';
export const GET:APIRoute=({site})=>{
 const paths=['/','/en/',...routes.flatMap(p=>['/'+p+'/','/en/'+p+'/'])];
 const xml='<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+paths.map(path=>'<url><loc>'+new URL(path,site).href+'</loc></url>').join('')+'</urlset>';
 return new Response(xml,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
