import React, { useState } from "react";

const HeaderPublic: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style>
        {`
          .hamburger-line {
            width: 20px;
            height: 2px;
            background-color: black;
            margin: 3px 0;
            transition: 0.3s;
          }
        `}
      </style>
      <header className="bg-gray-100 p-4 flex justify-between items-center relative">
        <a href="/accueil" className="text-lg font-bold underline">
          Plateforme CEE
        </a>
        {/* Desktop menu */}
        <nav className="hidden md:flex space-x-4">
          <a href="/connexion" className="underline">
            Se connecter
          </a>
          <a href="/inscription" className="underline">
            S’inscrire
          </a>
        </nav>
        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="cursor-pointer focus:outline-none"
          >
            <div className="hamburger">
              <div
                className={`hamburger-line ${
                  isMenuOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></div>
              <div
                className={`hamburger-line ${isMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`hamburger-line ${
                  isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                }`}
              ></div>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile menu panel */}
      {isMenuOpen && (
        <div className="menu-panel md:hidden fixed top-0 right-0 w-64 h-full bg-white z-50 p-5 shadow-lg transform transition-transform duration-300 ease-in-out">
          <a
            href="/connexion"
            className="block py-2 border-b border-gray-300 underline"
          >
            Se connecter
          </a>
          <a
            href="/inscription"
            className="block py-2 border-b border-gray-300 underline"
          >
            S’inscrire
          </a>
          <a
            href="/a-propos"
            className="block py-2 border-b border-gray-300 underline"
          >
            À propos
          </a>
          <a
            href="/aide"
            className="block py-2 border-b border-gray-300 underline"
          >
            Aide
          </a>
          <a
            href="/confidentialite"
            className="block py-2 border-b border-gray-300 underline"
          >
            Confidentialité
          </a>
          <a
            href="/conditions"
            className="block py-2 border-b border-gray-300 underline"
          >
            Conditions
          </a>
        </div>
      )}
    </>
  );
};

export default HeaderPublic;
