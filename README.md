# 🎁 Bons Cadeau – Application de bons cadeaux gastronomiques & hébergement

Application web moderne pour la gestion et la vente de bons cadeaux : sélection, personnalisation, génération de PDF, et parcours utilisateur complet en 4 étapes. Design responsive, architecture modulaire avec Next.js 13+ App Router.

---

## 🧭 Sommaire

- [📸 Aperçu du projet](#-aperçu-du-projet)
- [🧱 Architecture du projet](#-architecture-du-projet)
- [🚀 Fonctionnalités principales](#-fonctionnalités-principales)
- [⚙️ Installation et lancement du projet](#️-installation-et-lancement-du-projet)
- [📦 Scripts disponibles](#-scripts-disponibles)
- [📁 Structure des dossiers](#-structure-des-dossiers)
- [🌍 Technologies utilisées](#-technologies-utilisées)
- [📊 Données simulées (mock)](#-données-simulées-mock)
- [📝 À propos](#-à-propos)

---

## 📸 Aperçu du projet

- 🔎 Filtres interactifs par catégorie
- 🖼️ Affichage de cartes cadeaux dynamiques (avec images)
- 📝 Formulaire de commande en plusieurs étapes
- 🖨️ Génération de bons PDF à partir d’un modèle choisi
- 📱 Responsive mobile-first
- 🔁 Données simulées via un fichier JSON (`/public/data/gifts.json`)

---

## 🧱 Architecture du projet

Le projet suit l'architecture **Next.js App Router** (`/app`) avec séparation claire entre pages, composants, contexte et données.

```bash
src/
├── app/
│   ├── page.tsx                  # Étape 1 – Choix du bon
│   └── gift/
│       ├── [id]/page.tsx         # Étape 2 – Détail du bon
│       ├── [id]/formulaire/      # Étape 3 – Formulaire
│       ├── [id]/confirmation/    # Étape 4 – PDF confirmation
│       └── loading.tsx           # Loading pages
│
├── components/                   # Composants UI réutilisables
├── context/                      # Contexte React
│   └── GiftContext.tsx
├── public/
│   ├── data/gifts.json           # ✅ Données simulées
│   ├── models/                   # Modèles visuels
│   └── backgrounds/              # Images de fond (ex: marbre)
├── types/                        # Déclarations personnalisées (ex: html2pdf)
```

---

## 🚀 Fonctionnalités principales

| Étape | Fonctionnalité |
|-------|----------------|
| 1️⃣ | Filtres catégories + affichage des bons |
| 2️⃣ | Page produit (prix, quantité, description, image) |
| 3️⃣ | Formulaire acheteur + CGV + choix de modèle |
| 4️⃣ | Génération PDF du bon avec données saisies |
| 🌀 | Stepper dynamique et loaders par page |
| 📦 | Pagination fonctionnelle (6 cartes par page) |

---

## ⚙️ Installation et lancement du projet

### 1. 📥 Cloner le repo

```bash
git clone https://github.com/ton-utilisateur/nom-du-projet.git
cd nom-du-projet
```

### 2. 📦 Installer les dépendances

```bash
npm install
```

### 3. 🚀 Lancer le serveur en développement

```bash
npm run dev
```

➡️ Accède ensuite à : [http://localhost:3000](http://localhost:3000)

---

## 📦 Scripts disponibles

| Commande         | Description                                      |
|------------------|--------------------------------------------------|
| `npm run dev`    | Démarre le serveur Next.js en mode dev          |
| `npm run build`  | Build l'application pour la production           |
| `npm run start`  | Démarre le serveur Next.js (prod)               |
| `npm run lint`   | Analyse le code avec ESLint                      |

---

## 📁 Structure des dossiers

- `components/` : UI (carte, stepper, footer, etc.)
- `context/` : `GiftContext` centralise les données
- `public/data/gifts.json` : données simulées des bons
- `app/gift/[id]/...` : tunnel de commande dynamique

---

## 🌍 Technologies utilisées

- [Next.js 13+](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [html2pdf.js](https://github.com/eKoopmans/html2pdf)
- [TypeScript](https://www.typescriptlang.org/)
- [clsx](https://www.npmjs.com/package/clsx)

---

## 📊 Données simulées (mock)

Les cartes cadeaux sont stockées dans :

```bash
/public/data/gifts.json
```

✔️ Chargées automatiquement par `GiftContext` avec `fetch()`  
✔️ Aucune API requise pour fonctionner

---

## 📝 À propos

Ce projet a été conçu comme un prototype de tunnel de commande multi-étapes pour l'achat de **bons cadeaux personnalisables** (restaurant, hôtel, etc.).  
Il est entièrement modulable pour être connecté à une API, base de données ou Stripe.

---

## 📬 Contact

Développé avec ❤️ par Manana NyAary 
