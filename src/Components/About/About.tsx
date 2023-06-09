import Section from "../Section/Section";
import React, { FunctionComponent, ReactElement } from "react";
import { personalData } from "./About.data";
import { Download, GithubIcon, LinkedinIcon } from "../../assets";

const About: FunctionComponent = (): ReactElement => {
  return (
    <Section
      id="about"
      className="flex flex-col items-center justify-center bg-stone-100"
    >
      <>
        <div className="text-3xl font-bold text-stone-300 mr-auto mb-10">
          {"about"}
        </div>
        <div>
          <p
            className="mb-5 text-stone-600 max-w-full text-left"
            dangerouslySetInnerHTML={{ __html: personalData.personalBiography }}
          ></p>
          <p
            className="mb-5 text-stone-600 max-w-full text-left"
            dangerouslySetInnerHTML={{
              __html: personalData.professionalBiography.description
            }}
          ></p>
        </div>

        <ul className="list-disc mr-auto pl-3 sm:pl-10">
          {personalData.professionalBiography.roles.map((roleItem, index) => (
            <li key={index} className="mb-3 text-stone-600">
              <span className="font-bold mr-2">{`${roleItem.company} - `}</span>
              <span>{roleItem.role}</span>
              <span className="block">{roleItem.date}</span>
            </li>
          ))}
        </ul>

        <div className="flex ml-auto gap-5 mr-5 mt-5">
        <div className="flex flex-row gap-2">
        <span className="font-bold text-stone-500 whitespace-nowrap">
            {"Find me on:"}
          </span>
        <a target="_blank" href={personalData.linkedIn}>
            <LinkedinIcon width={20} height={20} />
          </a>
          <a target="_blank" href={personalData.github}>
            <GithubIcon width={20} height={20} />
          </a>
        </div>
          <a
            className="font-bold text-stone-500 flex gap-2"
            href={require(`${personalData.resume}`).default}
            download="Resume Irena Karamachoska"
          >
            {"Resume:"}
            <Download width={20} height={20} />
          </a>
        </div>
      </>
    </Section>
  );
};

export default About;
