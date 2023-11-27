import { steps } from "@/lib/constants";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

const HowWeWork = () => {
  return (
    <section className="container">
      <h1 className="h1-bold before-paw relative mb-20">Як Ми Працюємо</h1>
      <ul className="flex-between mb-32">
        {steps.map((step) => {
          return (
            <li
              key={step.title}
              className={cn(
                "light-border-2 relative w-60  rounded-3xl bg-white px-6 pb-28 pt-14 text-center shadow-lg",
                step.additionalClasses
              )}
            >
              <h4 className="h2-bold mb-6">{step.title}</h4>
              <p className="base-semibold text-black-500">{step.content}</p>
              <div className="absolute -bottom-8 -right-8 !h-[90px] !w-[90px]">
                <Image src={step.imgUrl} alt="first-step" fill />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HowWeWork;
