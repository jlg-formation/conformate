import React from "react";
import HeaderPublic from "../components/layout/HeaderPublic";
import { Outlet } from "react-router-dom";

const PublicLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <HeaderPublic />
      <main className="p-4 min-h-screen flex flex-col items-center justify-center text-center">
        <Outlet />
      </main>
      <footer className="bg-gray-100 p-4 text-center">
        <nav className="flex justify-center space-x-4 flex-wrap">
          <a href="/a-propos" className="underline">
            À propos
          </a>
          <a href="/aide" className="underline">
            Aide
          </a>
          <a href="/confidentialite" className="underline">
            Confidentialité
          </a>
          <a href="/conditions" className="underline">
            Conditions
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default PublicLayout;
