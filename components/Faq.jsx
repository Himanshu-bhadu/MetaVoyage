import React from "react";
import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = ({question, answer}) => {
   return (
      <div>
         <Accordion type="single" collapsible>
            <AccordionItem value="item-1" className="flex backdrop-blur-xl flex-col justify-center items-center w-[70vw] text-5xl text-white">
               <AccordionTrigger className="font-bold">{question}?</AccordionTrigger>
               <AccordionContent className="font-bold text-3xl mx-5 text-yellow-300">
                  {answer}
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </div>
   );
};

export default Faq;
