import Image from 'next/image';
import { FaLightbulb, FaHandshake, FaRocket, FaEye, FaHeart } from "react-icons/fa";

export default function ValuesSection() {
  const values = [
    {
      title: 'Créativité',
      description: 'Toujours repousser les limites de l\'innovation.',
      icon: <FaLightbulb size={24} className="text-yellow-500" />
    },
    {
      title: 'Collaboration',
      description: 'Travailler main dans la main avec nos clients pour des résultats exceptionnels.',
      icon: <FaHandshake size={24} className="text-blue-500" />
    },
    {
      title: 'Innovation',
      description: 'Rester à la pointe des tendances et des technologies.',
      icon: <FaRocket size={24} className="text-red-500" />
    },
    {
      title: 'Transparence',
      description: 'Une communication claire et honnête à chaque étape.',
      icon: <FaEye size={24} className="text-green-500" />
    },
    {
      title: 'Engagement',
      description: 'Des solutions qui ont un impact réel et durable.',
      icon: <FaHeart size={24} className="text-pink-500" />
    }
  ];

  const team = [
    {
      name: 'Nicolas Nguyen',
      title: 'Directeur créatif',
      description: 'Passionné des nouvelles tendances, il donne vie aux concepts les plus audacieux.',
      image: '/anthony.webp'
    },
    {
      name: 'Mika Ramanantsoa',
      title: 'Développeur web',
      description: 'Expert en codage et en solutions techniques, il transforme les idées en réalité.',
      image: '/simu.webp'
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-12">Nos Valeurs & Équipe</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          {values.map((value, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
              <div className="p-3 bg-gray-100 rounded-full">
                {value.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6">
          {team.map((member, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
              <div className="relative w-full h-72">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>

              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <h3 className="font-bold text-xl">{member.name}</h3>
                <p className="text-gray-300">{member.title}</p>
                <p className="mt-2 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
