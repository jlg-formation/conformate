import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <main className="flex flex-col items-center justify-center flex-1 text-center p-4">
        <h1 className="text-3xl font-bold mb-4">
          Bienvenue sur la Plateforme d’Évaluation Automatique
        </h1>
        <p className="mb-8 max-w-md">
          Vérifiez la conformité de vos devis de rénovation énergétique selon
          les
          <br />
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
      </main>
      {/* Footer supprimé, présent dans PublicLayout */}
    </div>
  );
};

export default HomePage;
