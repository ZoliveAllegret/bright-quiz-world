import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/legal/mentions-legales")({
  head: () => ({ meta: [{ title: "Mentions légales — Evalus" }] }),
  component: () => (
    <article className="prose prose-neutral max-w-none">
      <h1 className="text-4xl font-bold tracking-tight">Mentions légales</h1>
      <p className="text-muted-foreground mt-2">Dernière mise à jour : 1er janvier 2026</p>

      <section className="mt-10 space-y-6 text-foreground/90 leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold mb-2">Éditeur</h2>
          <p>
            <strong>Evalus SAS</strong><br />
            Société par actions simplifiée au capital de 10 000 €<br />
            Siège social : 12 rue de la République, 75011 Paris, France<br />
            RCS Paris 912 345 678<br />
            SIRET : 912 345 678 00012<br />
            N° TVA intracommunautaire : FR12 912345678
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Direction de la publication</h2>
          <p>Camille Laurent, Présidente</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p>
            <strong>E-mail :</strong> <a className="text-primary hover:underline" href="mailto:contact@evalus.app">contact@evalus.app</a><br />
            <strong>Téléphone :</strong> +33 (0)1 23 45 67 89
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Hébergeur</h2>
          <p>
            OVH SAS<br />
            2 rue Kellermann, 59100 Roubaix, France<br />
            Tél. : +33 (0)9 72 10 10 07
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Propriété intellectuelle</h2>
          <p>L'ensemble du contenu de ce site (textes, graphismes, logo, icônes) est la propriété exclusive d'Evalus SAS, sauf mention contraire. Toute reproduction sans autorisation écrite préalable est interdite.</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Crédits</h2>
          <p>Icônes : Lucide. Polices : Inter (Google Fonts). Conception et développement : équipe Evalus.</p>
        </div>
      </section>
    </article>
  ),
});
