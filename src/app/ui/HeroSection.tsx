import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="flex flex-row items-center text-left pl-16 pr-12 py-12 bg-gray-100 rounded-lg h-auto ">
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Donnez vie à vos projets Web & Mobile.
        </h1>
        <p className="text-gray-700 mb-6 max-w-lg">
          Pixelpulse vous donne l’inspiration à travers de nombreux projets innovants.
        </p>
        <button className="bg-[#1F0EF2] text-white px-6 py-3 rounded-[10px] font-semibold hover:bg-blue-700 transition">
          Découvrir maintenant
        </button>
      </div>
      <div className="flex  items-center gap-7">
        <Image src='/netflix.webp' width={217} height={145} alt="Netflix" className="rounded-lg shadow-md" />
        <Image src='/cars.webp' width={217} height={145} alt="Cars" className="rounded-lg shadow-md" />
      </div>
    </div>
  );
}
