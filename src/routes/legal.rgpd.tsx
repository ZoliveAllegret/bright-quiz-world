import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/rgpd")({
  head: () => ({ meta: [{ title: "RGPD — Evalus" }] }),
  component: () => (
    <article className="prose prose-neutral max-w-none">
      <h1 className="text-4xl font-bold tracking-tight">Conformité RGPD</h1>
      <p className="text-muted-foreground mt-2">Dernière mise à jour : 1er janvier 2026</p>

      <section className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">Vos droits</h2>
          <p>Conformément au Règlement Général sur la Protection des Données (UE 2016/679), vous disposez des droits suivants :</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li><strong>Droit d'accès</strong> à l'ensemble de vos données personnelles</li>
            <li><strong>Droit de rectification</strong> en cas d'erreur ou de modification</li>
            <li><strong>Droit à l'effacement</strong> (droit à l'oubli)</li>
            <li><strong>Droit à la portabilité</strong> de vos données dans un format structuré</li>
            <li><strong>Droit d'opposition</strong> au traitement</li>
            <li><strong>Droit à la limitation</strong> du traitement</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Comment exercer vos droits</h2>
          <p>Toute demande peut être adressée à notre Délégué à la Protection des Données :</p>
          <p className="mt-2">
            <strong>E-mail :</strong> <a className="text-primary hover:underline" href="mailto:dpo@evalus.app">dpo@evalus.app</a><br />
            <strong>Courrier :</strong> Evalus SAS — DPO — 12 rue de la République, 75011 Paris
          </p>
          <p className="mt-2">Nous nous engageons à répondre sous 30 jours maximum.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Réclamation auprès de la CNIL</h2>
          <p>Vous pouvez à tout moment introduire une réclamation auprès de la CNIL : <a className="text-primary hover:underline" href="https://www.cnil.fr" target="_blank" rel="noreferrer">www.cnil.fr</a>.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Sous-traitants</h2>
          <p>Evalus fait appel aux sous-traitants suivants, tous conformes RGPD :</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>OVHcloud (France) — hébergement</li>
            <li>Stripe Payments Europe (Irlande) — paiements</li>
            <li>Brevo (France) — e-mails transactionnels</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Sécurité</h2>
          <p>Chiffrement TLS 1.3 en transit, chiffrement AES-256 au repos, sauvegardes quotidiennes, audits de sécurité annuels.</p>
        </div>
      </section>
    </article>
  ),
});
