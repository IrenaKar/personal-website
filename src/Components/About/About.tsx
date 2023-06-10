import Section from "../Section/Section";
import React, { FunctionComponent, ReactElement } from "react";
import { personalData } from "./About.data";
import { Download, GithubIcon, LinkedinIcon } from "../../assets";
import { AboutProps, Roles } from "./About.types";

const About: FunctionComponent<AboutProps> = ({ sectionRef }): ReactElement => {
  function spliceIntoChunks(arr: any, chunkSize: any) {
    const res = [];
    while (arr.length > 0) {
      const chunk = arr.splice(0, chunkSize);
      res.push(chunk);
    }
    return res;
  }

  const rolesChunks = spliceIntoChunks(
    personalData.professionalBiography.roles,
    2
  );

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
        <div className="flex flex-col md:flex-row gap-10 mb-20">
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
                __html: personalData.personalBiography
              }}
            ></p>
            <p
              className="mb-5 text-gray-50"
              dangerouslySetInnerHTML={{
                __html: personalData.professionalBiography.description
              }}
            ></p>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-gray-400 text-lg font-bold pl-4">
            {"experience"}
          </span>
          <div className="flex flex-row flex-wrap gap-5 w-full justify-between">
            {rolesChunks.map((roleList, index) => (
              <ul key={index} className="list-disc pl-3 flex flex-col gap-5">
                {roleList.map((roleItem: Roles, index: number) => (
                  <li key={index} className="mb-3 text-gray-50 text-sm">
                    <span className="font-bold mr-2 block">{`${roleItem.company}`}</span>
                    <span>{roleItem.role}</span>
                    <span className="block">{roleItem.date}</span>
                  </li>
                ))}
              </ul>
            ))}
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
