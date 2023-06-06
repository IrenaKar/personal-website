import React, { FunctionComponent } from "react";
import { SectionProps } from "./Section.types";

const Section: FunctionComponent<SectionProps> = ({ children, className, id }) => {
  return (
    <section id={id} className={`w-full p-3 ${className}`}>
      {children}
    </section>
  );
};

export default Section;
