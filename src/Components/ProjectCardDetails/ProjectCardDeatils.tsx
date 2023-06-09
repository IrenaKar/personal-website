import React, { FunctionComponent, ReactElement } from "react";
import { ProjectCardDetailsProps } from "./ProjectCardDetails.types";

const ProjectCardDetails: FunctionComponent<ProjectCardDetailsProps> = ({
  longDescription
}): ReactElement => {
  const description = longDescription;

  return (
    <div className="pt-5 sm:pt-10 text-stone-400">
      <div className="font-bold text-sm hidden sm:block">
        {"Project Details"}
      </div>
      <div
        className="text-sm text-stone-600 text-left mt-0 sm:mt-3"
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </div>
  );
};

export default ProjectCardDetails;
