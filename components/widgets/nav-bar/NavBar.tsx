"use client";
import { navLinks } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className="font-roboto  px-6 py-4">
      <div className="flex-between mx-auto max-w-[1400px] items-center">
        <Link href="/" className="flex items-center gap-1">
          <Image src="/assets/logo.svg" width={40} height={40} alt="Pet walk" />
          <p className="h2-bold  text-black-800  max-sm:hidden">Pet Walk</p>
        </Link>
        <ul className="flex-between">
          {navLinks.map((link) => {
            const isActive =
              (pathName.includes(link.path) && link.path.length > 1) ||
              pathName === link.path;
            return (
              <li className="" key={link.path}>
                <Link
                  className={clsx(
                    "base-medium text-black-500 ml-4 border-b-2 border-transparent",
                    { "border-green-900": isActive }
                  )}
                  href={link.path}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center">
          <Image src="/assets/phone.svg" width={35} height={35} alt="phone" />
          <a className="h3-semibold text-black-800 ml-3" href={"+38063999562"}>
            +38063999562
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
