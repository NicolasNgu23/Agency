import Image from "next/image";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Lauto",
      image: "/lauto.webp",
      alt: "Lauto",
    },
    {
      id: 2,
      title: "Hackatrain",
      image: "/hackatrain.webp",
      alt: "Hackatrain",
    },
    {
      id: 3,
      title: "Netflix",
      image: "/Netflix.webp",
      alt: "Netflix",
    },
    {
      id: 4,
      title: "Meteo",
      image: "/Meteo.webp",
      alt: "Meteo",
    },
    {
      id: 5,
      title: "Foodie",
      image: "/Foodie.webp",
      alt: "Foodie",
    },
    {
      id: 6,
      title: "Hackatweet",
      image: "/Hackatweet.webp",
      alt: "Hackatweet",
    },
  ];

  return (
    <div className="w-full p-8">
      <div className="flex justify-evenly w-full mb-8">
        <h1 className="max-w-1/2 w-[40%] text-[52px] leading-tight">
          Visualisez les projets créatifs de notre entreprise
        </h1>
        <p className="w-1/2 font-medium text-base">
          Que vous ayez besoin d’un portfolio web, d’une boutique en ligne ou d’un blog, parcourez l'éventail de possibilités que nos équipes peuvent développer.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col w-fit project space-y-2 cursor-pointer"
          >
            <div className="relative w-[400px] h-[250px] border rounded-xl">
              <Image
                src={project.image}
                alt={project.alt}
                layout="fill"
                objectFit="fit"
                className="rounded-xl p-[1px]"
              />
            </div>

            <p className="text-base font-medium">{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
