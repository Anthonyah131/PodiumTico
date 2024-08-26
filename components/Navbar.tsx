"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">PodiumTico</div>
        <div className="flex space-x-4">
          <Link href="#inicio" className="text-white px-2 sm:px-4">
            Inicio
          </Link>
          <Link href="#sobre-nosotros" className="text-white px-2 sm:px-4">
            Sobre Nosotros
          </Link>
          <Link href="#destacados" className="text-white px-2 sm:px-4">
            Destacados
          </Link>
        </div>
      </div>
    </nav>
  );
}
