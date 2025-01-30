"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { HiArrowLeft } from "react-icons/hi";
import { TfiCommentAlt } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { getProjectById } from "@/app/action";
import Link from "next/link";


type Technology = {
  id: number;
  name: string;
};

type ProjectTechnology = {
  projectId: number;
  technologyId: number;
  technology: Technology;
};

type Project = {
  id: number;
  createdAt: Date;
  name: string;
  url: string;
  description: string;
  imageUrl: string | null;
  technologies?: ProjectTechnology[];
};


export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = Number(params.id);
  const [project, setProject] = useState<Project>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!projectId) return;

    const fetchProject = async () => {
      const data = await getProjectById(projectId);

      if ("error" in data) {
        setError(data.error);
      } else {
        setProject(data);
      }

      setLoading(false);
    };

    fetchProject();
  }, [projectId]);

  if (loading) {
    return <div className="text-center py-10">Chargement du projet...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">{error}</div>;
  }

  if (!project) {
    return <div className="text-center py-10 text-red-500">Projet non trouvé.</div>;
  }

  return (
    <div className="flex justify-center items-center">

      <div className="fixed top-4 left-12 cursor-pointer">
        <div
          className="flex gap-2 items-center text-semibold"
          onClick={() => router.back()}
        >
          <HiArrowLeft className="w-5 h-5" />
          Retour
        </div>
      </div>

      <div className="flex relative border h-[80vh] w-[60%] m-auto rounded-t-xl pt-4 px-[1px]">
        <div className="absolute top-1 flex space-x-1 ml-2">
          <div className="rounded-full h-2 w-2 bg-red-300"></div>
          <div className="rounded-full h-2 w-2 bg-gray-200"></div>
          <div className="rounded-full h-2 w-2 bg-green-400"></div>
        </div>
        <iframe src={project.url} title={project.name} className="w-full h-full border"></iframe>
      </div>

      <div className="flex flex-col border-l h-[100vh] w-[30%] p-12 space-y-8">
        <div className="w-full flex flex-col space-y-1 mb-2">
          <h1 className="font-bold text-[42px]">{project.name}</h1>
          <p className="opacity-40">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum quae sint dolores possimus nemo odit reiciendis, aperiam, dolore soluta pariatur similique quia.</p>
        </div>

        <Link href={project.url} target="_blank" rel="noopener noreferrer" className="flex justify-center bg-tertiary text-white w-full py-4 rounded-lg mx-auto">
            Voir le site original
        </Link>

        <div className="flex flex-col space-y-4">
          <p className="text-xs font-medium opacity-40 border-b pb-2">
            Technologies utilisées pour le projet :
          </p>
          <div className="grid grid-cols-2 gap-4">
          {project?.technologies?.length ? (
            <div className="grid grid-cols-2 gap-4">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gray-100 text-gray-800 text-center py-2 rounded-lg shadow-sm"
                >
                  {tech.technology.name}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">Aucune technologie associée</p>
          )}
          </div>
        </div>

        <div className="flex mt-4">
          <TfiCommentAlt size={24} className="flex-shrink-0 mt-2" />
          <p className="ml-4">{project.description}</p>
        </div>

        <div className="flex underline cursor-pointer space-x-2 justify-center items-center">
          <IoCallOutline className="w-5 h-5" />
          <p>Contactez-nous</p>
        </div>
      </div>
    </div>
  );
}
