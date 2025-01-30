import Link from "next/link";

const NavBar = ({ openModal }: { openModal: () => void }) => {
  return (
    <nav className="flex justify-between items-center h-[10vh] px-8 text-white w-full">
      <div className="text-2xl font-bold">
        <Link href="/" className="text-black hover:text-blue-400 transition-colors">
          Webya
        </Link>
      </div>
      <div className="flex gap-6 text-uppercase justify-center w-full">
        <Link
          href="/projects"
          className="text-black font-medium py-2 px-4 hover:underline transition-colors uppercase"
        >
          Projets
        </Link>
        <button
          onClick={openModal}
          className="text-black font-medium py-2 px-4 hover:underline transition-colors uppercase"
        >
          Contactez-nous
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
