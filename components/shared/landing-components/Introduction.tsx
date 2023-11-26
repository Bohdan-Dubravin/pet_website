import { Button } from "@/components/ui/button";
import Image from "next/image";

const Introduction = () => {
  return (
    <section className="relative overflow-hidden  pt-24">
      <div className="flex-between container relative  !items-start">
        <div>
          <h1 className="mb-6  max-w-[840px] text-left font-montserrat text-5xl font-semibold">
            Найкращий сервіс для вигулу Ваших улюбленців у Києві
          </h1>
          <p className="base-semibold mb-6 font-nunito">
            Сервіс доступний 7 днів на тиждень. <br /> Ви можете замовити
            прогулянки з собаками
          </p>
          <Button className="primary-btn">
            <a href="#form" className="base-bold">
              Замовити вигул
            </a>
          </Button>
        </div>
        <div className="">
          <Image
            className="translate-x-14"
            src="/assets/images/top-dog.png"
            alt="bg-image"
            width={800}
            height={550}
          />
        </div>
      </div>
      <div className="h-40"></div>
      <Image
        className="absolute left-[55%] top-[-2%] -z-10"
        src="/assets/images/top-bg1.svg"
        alt="bg-image"
        width={1300}
        height={800}
      />
    </section>
  );
};

export default Introduction;
