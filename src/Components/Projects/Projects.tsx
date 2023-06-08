import ProjectCard from "../ProjectCard/ProjectCard";
import Section from "../Section/Section";
import React, { FunctionComponent } from "react";
import { projectsData } from "./Projects.data";

const Projects: FunctionComponent = () => {
  return (
    <Section
      id="projects"
      className="flex flex-col items-center justify-center"
    >
      <>
        <div className="text-3xl font-bold text-stone-300 mr-auto mb-10">
          projects
        </div>
        <div className="flex flex-col w-full lg:w-[90%] gap-5 mr-auto">
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
