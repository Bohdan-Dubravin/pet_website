import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className=" pt-24">
      <div className="flex-between container ">
        <div className="relative">
          <Image
            className="absolute -top-20 left-[220px] rotate-180"
            src="/assets/icons/green-rounded-lines.svg"
            width={250}
            height={500}
            alt="green-lines"
          />
          <Image
            className="rounded-[30px]"
            src="/assets/images/happy-dogs.jpg"
            width={380}
            height={500}
            alt="happy-dogs"
          />
          <Image
            className="absolute -bottom-20 left-[-100px] "
            src="/assets/icons/green-rounded-lines.svg"
            width={250}
            height={500}
            alt="green-lines"
          />
        </div>
        <div className="max-w-lg">
          <h2 className="h1-bold before-paw relative mb-14">Про наш сервіс</h2>
          <p className="base-medium mb-10">
            Наша мета проста: гуляти з нашими улюбленими собаками, зберігаючи
            найвищий ступінь надійності та довіри. <br />
            <br />
            Наші прогулянки один на один з нашими професійними вигульниками
            дають вашій собаці перерву в день, свіже повітря та особисту увагу,
            якої вони потребують і заслуговують.
            <br />
            <br />
            Частину коштів від кожної прогулянки ми передаємо потребуючим
            собакам у притулку.
          </p>
          <Button className="primary-btn">
            <a href="#form" className="base-bold">
              Замовити вигул
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
