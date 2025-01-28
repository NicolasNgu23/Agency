import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-6 bg-gray-900 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link to="/" className="text-white hover:text-blue-400 transition-colors">
          PixelPulse
        </Link>
      </div>

      {/* Liens */}
      <div className="flex gap-4">
        <Link to="/projets">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Projets
          </button>
        </Link>
        <Link to="/contact">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
            Contactez-nous
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;