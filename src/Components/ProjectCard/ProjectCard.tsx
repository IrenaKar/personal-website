import React, { FunctionComponent, ReactElement, useState } from "react";
import { ProjectCardProps } from "./ProjectCard.types";
import {
  ArrowDownIcon,
  ExternalLinkIcon,
  GithubIcon
} from "../../assets/index";
import ProjectCardDetails from "../ProjectCardDetails/ProjectCardDeatils";

const ProjectCard: FunctionComponent<ProjectCardProps> = ({
  title,
  description,
  image,
  resources,
  projectUrl,
  github,
  longDescription
}): ReactElement => {
  const [showDetails, setShowDetails] = useState(false);

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  };

  const technologiesRender = resources.map((item, index) => {
    if (item === "Bubble.io") {
      return <div key={index} className="text-sm text-stone-600">{item}</div>;
    } else {
      return (
        <div key={index} className="w-[25px] h-[25px]">
          <img
            className="block w-full h-full"
            src={require(`../../assets/logos/${item}.png`).default}
            alt={item}
          />
        </div>
      );
    }
  });

  return (
    <div className="gap-2 rounded-md shadow bg-white p-5 sm:p-7">
      <div className="flex flex-col lg:flex-row w-full gap-4">
        <div
          className="w-full lg:min-w-[250px] lg:w-[250px] h-[250px] bg-cover rounded-md bg-center"
          style={{
            backgroundImage: `url(${
              require(`../../assets/projectsImages/${image}`).default
            })`
          }}
        ></div>

        <div className="flex flex-col w-full py-2">
          <div className="text-md font-bold text-stone-600 mb-3">{title}</div>
          <div className="h-full flex flex-col gap-8 lg:gap-1 justify-between">
            <div
              dangerouslySetInnerHTML={{
                __html: description
              }}
              className="text-stone-500 text-sm"
            />

            <div className="flex flex-col items-start gap-3">
              <span className="text-stone-400 text-sm font-semibold">
                {"Technologies: "}
              </span>
              <div className="flex gap-3">{technologiesRender}</div>
            </div>

            <div className="flex flex-col sm:flex-row w-full justify-between gap-8 sm:gap-0">
              <div className="flex flex-row gap-5 w-full sm:w-fit justify-between">
                <a
                  target="_blank"
                  href={projectUrl}
                  className="flex gap-1 border-b-2 pb-1 border-stone-400"
                >
                  <ExternalLinkIcon width={16} height={16} />
                  <span className="text-stone-500 text-xs font-bold hover:text-stone-600 underline-offset-1">
                    {!github ? "View website" : "View project"}
                  </span>
                </a>
                
                {github && (
                  <a
                    target="_blank"
                    href={github}
                    className="flex gap-1 border-b-2 pb-1 border-stone-400"
                  >
                    <GithubIcon width={16} height={16} />
                    <span className="text-stone-500 text-xs font-bold hover:text-stone-600 underline-offset-1">
                      {"View gitHub"}
                    </span>
                  </a>
                )}
              </div>

              <div
                onClick={showDetailsHandler}
                className="flex flex-row gap-5 cursor-pointer lg:mr-5 w-full sm:w-fit justify-between"
              >
                <span className="text-xs text-stone-500 font-semibold">
                  {"View Details"}
                </span>
                <ArrowDownIcon
                  className={`${
                    showDetails ? "rotate-180" : "rotate-0"
                  } cursor-pointer`}
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {showDetails && <ProjectCardDetails longDescription={longDescription} />}
    </div>
  );
};

export default ProjectCard;
