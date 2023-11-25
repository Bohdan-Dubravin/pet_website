import Image from "next/image";

const Introduction = () => {
  return (
    <section className="relative overflow-hidden  pt-24">
      <div className="flex-between container relative  !items-start">
        <h1 className="max-w-[600px] text-left font-montserrat text-6xl font-semibold">
          Найкращий сервіс для вигулу Ваших улюбленців у Києві
        </h1>
        <div className="overflow-hidden">
          <Image
            className="translate-x-14"
            src="/assets/images/top-dog.png"
            alt="bg-image"
            width={650}
            height={650}
          />
        </div>
      </div>
      <div className="h-40"></div>
      <Image
        className="absolute left-[55%] top-[-15%] -z-10"
        src="/assets/images/top-bg.svg"
        alt="bg-image"
        width={1100}
        height={800}
      />
    </section>
  );
};

export default Introduction;
