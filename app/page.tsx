"use client";

import Navbar from "@/components/Navbar";
import Carousel from "@/components/Carousel";
import FeaturedSection from "@/components/FeaturedSection";
import AboutUs from "@/components/AboutUs";

export default function HomePage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Padding top para que el contenido no quede oculto debajo del Navbar */}
      <div className="pt-16">
        {" "}
        {/* Ajusta este padding según la altura del Navbar */}
        {/* Carousel de Noticias */}
        <section id="inicio">
          <Carousel />
        </section>
        {/* Sección de Destacados */}
        <section id="destacados" className="bg-gray-100 py-8">
          <div className="container mx-auto">
            <FeaturedSection />
          </div>
        </section>
        {/* Sección Sobre Nosotros */}
        <section id="sobre-nosotros" className="py-8">
          <div className="container mx-auto">
            <AboutUs />
          </div>
        </section>
      </div>
    </div>
  );
}
