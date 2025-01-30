import Image from 'next/image';

export default function ValuesSection() {
  const values = [
    {
      title: 'Créativité',
      description: 'Toujours repousser ses propres limites.'
    },
    {
      title: 'Collaboration',
      description: 'Travailler main dans la main avec nos clients pour des résultats sur mesure.'
    },
    {
      title: 'Innovation',
      description: 'Rester à la pointe des tendances et des technologies.'
    },
    {
      title: 'Transparence',
      description: 'Une communication claire et honnête à chaque étape.'
    },
    {
      title: 'Engagement',
      description: 'Des solutions qui ont un impact réel et durable.'
    }
  ];

  const team = [
    {
      name: 'Nicolas Nguyen',
      title: 'Directeur créatif',
      description: 'Passionné des nouvelles tendances, il donne vie aux concepts les plus audacieux.',
      image: '/anthony.webp'  // Corrigé : retiré "public" du chemin
    },
    {
      name: 'Mika Ramanantsoa',
      title: 'Développeur web',
      description: 'Expert en codage et en solutions techniques, il transforme les idées en réalité.',
      image: '/simu.webp'  // Corrigé : retiré "public" du chemin
    }
  ];

  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-2xl font-bold mb-12">Nos valeurs :</h2>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Liste des valeurs */}
        <div className="space-y-6">
          {values.map((value, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">
                {value.title} : <span className="font-normal">{value.description}</span>
              </h3>
            </div>
          ))}
        </div>

        {/* Cartes des membres de l'équipe */}
        <div className="bg-gray-100 rounded-lg p-6">
          <div className="grid grid-cols-1 gap-6">
            {team.map((member, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="relative w-32 h-32">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-gray-600">{member.title}</p>
                  <p className="mt-2 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}