import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/legal")({
  component: LegalLayout,
});

const links = [
  { to: "/legal/cgu", label: "CGU" },
  { to: "/legal/confidentialite", label: "Politique de confidentialité" },
  { to: "/legal/rgpd", label: "RGPD" },
  { to: "/legal/mentions-legales", label: "Mentions légales" },
] as const;

function LegalLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-sm font-semibold">← Evalus</Link>
          <nav className="hidden md:flex gap-6 text-sm text-muted-foreground">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="hover:text-foreground transition-colors"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-16">
        <Outlet />
      </main>
    </div>
  );
}
