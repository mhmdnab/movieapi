// components/GenreCard.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaSkull,
  FaHeart,
  FaMusic,
  FaLaugh,
  FaUserSecret,
  FaRocket,
  FaVideo,
  FaBook,
  FaCameraRetro,
  FaTheaterMasks,
  FaDragon,
  FaGlobe,
  FaPeopleCarry,
  FaFeatherAlt,
  FaFighterJet,
  FaQuestionCircle,
} from "react-icons/fa";
import { GiFieldGun } from "react-icons/gi";
import { BsBook } from "react-icons/bs";
import { GoRocket } from "react-icons/go";
import { JSX } from "react";

type Genre = {
  id: number;
  name: string;
};

const gradientMap: Record<string, string> = {
  Action: "from-red-500 to-orange-600",
  Adventure: "from-green-500 to-blue-600",
  Animation: "from-pink-500 to-purple-600",
  Comedy: "from-yellow-400 to-yellow-600",
  Crime: "from-gray-700 to-gray-900",
  Documentary: "from-teal-500 to-blue-700",
  Drama: "from-purple-500 to-indigo-700",
  Family: "from-cyan-500 to-teal-600",
  Fantasy: "from-indigo-500 to-violet-600",
  Horror: "from-red-900 to-black",
  Music: "from-pink-400 to-pink-600",
  Mystery: "from-gray-600 to-gray-800",
  Romance: "from-rose-400 to-pink-500",
  ScienceFiction: "from-blue-400 to-indigo-600",
  TVMovie: "from-indigo-400 to-indigo-800",
  Thriller: "from-red-600 to-red-800",
  War: "from-yellow-700 to-orange-700",
  Western: "from-yellow-800 to-yellow-900",
};

const iconMap: Record<string, JSX.Element> = {
  Action: <FaFighterJet size={24} />,
  Adventure: <FaDragon size={24} />,
  Animation: <FaFeatherAlt size={24} />,
  Comedy: <FaLaugh size={24} />,
  Crime: <FaUserSecret size={24} />,
  Documentary: <FaBook size={24} />,
  Drama: <FaTheaterMasks size={24} />,
  Family: <FaPeopleCarry size={24} />,
  Fantasy: <FaGlobe size={24} />,
  History: <BsBook size={24} />,
  Horror: <FaSkull size={24} />,
  Music: <FaMusic size={24} />,
  Mystery: <FaQuestionCircle size={24} />,
  Romance: <FaHeart size={24} />,
  "Science Fiction": <GoRocket size={24} />,
  "TV Movie": <FaVideo size={24} />,
  Thriller: <FaCameraRetro size={24} />,
  War: <GiFieldGun size={24} />,
  Western: <FaTheaterMasks size={24} />,
};

function formatKey(name: string) {
  return name.replace(/\s/g, "").replace(/-/g, "").trim();
}

export default function GenreCard({ genre }: { genre: Genre }) {
  const key = formatKey(genre.name);
  const gradient = gradientMap[key] || "from-gray-600 to-gray-800";
  const icon = iconMap[genre.name] || <FaTheaterMasks size={24} />;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={`/genres/${genre.id}`}
        className={`rounded-xl text-white text-center font-bold p-6 h-40 flex flex-col items-center justify-center bg-gradient-to-br ${gradient} hover:scale-105 hover:shadow-2xl transition-all duration-300`}
      >
        <div className="mb-2">{icon}</div>
        <span className="text-lg md:text-xl">{genre.name}</span>
      </Link>
    </motion.div>
  );
}
