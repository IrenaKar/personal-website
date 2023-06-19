import Section from "../Section/Section";
import React, { FunctionComponent, ReactElement } from "react";
import { personalData } from "./About.data";
import { Download, GithubIcon, LinkedinIcon } from "../../assets";
import { AboutProps, Roles } from "./About.types";

const About: FunctionComponent<AboutProps> = ({ sectionRef }): ReactElement => {
  return (
    <Section
      sectionRef={sectionRef}
      id="about-me"
      className="flex flex-col bg-gray-600 text-left"
    >
      <>
        <div className="text-4xl font-bold text-gray-400 mb-[60px]">
          {"about me"}
        </div>
        <div className="flex flex-col xl:flex-row gap-10 xl:gap-[60px]">
          <div className="flex flex-col md:flex-row gap-[60px] w-fit">
            <div className="min-w-[190px] w-[190px] h-[190px]">
              <img
                className="block w-full"
                src={require(`../../assets/otherImages/my-photo.png`).default}
                alt={`My photo`}
              />
            </div>

            <div className="w-fit text-sm">
              <p
                className="mb-5 text-gray-50"
                dangerouslySetInnerHTML={{
                  __html: personalData.personalBiography,
                }}
              ></p>
              <p
                className="mb-5 text-gray-50"
                dangerouslySetInnerHTML={{
                  __html: personalData.professionalBiography.description,
                }}
              ></p>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:ml-[250px] xl:ml-0 lg:w-[550px]">
            <ul className="list-disc pl-3 flex flex-col gap-5">
              {personalData.professionalBiography.roles.map(
                (roleItem: Roles, index: number) => (
                  <li key={index} className="mb-3 text-gray-50 text-sm">
                    <span className="font-bold mr-2">{`${roleItem.company} -`}</span>
                    <span>{roleItem.role}</span>
                    <span className="block">{roleItem.date}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        <div className="flex sm:ml-auto gap-5 mr-5 mt-[60px] text-gray-50">
          <div className="flex flex-row gap-2">
            <span className="whitespace-nowrap">{"Find me on:"}</span>
            <a target="_blank" href={personalData.linkedIn}>
              <LinkedinIcon width={20} height={20} />
            </a>
            <a target="_blank" href={personalData.github}>
              <GithubIcon className="stroke-gray-50" width={20} height={20} />
            </a>
          </div>
          <a
            className="flex gap-2"
            href={require(`${personalData.resume}.pdf`).default}
            download="Resume Irena Karamachoska"
          >
            <span>{"Resume:"}</span>
            <Download width={20} height={20} />
          </a>
        </div>
      </>
    </Section>
  );
};

export default About;
