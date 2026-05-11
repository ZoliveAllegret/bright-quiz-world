import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/cgu")({
  head: () => ({ meta: [{ title: "CGU — Evalus" }] }),
  component: () => (
    <article className="prose prose-neutral max-w-none">
      <h1 className="text-4xl font-bold tracking-tight">Conditions Générales d'Utilisation</h1>
      <p className="text-muted-foreground mt-2">Dernière mise à jour : 1er janvier 2026</p>

      <section className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">1. Objet</h2>
          <p>Les présentes CGU régissent l'utilisation de la plateforme Evalus, accessible à l'adresse evalus.app, permettant la création, le partage et l'analyse de quiz interactifs à destination des enseignants, formateurs et organismes de formation.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">2. Acceptation</h2>
          <p>L'utilisation du service implique l'acceptation pleine et entière des présentes conditions. L'éditeur se réserve le droit de modifier les CGU à tout moment, les utilisateurs étant informés par e-mail au moins 30 jours avant l'entrée en vigueur des modifications.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">3. Compte utilisateur</h2>
          <p>L'inscription est gratuite pour le plan de base. L'utilisateur s'engage à fournir des informations exactes et à maintenir la confidentialité de ses identifiants. Tout usage frauduleux entraînera la suspension du compte.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">4. Propriété intellectuelle</h2>
          <p>Les contenus créés par l'utilisateur (quiz, questions, réponses) restent sa propriété. L'utilisateur accorde à Evalus une licence non-exclusive d'hébergement nécessaire à la fourniture du service.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Disponibilité</h2>
          <p>Evalus s'engage à un taux de disponibilité de 99,5% hors maintenance planifiée, communiquée 48h à l'avance.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">6. Résiliation</h2>
          <p>L'utilisateur peut résilier son compte à tout moment depuis son espace personnel. Les données sont conservées 30 jours puis définitivement supprimées.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">7. Loi applicable</h2>
          <p>Les présentes CGU sont soumises au droit français. Tout litige relèvera de la compétence des tribunaux de Paris.</p>
        </div>
      </section>
    </article>
  ),
});
