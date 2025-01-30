import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-row items-center text-left pl-16 pr-12 py-12 bg-gray-100 rounded-lg h-screen">
      {/* Partie texte */}
      <div className="flex-1">
        <h1 className="text-[54px] w-[70%] font-bold text-gray-900 mb-4">
          Donnez vie à vos projets Web & Mobile.
        </h1>
        <p className="text-lg lg:text-xl xl:text-2xl text-gray-700 mb-6 max-w-lg">
          Pixelpulse vous donne l’inspiration à travers de nombreux projets innovants.
        </p>
        <button className="bg-[#1F0EF2] text-white px-8 py-4 rounded-[10px] font-semibold hover:bg-blue-700 transition text-lg lg:text-xl">
          Découvrir maintenant
        </button>
      </div>

      {/* Partie images */}
      <div className="flex items-center gap-7 w-[40%]">
        <div className="w-[45%]">
          <Image
            src="/netflix3.webp"
            alt="Netflix"
            width={500} // Largeur de base
            height={300} // Hauteur de base
            layout="responsive" // Permet à l'image de s'adapter à la taille du conteneur
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-[45%]">
          <Image
            src="/spotify2.webp"
            alt="Spotify"
            width={500} 
            height={300} 
            layout="responsive" 
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}