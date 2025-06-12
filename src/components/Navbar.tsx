"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollLink from "./ScrollLink";
import logo from "../../public/logomovie.png";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Top Rated", href: "#top-rated" },
    { name: "Now Playing", href: "#now-playing" },
    { name: "Genres", href: "#genres" },
  ];

  return (
    <nav className="bg-[#2c2c2c] py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={logo}
            alt="Movies Logo"
            width={48}
            height={48}
            className="drop-shadow-md"
            priority
          />
        </Link>

        <div className="flex gap-6">
          {navItems.map((item) => (
            <ScrollLink
              key={item.href}
              href={item.href}
              className={`text-white hover:text-yellow-400 transition font-medium ${
                pathname === item.href ? "text-yellow-400" : ""
              }`}
            >
              {item.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
