import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function Header({lang='es', alternate='/en/', base}: {lang?:string; alternate?:string; base?:string}) {
  const en=lang==='en';
  const root=base || (en?'/en/':'/');
  const [open,setOpen]=useState(false);
  const links=[{label:en?'The visit':'La visita',href:root+'visita/'},{label:en?'Our story':'Nuestra historia',href:root+'historia/'},{label:en?'Kane collection':'Colección Kane',href:root+'coleccion/'},{label:en?'Find us':'Cómo llegar',href:root+'contacto/'}];
  return <header className="site-header">
    <a className="wordmark" href={root} aria-label={en?'Sidra Kane · Home':'Sidra Kane · Inicio'}><span>KANE<span className="logo-star" aria-hidden="true">✳</span></span><small>SIDRA · MENORCA</small></a>
    <nav className="desktop-nav" aria-label={en?'Main navigation':'Navegación principal'}>{links.map(l=><a key={l.href} href={l.href}>{l.label}</a>)}</nav>
    <div className="header-actions"><a className="language-link" href={alternate} lang={en?'es':'en'} aria-label={en?'Cambiar a español':'Switch to English'}>{en?'ES':'EN'} <span aria-hidden="true">⌄</span></a><a className="button header-book" href={root+'visita/#reserva'}>{en?'Book your visit':'Reserva tu visita'}<ArrowUpRight size={18}/></a>
    <Dialog open={open} onOpenChange={setOpen}><DialogTrigger render={<Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={en?'Open menu':'Abrir menú'}/>}><Menu size={25}/></DialogTrigger><DialogContent className="mobile-menu" showCloseButton={false}><DialogTitle className="menu-title">KANE</DialogTitle><DialogDescription className="sr-only">{en?'Explore Sidra Kane':'Descubre Sidra Kane'}</DialogDescription><DialogClose render={<Button variant="ghost" size="icon" className="menu-close" aria-label={en?'Close menu':'Cerrar menú'}/>}><X/></DialogClose><nav aria-label={en?'Mobile navigation':'Navegación móvil'}>{links.map((l,i)=><a key={l.href} href={l.href} onClick={()=>setOpen(false)}><small>0{i+1}</small>{l.label}<ArrowUpRight/></a>)}</nav><a className="button" href={root+'visita/#reserva'}>{en?'Book your visit':'Reserva tu visita'}<ArrowUpRight size={18}/></a><p>{en?'Craft cider · Sa Marjal Vella, Menorca':'Sidra artesanal · Sa Marjal Vella, Menorca'}</p></DialogContent></Dialog>
    </div>
  </header>;
}
