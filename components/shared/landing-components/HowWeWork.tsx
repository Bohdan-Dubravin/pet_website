import { steps } from "@/lib/constants";
import { cn } from "@/lib/utils";

import Image from "next/image";
import React from "react";

const HowWeWork = () => {
  return (
    <section className="container">
      <h1 className="h1-bold before-paw relative mb-20">Як Ми Працюємо</h1>
      <div className="relative">
        <ul className="flex-between mb-60">
          {steps.map((step, i) => {
            return (
              <li
                key={step.title}
                className={cn(
                  "border  relative w-[290px]  rounded-3xl bg-white px-12 pb-32 pt-14 text-center shadow-lg",
                  { "translate-y-16": i === 1, "translate-y-32": i === 2 }
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
        <Image
          className="absolute -bottom-52 left-[28%]"
          src="/assets/images/arrow-long-first.svg"
          alt="path to second step"
          width={330}
          height={200}
        />
        <Image
          className="absolute -bottom-64 left-[64%]"
          src="/assets/images/second-black-line.svg"
          alt="path to second step"
          width={330}
          height={200}
        />
      </div>
    </section>
  );
};

export default HowWeWork;
