import Image from "next/image";
import React from "react";

const HowWeWork = () => {
  return (
    <section className="container">
      <h1 className="h1-bold before-paw relative">Як Ми Працюємо</h1>
      <ul className="flex-between">
        <li className="bg-white p-6 shadow-lg ">
          <h4>Замовлення</h4>
          <p className="">Заповніть всі поля про ваше замовлення </p>
        </li>
      </ul>
      <Image
        src="/assets/images/step-1.png"
        width={100}
        height={100}
        alt="first-step"
      />
    </section>
  );
};

export default HowWeWork;
