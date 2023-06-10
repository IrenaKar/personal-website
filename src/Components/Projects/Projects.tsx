import ProjectCard from "../ProjectCard/ProjectCard";
import Section from "../Section/Section";
import React, { FunctionComponent, ReactElement } from "react";
import { projectsData } from "./Projects.data";

const Projects: FunctionComponent = (): ReactElement => {
  return (
    <Section
      id="projects"
      className="flex flex-col items-center justify-center bg-gray-100"
    >
      <>
        <div className="text-4xl font-bold text-gray-400 mr-auto mb-[60px]">
          {"projects"}
        </div>
        <div className="flex flex-col w-full gap-10 mr-auto">
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              longDescription={project.longDescription}
              title={project.title}
              description={project.description}
              image={project.image}
              resources={project.resources}
              projectUrl={project.projectUrl}
              github={project.github}
            />
          ))}
        </div>
      </>
    </Section>
  );
};

export default Projects;
