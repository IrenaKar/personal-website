import React, { FunctionComponent, useState } from "react";
import { ProjectCardProps } from "./ProjectCard.types";
import { ArrowDownIcon, GithubIcon } from "../../assets/index";
import ProjectCardDetails from "../ProjectCardDetails/ProjectCardDeatils";

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  image,
  resources,
  projectUrl,
  github,
  longDescription
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="gap-2 rounded-md sm:rounded-none shadow bg-white">
      <div className="flex flex-col sm:flex-row w-full">
        <div
          className="w-full sm:w-[150px] h-[200px] sm:h-[150px] bg-cover rounded-tr-md sm:rounded-tr-none rounded-tl-md sm:rounded-tl-none"
          style={{
            backgroundImage: `url(${
              require(`../../assets/projectsImages/${image}`).default
            })`
          }}
        ></div>

        <div className="flex flex-col p-3 w-full">
          <div className="text-md font-bold text-stone-600 mb-3">{title}</div>
          <div className="h-full flex flex-col gap-3 sm:gap-1 justify-between">
            <div className="text-stone-600 text-sm">{description}</div>
            <div className="flex items-center gap-2">
              <span className="text-stone-600 text-sm">{"Technologies: "}</span>
              <div className="flex gap-2">
                {resources.map((item) => {
                  if (item === "Bubble.io") {
                    return <div className="font-semibold">{item}</div>;
                  } else {
                    return (
                      <div className="w-[16px] h-[16px]">
                        <img
                          className="block w-full h-full"
                          src={
                            require(`../../assets/logos/${item}.png`).default
                          }
                          alt={item}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            </div>

            <div className="flex flex-row w-full justify-between">
              <div className="flex flex-row gap-3">
                <a
                  href={projectUrl}
                  className="text-stone-500 text-sm font-bold hover:text-stone-600"
                >
                  {"View project"}
                </a>
                <a href={github}>
                  <GithubIcon width={20} height={20} />
                </a>
              </div>
              <ArrowDownIcon
                onClick={showDetailsHandler}
                className={`${
                  showDetails ? "rotate-180" : "rotate-0"
                } cursor-pointer`}
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>

      {showDetails && <ProjectCardDetails longDescription={longDescription} />}
    </div>
  );
};

export default ProjectCard;
