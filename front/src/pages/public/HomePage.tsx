import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">
        Bienvenue sur la Plateforme d’Évaluation Automatique
      </h1>
      <p className="mb-8 max-w-md">
        Vérifiez la conformité de vos devis de rénovation énergétique selon les
        checklists CEE.
      </p>
      <div className="space-x-4">
        <a
          href="/connexion"
          className="inline-block bg-gray-200 px-6 py-3 rounded underline"
        >
          Se connecter
        </a>
        <a
          href="/inscription"
          className="inline-block bg-gray-200 px-6 py-3 rounded underline"
        >
          S’inscrire
        </a>
      </div>
    </div>
  );
};

export default HomePage;
