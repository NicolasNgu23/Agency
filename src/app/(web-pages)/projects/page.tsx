"use client";

import { useState } from "react";
import ProjectFilter from "@/app/ui/projects/Filter";
import ProjectList from "@/app/ui/projects/ProjectList";

export default function ProjectsPage() {
  const [filters, setFilters] = useState<{ technologies: string[], projects: string[] }>({
    technologies: [],
    projects: [],
  });

  return (
    <div className="w-full flex flex-col">
      <div className="flex">
        <div className="flex w-1/2 p-6 items-center justify-center">
          <p className="text-[48px] w-[70%] leading-tight">
            Personnalisez facilement le template de votre choix.
          </p>
        </div>

        <div className="flex w-1/2 p-6 justify-center">
          <p className="text-base">
            Que vous ayez besoin d’un portfolio web, d’une boutique en ligne ou d’un blog,
            commencez par les templates de site internet personnalisables et responsive de Squarespace.
          </p>
        </div>
      </div>

      <div className="flex">
        <ProjectFilter setFilters={setFilters} />
        <ProjectList filters={filters} />
      </div>
    </div>
  );
}
