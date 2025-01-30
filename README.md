# 🚀 PixelPulse - Agence Web

PixelPulse est une agence spécialisée dans le développement de sites web et d’applications modernes. Ce projet propose une plateforme interactive où vous pouvez explorer nos réalisations et découvrir nos services.

## 📌 Fonctionnalités

- 📂 **Gestion des projets** : Filtrage et affichage des projets réalisés.
- 🎨 **UI/UX moderne** : Interface épurée et interactive.
- ⚡ **Performance optimisée** : Développement en **Next.js** et **Prisma**.
- 🔍 **Filtrage avancé** : Recherche par technologies et types de projets.

## 🛠️ Stack Technique

- **Frontend** : Next.js, TypeScript, TailwindCSS
- **Backend** : Prisma, PostgreSQL
- **Déploiement** : Vercel
- **Base de données** : PostgreSQL (hébergée sur Railway/Supabase)

## 🚀 Installation & Exécution

### 1️⃣ Cloner le repo :
git clone https://github.com/NicolasNgu23/Agency.git
cd Agency

2️⃣ Installer les dépendances :

npm install

3️⃣ Configurer l’environnement :

Créer un fichier .env.local avec :
DATABASE_URL=postgresql://user:password@host:port/dbname
NEXT_PUBLIC_SITE_URL=http://localhost:3000

4️⃣ Lancer le projet :

npm run dev

🔧 Prisma (Base de Données)
⚡ Migrations & Seed :
npx prisma migrate dev
npx prisma db seed

⚡ Accès à la base :
npx prisma studio

🚀 Déploiement sur Vercel
npx vercel

```sh
