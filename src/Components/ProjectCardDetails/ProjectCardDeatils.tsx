import React, { FunctionComponent, ReactElement } from "react";
import { ProjectCardDetailsProps } from "./ProjectCardDetails.types";

const ProjectCardDetails: FunctionComponent<ProjectCardDetailsProps> = ({
  longDescription,
}): ReactElement => {
  return (
    <div className="pt-5 sm:pt-10 text-gray-400">
      <div className="font-bold text-sm hidden xl:block">
        {"project details"}
      </div>
      <div
        className="text-sm text-gray-600 text-left mt-0 sm:mt-3"
        dangerouslySetInnerHTML={{
          __html: longDescription,
        }}
      />
    </div>
  );
};

export default ProjectCardDetails;
