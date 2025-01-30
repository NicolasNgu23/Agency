"use server";

import { PrismaClient, Project } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProjectData() {
  const technologies = await prisma.technology.findMany({
    select: { id: true, name: true },
  });

  const projects = await prisma.project.findMany({
    select: { id: true, name: true },
  });


  return {
    technologies: technologies.map((tech) => ({
      id: tech.id,
      name: tech.name,
    })),
    projectNames: projects.map((project) => ({
      id: project.id,
      name: project.name,
    })),
  };
}


export async function getProjectById(id: number): Promise<Project | { error: string }> {
  try {

    const project = await prisma.project.findUnique({
      where: { id: Number(id) },
      include: {
        technologies: {
          include: { technology: true },
        },
      },
    });

    if (!project) {
      console.error("Projet non trouvé pour l'ID :", id);
      return { error: "Projet non trouvé" };
    }

    return project;
  } catch (error) {
    console.error("Erreur lors de la récupération du projet :", error);
    return { error: "Erreur lors de la récupération du projet" };
  }
}



export async function getFilteredProjects(selectedTechnologies: string[], selectedProjects: string[]) {
  const filteredProjects = await prisma.project.findMany({
    where: {
      AND: [
        selectedTechnologies.length > 0
          ? {
              technologies: {
                some: {
                  technology: { name: { in: selectedTechnologies } },
                },
              },
            }
          : {},
        selectedProjects.length > 0
          ? {
              name: { in: selectedProjects },
            }
          : {},
      ],
    },
    include: {
      technologies: {
        include: { technology: true },
      },
    },
  });

  return filteredProjects;
}
