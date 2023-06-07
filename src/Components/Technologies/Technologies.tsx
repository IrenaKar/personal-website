import React, { FunctionComponent } from "react";
import { technologiesData } from "./Technologies.data";
import Section from "../Section/Section";
import { TechnologiesProps } from "./Technologies.types";

const Technologies: FunctionComponent<TechnologiesProps> = ({ sectionRef }) => {
  return (
    <Section
      sectionRef={sectionRef}
      id="technologies"
      className="min-h-[100vh] md:min-h-[calc(100vh-68px)] flex flex-col items-center justify-center relative"
    >
      <>
        <div className="absolute top-3 left-5 md:left-20 text-4xl sm:text-5xl md:text-6xl font-bold text-stone-300">
          technologies
        </div>

        <div className="flex flex-col items-center mt-20 sm:mt-0">
          <p
            className="mb-2 text-stone-600 max-w-full text-center"
            dangerouslySetInnerHTML={{ __html: technologiesData.description }}
          ></p>

          <div className="flex gap-5 mt-10 md:mt-20 flex-wrap justify-center max-w-[80%]">
            {technologiesData.logos.map((logoName, index) => (
              <div className="w-[50px] h-[50px]">
                <img
                  src={require(`../../assets/logos/${logoName}.png`).default}
                  alt={`Logo ${index}`}
                  key={index}
                />
              </div>
            ))}
          </div>
        </div>
      </>
    </Section>
  );
};

export default Technologies;
