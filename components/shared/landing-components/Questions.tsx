"use client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { accordionQuestions } from "@/lib/constants";
import Image from "next/image";
import React, { useState } from "react";

const Questions = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  const handleAccordionClick = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section className="container pt-32">
      <h1 className="h1-bold">Популярні запитання</h1>
      <div className="mt-10 max-w-lg">
        <Accordion type="single" collapsible>
          {accordionQuestions.map((question, i) => {
            return (
              <AccordionItem
                key={i}
                className="rounded-2xl border-none p-2 shadow-lg"
                value={i.toString()}
                onClick={() => handleAccordionClick(i)}
              >
                <AccordionTrigger className="base-bold">
                  Is it accessible?
                  <Image
                    className=""
                    src={
                      activeIndex !== i
                        ? "/assets/icons/plus.svg"
                        : "/assets/icons/minus-icon.svg"
                    }
                    height={30}
                    width={30}
                    alt="plus-con"
                  />
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
};

export default Questions;
