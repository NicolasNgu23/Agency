import React, { useState } from "react";

type Project = {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  category: string;
  technologies: string[];
  slug: string;
};

type ProjectsProps = {
  projects: Project[];
};

const Projets: React.FC<ProjectsProps> = ({ projects }) => {
  const [categoryFilter, setCategoryFilter] = useState<string>("");
  const [techFilter, setTechFilter] = useState<string>("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = categoryFilter
      ? project.category === categoryFilter
      : true;
    const matchesTech = techFilter
      ? project.technologies.includes(techFilter)
      : true;
    return matchesCategory && matchesTech;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Nos Projets</h1>

      {/* Filtres */}
      <div className="flex gap-4 mb-6">
        <select
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">Toutes les catégories</option>
          <option value="Site web">Site web</option>
          <option value="Application mobile">Application mobile</option>
          <option value="Branding">Branding</option>
        </select>

        <select
          onChange={(e) => setTechFilter(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="">Toutes les technologies</option>
          <option value="React">React</option>
          <option value="Node.js">Node.js</option>
          <option value="Figma">Figma</option>
        </select>
      </div>

      {/* Liste des projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
          >
            <img
              src={project.imageUrl || "/placeholder.jpg"}
              alt={project.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-700">{project.description}</p>
            <a
              href={`/projets/${project.slug}`}
              className="text-blue-500 hover:underline mt-2 block"
            >
              Voir le projet
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

// Exemple de données statiques pour le rendu
export const getStaticProps = async () => {
  const projets: Project[] = [
    {
      id: "1",
      name: "Site e-commerce",
      description: "Un site e-commerce moderne et rapide.",
      imageUrl: "/ecommerce.jpg",
      category: "Site web",
      technologies: ["React", "Node.js"],
      slug: "site-ecommerce",
    },
  ];

  return {
    props: { projets },
  };
};

export default Projets;
