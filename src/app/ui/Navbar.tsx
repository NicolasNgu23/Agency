import Link from "next/link";

const NavBar = ({ openModal }: { openModal: () => void }) => {
  return (
    <nav className="flex justify-between items-center h-[10vh] p-6 text-white w-full">
      <div className="text-2xl font-bold">
        <Link href="/" className="text-black hover:text-blue-400 transition-colors ml-10">
          PixelPulse
        </Link>
      </div>
      <div className="flex gap-6 text-uppercase justify-center w-full">
        <Link
          href="/projects"
          className="text-black font-semibold py-2 px-4 rounded-lg hover:text-blue-400 transition-colors uppercase"
        >
          Projets
        </Link>
        <button
          onClick={openModal}
          className="text-black font-semibold py-2 px-4 rounded-lg hover:text-blue-400 transition-colors uppercase"
        >
          Contactez-nous
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
