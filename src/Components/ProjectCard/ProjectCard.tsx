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
      return (
        <div key={index} className="text-sm text-gray-600">
          {item}
        </div>
      );
    } else {
      return (
        <div key={index} className="w-[27px] h-[27px]">
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
    <div className="gap-2 rounded-lg shadow bg-white p-5 sm:p-7">
      <div className="flex flex-col xl:flex-row w-full gap-4">
        <div
          className="w-full xl:min-w-[300px] xl:w-[300px] h-[300px] bg-cover rounded-md bg-center"
          style={{
            backgroundImage: `url(${
              require(`../../assets/projectsImages/${image}`).default
            })`
          }}
        ></div>

        <div className="flex flex-col w-full py-2">
          <div className="text-2xl font-bold text-gray-600 mb-5">{title}</div>
          <div className="h-full flex flex-col gap-8 xl:gap-1 justify-between">
            <div
              dangerouslySetInnerHTML={{
                __html: description
              }}
              className="text-gray-600 text-sm"
            />

            <div className="flex flex-col items-start gap-3">
              <span className="text-gray-400 text-sm font-bold">
                {"technologies"}
              </span>
              <div className="flex gap-3">{technologiesRender}</div>
            </div>

            <div className="flex flex-col sm:flex-row w-full justify-between gap-8 sm:gap-0">
              <div className="flex flex-row gap-5 w-full sm:w-fit justify-between">
                <a
                  target="_blank"
                  href={projectUrl}
                  className="flex gap-1 border-b-2 pb-1 border-gray-400"
                >
                  <ExternalLinkIcon width={16} height={16} />
                  <span className="text-gray-500 text-sm font-bold underline-offset-1">
                    {!github ? "view website" : "view project"}
                  </span>
                </a>

                {github && (
                  <a
                    target="_blank"
                    href={github}
                    className="flex gap-1 border-b-2 pb-1 border-gray-400"
                  >
                    <GithubIcon
                      className="stroke-gray-500"
                      width={16}
                      height={16}
                    />
                    <span className="text-gray-500 text-sm font-bold underline-offset-1">
                      {"view github"}
                    </span>
                  </a>
                )}
              </div>

              <div
                onClick={showDetailsHandler}
                className="flex flex-row gap-5 cursor-pointer xl:mr-5 w-full sm:w-fit justify-between"
              >
                <span className="text-sm text-gray-500 font-bold">
                  {showDetails ? "hide details" : "view details"}
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
