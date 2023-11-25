"use client";
import { navLinks } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathName = usePathname();

  return (
    <nav className="px-6  py-4 font-nunito">
      <div className="flex-between container mx-auto items-center">
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
                    "base-medium ml-4 border-b-2 border-transparent pb-2 text-black-500",
                    { "!border-primary-900": isActive }
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
          <a className="h3-semibold ml-3 text-black-800" href={"+38063999562"}>
            +38063999562
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
