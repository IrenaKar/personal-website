import React, { FunctionComponent, ReactElement } from "react";
import { technologiesData } from "./Technologies.data";
import Section from "../Section/Section";
import { TechnologiesProps } from "./Technologies.types";

const Technologies: FunctionComponent<TechnologiesProps> = ({ sectionRef }):ReactElement => {
  return (
    <Section
      sectionRef={sectionRef}
      id="technologies"
      className="flex flex-col items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="text-3xl font-bold text-stone-300 mr-auto mb-10">
          {"technologies"}
        </div>
        <div className="mb-10">
          <p
            className="mb-2 text-stone-600 max-w-full text-center"
            dangerouslySetInnerHTML={{ __html: technologiesData.description }}
          ></p>
        </div>

        <div className="flex gap-5 flex-wrap justify-center max-w-[80%]">
          {technologiesData.logos.map((logoName, index) => (
            <div key={index} className="w-[50px] h-[50px]">
              <img
                src={require(`../../assets/logos/${logoName}.png`).default}
                alt={`Logo ${index}`}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Technologies;
