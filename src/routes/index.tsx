import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import logo from "@/assets/evalus-logo.svg";
import {
  Target,
  BarChart3,
  School,
  Shuffle,
  Timer,
  Library,
  CheckCircle2,
  Check,
  Star,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Evalus — Quiz interactifs en direct pour formateurs et enseignants" },
      {
        name: "description",
        content:
          "Evalus est l'alternative française à Socrative. Lancez des quiz en direct, visualisez les réponses en temps réel, identifiez les lacunes immédiatement. Gratuit, sans installation, conforme RGPD.",
      },
      { property: "og:title", content: "Evalus — Quiz interactifs en direct" },
      {
        property: "og:description",
        content:
          "Créez et lancez des quiz en 30 secondes. Résultats en temps réel, analyses claires, conforme RGPD.",
      },
    ],
  }),
  component: Index,
});

/* ---------- helpers ---------- */

function CountUp({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return controls.stop;
  }, [inView, to, duration, mv]);

  const formatted = Math.round(val).toLocaleString("fr-FR");
  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Reveal({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- page ---------- */

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}

/* ---------- header ---------- */

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/75 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center" aria-label="Evalus">
          <img src={logo} alt="Evalus" className="h-7 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Fonctionnalités</a>
          <a href="#pricing" className="hover:text-foreground transition-colors">Tarifs</a>
          <a href="#login" className="hover:text-foreground transition-colors">Connexion</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Commencer gratuitement
          </Button>
        </div>
      </div>
    </header>
  );
}

/* ---------- hero ---------- */

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[var(--gradient-soft)]" />
      <div className="absolute -top-40 -right-40 -z-10 w-[560px] h-[560px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-40 -left-40 -z-10 w-[460px] h-[460px] rounded-full bg-primary-glow/15 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            Des quiz qui captivent.{" "}
            <span className="bg-[var(--gradient-hero)] bg-clip-text text-transparent">
              Des résultats qui parlent.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Lancez une session en 30 secondes, visualisez les réponses en direct,
            identifiez les lacunes immédiatement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 min-w-[200px]">
              Créer un quiz gratuit <ArrowRight />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px]">
              Rejoindre un quiz
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted-foreground"
          >
            {["Gratuit pour toujours", "Aucune installation", "RGPD"].map((t) => (
              <li key={t} className="flex items-center gap-1.5">
                <Check className="h-3.5 w-3.5 text-primary" /> {t}
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <QuizMock />
        </motion.div>
      </div>
    </section>
  );
}

function QuizMock() {
  const options = [
    { label: "Madrid", pct: 12 },
    { label: "Lisbonne", pct: 68, correct: true },
    { label: "Porto", pct: 15 },
    { label: "Barcelone", pct: 5 },
  ];
  return (
    <Card className="p-6 md:p-8 shadow-[var(--shadow-elegant)] border-primary/10 bg-card">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Question 3 / 10
        </div>
        <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
          <Timer className="h-3.5 w-3.5" />
          00:24
        </div>
      </div>

      {/* progress bar */}
      <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden mb-6">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "30%" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-[var(--gradient-hero)]"
        />
      </div>

      <h3 className="text-xl md:text-2xl font-semibold mb-5">
        Quelle est la capitale du Portugal ?
      </h3>

      <div className="grid sm:grid-cols-2 gap-3">
        {options.map((opt, i) => (
          <div
            key={opt.label}
            className={`relative overflow-hidden rounded-lg border p-4 ${
              opt.correct ? "border-primary bg-accent/60" : "border-border bg-background"
            }`}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${opt.pct}%` }}
              transition={{ duration: 1.1, delay: 0.4 + i * 0.12, ease: "easeOut" }}
              className={`absolute inset-y-0 left-0 ${opt.correct ? "bg-primary/20" : "bg-primary/8"}`}
              style={opt.correct ? undefined : { backgroundColor: "color-mix(in oklab, var(--primary) 8%, transparent)" }}
            />
            <div className="relative flex items-center justify-between">
              <span className="font-medium flex items-center gap-2">
                {opt.correct && <CheckCircle2 className="h-4 w-4 text-primary" />}
                {opt.label}
              </span>
              <span className="text-sm text-muted-foreground tabular-nums">{opt.pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------- stats ---------- */

function Stats() {
  const items = [
    { value: 12000, suffix: "+", label: "enseignants" },
    { value: 800000, suffix: "+", label: "quiz lancés" },
    { value: 4.8, suffix: "/5", label: "satisfaction", decimal: true },
  ];
  return (
    <section className="bg-[var(--anthracite)] text-[var(--anthracite-foreground)]">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:divide-x md:divide-white/10">
        {items.map((s) => (
          <div key={s.label} className="text-center px-6">
            <div className="text-4xl md:text-5xl font-bold tracking-tight">
              {s.decimal ? <DecimalCount to={s.value} /> : <CountUp to={s.value} />}
              <span className="text-primary-glow">{s.suffix}</span>
            </div>
            <div className="mt-2 text-sm uppercase tracking-wider text-white/60">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function DecimalCount({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(mv, to, { duration: 2, ease: "easeOut", onUpdate: (v) => setVal(v) });
    return c.stop;
  }, [inView, to, mv]);
  return <span ref={ref}>{val.toFixed(1).replace(".", ",")}</span>;
}

/* ---------- features ---------- */

function Features() {
  const items = [
    { icon: Target, title: "Quiz en direct", desc: "Code de salle, rejoindre depuis n'importe quel appareil, aucun compte élève requis." },
    { icon: BarChart3, title: "Résultats en temps réel", desc: "Graphiques instantanés, identification des notions à retravailler." },
    { icon: School, title: "Gestion des classes", desc: "Suivi individuel, historique de progression, export CSV." },
    { icon: Shuffle, title: "Mélange des questions", desc: "Anti-copie natif, ordre aléatoire par participant." },
    { icon: Timer, title: "Minuteur par question", desc: "Paramétrable de 10 à 120 secondes." },
    { icon: Library, title: "Banque de quiz partagée", desc: "Importez des quiz publics, partagez avec vos collègues." },
  ];
  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Tout ce qu'il faut pour évaluer
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Pensé pour l'enseignement supérieur, la formation pro et les organismes Qualiopi.
          </p>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.05}>
              <Card className="group p-7 h-full border-border/60 transition-all hover:border-primary/40 hover:shadow-[var(--shadow-card)]">
                <div className="h-11 w-11 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                  <f.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-1.5">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- how it works ---------- */

function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const steps = [
    { n: "01", t: "Créez", d: "Choix multiples, vrai/faux, réponses courtes." },
    { n: "02", t: "Partagez", d: "Un code, vos participants rejoignent sur evalus.app." },
    { n: "03", t: "Analysez", d: "Tableaux de bord et export CSV." },
  ];
  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">3 étapes, c'est tout</h2>
        </Reveal>
        <div ref={ref} className="relative">
          {/* line */}
          <svg className="hidden md:block absolute top-8 left-[12%] right-[12%] w-[76%] h-2 -z-0" viewBox="0 0 100 2" preserveAspectRatio="none">
            <motion.line
              x1="0" y1="1" x2="100" y2="1"
              stroke="var(--primary)" strokeWidth="0.5" strokeDasharray="100"
              initial={{ strokeDashoffset: 100 }}
              animate={{ strokeDashoffset: inView ? 0 : 100 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
          </svg>
          <div className="grid md:grid-cols-3 gap-10 relative">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={0.2 + i * 0.2} className="text-center">
                <div className="mx-auto h-16 w-16 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-bold text-lg shadow-[var(--shadow-card)]">
                  {s.n}
                </div>
                <h3 className="mt-6 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- pricing ---------- */

function Pricing() {
  const [annual, setAnnual] = useState(true);
  const plans = [
    {
      name: "Gratuit", priceY: 0, priceM: 0, cta: "Commencer", highlight: false,
      features: ["30 élèves / salle", "5 quiz", "1 salle simultanée", "Historique 30 jours"],
      excludes: ["Export CSV", "Gestion de classes", "Multi-formateurs", "Support prioritaire"],
    },
    {
      name: "Enseignant", priceY: 39, priceM: 4.5, cta: "Choisir Enseignant", highlight: true,
      features: ["80 élèves / salle", "Quiz illimités", "3 salles simultanées", "Historique 1 an", "Export CSV", "Gestion de classes"],
      excludes: ["Multi-formateurs", "Support prioritaire"],
    },
    {
      name: "Organisme", priceY: 79, priceM: 9, cta: "Choisir Organisme", highlight: false,
      features: ["200 élèves / salle", "Quiz illimités", "Salles illimitées", "Historique illimité", "Export CSV", "Gestion de classes", "Multi-formateurs", "Support prioritaire"],
      excludes: [],
    },
  ];
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Des tarifs simples</h2>
          <p className="mt-4 text-lg text-muted-foreground">Choisissez le plan adapté à votre usage.</p>

          <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-full bg-secondary border border-border">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${!annual ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
            >
              Mensuel
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${annual ? "bg-background shadow text-foreground" : "text-muted-foreground"}`}
            >
              Annuel <span className="ml-1 text-xs text-primary">−2 mois</span>
            </button>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.08} className="h-full">
              <Card className={`relative p-8 h-full flex flex-col ${p.highlight ? "border-primary bg-accent/40 shadow-[var(--shadow-elegant)] md:-mt-4" : "border-border"}`}>
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-medium">
                    Le plus populaire
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {annual ? p.priceY : p.priceM} €
                  </span>
                  <span className="text-muted-foreground text-sm">{annual ? "/ an" : "/ mois"}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                  {p.excludes.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-muted-foreground/70">
                      <span className="h-4 w-4 mt-0.5 shrink-0 flex items-center justify-center">×</span>
                      <span className="line-through">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`mt-8 w-full ${p.highlight ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}
                  variant={p.highlight ? "default" : "outline"}
                >
                  {p.cta}
                </Button>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- testimonials ---------- */

function Testimonials() {
  const items = [
    { name: "Claire D.", role: "Maître de conférences, Université de Lyon", quote: "Mes étudiants participent enfin tous. Les graphiques en direct ont changé mes amphis.", initials: "CD" },
    { name: "Karim B.", role: "Formateur Qualiopi, Paris", quote: "Mise en place en 5 minutes. L'export CSV me fait gagner des heures sur les bilans.", initials: "KB" },
    { name: "Sophie M.", role: "Professeure de SVT, Lycée Camus", quote: "Simple, rapide, et zéro compte à créer pour les élèves. Exactement ce qu'il me fallait.", initials: "SM" },
  ];
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 4000);
    return () => clearInterval(t);
  }, [paused, items.length]);

  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="max-w-3xl mx-auto text-center">
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
            Ils utilisent Evalus
          </h2>
        </Reveal>
        <div
          className="relative h-64"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {items.map((t, i) => (
            <motion.div
              key={i}
              animate={{ opacity: idx === i ? 1 : 0, y: idx === i ? 0 : 10 }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 ${idx === i ? "" : "pointer-events-none"}`}
            >
              <Card className="p-8 h-full flex flex-col items-center justify-center">
                <div className="flex gap-0.5 mb-4 text-primary">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-lg italic text-foreground max-w-xl">"{t.quote}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[var(--gradient-hero)] text-primary-foreground flex items-center justify-center text-sm font-semibold">
                    {t.initials}
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Témoignage ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-8 bg-primary" : "w-2 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- final cta ---------- */

function FinalCTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <div className="rounded-3xl bg-[var(--gradient-cta)] p-12 md:p-16 text-center shadow-[var(--shadow-elegant)]">
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
              Prêt pour votre prochaine séance ?
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
              Créez votre premier quiz en 30 secondes. Aucune carte bancaire requise.
            </p>
            <div className="mt-8 flex justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 min-w-[220px]">
                Démarrer gratuitement <ArrowRight />
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- footer ---------- */

function SiteFooter() {
  return (
    <footer className="border-t border-border py-14 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="Evalus" className="h-7 w-auto" />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            Quiz interactifs en direct pour formateurs et enseignants.
          </p>
        </div>
        <FooterCol title="Produit" links={["Fonctionnalités", "Tarifs", "Banque de quiz", "Nouveautés"]} />
        <FooterCol title="Légal" links={["CGU", "Politique de confidentialité", "RGPD", "Mentions légales"]} />
        <FooterCol title="Contact" links={["Support", "contact@evalus.app", "Twitter", "LinkedIn"]} />
      </div>
      <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
        <span>© 2026 Evalus. Tous droits réservés.</span>
        <span>Hébergé en France · Conforme RGPD</span>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="text-sm font-semibold mb-3">{title}</div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="hover:text-foreground transition-colors">{l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
