"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getFilteredProjects } from "@/app/action";

type Technology = {
  id: number;
  name: string;
};

type ProjectTechnology = {
  technology: Technology;
};

type Project = {
  id: number;
  createdAt: Date;
  name: string;
  url: string;
  description: string;
  imageUrl: string | null;
  technologies: ProjectTechnology[];
};

export default function ProjectList({ filters }: { filters: { technologies: string[], projects: string[] } }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const router = useRouter();

  const fetchFilteredProjects = useCallback(async () => {
    const result = await getFilteredProjects(filters.technologies, filters.projects);
    setProjects(result);
  }, [filters]);

  useEffect(() => {
    fetchFilteredProjects();
  }, [filters, fetchFilteredProjects]);

  const handleNavigate = (projectId: number) => {
    router.push(`/projects/${projectId}`);
  };


  return (
    <div className="w-5/6 p-8">
      <p className="text-2xl font-medium mb-4">Projets : Développé par nos soins ({projects.length})</p>
      {projects.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleNavigate(project.id)}
              className="cursor-pointer"
            >
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={400}
                  height={250}
                  className="rounded-sm mt-2 w-[350px] h-[200px] border shadow-md transition-transform duration-300 ease-in-out hover:scale-105"
                />
              ) : (
                <p className="text-gray-500 mt-2">Aucune image disponible</p>
              )}
              <h3 className="text-lg font-medium">{project.name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Aucun projet trouvé.</p>
      )}
    </div>
  );
}
