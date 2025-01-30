import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  const technologyNames = [
    "React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB",
    "Vue.js", "Firebase", "Vuetify", "Express.js", "PostgreSQL",
    "Redux", "Sass", "Angular", "TypeScript", "SCSS",
    "RxJS", "Chart.js", "MySQL", "Socket.io", "Prisma",
    "GraphQL", "Chakra UI"
  ];

  await Promise.all(
    technologyNames.map(async (tech) => {
      await prisma.technology.upsert({
        where: { name: tech },
        update: {},
        create: { name: tech },
      });
    })
  );

  console.log("✅ Technologies insérées avec succès");

  const projects = [
    {
      name: "Lauto",
      url: "https://lauto-frontend.vercel.app/",
      description: "Ce projet a été réalisé en 10 jours par une équipe de 4 personnes.",
      imageUrl: "/lauto.webp",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    },
    {
      name: "Hackatrain",
      url: "https://train-front-e8zb.vercel.app/",
      description: "Ce projet a été réalisé en 8 jours par une équipe de 3 personnes.",
      imageUrl: "/hackatrain.webp",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Express.js", "PostgreSQL"],
    },
    {
      name: "Netflix",
      url: "https://netflix-by-me.vercel.app/",
      description: "Ce projet a été réalisé en 7 jours par une équipe de 2 personnes.",
      imageUrl: "/Netflix.webp",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Sass"],
    },
    {
      name: "Meteo",
      url: "https://nicolasngu23.github.io/Meteo_JS/",
      description: "Ce projet a été réalisé en 5 jours par une équipe de 1 personne.",
      imageUrl: "/Meteo.webp",
      technologies: ["Angular", "TypeScript", "SCSS", "RxJS", "Chart.js"],
    },
    {
      name: "Foodie",
      url: "https://nicolasngu23.github.io/foodie-react/",
      description: "Ce projet a été réalisé en 6 jours par une équipe de 2 personnes.",
      imageUrl: "/Foodie.webp",
      technologies: ["React", "Tailwind CSS", "Express.js", "MySQL", "Socket.io"],
    },
    {
      name: "Hackatweet",
      url: "https://xtweet-frontend.vercel.app/",
      description: "Ce projet a été réalisé en 9 jours par une équipe de 4 personnes.",
      imageUrl: "/Hackatweet.webp",
      technologies: ["Next.js", "Prisma", "GraphQL", "PostgreSQL", "Chakra UI"],
    },
  ];

  for (const project of projects) {
    const createdProject = await prisma.project.create({
      data: {
        name: project.name,
        url: project.url,
        description: project.description,
        imageUrl: project.imageUrl,
        technologies: {
          create: project.technologies.map((tech) => ({
            technology: { connect: { name: tech } },
          })),
        },
      },
    });

    console.log(`✅ Projet ajouté : ${createdProject.name}`);
  }

  console.log("✅ Seeding terminé avec succès !");
}

main()
  .catch((error) => {
    console.error("❌ Erreur lors du seeding :", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
