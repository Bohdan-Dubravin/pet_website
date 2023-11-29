import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black-800 py-8 font-nunito text-[#f5f7f9]">
      <div className="flex-between container">
        <div className="flex-between items-center">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/logo.svg"
              width={40}
              height={40}
              alt="Pet walk"
            />
            <p className="h2-bold">Pet Walk</p>
          </Link>
        </div>
        <p>{year}. All right reserved</p>
        <Image
          src="/assets/icons/telegram.svg"
          width={30}
          height={30}
          alt="telegram link"
        />
      </div>
    </footer>
  );
};

export default Footer;
