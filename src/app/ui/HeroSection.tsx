import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-center text-left px-8 md:px-16 py-12 bg-gray-100 rounded-lg h-auto md:h-[90vh]">
      <div className="flex flex-col w-full md:w-1/2">
        <h1 className="text-[54px] font-bold text-gray-900 mb-4">
          Donnez vie à vos projets Web & Mobile.
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-lg">
          Webya vous donne l’inspiration à travers de nombreux projets innovants.
        </p>
        <Link
          href="/projects"
          className="bg-[#1F0EF2] w-fit text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-700 transition text-lg"
        >
          Découvrir maintenant
        </Link>
      </div>

      <div className="relative flex w-full md:w-1/2 h-[300px] md:h-[400px] justify-center items-center">
        <div className="relative w-[45%] h-full z-10 border-[4px] border-white rounded-lg shadow-xl">
          <Image
            src="/spotify2.webp"
            alt="Netflix"
            fill
            className="rounded-lg shadow-md object-cover"
          />
        </div>
        <div className="relative w-[45%] h-full -ml-20 mt-20 md:-ml-18 z-20 border-[4px] border-white rounded-lg shadow-xl">
          <Image
            src="/netflix3.webp"
            alt="Spotify"
            fill
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
