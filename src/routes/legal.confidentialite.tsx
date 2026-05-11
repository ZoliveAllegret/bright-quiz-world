import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/confidentialite")({
  head: () => ({ meta: [{ title: "Politique de confidentialité — Evalus" }] }),
  component: () => (
    <article className="prose prose-neutral max-w-none">
      <h1 className="text-4xl font-bold tracking-tight">Politique de confidentialité</h1>
      <p className="text-muted-foreground mt-2">Dernière mise à jour : 1er janvier 2026</p>

      <section className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Données collectées</h2>
          <p>Evalus collecte uniquement les données strictement nécessaires au fonctionnement du service : adresse e-mail, nom, établissement (facultatif), contenu des quiz créés et réponses des participants.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Participants aux quiz</h2>
          <p>Les élèves rejoignent les quiz via un pseudonyme libre, sans création de compte ni collecte d'adresse e-mail. Aucune donnée personnelle d'élève n'est conservée au-delà de la session.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Finalités</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Authentification et gestion du compte enseignant</li>
            <li>Hébergement et restitution des quiz</li>
            <li>Statistiques d'usage agrégées et anonymisées</li>
            <li>Facturation pour les plans payants</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Hébergement</h2>
          <p>L'ensemble des données est hébergé en France, dans un datacenter certifié ISO 27001 (OVHcloud, Roubaix). Aucun transfert hors Union Européenne n'est effectué.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Durée de conservation</h2>
          <p>Compte actif : pendant toute la durée d'utilisation. Compte inactif : 24 mois après la dernière connexion. Résultats de quiz : selon le plan souscrit (30 jours, 1 an ou illimité).</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">6. Cookies</h2>
          <p>Evalus utilise uniquement des cookies de session strictement nécessaires. Aucun cookie publicitaire ni traceur tiers n'est déposé.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
          <p>Pour toute question : <a className="text-primary hover:underline" href="mailto:dpo@evalus.app">dpo@evalus.app</a>.</p>
        </div>
      </section>
    </article>
  ),
});
