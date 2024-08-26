"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedSection() {
  const athletes = [
    {
      name: "Hinata Shoyo",
      desc: "Él actualmente jugador del ASAS Sao Paulo y fue estudiante de la Preparatoria Karasuno.",
      image: "/HinataShoyo.jpeg",
      link: "https://haikyuu.fandom.com/es/wiki/Sh%C5%8Dy%C5%8D_Hinata",
    },
    {
      name: "Luciana Alvarado",
      desc: "Gimnasta costarricense destacada por su participación en los Juegos Olímpicos de Tokio 2020, donde hizo historia al ser la primera gimnasta de su país en competir en estas justas.",
      image: "/LucianaAlvarado.jpg",
      link: "https://en.wikipedia.org/wiki/Luciana_Alvarado",
    },
    {
      name: "Andrey Amador",
      desc: "Ciclista costarricense, reconocido por sus destacadas participaciones en grandes competencias de ciclismo, como el Giro d'Italia y el Tour de Francia. Es uno de los máximos exponentes del ciclismo de ruta en Costa Rica.",
      image: "/AndreyAmador.jpg",
      link: "https://andreyamador.com/",
    },
    {
      name: "Kaan Vargas Arik",
      desc: "Kaan Vargas Arik fue premiado por la Confederación Centroamericana de Voleibol (Afecavol) como el jugador más valioso del XIV Campeonato Centroamericano de la categoría sub-19. ",
      image: "/KaanVargas.jpeg",
      link: "https://delfino.cr/2022/09/voleibolista-tico-kaan-vargas-fue-premiado-como-el-jugador-mas-valioso-de-centroamerica",
    },
    {
      name: "Diana Brenes Fallas",
      desc: "Diana Brenes Fallas es una destacada judoca costarricense, conocida por su habilidad y éxitos en competiciones internacionales. Representa a Costa Rica en judo, destacándose por su técnica y dedicación al deporte.",
      image: "/DianaBrenes.png",
      link: "https://www.concrc.org/atleta/diana-brenes-fallas/",
    },
    {
      name: "Yokasta Valle Álvarez",
      desc: "Es ex campeona mundial en una clase de peso, habiendo tenido el título peso mínimo femenino de la Federación Internacional de Boxeo desde 2019 y anteriormente el título peso átomo femenino en 2016.",
      image: "/YokastaValle.png",
      link: "https://es.wikipedia.org/wiki/Yokasta_Valle",
    },
  ];

  return (
    <div id="destacados" className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-4 text-black">Destacados</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {athletes.map((athlete, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              width={500}
              height={200}
              src={athlete.image}
              alt={athlete.name}
              className="h-60 w-full object-cover mb-4"
            />
            <h3 className="text-black text-xl font-bold">{athlete.name}</h3>
            <p className="text-black mb-12">{athlete.desc}</p>
            <Link
              href={athlete.link}
              className="absolute bottom-4 left-4 text-blue-500 hover:text-blue-700"
              target="_blank"
            >
              Ver más
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
