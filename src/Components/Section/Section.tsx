import React, { FunctionComponent } from "react";
import { SectionProps } from "./Section.types";

const Section: FunctionComponent<SectionProps> = ({
  children,
  className,
  id,
  sectionRef
}) => {
  return (
    <section
      ref={sectionRef}
      id={id}
      className={`w-full px-5 md:px-20 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
