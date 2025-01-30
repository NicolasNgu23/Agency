import { Project } from "@prisma/client"
import Image from "next/image";

const ProjectItem = ({project}: {project: Project}) => {
  return (
    <div
      key={project.id}
      className="flex flex-col w-fit project space-y-2 cursor-pointer"
    >
      <div className="relative w-[400px] h-[250px] border rounded-xl">
        <Image
          src={project.imageUrl ? project.imageUrl : ""}
          alt={project.name}
          layout="fill"
          objectFit="fit"
          className="rounded-xl p-[1px]"
        />
      </div>
      <p className="text-base font-medium">{project.name}</p>
    </div>
  )
}

export default ProjectItem
