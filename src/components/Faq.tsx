import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { faqs } from '../data/content';
export default function Faq({lang='es'}:{lang?:string}) {
 const i=lang==='en'?1:0;
 return <Accordion className="faq-list">{faqs.map((f,n)=><AccordionItem key={n} value={String(n)} className="faq-item"><AccordionTrigger className="faq-trigger">{f.q[i]}</AccordionTrigger><AccordionContent className="faq-content"><p>{f.a[i]}</p></AccordionContent></AccordionItem>)}</Accordion>;
}
