import React from 'react';

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Lauto",
      url: "https://lauto-frontend.vercel.app/",
      technologies: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "Hackatrain",
      url: "https://hackatrain.example.com/",
      technologies: ["Vue.js", "Firebase", "Vuetify", "Express.js", "PostgreSQL"],
    },
    {
      id: 3,
      title: "Netflix",
      url: "https://netflix.example.com/",
      technologies: ["React", "Redux", "Node.js", "MongoDB", "Sass"],
    },
    {
      id: 4,
      title: "Meteo",
      url: "https://meteo.example.com/",
      technologies: ["Angular", "TypeScript", "SCSS", "RxJS", "Chart.js"],
    },
    {
      id: 5,
      title: "Foodie",
      url: "https://foodie.example.com/",
      technologies: ["React", "Tailwind CSS", "Express.js", "MySQL", "Socket.io"],
    },
    {
      id: 6,
      title: "Hackatweet",
      url: "https://hackatweet.example.com/",
      technologies: ["Next.js", "Prisma", "GraphQL", "PostgreSQL", "Chakra UI"],
    },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className='fixed top-4 left-12 cursor-pointer'>
        <p className='text-semibold'>Retour</p>
      </div>
      <div className="flex relative border h-[80vh] w-[60%] m-auto rounded-t-xl pt-4 px-[1px]">
        <div className="absolute top-1 flex space-x-1 ml-2">
          <div className="rounded-full h-2 w-2 bg-red-300"></div>
          <div className="rounded-full h-2 w-2 bg-gray-200"></div>
          <div className="rounded-full h-2 w-2 bg-green-400"></div>
        </div>
        <iframe
          src={projects[0].url}
          title={projects[0].title}
          className="w-full h-full border"
        ></iframe>
      </div>

      <div className="flex flex-col border-l h-[100vh] w-[30%] p-12 space-y-6">
        <div className="w-full flex flex-col space-y-1 mb-2">
          <h1 className="font-bold text-[52px]">{projects[0].title}</h1>
          <p className="opacity-40">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur quis molestiae quaerat consequatur nisi! Accusamus, nihil, et vitae culpa corrupti. Ullam, quia voluptate.
          </p>
        </div>
        <button className="bg-tertiary text-white w-full py-4 rounded-lg mx-auto">
          Voir le site original
        </button>

        <div className="flex flex-col space-y-4">
          <p className="text-xs font-medium opacity-40 border-b pb-2">
            Technologie utilisé pour le projet
          </p>
          <div className="grid grid-cols-2 gap-4">
            {projects[0].technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-100 text-gray-800 text-center py-2 rounded-lg shadow-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
