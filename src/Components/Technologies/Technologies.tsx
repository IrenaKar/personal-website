import React, { FunctionComponent, ReactElement } from "react";
import { technologiesData } from "./Technologies.data";
import Section from "../Section/Section";

const Technologies: FunctionComponent = (): ReactElement => {
  return (
    <Section
      id="technologies"
      className="flex flex-col items-center justify-center"
    >
      <div className="flex flex-col">
        <div className="text-4xl font-bold text-gray-400 mr-auto mb-[60px]">
          {"technologies"}
        </div>
        <div className="mb-10">
          <p
            className="mb-2 text-gray-600 max-w-full text-sm"
            dangerouslySetInnerHTML={{ __html: technologiesData.description }}
          ></p>
        </div>

        <div className="flex gap-5 flex-wrap">
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
