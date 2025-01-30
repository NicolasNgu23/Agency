"use client";

import { useEffect, useState } from "react";
import { getProjectData } from "@/app/action";

export default function Filter({ setFilters }: { setFilters: (filters: { technologies: string[], projects: string[] }) => void }) {
  const [data, setData] = useState<{ technologies: { id: number; name: string }[]; projectNames: { id: number; name: string }[] }>({
    technologies: [],
    projectNames: [],
  });


  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProjectData();
      setData(result);
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilters({ technologies: selectedTechnologies, projects: selectedProjects });
  }, [selectedTechnologies, selectedProjects, setFilters]);

  const handleTechnologyChange = (tech: { id: number; name: string }) => {
    setSelectedTechnologies((prev) =>
      prev.includes(tech.name) ? prev.filter((t) => t !== tech.name) : [...prev, tech.name]
    );
  };

  const handleProjectChange = (name: { id: number; name: string }) => {
    setSelectedProjects((prev) =>
      prev.includes(name.name) ? prev.filter((p) => p !== name.name) : [...prev, name.name]
    );
  };


  return (
    <div className="w-1/6 px-8 my-8 border-r">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Technologies</h3>
        <div className="flex flex-col space-y-2">
        {data.technologies.map((tech) => (
          <label key={tech.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-4 h-4"
              onChange={() => handleTechnologyChange(tech)}
              checked={selectedTechnologies.includes(tech.name)}
            />
            <p className="opacity-40 text-base font-thin">{tech.name}</p>
          </label>
        ))}
        </div>
      </div>
      <div className="border-b my-2"></div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Noms des projets</h3>
        <div className="flex flex-col space-y-2">
        {data.projectNames.map((name) => (
          <label key={name.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="w-4 h-4"
              onChange={() => handleProjectChange(name)}
              checked={selectedProjects.includes(name.name)}
            />
            <p className="opacity-40 text-base font-thin">{name.name}</p>
          </label>
        ))}

        </div>
      </div>
    </div>
  );
}
