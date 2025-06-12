import Link from "next/link";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import ScrollLink from "./ScrollLink";
import logo from "../../public/logomovie.png";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1f1f1f] text-white py-8 px-6 mt-20 border-t border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-sm">
        {/* Left: Logo */}
        <div className="flex-1 text-center md:text-left">
          <Image
            src={logo}
            alt="Movies Logo"
            width={100}
            height={100}
            className="mx-auto md:mx-0"
          />
          <p className="text-gray-400">Explore. Watch. Enjoy.</p>
        </div>

        {/* Center: Nav Links */}
        <div className="flex-1 flex justify-center gap-6">
          <ScrollLink
            href="#top-rated"
            className="hover:text-yellow-400 transition"
          >
            Top Rated
          </ScrollLink>
          <ScrollLink
            href="#now-playing"
            className="hover:text-yellow-400 transition"
          >
            Now Playing
          </ScrollLink>
          <ScrollLink
            href="#genres"
            className="hover:text-yellow-400 transition"
          >
            Genres
          </ScrollLink>
        </div>

        {/* Right: Socials */}
        <div className="flex-1 flex justify-center md:justify-end gap-4 text-xl">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-6 text-xs">
        © {new Date().getFullYear()} MovieDB — All rights reserved.
      </div>
    </footer>
  );
}
