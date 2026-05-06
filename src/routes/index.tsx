import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/evalus-logo.svg";
import { Zap, Users, BarChart3, Sparkles, CheckCircle2, Timer } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evalus — Créez des quiz interactifs en quelques secondes" },
      {
        name: "description",
        content:
          "Evalus est la plateforme simple pour créer, partager et analyser des quiz en classe. Inspirée de Socrative, conçue pour les enseignants et formateurs.",
      },
      { property: "og:title", content: "Evalus — Quiz interactifs pour la classe" },
      {
        property: "og:description",
        content: "Créez, lancez et analysez vos quiz en temps réel.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <img src={logo} alt="Evalus" className="h-8 w-auto" />
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</a>
            <a href="#how" className="hover:text-foreground transition-colors">Comment ça marche</a>
            <a href="#pricing" className="hover:text-foreground transition-colors">Tarifs</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm">Connexion</Button>
            <Button variant="hero" size="sm">Commencer</Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
        <div className="absolute -top-32 -right-32 -z-10 w-[500px] h-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-40 -left-32 -z-10 w-[400px] h-[400px] rounded-full bg-primary-glow/20 blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 pt-24 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-xs font-medium mb-8">
            <Sparkles className="h-3.5 w-3.5" />
            Nouvelle génération de quiz pour la classe
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground max-w-4xl mx-auto leading-[1.05]">
            Créez des quiz qui{" "}
            <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
              captivent
            </span>{" "}
            vos apprenants
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Lancez des quiz en direct, suivez les réponses en temps réel et obtenez
            des analyses claires. Aucune installation, aucun téléchargement.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="min-w-[200px]">
              Créer un quiz gratuit
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px]">
              Rejoindre un quiz
            </Button>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            Gratuit pour toujours · Aucune carte bancaire requise
          </p>

          {/* Mock quiz card */}
          <div className="mt-20 max-w-3xl mx-auto">
            <Card className="text-left p-8 shadow-[var(--shadow-elegant)] border-primary/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  Question 3 / 10
                </div>
                <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
                  <Timer className="h-3.5 w-3.5" />
                  00:24
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Quelle est la capitale du Portugal ?
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { label: "Madrid", pct: 12 },
                  { label: "Lisbonne", pct: 68, correct: true },
                  { label: "Porto", pct: 15 },
                  { label: "Barcelone", pct: 5 },
                ].map((opt) => (
                  <div
                    key={opt.label}
                    className={`relative overflow-hidden rounded-lg border p-4 ${
                      opt.correct ? "border-primary bg-accent/50" : "border-border"
                    }`}
                  >
                    <div
                      className="absolute inset-y-0 left-0 bg-primary/10"
                      style={{ width: `${opt.pct}%` }}
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="font-medium text-foreground flex items-center gap-2">
                        {opt.correct && <CheckCircle2 className="h-4 w-4 text-primary" />}
                        {opt.label}
                      </span>
                      <span className="text-sm text-muted-foreground">{opt.pct}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Tout ce qu'il faut pour évaluer
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Conçu pour les enseignants, formateurs et équipes qui veulent aller à l'essentiel.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: "Quiz en direct",
                desc: "Lancez une session avec un code, vos élèves rejoignent en un clic depuis n'importe quel appareil.",
              },
              {
                icon: BarChart3,
                title: "Résultats instantanés",
                desc: "Visualisez les réponses en temps réel et identifiez immédiatement les notions à retravailler.",
              },
              {
                icon: Users,
                title: "Mode salle de classe",
                desc: "Gérez vos classes, suivez la progression individuelle et exportez les résultats facilement.",
              },
            ].map((f) => (
              <Card key={f.title} className="p-8 hover:shadow-[var(--shadow-card)] transition-shadow border-border/60">
                <div className="h-12 w-12 rounded-xl bg-[var(--gradient-hero)] flex items-center justify-center mb-5">
                  <f.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-24 px-6 bg-secondary/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">3 étapes, c'est tout</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { n: "01", t: "Créez votre quiz", d: "Choix multiples, vrai/faux, réponses courtes." },
              { n: "02", t: "Partagez le code", d: "Vos participants rejoignent depuis evalus.app." },
              { n: "03", t: "Analysez", d: "Tableaux de bord clairs et exports CSV." },
            ].map((s) => (
              <div key={s.n} className="text-center">
                <div className="text-5xl font-bold bg-[var(--gradient-hero)] bg-clip-text text-transparent mb-4">
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{s.t}</h3>
                <p className="text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-[var(--gradient-hero)] p-12 md:p-16 text-center shadow-[var(--shadow-elegant)]">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground">
              Prêt à animer votre prochaine séance ?
            </h2>
            <p className="mt-4 text-lg text-primary-foreground/80 max-w-xl mx-auto">
              Rejoignez des milliers d'enseignants qui utilisent Evalus chaque jour.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" variant="secondary" className="min-w-[200px]">
                Démarrer gratuitement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logo} alt="Evalus" className="h-7 w-auto" />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Evalus. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
