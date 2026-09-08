# Portfolio — Azat Harutyunyan (migré vers Next.js)

Migration depuis Create React App (React 17 + Material-UI v4) vers **Next.js (App Router)**.

## Ce qui a changé
- CRA / react-scripts → Next.js (build/dev géré nativement, plus de `gh-pages`)
- React 17 → React 19
- `@material-ui/icons` (déprécié) → `lucide-react` (icônes UI) + `react-icons` (logos GitHub/LinkedIn)
- `react-helmet` → API `metadata` native de Next.js (app/layout.js)
- 260 alertes Dependabot → 0 (dépendances entièrement renouvelées)

## À compléter avant de déployer (TODO dans le code)
- `lib/portfolio.js` : la liste `projects` ne contient qu'un exemple, remplace par tes vrais projets
- `lib/portfolio.js` : `contact.email` est vide, ajoute ton email si tu veux la section Contact visible
- Vérifier `public/CV.pdf` (copié depuis l'ancien projet)

## Lancer en local
```bash
npm install
npm run dev
```

## Déployer
Le projet est prêt pour Vercel (détection automatique de Next.js) : push la branche, connecte-la sur Vercel, ou `vercel --prod`.
